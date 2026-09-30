# new-site.md — rebuilding this as a real static site

## 0. The short answer

**Yes, it is overcomplicated** — but the useful framing is not "Framer is heavy." It is:

> The complexity was never in the design. It is in the _delivery mechanism_, and we no
> longer get anything for it.

The site is 7 pages, ~4,350 words of copy, 40 images, 40 links, 1 form, 3 videos and
4 embeds. Framed as a website that is nothing. Delivered as a Framer export it is
**1.22 MB of HTML, 1.28 MB of CSS, ~2.5 MB of runtime JavaScript, and 2.4–11.5 MB per
page load** — including a Google Maps load on the donation page and a 2.15 MB CAPTCHA on
the homepage.

> **⚠️ Correction (added after the rebuild was built and measured).** The 2.15 MB
> "CAPTCHA on the homepage" is **Vimeo's, not ours.** It is Cloudflare Turnstile
> initiated _inside_ the two `player.vimeo.com` iframes, one per embed — not loaded by the
> page's own code. Proven by `index.html`, which contains zero Turnstile references yet
> produces the identical request set, and by frame attribution of every
> `challenges.cloudflare.com` request. It is therefore **not** a saving available to us
> short of dropping Vimeo. §4.3 below still frames it as removable; treat that part as
> superseded. See the correction note in `RUNTIME.md` §1 and Appendix B.1.

And the worst part is one I got wrong the first time, so it is worth being precise about:
**the frozen export in this repo does not hydrate — but the live site does.** Measured
today, same browser, 1440×900, all 7 pages:

|                               | `globalpeaceyes.org` (live)      | this repo, served               |
| ----------------------------- | -------------------------------- | ------------------------------- |
| React hydration errors        | **0**                            | **4 per page** (`#418`, `#423`) |
| `scrollWidth` @1440px         | **1440** (correct)               | **2750** (broken)               |
| `data-framer-name` after load | 318 / 392 / 293 / 226 / 226 / 32 | **identical**                   |
| `.mjs` chunks loaded          | 21 / 18 / 20 / 17 / 19 / 17      | **identical**                   |
| Homepage HTML served          | 651,657 B                        | 356,722 B                       |

Both run the same React app over the same component tree. The only difference is the HTML.
Framer re-renders the live site on every request, so its served HTML always matches the
chunks currently on the CDN. **Our export is a snapshot whose HTML no longer matches those
chunks**, so React throws the served DOM away and re-renders from scratch — which is what
`RUNTIME.md` §5.1 measured, against this export, and only against this export.

So the optimisation work in 6.1–6.7 is not worthless — it halved the HTML against what
Framer serves today (651 kB → 357 kB), and transfer size is real. But it is optimising
**a document that React discards**, and 749 of the `.pc-i-*` classes it generated become 1
by the time anything is painted.

**The practical consequence is the important one: deploying this export as-is would ship
the live site's content with a layout bug the live site does not have, and a full client
re-render on every page view.** "Just deploy the current export" is not the safe interim
step it looks like.

---

## 1. The one number that settles it

I stripped every tag from all 7 pages and de-duplicated the text:

```
945 text nodes total  →  472 unique lines  →  21,096 characters of actual copy
```

**The entire written content of this website is 21 kB.** The HTML it is wrapped in is
1,220,749 bytes. A **58:1** ratio of wrapper to content.

`films.html` is 188 kB to display 2,058 words. `privacy-policy.html` is 83 kB to display
123 words — and it is the only page that reports a clean `1440px` layout, because after the
Termly iframe collapses to a stub there is almost nothing left to lay out.

That ratio is the whole argument. Everything above 21 kB is not the website.

---

## 2. Is the runtime genuinely necessary? Re-reading `RUNTIME.md`

No. And the evidence in our own documentation is unusually good, because it was measured
rather than assumed.

### 2.1 The site already works without any of it

`RUNTIME.md` §5.6, scenario **C** (all Framer hosts blocked), measured against this export:

| Metric                | With runtime | Without     |
| --------------------- | ------------ | ----------- |
| Nav links **visible** | 18           | **18**      |
| Layout width @1440px  | 2750 px      | **1440 px** |
| Text content          | present      | present     |

The `hidden-*` classes plus the `@media` rules in `site.css` already hide the inactive
breakpoints with no JavaScript whatsoever. The breakpoint rewrite is a **DOM-weight
optimisation, not a visual requirement** — `RUNTIME.md` §5.6 conclusion 1 says this
explicitly.

One correction to my own earlier reading of this table: the `2750px` column was _not_ a
property of the runtime. It was a property of the failed hydration (§0). On the live site,
where hydration succeeds, the same runtime produces `1440px`. So the honest statement is
narrower and still sufficient: **the breakpoint-pruning step is optional, and the
static HTML renders correctly on its own.**

### 2.2 The runtime is load-bearing for exactly three things, all of them small

`AGENTS.md` §6.8 is right that you cannot just delete `assets/scripts/`. It is wrong about
_which three_ things matter. The real list is:

| Runtime is needed for                       | Size of the replacement                            |
| ------------------------------------------- | -------------------------------------------------- |
| Materialising the SVG sprite defs           | keep `sprite.svg` — it already works JS-free (§7b) |
| Driving the appear animations               | ~20 lines of CSS, 0 kB of JS                       |
| The vote counter (Cloud Run)                | ~15 lines of `fetch`                               |
| Everything else (router, forms, components) | _nothing — the static HTML already does it_        |

`RUNTIME.md` §7b is the decisive one: with `sprite.svg` served, external `<use href="sprite.svg#id">`
resolves **natively, in every browser, with JavaScript disabled**. The runtime's
fetch-and-rewrite dance is pure overhead on top of a mechanism that already works.

### 2.3 The one real bug here is live

The reduced-motion defect is the exception, and I re-measured it against
`globalpeaceyes.org` today to be sure. Sampling the first hero element's opacity from
before any page script runs:

|                 | `reducedMotion: 'no-preference'`          | `reducedMotion: 'reduce'`                |
| --------------- | ----------------------------------------- | ---------------------------------------- |
| **Live**        | `0.001@56ms → 0.790@467ms → 1.000@612ms`  | `0.001@53ms → 0.547@417ms → 1.000@565ms` |
| **This export** | `0.001@113ms → 0.783@534ms → 1.000@566ms` | `0.001@99ms → 0.969@577ms → 1.000@607ms` |

The browser reports `matchMedia('(prefers-reduced-motion: reduce)').matches === true` and
the hero animates anyway. **Identical on live and on the export — this is a genuine live
accessibility defect**, not an export artifact. A visitor with OS-level reduced motion set
gets the full entrance animation on the production site today.

That is the only defect in this list that a user can actually feel, and it is worth fixing
regardless of whether the rewrite happens (§7, step 1).

### 2.4 Nothing left in this repo can be fixed in this repo

This is the strategic point. Every open defect traces to code we do not control:

| Defect                                                     | Live?                | Fixable locally?                                                                                                                                                                                              |
| ---------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero animation ignores OS reduced-motion (§9)              | **Yes**              | **No** — buried in the 465 kB bundle                                                                                                                                                                          |
| 6 of 12 CDN chunks differ from the export mirror (§5.4)    | Yes                  | **No** — we don't control the CDN                                                                                                                                                                             |
| Weglot widget on privacy-policy (§12.2)                    | Yes                  | **No** — pulled in by remote code                                                                                                                                                                             |
| Termly embed collapses to a 900px stub (§5.6)              | Yes                  | **No** — needs the runtime's iframe protocol                                                                                                                                                                  |
| One shipped font is corrupt, silently fails (§8)           | Yes                  | **No** — the CDN serves it                                                                                                                                                                                    |
| 2.15 MB Turnstile + Google Maps on donate                  | Yes                  | **No** — third-party JS. ⚠️ **Corrected later:** the homepage's Turnstile is Vimeo's (inside the player iframes), so it is _not_ removable by us. Google Maps on donate is the site's own and _is_ removable. |
| Hydration failure / 2750px overflow                        | **No — export only** | Yes, by not shipping the export                                                                                                                                                                               |
| Framer editor bar loads on every page then gives up (§0.8) | Yes                  | **No**                                                                                                                                                                                                        |

`RUNTIME.md` §13.3 puts it plainly: the local `assets/scripts/` mirror is _the only copy
that matches our HTML_, and **nothing references it**. The live site is not currently
broken by chunk drift — it re-renders fresh HTML, so it hydrates — but our export _is_, and
the only two ways to reconcile them are to self-host 5.9 MB of minified React, or to stop
depending on the CDN. The second one is the rewrite.

**Owning the code is the only remaining option.** The rewrite is not an optimisation
pass. It is the point at which the defect list becomes an empty file.

---

## 3. Where the 1.28 MB of CSS actually goes

I measured the rule blocks in `assets/css/site.css` (1,284,824 bytes, 2,395 declaration
blocks):

| Category                                                                                                     | Bytes   | Share     | Removable?                 |
| ------------------------------------------------------------------------------------------------------------ | ------- | --------- | -------------------------- |
| Rules naming a `.framer-<hash>` class (807 blocks)                                                           | 689,597 | **53.7%** | Yes — one rule per `<div>` |
| Framer's base component stylesheet (`.framer-text`, `data-framer-page-link-*`, `data-framer-component-type`) | 593,417 | **46.2%** | Yes — it's a generic blob  |
| Everything else                                                                                              | 1,810   | 0.1%      | —                          |

**Essentially 100% of the stylesheet is removable.** Two reasons:

**53.7% is one class per element.** Framer is a layout engine with no semantic model, so
every wrapper `<div>` gets its own hashed class and its own rule. `index.html` carries
1,158 `<div>`s and 1,236 `framer-*` classes. There are 2,273 distinct `.framer-*`
selectors in the stylesheet. A human-written stylesheet for this site needs about 30
named classes: `.site-header`, `.nav-list`, `.hero`, `.card-grid`, `.footer`, `.btn`.

**46.2% is Framer's universal base style, and it is mostly duplication.** It is hundreds
of near-identical selectors generated for every combination of element and container —
`code.framer-text a.framer-text span.framer-text:not([data-text-fill])`,
`div.framer-text a div span`, and so on. It exists so a rich-text `<div>` can look like an
`<h2>` without being one. Use a real `<h2>` and 100% of it is dead weight.

Similarly in the HTML: 150 `@media` blocks exist, but only **10.7%** of CSS bytes live
inside them. Breakpoints are not the problem. **The per-element rules are the problem.**

---

## 4. The rebuild

### 4.1 Target

Plain files, no framework, no runtime, no build step (see §6 for the one exception).

```
index.html  about.html  films.html  volunteer.html  donate.html
privacy-policy.html  404.html          ← hand-written, readable
assets/css/site.css                    ← one file, ~15–25 kB
assets/js/site.js                      ← one file, ~3–5 kB
assets/img/  assets/font/  assets/video/
```

Projected (estimates, not measurements — but the HTML/CSS columns are grounded in the
21 kB content inventory and the rule analysis above):

|                            | Now                                     | Rebuilt                    |       |
| -------------------------- | --------------------------------------- | -------------------------- | ----- |
| HTML, 7 pages              | 1,220,749 B                             | ~70–110 kB                 | ~12×  |
| CSS (loaded on every page) | 1,284,824 B                             | ~15–25 kB                  | ~60×  |
| First-party JS             | ~2.5 MB runtime (+5.9 MB unused mirror) | ~4 kB                      | ~600× |
| `index.html` page weight   | 8.58 MB                                 | ~1.2 MB (almost all media) | ~7×   |
| `donate.html` page weight  | 11.50 MB                                | ~0.3 MB                    | ~38×  |
| Hydration                  | fails on this export → full re-render   | none exists                |       |
| 1440px overflow            | 6 of 7 pages _(export only)_            | gone                       |       |
| `prefers-reduced-motion`   | **ignored — live, today**               | honoured                   |       |
| JavaScript disabled        | loses icons + hero                      | **fully functional**       |       |
| Third-party CDN dependency | total                                   | none                       |       |

### 4.2 The six transformations

**1. Collapse 5 responsive variants → 1.**

Framer's SSR doesn't know the viewport, so it ships every breakpoint and marks four with
`hidden-*`, then ships 465 kB of runtime to delete them at load. Modern CSS does this
natively and costs nothing.

```html
<!-- now: 5 copies, 72 anchors, 290 wrapper divs, hidden-* + ssr-variant + <!--$-->
pairs -->
<!-- becomes: -->
<nav class="site-nav">
  <ul class="nav-list">
    <li><a href="about.html">About</a></li>
    <li><a href="https://www.eventbrite.com/...">Events</a></li>
    <li><a href="donate.html">Donate</a></li>
    <li><a href="volunteer.html">Volunteer</a></li>
    <li><a href="films.html">Films</a></li>
    <li><a href="..." class="btn">Vote Now</a></li>
  </ul>
</nav>
```

Layout with `clamp()`, `min()`, grid and container queries. This removes every
`ssr-variant`, every `hidden-*`, and all the `<!--$-->` Suspense comment pairs that exist
only to keep React's re-render balanced (`RUNTIME.md` §4). **Do this first** — it is the
bulk of the HTML.

**2. Replace 2,273 hashed classes with ~30 named ones.**

Walk the component tree, read the computed styles, and write a class per _role_
(`.hero__title`, `.card-grid`, `.stat`, `.footer__link`). Same pixels, 1/60th the bytes,
and the next person can read it.

**3. Inline the SVG symbols; drop the runtime's `<use>` rewrite.**

16 shared symbols, a 76 kB sprite, one extra request — and a runtime that fetches the
file, injects it into an empty `#svg-templates` div, re-prefixes every `id`, and rewrites
every `href` to a local fragment (`RUNTIME.md` §7). External `<use href="sprite.svg#id">`
already works with no JavaScript. Inline the 4–20 symbols each page actually uses; keep the
sprite as the fallback. **Zero JS.**

**4. Replace the appear engine with CSS.**

Today: 22,970 B of `animator` + 10,773 B of JSON payload + 1,468 B of trigger = **35 kB of
JavaScript** whose entire job is to fade 26 elements in.

```css
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
}
[data-animate] {
  animation: rise 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: calc(var(--i, 0) * 60ms);
}
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    animation: none;
  }
}
```

Roughly 20 lines, 0 kB of JS, composited, and it **fixes the accessibility bug for free** —
`RUNTIME.md` §9 documents that the site currently ignores OS reduced-motion on a
confirmed, emulated basis.

**5. Delete the client-side router.**

`autobahnNavigation: true` gives SPA navigation. For a 7-page brochure site, `<a href>`
is strictly better: it works with JS off, it's cacheable, it's linkable, middle-click works,
and the back button works. **Zero JS.**

**6. Write a real `<form>`.**

`RUNTIME.md` §10: the form has **no `action` and no `method`**. Submission depends entirely
on the Framer runtime's interceptor; without it, submitting GETs the current URL. And 11 of
its 15 inputs are **honeypots** that existed to defeat Framer's spam handling.

```html
<form class="volunteer-form" method="POST" action="https://formspree.io/f/xxxx">
  <label>Name <input name="Name" required /></label>
  <label>Email <input name="Email" type="email" required /></label>
  <label>Location <input name="Location" required /></label>
  <label>Message <textarea name="Message" required></textarea></label>
  <button type="submit">Send</button>
</form>
```

4 real fields, 0 honeypots, works with JS off. (Or Netlify Forms / Basin / a Worker — see §6.)

### 4.3 Kill the third-party weight — this is now the majority of the page

Once the 2.5 MB of Framer runtime is gone, the third-party embeds _are_ the page weight.
They need a deliberate decision, not an accident.

| Page                  | Cost today                                                                                                  | Replace with                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `donate.html`         | **9.41 MB of Givebutter JS** — Stripe, Braintree, GA, and a **1.30 MB Google Maps load** on a donation page | A **Stripe Payment Link** (~30 kB) or a link to your own donation page. **Biggest single win on the site.**                                                                                                                                                                                                                                  |
| `index.html`          | **2.15 MB Cloudflare Turnstile**, pulled in by remote code                                                  | A honeypot field (0 kB), or keep Turnstile only on the actual vote endpoint. **⚠️ Superseded — measured later: this Turnstile is Vimeo's, initiated inside the two `player.vimeo.com` iframes, so a honeypot would save nothing. The site already contains zero Turnstile code and still gets the traffic. Keep Vimeo or lose the CAPTCHA.** |
| `privacy-policy.html` | Termly iframe → collapses to a 900px stub without the runtime; plus an **unexpected Weglot widget**         | **Write it as a static HTML page.** It is 123 words. Why is this an iframe?                                                                                                                                                                                                                                                                  |
| `index.html`          | Vote counter on a `run.app` Cloud Run service                                                               | Keep, but own it — or render a static number in the HTML and refresh it with 15 lines of `fetch`                                                                                                                                                                                                                                             |
| `index.html`          | 2.36 MB Gumlet MP4 + **2 Vimeo embeds returning HTTP 401**                                                  | Self-host, `preload="none"`, poster images, lazy-load. Fix or drop the 401s.                                                                                                                                                                                                                                                                 |
| `index.html`          | A Lottie animation (via `dotlottie-player`, 466 kB local)                                                   | A CSS/`<img>` equivalent, or keep — but serve it yourself                                                                                                                                                                                                                                                                                    |

### 4.4 Prune the asset tree

```
assets/scripts/     5,892,810 B   25 .mjs files, referenced by nothing → DELETE
assets/images/      8,127,498 B   33 files, mostly unreferenced → keep what's used
assets/video/       4,091,694 B   2 MP4 → keep, lazy-load
assets/fonts/         878,681 B   41 .woff2, all orphaned → 8 real faces (§8) → subset
```

On fonts: `assets/fonts/fonts.css` points at **remote** `fonts.gstatic.com` URLs, so all 41
local files are dead (`RUNTIME.md` §8, §12.3). Only 8 faces are actually used — Manrope
400/500/600/700, BN Rigidly 400, PP Supply Sans Bold 700, PP Supply Mono Medium — and the
rest are metric-compatible `…Placeholder` faces that are never downloaded. One shipped file
is **corrupt** (`OTS parsing error`). Self-hosting 8 subsetted faces is ~150 kB and
removes a third-party DNS lookup from the critical path.

**~20.5 MB of on-disk assets is unreferenced. Nearly all of it goes away.**

---

## 5. How to do the rebuild without re-designing by hand

You do not need to reconstruct the design from screenshots. `RUNTIME.md` §14 lists the
throwaway scripts that produced the measurements — reuse them.

**The settled DOM is your blueprint.** `RUNTIME.md` §5.2 records it for this export:
`index.html` goes from 1,404 served elements down to **465 after settling / 96 kB**, with
the responsive duplicates gone and the component tree intact. I measured the same thing on
the live site today: **469 elements / 99.6 kB**, and an identical `data-framer-name` count
(318). Both are the _actual_ rendered page at a real viewport, un-duplicated. Dump it at
one breakpoint per page and you have a clean skeleton to work from, with real text and real
structure.

Then, for each component:

1. Dump the settled DOM for that page at 1440px.
2. Read the computed styles for each wrapper.
3. Collapse the chain of hashed-class `<div>`s into one semantic element.
4. Write the class into `site.css`. Repeat for ≤1728, 810 and ≤810 to catch the
   breakpoint-specific bits — **4 viewports, not 5, and no `hidden-*` classes.**
5. Compare your page against the **current live page at the same viewport** and iterate.

Two notes:

- **The Framer runtime rewrites the DOM on load** — it re-inserts sprite defs and reverts
  `<use>` hrefs. So the _served_ HTML is not what a visitor sees; the settled dump is.
  Dump after settle, not at `DOMContentLoaded` (`RUNTIME.md` §14, last bullet).
- **Compare against the live site, not against this export.** The live site hydrates
  correctly and lays out at 1440px; this export does neither. So screenshot the live site
  as your reference — that is the design you are preserving. The local export's post-hydrate
  DOM is still a fine structural blueprint, but its _layout_ is the broken one.

---

## 6. One decision that changes the architecture

Everything above assumes the person changing a word of copy can open a text editor.

- **If yes → build 6, no tooling.** Hand-write the 7 pages. The nav and footer are ~30
  lines repeated 6 times; editing them is 6 small edits. This is the simplest possible
  thing and it will still be correct in five years.
- **If no → a non-developer needs to edit copy → this rebuild is the wrong shape.**
  Hand-written HTML is a _developer_ CMS. If marketing owns the words, the honest options
  are (a) 11ty with `_data.yml`/Markdown content files, (b) Astro + a headless CMS, or
  (c) a hosted editor like Decap/Tina wired to the same static output. All three still
  produce plain HTML and CSS at the end — none of them bring back React.

**I'd still avoid a build step for seven pages.** 11ty is ~30 kB of dependency and makes
the deploy unit a generated directory rather than the source of truth. Its value shows up
at twenty-plus pages or with weekly copy changes.

Hosting: any static host serves this. Given the site is frozen, Cloudflare Pages or
GitHub Pages — free, HTTPS, and no build command required.

---

## 7. Proposed order of work

Each step is independently shippable and independently verifiable.

1. **Fix the reduced-motion bug now, without the rewrite.** This is the one defect a
   visitor can actually feel, and I confirmed it is **live** (§2.3) — the production site
   animates the hero in full for users with OS reduced motion set. It is a one-word change:
   the `reduced` argument is already plumbed through
   `animateAppearEffects(payload, cb, attr, token, reduced, variantHash)`, so pass
   `matchMedia("(prefers-reduced-motion: reduce)").matches` instead of the hardcoded
   `false` (`RUNTIME.md` §9). Requires publishing to Framer, so if the project is truly
   frozen, fix it in the rewrite instead — but it should be the first thing the rewrite
   lands.
2. **Don't ship the current export as an interim step.** I originally suggested this as the
   "safe placeholder". It isn't. Deploying it would put a full client re-render and a
   2750px layout on every page — a measurable regression against what `globalpeaceyes.org`
   serves today, on a site whose only real traffic asset is a donation link. If you need
   something deployed before the rewrite is ready, the only acceptable interim is to
   self-host `assets/scripts/` (which is what makes the export's HTML match its chunks and
   restores correct hydration) or to leave the Framer hosting in place.
3. **Rebuild `404.html` first.** Simplest page, 14 unique lines of text, and it gets the
   whole pipeline (CSS, nav, footer, assets, deploy) proven end to end in an hour.
4. **`about.html`**, then `films.html`. Real content, no embeds, no form.
5. **`privacy-policy.html`.** Static text. Kills Termly _and_ Weglot.
6. **`volunteer.html`.** Adds the form. Kills 11 honeypots and the runtime dependency.
7. **`donate.html` last.** Needs the Givebutter → Stripe decision made, and that's a
   business call, not an engineering one.
8. **`index.html` last.** 26 appear elements, 3 videos, the vote counter, the A/B variants,
   the Lottie. Most moving parts, so most to stabilise.
9. **Assets last.** Once every page is rewritten, the referenced set is knowable. Subset
   fonts, re-encode video, delete `assets/scripts/`, delete the unreferenced 20 MB.
10. **Point the domain over. Delete the Framer project.** Framer is frozen anyway.

---

## 8. What I would _not_ do

- **Don't keep patching the Framer export.** `AGENTS.md` §6.8 already closed the
  "delete the runtime" experiment at 0/35 matching screenshots. The reason is that it was
  framed as _subtraction_. A rewrite is a _replacement_ — you end up with CSS that matches,
  not CSS that was deleted.
- **Don't minify (6.1) or dedupe `site.css` rule-level.** Both are real work on bytes
  that a 20 kB replacement makes irrelevant. The 1.28 MB is not a minification problem;
  it is a wrong-architecture problem.
- **Don't self-host `assets/scripts/`.** `RUNTIME.md` §13.3 correctly identifies it as the
  only copy matching our HTML, and it _would_ fix the hydration mismatch. But it fixes it
  by committing to 5.9 MB of minified React for a site with 21 kB of text. Keep it as a
  diagnostic reference; delete it before you deploy.
- **Don't preserve the A/B test variants.** `/` carries an `abTestId` with three named
  variants (`#first`/`#second`/`#third`), all three in the DOM simultaneously, and they
  are the direct cause of the homepage's 2030px overflow (`RUNTIME.md` §5.5). The site is
  frozen; the test is over. Pick the winner and delete the other two.
- **Don't treat this as a performance project.** It is an ownership project. The
  performance win is a side effect.

---

## 9. The one-paragraph version

The runtime is not complicated because the site is complicated. The site is 21 kB of text
in 7 files; the runtime is complicated because Framer is a design tool whose static export
is a _rendering of its editor state_, not a shippable artifact — it ships five copies of
every component, names every `<div>` after a hash, and delegates the actual page to 2.5 MB
of React that then **fails to hydrate and throws the HTML away** on every single page load.
We have already spent this repo's effort optimising a document that React discards — and
the export we ended up with is _worse than the live site it came from_, because stale HTML
plus current chunks means a guaranteed failed hydration. The measurement settles it: block
the Framer CDN and the site still shows the right number of nav links and all of the right
text, because the `hidden-*` classes and `@media` rules do the responsive work with no
JavaScript at all. Nothing else in the current stack can be fixed from inside this repo,
because every remaining defect lives in code we do not control — including, right now, on
the production site, a hero animation that ignores OS reduced-motion. So: keep the copy,
throw away the framework, and end up with 7 HTML files, one 20 kB stylesheet, one 4 kB
script, and a site that works with JavaScript switched off.

---

## Appendix A — verifying the live/local claim

The §0 table is a direct A/B: same browser, same viewport, 7 s settle, clean contexts.

```powershell
python -m http.server 8137     # from the repo root
node live-clean.js             # %TEMP%\opencode\ — both targets, all 7 pages
node reduced-motion2.js        # samples hero opacity from before any page script runs
```

Two things worth knowing if you re-run these:

- **The live site uses clean URLs.** `https://globalpeaceyes.org/index.html` returns the
  404 page — title _"Page Not Found"_, 286 elements, the `FCSiEZ4Vj7n8Qqgo` route chunk on
  every request. The real routes are `/`, `/about`, `/films`, `/volunteer`, `/donate`,
  `/privacy-policy`. Testing `.html` paths against the live site silently measures the 404
  page seven times, which is a very convincing way to conclude the live site is broken.
- **Reduced-motion must be sampled early.** Polling after a 6 s settle finds every hero
  element at `opacity: 1` in both modes and reports no bug at all. The animation runs
  between roughly 50 ms and 620 ms, so the sampler has to be installed with
  `page.addInitScript` and driven by `requestAnimationFrame` from before the first page
  script executes.

`data-framer-name` counts and `.mjs` chunk counts are identical between live and local on
all 7 pages. That is the proof that both run the same application, and that the only
difference is the HTML each one is served.

---

## Appendix B — what was actually built: `index.html`

Sections 0–9 above are the _plan_, written against the export. This appendix records the
_result_: a hand-built, dependency-free replacement for the homepage, and how it was
verified.

### B.1 What it is

`index.html` is a single static page that reproduces `globalpeaceyes.org` without any
Framer code. `index.html` and the other six exported pages are untouched and remain the
reference.

| file                                                   | bytes   | what                                      |
| ------------------------------------------------------ | ------- | ----------------------------------------- |
| `index.html`                                          | 19,217  | the page — semantic markup, no build step |
| `assets/css/site-new.css`                                | 43,101  | all styling, hand-tuned per breakpoint    |
| `assets/vendor/dotlottie-player-2.5.6.js`              | 779,388 | vendored animation player (see B.3)       |
| `assets/animations/lxuQ2oapgQUgWt9Wml9hBUHUnfI.lottie` | 12,501  | crisis animation                          |
| `assets/animations/tjI5sUfMEowhcWXqGcU72bPwns.lottie`  | 5,050   | solution animation (mobile)               |

Deliberately absent, per the plan in §4.3: the Framer runtime, analytics, and Turnstile.
The page loads exactly three external origins — the two Vimeo players, and nothing else.
Note that Vimeo's own player pulls Turnstile from `challenges.cloudflare.com`; that is
third-party code inside the iframe, verified identical on the live site, and not ours to
remove while Vimeo is embedded.

### B.2 Verification, and the final numbers

`cmp.js` (%TEMP%\opencode) loads the live site and `http://127.0.0.1:8137/index.html`
in the same browser at each width, then compares document height, `scrollWidth`, ~25
landmarks, and every text node's box.

| width                       | doc-height delta | notes                                                                                                                                                    |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1728 / 1440 / 1200          | **−1**           | every block lands on the live's integer pixel; the −1 is the lost rounding step from the live's fractional 19.203px line box (ours 19.2) — see AGENTS.md |
| 1199 / 1000 / 810           | +5 … +6          | uniform upstream noise from the hero cluster                                                                                                             |
| 800 / 700 / 600 / 500 / 450 | −694 … −662      | intentional, see B.5; 700 is −694, 500/450 are −666/−662                                                                                                 |
| 390                         | −693             | intentional, see B.5                                                                                                                                     |

`scrollWidth` equals the viewport at every width measured — no horizontal overflow
(mine; the live overflows below 600px, see B.5 deviation 2). The card grid is
exact-to-quantized at every width: all 5/10 card boxes land within 1px (desktop) or
6–9px (mobile) and every box height matches (`dh=0`).

Final measured spacing facts baked into `site-new.css` (tune nothing by eye — these are
the live's live values):

- Declaration note `margin-top` is **60px at every width** (not 84/80 as the first
  pass assumed), and the second paragraph of the copy is `margin-top: 32px` (not 34 —
  the 2px pushed the whole section down 1px at ≥1200 until it was measured).
- Change block `padding-top` is **89px mobile / 80px ≥810**, capped at the bottom by
  **`padding-bottom: 80px` at every width**. The base rule used to carry none; the
  80px was hiding inside the old desktop `margin-top: 127px` on the label. Both are
  now explicit (see the label bullet).
- The section label is a flush 97px box at **every** width — `margin: 0 0 0 26px;
padding: 23px 0`, title 23px below the film, sub 53px below, then 80px to the first
  900×900 variant box. The old desktop `margin-top: 127px` was wrong (measured 104px
  too low); the mobile override that restated the same box is gone as redundant. The
  label's sub is 4px below the title (`margin-top: 4px`), line-height 21px (measured
  on the live: 26px title then 21px sub, 4px apart).
- `.variant--crisis` has **no margin** — the change block is contiguous with the
  cascade. Solution and voice panels sit 41px / 40px below their precursors. Mobile
  `.variant` gap is 64px.
- Mobile card text gaps (col A → col B): col A 230@390→192@600+; col B 192@390→173@600+;
  col B stagger 185@390→147@600+ — all `max(_, calc(A - (100vw-390)*k))` curves except
  the 600+ flats. The **crisis** more-card keeps 271@390→211@600; the **solution**
  more-card uses the flat 64px gap (scoped with
  `.cards:not(.cards--single) .card + .card--more`). More-card paragraphs are
  `font-weight: 500` with `margin-top: 0` (specificity > `.cards p`).
- The footer's brand column (see B.9) is 127×33 SVG + 16px gap + copy, 66px tall at
  every width — exactly the link row's height.

### B.3 The DotLottie problem, and what was decided

The live homepage carries two `.lottie` animations. The export contains the renderer-less
Framer player (`assets/scripts/dotlottie-player.BuSJ8xyR.mjs`, 466,290 B, byte-identical to
what the live site serves). It cannot render on its own: it calls into the Framer runtime,
and importing it standalone fails with `getRenderer(...) is not a constructor`.

Options weighed:

1. **Use the Framer file anyway** — impossible without the runtime.
2. **A different lottie renderer** (lottie-web, etc.) — smaller, but `.lottie` is a
   container format, so it would need unzipping at build time and the output would no
   longer be the file the site shipped.
3. **Vendor the official DotLottie player** — the actual publisher's package. **Chosen.**

Decision was to self-host rather than call a CDN. The package is **`dotlottie-player`,
unscoped** (there is no `@dotlottie/player`; it 404s), latest at the time **2.5.6**,
**BSD-3-Clause**, and its license headers ship inside the bundle. The UMD `dist/index.js`
build is self-contained; the ESM build imports bare `lit` / `lottie-web` / `fflate` and
would need a bundler, so it was not used. The dev-only livereload preamble was stripped
(779,688 → 779,388 B) and the file is loaded with `defer` from `<head>`.

This is the one place the page is heavier than ideal: **779 kB of JavaScript** to draw two
decorative animations. It is cached across every page load, and it replaces the Framer
runtime (~2.5 MB) plus the whole `assets/scripts/` mirror, so it is a large net win — but
do **not** book it against the 2.15 MB Turnstile figure: that traffic is Vimeo's and is
still present on this page (see the §0 correction and B.1). It is the biggest single
asset on the page and the first thing to revisit if the animations are ever replaced
with a lighter format.

Both players were confirmed rendering, not merely present: the shadow root contains a
`916×902` SVG with 103 / 131 shapes and `data-loaded="true"`, and sampled frames 1.5 s
apart hash differently, so the animation is genuinely advancing.

**Geometry.** The players are absolutely positioned, and the live positions them against
the _viewport_, not their container — so `left: 75%` is wrong (it resolves against the
centred `.container`) and had to become
`calc(75vw - max(0px, (100vw - 1200px) / 2))`. Live player sizes and x-centring:

| width           | live                                                                                 |
| --------------- | ------------------------------------------------------------------------------------ |
| ≥810            | `916×902`, centred on `75vw`                                                         |
| 390 / 600 / 800 | `869×856` / `1336×1316` / `1781×1754`, centred on `50vw`, bleeding off the left edge |

**The y position does NOT match within 1px — the earlier claim here that it did was
wrong, and was re-measured.** Live-to-mine player `top` deltas: **+6/+7px** at
810/1000/1199, **−74 … −91px** at 390/600/800, and **−318px at ≥1200**. The mobile
y-offsets are _not_ linear in viewport width — the live's offset from its own
section top is `325 / −61 / −303` px at `390 / 600 / 800`, a curve that kinks at 600.
It is reproduced as two linear segments.

The ≥1200 delta is a stale rule, not a rendering difference: the committed
`--lot-y: -318px` in the `@media (min-width: 1200px)` block claims the live centres the
player in a 900px box, but it does not — the live's player top (4234 at 1440) equals its
container's top (4235) minus 1px, i.e. flush, so `--lot-y: 0px` is what matches. It was
left as **one line, not applied**, because it moves a 916×902 animation by 318px (very
visible), and A/B'd against `HEAD` in a byte-exact git worktree to confirm it is
pre-existing and not caused by the label/footer/declaration work.

### B.4 The one asset that does not match the live site

The live homepage's second video is **not** a Framer asset any more. It is
`https://video.gumlet.io/67611a6011dd4f4720ae667f/67611a695cc…/download.mp4`, 1920×1080,
with `controls`. This repo only has the Framer-exported
`MLWPbW1dUQawJLhhun3dBwpgJak.mp4` at 1280×720, which is what the page uses.

The geometry is identical (it is `width/height: 100%`, and the `cvid` landmark matches at
every width), so this is a sharpness difference, not a layout one. The local file was kept
because it is the export's own asset and keeps the page self-contained. **If exact parity
with today's live site matters more than self-containment, point `src` at the Gumlet URL.**

One behavioural note: Chrome defers autoplay for offscreen video, so this video does not
start until it scrolls into view. Verified working (`currentTime` advancing after scroll)
and the live site is no different in practice. The live also carries `controls`; that was
deliberately **not** copied, because a control bar on a paused video is a visible
difference from the live page.

### B.5 Intentional deviations

Three, all deliberate:

1. **Mobile document height is ~692–693 px shorter.** The live page contains an empty
   transparent block reserved for an empty state. It renders nothing visually, and
   reproducing dead space was judged not worth it. Everything above and below it matches
   within a few pixels, and the doc, the CTA row and the footer all shift up by exactly
   the same −692/−693.
2. **The welcome heading fits instead of overflowing.** On the live site below ~600 px this
   heading is 556 px wide inside a 342 px column and overflows both edges, which is what
   makes the live page horizontally scrollable (`scrollWidth` 473 at a 390 px viewport). Our
   version wraps to the column. This is the _cause_ of deviation 1's smaller sibling
   difference and of `scrollWidth` being correct here and wrong there.
3. **The mobile menu is a dropdown, not a full-screen takeover.** On the live site, opening
   the burger expands the fixed header element itself to `height: 2000px`, so the bar
   becomes a full-viewport cream overlay that covers the page (the document height does not
   change — it is `position: fixed`, so it does not affect scroll extent). Ours is a
   positioned panel under the bar. The panel's own geometry does match the live: `top: 83px`
   (16 px below the bar), full-bleed, 24 px side inset, links on a 51 px pitch, and the
   Vote Now button stretched to the full 342 px inset width. The takeover behaviour itself
   was not copied — it is a self-contained panel, it does not affect layout, and matching it
   is a behaviour change rather than a parity fix.

Everything else in the mobile cluster — the three crisis/solution/voice blocks, the card
grids, the CTA, the footer — lands within about 22 px of the live page, and the two
videos, both iframes, the hero, and the vote counter match exactly.

### B.6 The header

Rebuilt from measurement, not from the export. The live header is a `position: fixed`,
`z-index: 2` bar, **67.203 px** tall at every width, opaque `#faf9f6`, and it never hides or
reappears on scroll (verified by measuring `getBoundingClientRect().top` after scrolling
1400 px). Ours is 67 px via `.header-inner { min-height: 35px }` inside `padding: 16px 0`.

Two rules, one of which was initially assumed to be one thing:

- **The dark rule is painted by the header.** It is a full-box `::after` on
  `.framer-5z4cni` — `content: ""; position: absolute; inset: 0; border-bottom: 1px solid
#222` — so it spans the header's full box rather than its content. Pixel-verified as
  `rgb(34,34,34)` occupying exactly row `y=66` on both live and local, at 390 and 1440, at
  scroll offset 0 and 1400.
- **The light `1px #e1e0dd` line immediately under it is not a divider at all** — it is the
  first row of the hero lattice, which is the subject of B.7 below. It was originally
  reproduced as a desktop-only `.hero::before` and that explanation was wrong; the pixel
  evidence for the lattice is in B.7 and the pseudo-element has been removed.

Because the header is out of flow, `body` carries `padding-top: 67px` to restore the height
it used to contribute, and the hero's own padding was re-derived from the live's measurements
(145 px desktop, 100 px mobile) rather than kept at its pre-header value. The decorative
bleed elements move with it: `top: 0` desktop, `-72px` mobile, verified against the live's
absolute positions at 390/600/810/1000/1440.

The one measurement worth recording, because it is easy to "fix" backwards: the live's nav
links report **two different boxes**. As inline `<a>` elements inside a `19.2px` line-height
block they measure `[x, 22, w, 22]` — the font's content area, positioned by the line box —
while the text block they sit in measures `[x, 24, w, 19.2]`. Matching the block puts our
glyph baselines within 0.1 px of the live's; matching the `<a>` box instead would land the
type 2 px high. `.nav` therefore stays at `line-height: 19.2px`. `cmp.js` compares text
blocks, so it scores these links 0/0/0 at both 810 and 1440.

Also confirmed, and deliberately not reproduced: the live page has **no custom scrollbar
behaviour** — no hide-on-scroll, no `scrollbar-width` override, `scroll-behavior: auto` — it
just uses the browser default. Our `html, body { overflow-x: clip }` stays, because
deviation 2 above means our page has no horizontal overflow to scroll.

### B.7 The hero lattice

The single largest visual element on the page, and the one that was missed longest, because
it looks like a set of content dividers rather than a decorative grid.

**What the live does.** A holder (`framer-11qpj2k`) sits at `y=67`, horizontally centred and
`overflow: hidden`, and contains 140 `145×145px` cell elements in a `28×5` arrangement — a
`4060×725px` lattice. Each cell draws its own edge, so the rendered lines are `2px` and
straddle the cell boundaries (a cell at `left: 145k` paints a 1px edge at `145k−0.5` and
`145k+144.5`; the overlapping pair is what makes them 2px). The holder is `725px` tall at
≥810px. Below 810px it is `581px` tall and the inner lattice is shifted `top: -72px`, so the
first visible row moves from `y=67` down to `y=140`. The holder's right edge is 2030px past
the viewport's right edge, which is the origin of the live's `scrollWidth 2750` at 1440px.

**What we do instead.** One `<div class="hero-grid" aria-hidden="true">` and a `::before`
carrying two repeating-linear-gradients, 145px apart in each axis, `2px #e1e0dd`, offset by
`background-position: -1px -1px` so the lines straddle the cell edges exactly as the live's
overlapping edges do. It is `725px`/`581px` tall on the same breakpoint, and the `::before` is
centred with `left: 50%`, `margin-left: -2030px`. This is a pixel match, not a DOM match:
140 empty divs would add 140 elements to the accessibility tree and the paint tree for no
visible gain. `gridcheck.js` compares detected line rows and columns against the live and
reports EXACT at 1728/1440/1200/810/809/600/390, and the one measured breakpoint (810 vs 809) flips in the same place on both.

**Two things the lattice forced, both of which were found by pixel diffing rather than by
reading the live's computed styles:**

- **The film needs an opaque wrapper, not just a film.** On the live the hero film sits
  inside a `577px`-wide cream box that keeps its desktop width below 810px, where only the
  film inside it shrinks to `342px`. The box is invisible — `#faf9f6` on `#faf9f6` — except
  that it hides the lattice beside the film, which is why no lattice row survives at the
  film's own height on mobile. Reproduced as `.hero-video-box` (`width: 577px`, no
  `max-width`, `background: var(--bg)`), which also carries the `z-index: 2` that puts the
  film above the lattice. Its `margin-inline` is `calc((100% - 577px) / 2)` and not `auto`:
  between 600px and 810px the box is wider than its container, and auto margins resolve to
  zero when over-constrained, which pinned the box to the left padding and swallowed the
  lattice line at `x=589` (the only remaining `gridcheck` mismatch after the wrapper was
  added).
- **The lattice paints over the bleed artwork, not under it.** The live's paint order is
  bleed images first, cells second, video wrapper last, so the lines are visible across the
  artwork at the left and right edges. `.hero-grid` is `z-index: 1` and the bleeds are
  `z-index: auto`, which reproduces that.

The old `.hero::before` light rule described in B.6 has been deleted — the lattice's first
row is now that line, at the same `y=67` at ≥810px. Document height is unaffected: both
elements are absolutely positioned, and `cmp.js` still reports −1 at 1728/1440/1200, +5/+6 at
1199/1000/810 and −693/−694 at 800/700/600/390 (666/662 at 500/450), with no horizontal
overflow at any width.

### B.8 The section rules

Most of the page's rules are not CSS `border`s at all. On the live they are `::after`
overlays: a `::after` with `position: absolute; inset: 0` and one or more `border-*` sides,
painted over a box that already has its full measured size. So a live element that reports
`[536,1124,760,604]` and paints a 1px frame occupies those exact pixels — the frame is drawn
inside the box, not added to it.

Three of them were reproduced in `site-new.css`:

| box                      | rule                                           | note                                     |
| ------------------------ | ---------------------------------------------- | ---------------------------------------- |
| `.hero::after`           | `border-bottom: 1px solid #000`                | the hero's closing rule, on its last row |
| `.cluster::after`        | `border: 1px solid #222`                       | all four sides at ≥810px                 |
| `.welcome::after`        | `border-top` + `border-bottom: 1px solid #000` | left/right never painted                 |
| `.change::before`        | `border-top: 1px solid #000`                   | full-bleed, see below                    |
| `.change .embed::before` | `border-top: 1px solid #000`                   | full-bleed, sits on the frame's top row  |
| `.change .embed::after`  | `border: 1px solid #000`                       | frame, `height: calc(100% + 97px)`       |

**The welcome band's top edge is 2px, and that is not a mistake.** The hero's closing rule
lands on the hero's last row and the welcome band's own top rule lands on the band's first
row, and the two boxes are flush. At 1440 the live paints rows 1727 and 1728 `rgb(0,0,0)`
and row 1729 is already the band's `#e3e3e3` fill. Adding only the band's own top border
would have produced a visibly thinner line. Pixel-verified by `bordercmp.js` at 1440:
`.cluster` live `[536,1124,760,604]` = ours, top row and left column both `34,34,34` on both
sides; `.welcome` live `[0,1728,1440,468]` = ours, rows 1727/1728 black on both sides.

**The cluster frame is mobile-conditional.** Below 810px the live's cluster is full-bleed
(`100vw`) and its `::after` carries only `border-top`/`border-bottom`; the left and right
edges would fall exactly on the viewport boundary and are not painted. Hence
`border-width: 1px 0` in the ≤809.98px block, verified at 390 where the live's row 1060 and
ours at 1066 (the known +6px upstream noise) are both `34,34,34` across the full width, with
no vertical rule at `x=0`.

All three are `position: absolute` overlays with `pointer-events: none`, so layout is
untouched — the full 12-width `cmp.js` doc-height table is byte-identical before and after
(−1/−1/−1/+6/+5/+6/−693/−694/−693/−666/−662/−693), `gridcheck.js` is still EXACT at all
seven widths, and `runtime.js` confirms the burger still takes clicks.

**The change section needs two full-bleed rules, not one.** The live paints two separate
1px black lines across the whole viewport in this section, and only one of them is the
section's own top edge:

- row `3010` at 1440 / `3566` at 390 — the top of the "be the change" block (`framer-pgqroz`,
  a full-bleed wrapper around the 1152px inner grid, `::after` `border-top` only);
- row `3410` at 1440 / `4220` at 390 — the top of the film's full-bleed wrapper
  (`framer-gcd26i`, also `border-top` only), which is where the frame's top edge lands too.

Both rules belong to the full-width section wrappers, not to the 1200px `.container`, so
they run from `x=0` to `x=100vw` — pixel-probed black across `0..1439` and `0..389`
respectively, with the row above still the white declaration band. Ours are `::before`
overlays at `left: 50%; width: 100vw; transform: translateX(-50%)`, which is exact because
`.container` is centred, so the pseudo's midpoint coincides with the viewport's.

**The film's frame is drawn by a box taller than the video, and that is not a mistake.** On
the live the frame belongs to `framer-19dhb4o`, whose children are the video
(`framer-hqlglw-container`, 648px) _and_ the section label (`framer-lnnusu`, 97px) — so the
frame encloses both: 745 = 648 + 97 at 1440, and 289 = 192 + 97 at 390. Pixel-verified down
the left border column: the live's is black from `3410` to `4153` at 1440 and `4220` to
`4508` at 390. Ours is `height: calc(100% + 97px)` on `.change .embed` — the same 745px and
289px, offset only by the page's existing 1px desktop / 8–9px mobile drift. The bottom
border's horizontal run is `144..1295` at 1440 and `24..365` at 390 on both pages, and the
right-edge pixels match byte-for-byte.

`::before` is the full-bleed rule and `::after` the frame, because `::after` is the later
child and therefore paints on top of the `<iframe>`. Both carry `pointer-events: none`, so
the player stays fully interactive.

**Still outstanding.** The live paints further pseudo-bordered boxes that we do not yet
reproduce — the declaration inner box `[144,2316,556,313]` (which frames the _declaration_
film, and whose bottom edge lands on the note pill's top), the note pill, and the later
card/panel boxes. These are found by enumerating every element's `::before`/`::after`
computed border (see `pborders.js`), and were deliberately left alone here because the
brief was the named sections. Note that the live also has piles of tiny bordered boxes
near the CTA and footer at mobile widths, which have not been triaged.

### B.9 The section label, the declaration's second paragraph, and the footer wordmark

Three fixes this session, each measured against the live rather than re-derived:

**1. The label was a real bug, not a box-convention artifact.** `changelabel.js` proved the
change section's label sits 23px / 53px below the film on the live at both 1440 and 390,
and ours matched at 390 but was 104px too low at ≥810 because `.section-label` carried a
desktop `margin-top: 127px` that the live does not have. The fix made the base label rule
the flush 97px box the live uses everywhere (`margin: 0 0 0 26px; padding: 23px 0`), put
the change block's trailing `padding-bottom: 80px` into the base rule where the live has
it at every width, and deleted the mobile restatement as redundant. The label's sub got
two more measured numbers: `margin-top: 4px` (live: 26px title ends 4106, 21px sub starts 4110) and `line-height: 21px`, not 20.8px. After the fix `cmp.js` scores `lbl-t` and
`lbl-s` **0/0/0** at 1440.

**2. The declaration's `p + p` is 32px, not 34px.** The extra 2px made the copy block 429
instead of the live's 427.203, pushing the note pill 2px down and costing 1px of document
height at ≥1200. After the 32px fix every block of the declaration lands on the live's
integer pixel — but the section totals 813.4 on ours vs 813.609 on the live, so the
browser rounds those to 813 and 814 and the desktop doc-height delta is now **−1**
(was 0 only while the label bug happened to compensate). That −1 is the unreproducible
19.203px line box (ours 19.2); do not tune it with a magic 0.5px.

**3. The live footer does have the wordmark, and it is not the header's symbol.** Measured
at 1440 and 390: a 127×33 SVG at `x=144`, 16px below it the copyright, the column 66px
tall — exactly the link row's height, which is why the live's row uses
`align-items: center`. It uses `sprite.svg#svg-1864332813_13682` (`viewBox="0 0 127 33"`,
a single-path rendition) while the header uses `#svg-1141485548_13698` (`viewBox 0 0 127
32`, 46 paths); both are in the sprite, so ours points at the footer's id. The earlier
claim in AGENTS.md / this appendix that the live footer has no logo or social icons was
wrong — the Instagram / LinkedIn icons are present under "Privacy Policy" at
`[1194,7293,20,23]` / `[1238,7293,20,23]` but are inside the 102px third group, so adding
them is a separate no-geometry task. A/B'd against `HEAD` in a git worktree to confirm the
logo and label changes leave the doc-height and lottie numbers otherwise unchanged.
