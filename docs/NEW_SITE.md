# NEW_SITE.md — rebuilding this as a real static site

## 0. The short answer

**Yes, it is overcomplicated** — but the useful framing is not "Framer is heavy." It is:

> The complexity was never in the design. It is in the *delivery mechanism*, and we no
> longer get anything for it.

The site is 7 pages, ~4,350 words of copy, 40 images, 40 links, 1 form, 3 videos and
4 embeds. Framed as a website that is nothing. Delivered as a Framer export it is
**1.22 MB of HTML, 1.28 MB of CSS, ~2.5 MB of runtime JavaScript, and 2.4–11.5 MB per
page load** — including a Google Maps load on the donation page and a 2.15 MB CAPTCHA on
the homepage.

> **⚠️ Correction (added after the rebuild was built and measured).** The 2.15 MB
> "CAPTCHA on the homepage" is **Vimeo's, not ours.** It is Cloudflare Turnstile
> initiated *inside* the two `player.vimeo.com` iframes, one per embed — not loaded by the
> page's own code. Proven by `index2.html`, which contains zero Turnstile references yet
> produces the identical request set, and by frame attribution of every
> `challenges.cloudflare.com` request. It is therefore **not** a saving available to us
> short of dropping Vimeo. §4.3 below still frames it as removable; treat that part as
> superseded. See the correction note in `RUNTIME.md` §1 and Appendix B.1.

And the worst part is one I got wrong the first time, so it is worth being precise about:
**the frozen export in this repo does not hydrate — but the live site does.** Measured
today, same browser, 1440×900, all 7 pages:

| | `globalpeaceyes.org` (live) | this repo, served |
| --- | --- | --- |
| React hydration errors | **0** | **4 per page** (`#418`, `#423`) |
| `scrollWidth` @1440px | **1440** (correct) | **2750** (broken) |
| `data-framer-name` after load | 318 / 392 / 293 / 226 / 226 / 32 | **identical** |
| `.mjs` chunks loaded | 21 / 18 / 20 / 17 / 19 / 17 | **identical** |
| Homepage HTML served | 651,657 B | 356,722 B |

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

| Metric | With runtime | Without |
| --- | --- | --- |
| Nav links **visible** | 18 | **18** |
| Layout width @1440px | 2750 px | **1440 px** |
| Text content | present | present |

The `hidden-*` classes plus the `@media` rules in `site.css` already hide the inactive
breakpoints with no JavaScript whatsoever. The breakpoint rewrite is a **DOM-weight
optimisation, not a visual requirement** — `RUNTIME.md` §5.6 conclusion 1 says this
explicitly.

One correction to my own earlier reading of this table: the `2750px` column was *not* a
property of the runtime. It was a property of the failed hydration (§0). On the live site,
where hydration succeeds, the same runtime produces `1440px`. So the honest statement is
narrower and still sufficient: **the breakpoint-pruning step is optional, and the
static HTML renders correctly on its own.**

### 2.2 The runtime is load-bearing for exactly three things, all of them small

`AGENTS.md` §6.8 is right that you cannot just delete `assets/scripts/`. It is wrong about
*which three* things matter. The real list is:

| Runtime is needed for | Size of the replacement |
| --- | --- |
| Materialising the SVG sprite defs | keep `sprite.svg` — it already works JS-free (§7b) |
| Driving the appear animations | ~20 lines of CSS, 0 kB of JS |
| The vote counter (Cloud Run) | ~15 lines of `fetch` |
| Everything else (router, forms, components) | *nothing — the static HTML already does it* |

`RUNTIME.md` §7b is the decisive one: with `sprite.svg` served, external `<use href="sprite.svg#id">`
resolves **natively, in every browser, with JavaScript disabled**. The runtime's
fetch-and-rewrite dance is pure overhead on top of a mechanism that already works.

### 2.3 The one real bug here is live

The reduced-motion defect is the exception, and I re-measured it against
`globalpeaceyes.org` today to be sure. Sampling the first hero element's opacity from
before any page script runs:

| | `reducedMotion: 'no-preference'` | `reducedMotion: 'reduce'` |
| --- | --- | --- |
| **Live** | `0.001@56ms → 0.790@467ms → 1.000@612ms` | `0.001@53ms → 0.547@417ms → 1.000@565ms` |
| **This export** | `0.001@113ms → 0.783@534ms → 1.000@566ms` | `0.001@99ms → 0.969@577ms → 1.000@607ms` |

The browser reports `matchMedia('(prefers-reduced-motion: reduce)').matches === true` and
the hero animates anyway. **Identical on live and on the export — this is a genuine live
accessibility defect**, not an export artifact. A visitor with OS-level reduced motion set
gets the full entrance animation on the production site today.

That is the only defect in this list that a user can actually feel, and it is worth fixing
regardless of whether the rewrite happens (§7, step 1).

### 2.4 Nothing left in this repo can be fixed in this repo

This is the strategic point. Every open defect traces to code we do not control:

| Defect | Live? | Fixable locally? |
| --- | --- | --- |
| Hero animation ignores OS reduced-motion (§9) | **Yes** | **No** — buried in the 465 kB bundle |
| 6 of 12 CDN chunks differ from the export mirror (§5.4) | Yes | **No** — we don't control the CDN |
| Weglot widget on privacy-policy (§12.2) | Yes | **No** — pulled in by remote code |
| Termly embed collapses to a 900px stub (§5.6) | Yes | **No** — needs the runtime's iframe protocol |
| One shipped font is corrupt, silently fails (§8) | Yes | **No** — the CDN serves it |
| 2.15 MB Turnstile + Google Maps on donate | Yes | **No** — third-party JS. ⚠️ **Corrected later:** the homepage's Turnstile is Vimeo's (inside the player iframes), so it is *not* removable by us. Google Maps on donate is the site's own and *is* removable. |
| Hydration failure / 2750px overflow | **No — export only** | Yes, by not shipping the export |
| Framer editor bar loads on every page then gives up (§0.8) | Yes | **No** |

`RUNTIME.md` §13.3 puts it plainly: the local `assets/scripts/` mirror is *the only copy
that matches our HTML*, and **nothing references it**. The live site is not currently
broken by chunk drift — it re-renders fresh HTML, so it hydrates — but our export *is*, and
the only two ways to reconcile them are to self-host 5.9 MB of minified React, or to stop
depending on the CDN. The second one is the rewrite.

**Owning the code is the only remaining option.** The rewrite is not an optimisation
pass. It is the point at which the defect list becomes an empty file.

---

## 3. Where the 1.28 MB of CSS actually goes

I measured the rule blocks in `assets/css/site.css` (1,284,824 bytes, 2,395 declaration
blocks):

| Category | Bytes | Share | Removable? |
| --- | --- | --- | --- |
| Rules naming a `.framer-<hash>` class (807 blocks) | 689,597 | **53.7%** | Yes — one rule per `<div>` |
| Framer's base component stylesheet (`.framer-text`, `data-framer-page-link-*`, `data-framer-component-type`) | 593,417 | **46.2%** | Yes — it's a generic blob |
| Everything else | 1,810 | 0.1% | — |

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

| | Now | Rebuilt | |
| --- | --- | --- | --- |
| HTML, 7 pages | 1,220,749 B | ~70–110 kB | ~12× |
| CSS (loaded on every page) | 1,284,824 B | ~15–25 kB | ~60× |
| First-party JS | ~2.5 MB runtime (+5.9 MB unused mirror) | ~4 kB | ~600× |
| `index.html` page weight | 8.58 MB | ~1.2 MB (almost all media) | ~7× |
| `donate.html` page weight | 11.50 MB | ~0.3 MB | ~38× |
| Hydration | fails on this export → full re-render | none exists | |
| 1440px overflow | 6 of 7 pages *(export only)* | gone | |
| `prefers-reduced-motion` | **ignored — live, today** | honoured | |
| JavaScript disabled | loses icons + hero | **fully functional** | |
| Third-party CDN dependency | total | none | |

### 4.2 The six transformations

**1. Collapse 5 responsive variants → 1.**

Framer's SSR doesn't know the viewport, so it ships every breakpoint and marks four with
`hidden-*`, then ships 465 kB of runtime to delete them at load. Modern CSS does this
natively and costs nothing.

```html
<!-- now: 5 copies, 72 anchors, 290 wrapper divs, hidden-* + ssr-variant + <!--$--> pairs -->
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

Walk the component tree, read the computed styles, and write a class per *role*
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
@keyframes rise { from { opacity: 0; transform: translateY(-16px); } }
[data-animate] {
  animation: rise .5s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: calc(var(--i, 0) * 60ms);
}
@media (prefers-reduced-motion: reduce) {
  [data-animate] { animation: none; }
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
  <label>Name <input name="Name" required></label>
  <label>Email <input name="Email" type="email" required></label>
  <label>Location <input name="Location" required></label>
  <label>Message <textarea name="Message" required></textarea></label>
  <button type="submit">Send</button>
</form>
```

4 real fields, 0 honeypots, works with JS off. (Or Netlify Forms / Basin / a Worker — see §6.)

### 4.3 Kill the third-party weight — this is now the majority of the page

Once the 2.5 MB of Framer runtime is gone, the third-party embeds *are* the page weight.
They need a deliberate decision, not an accident.

| Page | Cost today | Replace with |
| --- | --- | --- |
| `donate.html` | **9.41 MB of Givebutter JS** — Stripe, Braintree, GA, and a **1.30 MB Google Maps load** on a donation page | A **Stripe Payment Link** (~30 kB) or a link to your own donation page. **Biggest single win on the site.** |
| `index.html` | **2.15 MB Cloudflare Turnstile**, pulled in by remote code | A honeypot field (0 kB), or keep Turnstile only on the actual vote endpoint. **⚠️ Superseded — measured later: this Turnstile is Vimeo's, initiated inside the two `player.vimeo.com` iframes, so a honeypot would save nothing. The site already contains zero Turnstile code and still gets the traffic. Keep Vimeo or lose the CAPTCHA.** |
| `privacy-policy.html` | Termly iframe → collapses to a 900px stub without the runtime; plus an **unexpected Weglot widget** | **Write it as a static HTML page.** It is 123 words. Why is this an iframe? |
| `index.html` | Vote counter on a `run.app` Cloud Run service | Keep, but own it — or render a static number in the HTML and refresh it with 15 lines of `fetch` |
| `index.html` | 2.36 MB Gumlet MP4 + **2 Vimeo embeds returning HTTP 401** | Self-host, `preload="none"`, poster images, lazy-load. Fix or drop the 401s. |
| `index.html` | A Lottie animation (via `dotlottie-player`, 466 kB local) | A CSS/`<img>` equivalent, or keep — but serve it yourself |

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
(318). Both are the *actual* rendered page at a real viewport, un-duplicated. Dump it at
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
  `<use>` hrefs. So the *served* HTML is not what a visitor sees; the settled dump is.
  Dump after settle, not at `DOMContentLoaded` (`RUNTIME.md` §14, last bullet).
- **Compare against the live site, not against this export.** The live site hydrates
  correctly and lays out at 1440px; this export does neither. So screenshot the live site
  as your reference — that is the design you are preserving. The local export's post-hydrate
  DOM is still a fine structural blueprint, but its *layout* is the broken one.

---

## 6. One decision that changes the architecture

Everything above assumes the person changing a word of copy can open a text editor.

- **If yes → build 6, no tooling.** Hand-write the 7 pages. The nav and footer are ~30
  lines repeated 6 times; editing them is 6 small edits. This is the simplest possible
  thing and it will still be correct in five years.
- **If no → a non-developer needs to edit copy → this rebuild is the wrong shape.**
  Hand-written HTML is a *developer* CMS. If marketing owns the words, the honest options
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
5. **`privacy-policy.html`.** Static text. Kills Termly *and* Weglot.
6. **`volunteer.html`.** Adds the form. Kills 11 honeypots and the runtime dependency.
7. **`donate.html` last.** Needs the Givebutter → Stripe decision made, and that's a
   business call, not an engineering one.
8. **`index.html` last.** 26 appear elements, 3 videos, the vote counter, the A/B variants,
   the Lottie. Most moving parts, so most to stabilise.
9. **Assets last.** Once every page is rewritten, the referenced set is knowable. Subset
   fonts, re-encode video, delete `assets/scripts/`, delete the unreferenced 20 MB.
10. **Point the domain over. Delete the Framer project.** Framer is frozen anyway.

---

## 8. What I would *not* do

- **Don't keep patching the Framer export.** `AGENTS.md` §6.8 already closed the
  "delete the runtime" experiment at 0/35 matching screenshots. The reason is that it was
  framed as *subtraction*. A rewrite is a *replacement* — you end up with CSS that matches,
  not CSS that was deleted.
- **Don't minify (6.1) or dedupe `site.css` rule-level.** Both are real work on bytes
  that a 20 kB replacement makes irrelevant. The 1.28 MB is not a minification problem;
  it is a wrong-architecture problem.
- **Don't self-host `assets/scripts/`.** `RUNTIME.md` §13.3 correctly identifies it as the
  only copy matching our HTML, and it *would* fix the hydration mismatch. But it fixes it
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
is a *rendering of its editor state*, not a shippable artifact — it ships five copies of
every component, names every `<div>` after a hash, and delegates the actual page to 2.5 MB
of React that then **fails to hydrate and throws the HTML away** on every single page load.
We have already spent this repo's effort optimising a document that React discards — and
the export we ended up with is *worse than the live site it came from*, because stale HTML
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
  404 page — title *"Page Not Found"*, 286 elements, the `FCSiEZ4Vj7n8Qqgo` route chunk on
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

## Appendix B — what was actually built: `index2.html`

Sections 0–9 above are the *plan*, written against the export. This appendix records the
*result*: a hand-built, dependency-free replacement for the homepage, and how it was
verified.

### B.1 What it is

`index2.html` is a single static page that reproduces `globalpeaceyes.org` without any
Framer code. `index.html` and the other six exported pages are untouched and remain the
reference.

| file | bytes | what |
| --- | --- | --- |
| `index2.html` | 14,826 | the page — semantic markup, no build step |
| `assets/css/index2.css` | 22,022 | all styling, hand-tuned per breakpoint |
| `assets/vendor/dotlottie-player-2.5.6.js` | 779,388 | vendored animation player (see B.3) |
| `assets/animations/lxuQ2oapgQUgWt9Wml9hBUHUnfI.lottie` | 12,501 | crisis animation |
| `assets/animations/tjI5sUfMEowhcWXqGcU72bPwns.lottie` | 5,050 | solution animation (mobile) |

Deliberately absent, per the plan in §4.3: the Framer runtime, analytics, and Turnstile.
The page loads exactly three external origins — the two Vimeo players, and nothing else.
Note that Vimeo's own player pulls Turnstile from `challenges.cloudflare.com`; that is
third-party code inside the iframe, verified identical on the live site, and not ours to
remove while Vimeo is embedded.

### B.2 Verification, and the final numbers

`cmp.js` (%TEMP%\opencode) loads the live site and `http://127.0.0.1:8137/index2.html`
in the same browser at each width, then compares document height, `scrollWidth`, ~25
landmarks, and every text node's box.

| width | doc-height delta | notes |
| --- | --- | --- |
| 1728 / 1440 / 1200 | **0** | exact |
| 1199 | +2 | |
| 1000 | +1 | |
| 810 | +2 | tablet box structure exact; second card column exact |
| 800 / 700 / 600 / 500 / 450 | −666 … −683 | intentional, see B.5 |
| 390 | −665 | intentional, see B.5 |

`scrollWidth` equals the viewport at every width measured — no horizontal overflow.

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
the *viewport*, not their container — so `left: 75%` is wrong (it resolves against the
centred `.container`) and had to become
`calc(75vw - max(0px, (100vw - 1200px) / 2))`. Live player boxes, all matched within 1 px:

| width | live | 
| --- | --- |
| ≥810 | `916×902`, centred on `75vw` |
| 390 / 600 / 800 | `869×856` / `1336×1316` / `1781×1754`, centred on `50vw`, bleeding off the left edge |

The mobile y-offsets are *not* linear in viewport width — the live's offset from its own
section top is `325 / −61 / −303` px at `390 / 600 / 800`, a curve that kinks at 600. It
is reproduced as two linear segments. Above 1200 the offset is a flat `-318px`, which is
half of `(900 − 264)`: the live centres its copy in a 900 px box there, while our desktop
layout is top-aligned.

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

Two, both deliberate:

1. **Mobile document height is ~665–680 px shorter.** The live page contains an empty
   transparent block reserved for an empty state. It contributes nothing visually, and
   reproducing dead space was judged not worth it. Everything above and below it matches
   to within a couple of pixels.
2. **The welcome heading fits instead of overflowing.** On the live site below ~600 px this
   heading is 556 px wide inside a 342 px column and overflows both edges, which is what
   makes the live page horizontally scrollable (`scrollWidth` 473 at a 390 px viewport). Our
   version wraps to the column. This is the *cause* of deviation 1's smaller sibling
   difference and of `scrollWidth` being correct here and wrong there.

Everything else in the mobile cluster — the three crisis/solution/voice blocks, the card
grids, the CTA, the footer — lands within about 22 px of the live page, and the two
videos, both iframes, the hero, and the vote counter match exactly.
