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

And the worst part: **the HTML we have spent this repo optimising is thrown away before
the visitor sees it.** Every page, on every load, React fails to hydrate, discards the
served DOM, and re-renders from JavaScript (`RUNTIME.md` §5.1). Sections 6.1–6.7 took the
HTML from 4.55 MB to 1.22 MB. Post-hydration, 749 of the `.pc-i-*` classes we generated
become 1, and the `data-framer-name` attributes we deleted get put straight back. We spent
the effort shaving a placeholder.

---

## 1. The one number that settles it

I stripped every tag from all 7 pages and de-duplicated the text:

```
945 text nodes total  →  472 unique lines  →  21,096 characters of actual copy
```

**The entire written content of this website is 21 kB.** The HTML it is wrapped in is
1,220,749 bytes. A **58:1** ratio of wrapper to content.

`films.html` is 188 kB to display 2,058 words. `privacy-policy.html` is 83 kB to display
123 words — and it is the only page with no layout bug (§5.5 of `RUNTIME.md`), because
after the Termly iframe collapses to a stub there is almost nothing left to lay out.

That ratio is the whole argument. Everything above 21 kB is not the website.

---

## 2. Is the runtime genuinely necessary? Re-reading `RUNTIME.md`

No. And the evidence in our own documentation is unusually good, because it was measured
rather than assumed.

### 2.1 The site already works without any of it

`RUNTIME.md` §5.6, scenario **C** (all Framer hosts blocked):

| Metric | With runtime | Without |
| --- | --- | --- |
| Nav links **visible** | 18 | **18** |
| Layout width @1440px | **2750 px** (broken) | **1440 px** (correct) |
| Text content | present | present |
| Pages that lay out correctly | 1 of 7 | **7 of 7** |

The `hidden-*` classes plus the `@media` rules in `site.css` already hide the inactive
breakpoints with no JavaScript whatsoever. The breakpoint rewrite is a **DOM-weight
optimisation, not a visual requirement** — `RUNTIME.md` §5.6 conclusion 1 says this
explicitly.

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

### 2.3 The runtime is actively *introducing* a bug

Six of seven pages report `scrollWidth ≈ 2750px` at a 1440px viewport, because flex
`min-width: auto` lets a 2030px item set `#main`'s min-content width (`RUNTIME.md` §5.5).
The **served HTML lays out correctly at 1440px**; the client re-render breaks it. The
runtime is a downgrade in rendering quality.

### 2.4 Nothing left in this repo can be fixed in this repo

This is the strategic point. Every open defect traces to code we do not control:

| Defect | Fixable locally? |
| --- | --- |
| Hydration fails on all 7 pages (chunk drift, §5.4) | **No** — the CDN's chunk, not ours |
| Hero animation ignores OS reduced-motion (§9) | **No** — buried in the 465 kB bundle |
| 2750px overflow (§5.5) | **No** — a consequence of the re-render |
| Weglot widget on privacy-policy (§12.2) | **No** — pulled in by remote code |
| Termly embed collapses to a 900px stub (§5.6) | **No** — needs the runtime's iframe protocol |
| One shipped font is corrupt, silently fails (§8) | **No** — the CDN serves it |
| 2.15 MB Turnstile + Google Maps on donate | **No** — third-party JS |

`RUNTIME.md` §13.3 puts it plainly: the local `assets/scripts/` mirror is *the only copy
that matches our HTML*, and **nothing references it**. The live site is currently shipping
mismatched chunks. We are debugging a dependency we cannot patch, deploying bytes we do
not control, to fix problems we cannot reach.

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
| Hydration | fails → full re-render | none exists | |
| 1440px overflow | 6 of 7 pages | gone | |
| `prefers-reduced-motion` | ignored | honoured | |
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
| `index.html` | **2.15 MB Cloudflare Turnstile**, pulled in by remote code | A honeypot field (0 kB), or keep Turnstile only on the actual vote endpoint |
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

**The post-hydration DOM is your blueprint.** `RUNTIME.md` §5.2 records it: `index.html`
goes from 1,404 served elements down to **465 after hydration / 96 kB**, with the
responsive duplicates gone and the component tree intact. That is the *actual* rendered
page at a real viewport, un-duplicated. Dump it at one breakpoint per page and you have a
clean skeleton to work from, with real text and real structure.

Then, for each component:

1. Dump the post-hydration DOM for that page at 1440px.
2. Read the computed styles for each wrapper.
3. Collapse the chain of hashed-class `<div>`s into one semantic element.
4. Write the class into `site.css`. Repeat for ≤1728, 810 and ≤810 to catch the
   breakpoint-specific bits — **4 viewports, not 5, and no `hidden-*` classes.**
5. Compare your page against the **current live page at the same viewport** and iterate.

Two notes:

- **The Framer runtime rewrites the DOM on load** — it re-inserts sprite defs and reverts
  `<use>` hrefs. So the *served* HTML is not what a visitor sees; the post-hydration dump
  is. Dump after settle, not at `DOMContentLoaded` (§14, last bullet).
- Because the runtime *rebuilds* the page, any fidelity comparison should be
  **new page vs. current page, both rendered** — not new HTML vs. old HTML. You'll be
  comparing against the client-rendered version, which is the one with the 2750px bug.
  Fix that bug in the rewrite; it will look like an intentional difference.

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

1. **Fix the two real bugs now, without the rewrite.** The reduced-motion defect is a
   one-word change: the `reduced` argument is already plumbed through
   `animateAppearEffects(payload, cb, attr, token, reduced, variantHash)` — pass
   `matchMedia("(prefers-reduced-motion: reduce)").matches` instead of the hardcoded
   `false` (`RUNTIME.md` §9). Ship that this week.
2. **Ship the current export.** It renders, it navigates, it looks right, and it is
   deployed today instead of a frozen Framer site. It is a perfectly serviceable
   placeholder while you rebuild.
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
We have already spent this repo's effort optimising a placeholder. The measurement in
`RUNTIME.md` settles it: with the Framer CDN blocked the site still shows the right number
of nav links, the right text, and — on all 7 pages — *better* layout than the runtime
produces. Nothing in the current stack can be fixed from inside this repo, because every
remaining defect lives in code we do not control. So: keep the copy, throw away the
framework, and end up with 7 HTML files, one 20 kB stylesheet, one 4 kB script, and a site
that works with JavaScript switched off.
