# Runtime — what actually happens in the browser

A plain-English walkthrough of what the 7 HTML files do once they reach a browser:
which scripts run, in what order, what Framer's runtime does to the markup, and what
breaks when things are unavailable.

This complements `docs/HTML_ANALYSIS.md` (what is _in_ the files — bytes, structure,
optimisation passes). That document is about the served bytes. This one is about the
behaviour after the browser has them.

**Measurement basis.** All `*(measured)*` claims were captured from headless Chromium
1243 (Playwright 1.63) against **commit `7738409` with a clean working tree**, served over
`http://127.0.0.1:8137` at a 1440×900 viewport, 5–8 s settle. All `*(static)*` claims come
from reading the shipped bundles on disk. There is no source map for the Framer runtime,
so minified identifier names are used as-is. **I did not view screenshots** — every visual
claim is a DOM or layout measurement and is phrased as one. The site is frozen and no
further Framer export exists, so CDN-side behaviour is a snapshot, not a guarantee.

---

## 0. The short version

1. **The HTML you serve is a first-paint placeholder, not the page.** A 357 KB
   `index.html` becomes a **96 KB** `#main` in the live DOM — 1,404 elements collapse to 465. The runtime deletes most of the served markup and rebuilds it with React
   _(measured)_.
2. **Hydration fails, so React throws the served DOM away and re-renders from scratch.**
   Four "Caught a recoverable error" warnings per page, on **all 7 pages** — React #418
   (server/client mismatch) and #423 (root switches to client rendering) _(measured)_.
3. **The cause is chunk drift, and it is precisely locatable.** React, the Framer
   runtime, Motion and each page's _route_ chunk on the CDN are **byte-identical** to the
   export, but **6 of the 12 chunks on `index.html` are not** — including the homepage's
   own component chunk, which differs by **443 KB**. Same URL, same content-hash filename,
   different body. See §5.4.
4. **The runtime is not local.** All 7 pages load `script_main.YqCkgxnJ.mjs` and 8–12
   `modulepreload` chunks from `framerusercontent.com`. The local `assets/scripts/` mirror
   (25 files, 5.6 MB) is referenced by **nothing** — and per point 3 it is the _only_ copy
   that matches the HTML you are about to deploy _(measured)_.
5. **The served SVG artwork is redundant with the runtime and fatal without it.** All 109
   `<use>` elements point at `assets/svg/sprite.svg#…`, and the runtime fetches that file,
   re-injects the defs into an **empty** `#svg-templates` div, and rewrites every reference
   to a local fragment — but the defs actually come from the CDN page chunk, so the file
   itself contributes nothing. Blocking `sprite.svg` changes nothing; blocking the runtime
   loses 10–23 icons per page. See §7.
6. **Your optimisations are erased at runtime, but harmless.** `.pc-i-NNN` classes: 749
   occurrences in the served `index.html`, **1** after hydration. `data-framer-name`:
   stripped in 6.5, **318 back** after hydration. Element counts and `data-framer-name`
   counts are identical between the working tree and `7738409` _(measured)_.
7. **Two real defects, both confirmed in-browser:** the hero entrance animation **ignores
   OS reduced-motion** (§9), and **6 of 7 pages lay out 2750 px wide at a 1440 px viewport**
   because flex `min-width: auto` lets 2030 px items set `#main`'s min-content width
   (§5.5). `privacy-policy.html` is the only clean page.
8. **The Framer editor bar loads on every page** (~7 extra remote files + an auth
   request) and then gives up: _"Unavailable because not on a `framer.app` subdomain"_
   _(measured)_.
9. **With the Framer CDN blocked, the page still renders and lays out correctly** — the
   right number of nav links visible, 1440 px wide, no overflow. But most SVG icons die
   (only 3–9 per page survive, courtesy of `sprite.svg`), 21 of 26 homepage hero elements
   stay invisible, and the vote counter sticks on `LOADING` _(measured, §5.6, §7)_.

---

## 1. The cast

### 1.1 Loaded from this repo (5 requests, all from your own origin)

| File                     | Size                | Injected by                                               | Runs                                                      |
| ------------------------ | ------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `assets/css/site.css`    | 1.24 MB on the wire | `<link>` in `<head>`                                      | render-blocking stylesheet                                |
| `assets/fonts/fonts.css` | 15 kB               | `<link>` in `<head>`                                      | `@font-face` — but see §8, the URLs inside are **remote** |
| `assets/js/site.js`      | 730 B               | `<script src>` first in `<head>`                          | blocking                                                  |
| `assets/js/site-end.js`  | 3.3 kB              | `<script src>` at tail of `<body>`                        | blocking                                                  |
| `assets/svg/sprite.svg`  | 76 kB               | _fetched by the Framer runtime_, not referenced in markup | parsed, then discarded — see §7                           |

### 1.2 Loaded from `framerusercontent.com` (the actual application)

Sizes are the **CDN's**.

| What                                                             | Bytes                                 | Notes                                                                                            |
| ---------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `script_main.YqCkgxnJ.mjs`                                       | 5,964                                 | the entry point; owns the boot sequence                                                          |
| `framer.1egicfVa.mjs`                                            | 464,766                               | the runtime library: components, router, appear engine, font loader, breakpoints, nav, analytics |
| `react.DjGraiHU.mjs`                                             | 144,664                               | React 19 + react-dom                                                                             |
| `motion.BonBzg_H.mjs`                                            | 151,002                               | the animation engine                                                                             |
| `rolldown-runtime.DaQlKkf0.mjs`                                  | 1,047                                 | module interop shims                                                                             |
| `shared-lib.Da7y4iR1.mjs`                                        | 111,739                               | shared per-site components — **local mirror is only 45 kB**                                      |
| `foETv8QB7`, `h3JjhDKFx`, `XzgMKSLcl`, `XYvfdGieV`, `OIjZRBmWDc` | 1.1 kB–28.6 kB                        | per-page shared chunks                                                                           |
| 1 **page chunk** per page                                        | e.g. `LBrkLi3nukZbyr…`                | the component tree — **338,527 for index, vs 781,912 locally**                                   |
| 1 **route chunk** per page                                       | e.g. `augiA20Il.BWSjFSOJ.mjs` (985 B) | route metadata; byte-identical to local                                                          |

**Site id:** `f63fdaabc11b59619926a68b4bc167e749bd0b7d718a239659965db416337d6b` (it appears
in the editor-bar iframe URL the runtime builds).

> These are not the sizes in `assets/scripts/`. Six of the twelve chunks differ; §5.4 has
> the byte-for-byte comparison and why it causes the hydration failure.

### 1.3 Everything else that runs

| Source                                                                                              | Pages          | What                                                                                                        |
| --------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| `events.framer.com/script?v=2`                                                                      | all 7          | Framer's analytics drain. `window.__framer_events` was **empty** in every test.                             |
| `framer.com/edit/init.mjs` + `app.framerstatic.com/chunk-*.mjs` (×4) + `framer.com/edit?…`          | all 7          | **The Framer editor bar.** Always loads, always gives up.                                                   |
| `framer.com/m/feather-icons/{instagram,linkedin}.js` + matching `framerusercontent` modules         | all 7          | the two footer social icons                                                                                 |
| `total-votes-rzszi6ndna-uc.a.run.app`                                                               | index          | the live vote counter (**166** at time of testing). **Not in the HTML** — fetched by the remote page chunk. |
| `challenges.cloudflare.com/turnstile/…`                                                             | index          | Cloudflare Turnstile, **2.15 MB**, pulled in by remote code. **⚠️ Attribution corrected — see note below.**     |
| `widgets.givebutter.com/latest.umd.cjs` (×5) + ~50 Givebutter/Stripe/Braintree/GA chunks            | donate         | the donation widget — **9.4 MB of JS**                                                                      |
| `app.termly.io/*` + `cdn.weglot.com/*`                                                              | privacy-policy | Termly policy embed **and** an unexpected Weglot translation widget                                         |
| `vimeo.com/api/oembed.json` + `player.vimeo.com/video/{1132612772,1054015738}`                      | index          | two video embeds                                                                                            |
| `video.gumlet.io/…/download.mp4`                                                                    | index          | 3 `<video>` elements, one URL, **2.36 MB**                                                                  |
| `framerusercontent.com/assets/lxuQ2oapgQUgWt9Wml9hBUHUnfI.lottie` + `dotlottie-player.BuSJ8xyR.mjs` | index          | **a Lottie animation really is used** — lazily, by the runtime                                              |

### ⚠️ Correction: the Turnstile weight on `index` belongs to Vimeo, not to us

The 2.15 MB attributed to `challenges.cloudflare.com` in the table above was **not**
initiated by the page's own code. Verified by frame attribution: every one of those
requests is issued from a `player.vimeo.com` frame — it is **Vimeo's own bot
protection, one instance per embed**, not something the site loads.

The check: `index2.html` contains **zero** Turnstile references (no
`challenges.cloudflare.com`, no `turnstile/v0/api.js` anywhere in its HTML, CSS or JS)
yet produces the **identical** set of Turnstile requests as the live site, because it
embeds the same two `player.vimeo.com` iframes.

Consequences:

- Removing "Turnstile" from our code saves **nothing** — it was never ours. It is only
  removable by not embedding Vimeo.
- Do not use 2.15 MB as a saving anywhere, including `docs/NEW_SITE.md` §0, which
  repeats the original attribution.
- The two `hagen.challenges.cloudflare.com/cdn-cgi/challenge-platform` requests return
  `204` *and then fail with `ERR_ABORTED`*. That failure is benign and also occurs on the
  live site; do not chase it as a bug in our pages.

Reproduce with `turnstile-origin.js` in `%TEMP%\opencode\`, which prints the initiating
frame URL for every third-party request.

---

## 2. Script execution order

The **document order** of every `<script>` is the execution order, except the `async`
tags, which are the browser's problem, not yours.

### 2.1 `index.html` — 8 tags, 12 `modulepreload` (measured, from disk)

| #   | Where            | Tag                                                                        | Body         | Mode             | What it does                                                                                                                                                            |
| --- | ---------------- | -------------------------------------------------------------------------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `<head>` #1      | `src="assets/js/site.js"`                                                  | —            | **blocking**     | `localStorage` check for the editor bar; then `Object.defineProperty(document, 'title', {set(){}})` — makes `document.title` **read-only**                              |
| 2   | `<body>` #1      | `async src="events.framer.com/script?v=2"`                                 | —            | async            | analytics, whenever it arrives                                                                                                                                          |
| 3   | tail of `<body>` | `src="assets/js/site-end.js"`                                              | —            | **blocking**     | `[data-nested-link]` handlers; `?query` preservation; `window.process.env.NODE_ENV = "production"`                                                                      |
| 4   | tail             | `<script>`                                                                 | **22,970 B** | **blocking**     | `var animator = …` — defines a **global** with exactly four members: `animateAppearEffects`, `getActiveVariantHash`, `spring`, `startOptimizedAppearAnimation`. See §6. |
| 5   | tail             | `<script type="framer/appear" id="__framer__appearAnimationsContent">`     | **10,773 B** | _never executed_ | A JSON payload. An unknown `type` means the browser does not run it; §6 reads it back via `.text`.                                                                      |
| 6   | tail             | `<script type="framer/appear" id="__framer__breakpoints">`                 | **365 B**    | _never executed_ | same pattern, 5 breakpoints                                                                                                                                             |
| 7   | tail             | `<script data-framer-appear-animation="no-preference">`                    | **1,468 B**  | **blocking**     | the appear trigger; bails if `typeof animator > "u"`                                                                                                                    |
| 8   | tail             | `type="module" async fetchpriority="low" src="…/script_main.YqCkgxnJ.mjs"` | —            | module-async     | **the boot** — see §3                                                                                                                                                   |

The 12 `modulepreload` filenames, in document order:

```
react  rolldown-runtime  framer  motion  LBrkLi3nukZ…(page)  shared-lib
foETv8QB7  OIjZRBmWDc  augiA20Il(route)  XzgMKSLcl  XYvfdGieV  h3JjhDKFx
```

`#svg-templates` is the last element in `<body>`, deliberately, so the runtime can read
and write it during boot.

### 2.2 The other six pages

| Page                  | tags | `modulepreload` | notable inline bodies                                                           |
| --------------------- | ---- | --------------- | ------------------------------------------------------------------------------- |
| `about.html`          | 5    | 10              | appear marker only (**0 B**)                                                    |
| `films.html`          | 5    | 11              | appear marker only                                                              |
| `volunteer.html`      | 5    | 9               | appear marker only                                                              |
| `404.html`            | 6    | 8               | **4,230 B** URL-rewriter + appear marker (0 B)                                  |
| `privacy-policy.html` | 7    | 9               | **304 B** `text/javascript` (Termly loader) + **812 B** module (ResizeObserver) |
| `donate.html`         | 13   | 11              | **3 × 812 B** modules (ResizeObserver), 5 × Givebutter UMD                      |

The **zero-byte appear marker** exists so the runtime can see the page has an
appear-animation slot. It does nothing. _(measured: `window.animator` exists **only** on
`index.html`.)_

- **`404.html`** — the 4,230 B inline script is a path-resolution library (a port of Node's
  `path.posix.relative`) that rewrites the **42 `#main a[href^="."]`** links so they resolve
  from whatever URL the 404 was served at. Framer hardcoded it to
  `("https://globalpeaceyes.org", "/404")`, and since that URL's path is `/`, the synthetic
  base degenerates to `https://example.com/404` _(measured: 42 rewritable links)_.
- **`donate.html`** — Givebutter's UMD is loaded **five** times in the main document (once
  from a Framer `headStart` snippet, four from body snippets). The widget element is
  `<givebutter-widget id="L0owyj">`, outside and before `#main`. Loading the UMD repeatedly
  in one realm throws `NotSupportedError: the name "givebutter-dialog" has already been
used` _(measured)_.

### 2.3 `srcdoc` iframes — 3 on the site

`donate.html` ×2, `privacy-policy.html` ×1 _(measured)_. Each contains a `ResizeObserver`
that watches `document.body` and `postMessage({embedHeight}, "*")` to the parent, plus a
listener for a `"getEmbedHeight"` request. The **parent** half of that protocol is the
Framer runtime, which uses the posted height to size the iframe — so these embeds only size
themselves correctly when the runtime is alive.

Note the asymmetry: `donate.html` has **3** inline ResizeObserver modules but only **2**
`srcdoc` iframes, so one module has no iframe to talk to.

All `srcdoc` payloads close with `<body>` instead of `</body>`. Browsers recover.

---

## 3. The boot sequence

`script_main.YqCkgxnJ.mjs`, 5,964 bytes, is the only thing that decides the order of
everything else.

```js
let e = document.getElementById("main");
"framerHydrateV2" in e.dataset ? V(true, e) : V(false, e); // ← the fork
```

`data-framer-hydrate-v2` on `<div id="main">` is the hand-off from the static export:

```json
{
  "routeId": "augiA20Il",
  "localeId": "default",
  "breakpoints": [
    { "hash": "72rtr7", "mediaQuery": "(min-width: 1728px)" },
    {
      "hash": "1pz11xk",
      "mediaQuery": "(min-width: 1440px) and (max-width: 1727.98px)"
    },
    {
      "hash": "dv7j5c",
      "mediaQuery": "(min-width: 1200px) and (max-width: 1439.98px)"
    },
    {
      "hash": "1wmt56v",
      "mediaQuery": "(min-width: 810px) and (max-width: 1199.98px)"
    },
    { "hash": "1522l99", "mediaQuery": "(max-width: 809.98px)" }
  ]
}
```

Once parsed, `V` does this:

```js
let u = z({ routeId, localeId, pathVariables, collectionItemId }); // build the element
let l = u.preload(); // await the page chunk

e
  ? (O("framer-rewrite-breakpoints", () => {
      D(o);
      s.__framer_onRewriteBreakpoints?.(o);
    }), // ①
    (q ? (e) => e() : d)(() => {
      S();
      y();
      _(t, u, { onRecoverableError: n });
    })) // ②
  : g(t, { onRecoverableError: n }).render(u);
```

As a timeline:

- **0.** Module evaluation. One `IntersectionObserver` for link prefetch, reads
  `style[data-framer-css-ssr-minified]`, notes `Date.now()`. Nothing else.
- **1.** `await l` — the page chunk (100–340 kB on the CDN) must download and evaluate
  _first_. This is the long pole. **Nothing can hydrate until the page chunk arrives.**
- **2.** `D(o)` — **breakpoint rewrite**. DOM surgery, _before React exists._ See §4.
- **3.** `window.__framer_onRewriteBreakpoints?.(o)` — third-party hook.
- **4.** Defer one frame (unless the UA looks like a bot, in which case run inline).
- **5.** `S()` marks `framer-hydration-start`; `y()` attaches instrumentation; `_()` is
  `hydrateRoot`.

Site config — the site's whole runtime posture:

```js
{autobahnNavigation: true,   // full client-side router is ON
 disableCustomCode: false,  // custom code runs
 motionDivToDiv: false,
 onPageLocalizationSupport: true, onPageMoveTool: true,
 synchronousNavigationOnDesktop: false, yieldOnTap: false}
```

And `isReducedMotion: undefined`, which the runtime turns into `reducedMotion: "never"`.
See §9.

### 3.1 The measured mark timeline _(measured, index.html — the only page with appear marks)_

```
framer-appear-start / -end                      ← the inline appear script
framer-rewrite-breakpoints-start / -end         ← DOM pruning
framer-hydration-start
framer-react-event-handling-start               ← capture listeners on <body>
framer-hydration-render-end
framer-hydration-insertion-effects-{start,end}
framer-hydration-router-insertion-effect
framer-hydration-layout-effects-{start,end}
framer-hydration-router-layout-effect
framer-history-set-initial-state  /  framer-history-replace
framer-hydration-effects-start  /  -sync  /  -end
framer-react-event-handling-end
framer-hydration-router-effect
framer-hydration-browser-render-start  /  -browser-raf-end
framer-hydration-first-paint
```

`framer-rewrite-breakpoints-end` completing **before** `framer-hydration-start` proves the
pruning happens pre-React. The other six pages emit the identical sequence minus the two
appear marks _(measured)_.

**`DOMContentLoaded` fires before any of it** _(measured)_. At DCL on `index.html` the
served DOM is still completely intact: `#main` is 180,322 chars / 1,404 elements, 749
`.pc-i-*` classes, zero `data-framer-name`, 15 `<use>` still pointing at `sprite.svg`, and
`#svg-templates` still 33 characters. Only after DCL does the tree drop to 96,381 chars /
465 elements.

---

## 4. The breakpoint rewrite — DOM surgery before React

This is the least obvious thing Framer does, and it is why the served HTML contains five
copies of the navigation.

`site.css` defines, per page:

```css
@media (min-width: 1728px) {
  .hidden-72rtr7 {
    display: none !important;
  }
}
@media (min-width: 1440px) and (max-width: 1727.98px) {
  .hidden-1pz11xk {
    display: none !important;
  }
}
@media (min-width: 1200px) and (max-width: 1439.98px) {
  .hidden-dv7j5c {
    display: none !important;
  }
}
@media (min-width: 810px) and (max-width: 1199.98px) {
  .hidden-1wmt56v {
    display: none !important;
  }
}
@media (max-width: 809.98px) {
  .hidden-1522l99 {
    display: none !important;
  }
}
```

Framer's server-side renderer does not know the viewport, so it ships **every** breakpoint
variant and marks the wrong four with a `hidden-*` class inside `.ssr-variant` wrappers.
The runtime then, before React starts:

1. Reads the active hash via `matchMedia` over the `data-framer-hydrate-v2` list.
2. `document.querySelectorAll('.hidden-' + activeHash)` → **removes every match from the
   DOM.** (At 1440 px the active hash is `1pz11xk`.)
3. In a `requestIdleCallback`, deletes `<style data-framer-breakpoint-css>`.
4. Deletes any `.ssr-variant` left empty by step 2.
5. **Repairs the orphaned Suspense comments.** Each responsive group in the SSR output is
   wrapped in `<!--$-->` … `<!--/$-->`. Step 2 can remove one side. The runtime walks back
   from each removed node, checks the previous sibling is a `<!--$-->` comment, checks the
   next sibling is `<!--/$-->`, and if so deletes both — so React never sees an unbalanced
   Suspense boundary. **This is why the static export contains those `<!--$-->` comments at
   all.**

_(measured on `index.html` at 1440 px, across DCL → settled: elements 1,404 → 465, `<use>`
16 → 4, `.pc-i-_`749 → 1,`<style>` tags 0 → 4.)\*

**This step is not required for the page to look right** _(measured, §5.6)_. The
`hidden-*` classes in the served markup plus the `@media` rules in `site.css` already hide
the inactive breakpoints with no JavaScript at all — 18 of 72 nav anchors are visible
either way. Pruning is a **DOM-weight** optimisation, not a visual requirement. It is still
worth having: it takes 1,404 elements down to 465 before React starts.

**Two pages have impossible media queries** _(static)_ — `donate.html`'s `no5d6h` and
`privacy-policy.html`'s `dxoc8m` are both `(min-width: 1200px) and (max-width: 1199px)`.
They can never be the active hash, so their `hidden-*` elements are never pruned. Both
pages also declare 6 breakpoints instead of 5. Upstream Framer export artifact.

---

## 5. Hydration fails — the runtime rebuilds the page

### 5.1 What happens _(measured)_

On every page, during hydration:

```
Caught a recoverable error. The site is still functional, but might have some UI
flickering or degraded page load performance. […] server/client mismatches:
 Error: Minified React error #418
 Error: Minified React error #423
```

**4 such messages per page, on all 7 pages** _(measured)_.

- **#418** — "Hydration failed because the server rendered HTML didn't match the client."
- **#423** — "There was an error while hydrating. Because the error happened outside of a
  Suspense boundary, the entire root will switch to client rendering."

So React abandons the served markup and renders the whole page from its component tree.

### 5.2 The result _(measured, 1440×900, 6 s settle)_

| Page                  | file bytes | `#main` after hydration | elements | `.pc-i-*` | `data-framer-name` | `<style>` |
| --------------------- | ---------- | ----------------------- | -------- | --------- | ------------------ | --------- |
| `index.html`          | 356,722    | 96,381                  | 465      | 1         | 318                | 4         |
| `about.html`          | 196,525    | 121,753                 | 596      | 1         | 392                | 4         |
| `films.html`          | 188,123    | 102,269                 | 450      | 1         | 293                | 4         |
| `volunteer.html`      | 132,151    | 72,463                  | 334      | 1         | 226                | 4         |
| `donate.html`         | 130,708    | 71,460                  | 307      | 1         | 226                | 6         |
| `privacy-policy.html` | 82,984     | 50,767                  | 90       | 1         | 32                 | 3         |
| `404.html`            | 133,536    | 67,152                  | 282      | 1         | 220                | 3         |

Total on disk: **1,220,749 bytes** across the 7 pages.

Read the last three columns carefully:

- **6.4 (inline styles → `.pc-i-NNN` classes):** 749 occurrences in the served
  `index.html`, **1** after hydration — and that one is the `#svg-templates` div, which
  sits _outside_ `#main` and which React never touches. React re-renders the elements with
  their original inline `style` attributes. Rendered pixels are unchanged because the
  values round-trip, but the classes are a _transfer-time_ trick only.
- **6.5 (strip `data-framer-name`):** React **puts them back** — 318 on index, 392 on
  about. Net saving after hydration is zero.
- The 4–6 injected `<style>` tags are the runtime re-emitting component CSS.

### 5.3 Is the hydration failure our fault?

I compared the committed `7738409` tree against a second served tree during development;
post-hydration element counts and `data-framer-name` counts were identical, and the same
errors fired on both. **The mismatch predates every optimisation pass in this repo** — none
of §6.1–§6.7 can cause it, because by the time React runs, the optimiser's work has been
discarded.

### 5.4 Cause: the page chunks drifted, the runtime did not _(measured)_

The obvious suspect is the export being frozen while its CDN is not. I tested that by
fetching all 12 `modulepreload` targets named in `index.html` from the CDN and
SHA-comparing each against the local `assets/scripts/` mirror of the same filename:

| chunk                                                 | CDN bytes   | local bytes | identical |
| ----------------------------------------------------- | ----------- | ----------- | --------- |
| `react.DjGraiHU.mjs`                                  | 144,664     | 144,664     | **yes**   |
| `rolldown-runtime.DaQlKkf0.mjs`                       | 1,047       | 1,047       | **yes**   |
| `framer.1egicfVa.mjs`                                 | 464,766     | 464,766     | **yes**   |
| `motion.BonBzg_H.mjs`                                 | 151,002     | 151,002     | **yes**   |
| `augiA20Il.BWSjFSOJ.mjs` _(index route)_              | 985         | 985         | **yes**   |
| `OIjZRBmWDcIE2B6qgG1j.BSXO-a3N.mjs`                   | 1,909       | 1,909       | **yes**   |
| **`LBrkLi3nukZbyr….CD3oeThu.mjs`** _(index **page**)_ | **338,527** | **781,912** | **NO**    |
| **`shared-lib.Da7y4iR1.mjs`**                         | **111,739** | **45,007**  | **NO**    |
| **`foETv8QB7.DNP8fQPC.mjs`**                          | 28,606      | 28,453      | **NO**    |
| **`h3JjhDKFx.Cf_Eftua.mjs`**                          | 5,050       | 4,813       | **NO**    |
| **`XzgMKSLcl.DfWRurZu.mjs`**                          | 1,112       | 1,085       | **NO**    |
| **`XYvfdGieV.DaF57dWL.mjs`**                          | 1,122       | 1,095       | **NO**    |

So it is more specific than "the CDN moved on":

- **The entire runtime is bit-for-bit unchanged.** React, the Framer runtime, Motion and the
  index _route_ chunk are byte-identical to the export.
- **Six component/page chunks are not.** Two are badly so: the homepage's own component
  chunk differs by **443 KB** (the local copy is 2.3× the CDN copy) and `shared-lib` is
  **2.5× larger on the CDN** than locally. The other four differ by 27–237 bytes, which
  looks like import-path rewriting rather than a rebuild.

The filenames are the _same_ in both places, including the `CD3oeThu` content hash — and
`assets/_asset_map.txt` maps that exact URL to that exact local path. So the CDN serves a
different body under a URL whose name is a hash of the original. Whatever produced
`assets/scripts/` locally is not what the CDN has.

**The causal chain:** React 19, from a byte-identical runtime, is asked to hydrate markup
that was server-rendered from a _different_ component tree. It cannot reconcile them,
reports #418, and #423 escalates it to a full client render. That is a direct consequence
of the site being frozen while its CDN is not — and it is **not** something the local HTML
can fix, because the HTML is not the half that moved.

**Ruled out:** the breakpoint rewrite (§4) is _not_ the cause. I snapshotted `#main`
exactly at the `framer-hydration-start` mark, i.e. after the rewrite and before React:
60,735 characters, **25 `<!--$-->` and 25 `<!--/$-->` — balanced**, 4 `.ssr-variant` and
5 `hidden-*` elements left. Framer's comment repair works; React is not tripping over an
unbalanced Suspense boundary.

### 5.5 The 2750 px layout, and its cause _(measured)_

At a 1440 px viewport, **6 of the 7 pages** report
`document.documentElement.scrollWidth` ≈ **2750 px**, and `privacy-policy.html` is the only
page that is clean (1440 px). With the CDN blocked, `index.html` reports 1638 px and
`about.html` 1440 px.

I chased this to a specific mechanism rather than leaving it as "unexplained". On
`index.html`:

```
#main[data-framer-root]   width:4060px  display:flex  position:relative  overflow-x:visible
  ├─ .framer-tdvxks-container        w=1440  left=0
  ├─ [name=New Hero]                 w=4060  left=-1310  min-width:auto
  ├─ [name=Social]                   w=4060  left=-1310  min-width:auto
  ├─ [name=About]                    w=4060  left=-1310  min-width:auto
  ├─ [name=Declaration of Peace]     w=4060  left=-1310  min-width:auto
  ├─ [name=Overview] ×2              w=4060  left=-1310  min-width:auto
  ├─ [name=Slides]                   w=4060  left=-1310  min-width:auto
  └─ .framer-1g3lirk-container       w=4060  left=-1310  min-width:auto
```

`#main` is a flex container, so its width is driven by its widest child's **min-content**
width — and flex items default to `min-width: auto`, meaning they refuse to shrink below
their content. The culprit is a **2030 px** item in each page's layout; two of them make
the 4060 px, which propagates up the flex chain to `#main`, and every other section is then
stretched to match — which is why seven unrelated sections all measure exactly 4060.

The 2030 px items are identifiable per page _(measured)_:

| Page                  | widest 2030 px offender                                                                      | other wide elements    |
| --------------------- | -------------------------------------------------------------------------------------------- | ---------------------- |
| `index.html`          | the `Slides` section: `#first`/`#second`/`#third` (the three **A/B variants**) + `Variant 1` | 19 elements > viewport |
| `about.html`          | `[Frame 133]` w=2030                                                                         | 15                     |
| `films.html`          | `[Admissions James]` w=2030, plus `framer-text` at 1982                                      | 39                     |
| `volunteer.html`      | none at 2030; `[Desktop 2]` and `overlay` at 4060                                            | 7                      |
| `donate.html`         | none at 2030; `[Desktop 2]` and `overlay` at 4060                                            | 7                      |
| `privacy-policy.html` | **none — 0 elements exceed the viewport**                                                    | 0                      |

Note `#first`/`#second`/`#third` are the homepage's three **A/B test variants** (§9), all
still in the DOM and all laid out, so the carousel is not hiding its inactive variants.

Because every wide section sits at `left: -1310`, the visible window (0–1440) shows the
_right-hand_ 1310–2750 px of each section's 4060 px box. Whether that reads as a stray
horizontal scrollbar or as correctly-centred content needs a human eye — I cannot view
images — but the mechanism is established, and it is a consequence of the client re-render,
not of the served markup. It is not hypothetical: `scrollWidth` is 1440 px in every
no-runtime scenario in §12.1.

### 5.6 Without the runtime, the page paints _cleaner_ — but three things are dead

This is the most counter-intuitive result in the document, so it is measured rather than
argued. Three scenarios at 1440×900: **A** = everything available; **B** = runtime stripped
(`script_main` and all module chunks aborted, as `AGENTS.md` §6.8 proposes); **C** = all
remote Framer hosts blocked. **B and C are byte-identical in effect** on every metric
_(measured)_.

| Page                  | scenario | elements | nav `<a>` present | **nav visible** | `scrollWidth` | doc height | `<use>` empty | appear stuck |
| --------------------- | -------- | -------- | ----------------- | --------------- | ------------- | ---------- | ------------- | ------------ |
| `index.html`          | A        | 465      | 18                | 18              | 2750          | 7,396      | 0 / 4         | 0/5          |
| `index.html`          | B, C     | 1,404    | 72                | **18**          | **1440**      | 8,591      | **13 / 16**   | **21/26**    |
| `about.html`          | A        | 596      | 17                | 17              | 2750          | 6,294      | 0 / 20        | 0/0          |
| `about.html`          | B, C     | 910      | 71                | **17**          | **1440**      | 7,724      | **23 / 32**   | 0/0          |
| `films.html`          | A        | 450      | 22                | 22              | 2750          | 8,369      | 0 / 3         | 0/0          |
| `films.html`          | B, C     | 772      | 76                | **22**          | **1440**      | 13,527     | **12 / 15**   | 0/0          |
| `volunteer.html`      | A        | 334      | 15                | 15              | 2753          | 1,748      | 0 / 5         | 0/0          |
| `volunteer.html`      | B, C     | 627      | 69                | **15**          | **1443**      | 1,875      | **15 / 18**   | 0/0          |
| `donate.html`         | A        | 307      | 16                | 16              | 2750          | 2,160      | 0 / 6         | 0/0          |
| `donate.html`         | B, C     | 601      | 70                | **16**          | **1440**      | 2,523      | **16 / 19**   | 0/0          |
| `privacy-policy.html` | A        | 90       | 15                | 15              | 1440          | **14,143** | 0 / 3         | 0/0          |
| `privacy-policy.html` | B, C     | 325      | 61                | **15**          | 1440          | **900**    | **10 / 13**   | 0/0          |
| `404.html`            | A        | 282      | 16                | 16              | 2750          | 1,110      | 0 / 3         | 0/0          |
| `404.html`            | B, C     | 569      | 70                | **16**          | **1440**      | 1,110      | **12 / 15**   | 0/0          |

> **The `<use> empty` column above is a trap, and I fell into it.** `getBBox()` returns
> zero for any element inside a `display: none` responsive variant, so most of those 10–23
> "empty" refs are simply *inactive breakpoints* — not broken icons. The same mistake made
> me wrongly call `sprite.svg` dead weight. The column is a raw element count and should be
> read as such; §7(b) re-measures it with `checkVisibility` to count only what a visitor
> can actually see. **Visible-icon truth:** with the CDN blocked, 3–9 icons per page still
> paint, courtesy of `sprite.svg`; without it, **0**.

Three conclusions, in order of importance:

1. **The pre-hydration paint is visually correct.** 54–76 nav anchors are in the DOM but
   exactly the right number (18/17/22/15/16/15/16) are _visible_ — the `hidden-*` classes
   in the served markup plus the matching `@media` rules in `site.css` do the job without
   any JavaScript. So the breakpoint rewrite in §4 is **a DOM-weight optimisation, not a
   visual requirement.** This partially contradicts `AGENTS.md` §6.8, which lists "pruning
   the inactive responsive variants" as one of three things the runtime is load-bearing
   for; the other two hold up, this one does not.
2. **The SVG artwork largely dies without the runtime _if the sprite is absent_** — but with
   `assets/svg/sprite.svg` served, a subset of icons still renders when the CDN is down
   (§7(b)). The sprite is the only fallback: without it, every page shows **0 / 0** visible
   painted icons in scenario D. So "load-bearing" depends on whether we keep that file.
3. **The hero content is genuinely invisible without the runtime** — 21 of 26
   `[data-framer-appear-id]` elements on `index.html` stay at `opacity < 0.01` forever,
   including after scrolling. The other two load-bearing claims in §6.8 hold up as well.

Plus one more that is easy to miss: **`privacy-policy.html` collapses from 14,143 px to
900 px** without the runtime, because the Termly embed lives in a `srcdoc` iframe whose
height comes from the parent half of the ResizeObserver protocol — which is the runtime
(§2.3). Meanwhile `films.html` gets **5,158 px taller** (8,369 → 13,527), which suggests
some breakpoint-variant content is present in the served markup without a `hidden-*` class
to suppress it.

---

## 6. Appear animations

### 6.1 The pre-boot path (`index.html` only)

The runtime bundle does contain an appear engine (`IntersectionObserver` with 100
thresholds, a `Wc` fallback controller, `will-change: transform`). But `index.html`
**does not wait for it.** It runs a faster path first:

```
<script>            var animator = (() => { … })()   22,970 B, blocking, defines a global
<script type="framer/appear" id="__framer__appearAnimationsContent">  10,773 B JSON
<script type="framer/appear" id="__framer__breakpoints">                 365 B JSON
<script data-framer-appear-animation="no-preference">                1,468 B, blocking
```

The trigger:

```js
if (window.__framer_disable_appear_effects_optimization__ || typeof animator > "u") return;
requestAnimationFrame(() => {
  performance.mark("framer-appear-start", {detail:{bg: document.hidden}});
  animator.animateAppearEffects(
    JSON.parse(window.__framer__appearAnimationsContent.text),
    (selector, keyframes, options) => {
      let el = document.querySelector(selector);
      if (el) for (let [prop, kf] of Object.entries(keyframes))
        animator.startOptimizedAppearAnimation(el, prop, kf, options[prop]);
    },
    "data-framer-appear-id", "__Appear_Animation_Transform__", false);
  performance.mark("framer-appear-end", …);
  performance.measure("framer-appear", {start, end, detail});
});
```

`window.animator` exposes four things _(static)_:

| Member                                                                 | Job                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getActiveVariantHash(breakpoints)`                                    | first entry whose `mediaQuery` matches `matchMedia`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `spring(duration, bounce)`                                             | the spring **solver** — an iterator over the curve, plus a resolved `{stiffness, damping, mass, duration, …}`                                                                                                                                                                                                                                                                                                                                                         |
| `animateAppearEffects(payload, cb, attr, token, reduced, variantHash)` | walks the 16 payload groups, turns each `{initial, animate, transition}` into WAAPI keyframes, and hands them to `cb`. Emits `:not(.hidden-<hash>)` scoping so a variant animation never applies at the wrong breakpoint.                                                                                                                                                                                                                                             |
| `startOptimizedAppearAnimation(el, prop, keyframes, options)`          | the **handoff layer**. Installs six globals (`MotionHandoffAnimation`, `MotionHasOptimisedAnimation`, `MotionHandoffMarkAsComplete`, `MotionHandoffIsComplete`, `MotionCancelOptimisedAnimation`, `MotionCheckAppearSync`), aligns every animation to one `performance.now()` so CSS- and JS-animated elements share a timeline — and **returns immediately if `window.MotionIsMounted`**, i.e. once the real runtime is up it becomes a no-op and Motion takes over. |

_(measured: all seven `Motion_`globals present after hydration;`MotionIsMounted: true`;
`window.animator`exists **only** on`index.html`.)\*

The `transformTemplate` mechanism: `"translateY(-50%) __Appear_Animation_Transform__"`
appears twice in the payload; `animateAppearEffects` substitutes the computed transform
into that literal token.

**The handoff is real and observable** _(measured)_. Sampling the served inline style of the
first `[data-framer-appear-id]` element from before navigation, the initial
`opacity: 0.001; transform: translateY(-16px)` is already gone by **t ≈ 63–108 ms**,
replaced by just `will-change: transform` — the appear script strips the initial values and
drives the whole curve through the Web Animations API, so it is composited and never
touches layout. That is why the 6.4 optimisation pass left these particular values inline:
they are the pre-handoff seed, not a static style.

### 6.2 The payload _(static)_

16 appear IDs, 26 elements, all on `index.html`; **0** on the other six pages.

- 5 IDs have all 5 breakpoints: `d5kl3q`, `1fu5c6s`, `axddan`, `urhz61`, `3blvdp` (×3 elements each)
- 11 IDs are mobile-only (`1522l99`): `15sbvw7`, `1ftpyuh`, `1fub5sx`, `1plxea6`, `1slpo90`, `1xijvmc`, `9e6iqk`, `q90qcx`, `rom2nb`, `uqe7sk`, `xryio9`

The typical entry, which is why the served elements carry that odd
`opacity: 0.001; transform: translateY(-16px)` inline style:

```json
"d5kl3q": {"default": {
  "initial": {"opacity":0.001,"y":-16,"scale":1,"rotate":0,"x":0,…},
  "animate": {"opacity":1,"y":0, …,
              "transition":{"type":"spring","bounce":0.2,"delay":0,"duration":0.4}}}}
```

`opacity: 0.001` rather than `0` is deliberate — it keeps the element technically visible so
the compositor promotes it, while being imperceptible.

_(measured: `data-framer-appear-id` count 26 → 5 after hydration.)_

---

## 7. The SVG mechanism — and why `sprite.svg` is dead weight

**All 109 `<use>` elements across the 7 pages point at `assets/svg/sprite.svg#…`. There
are zero local-fragment references in the served markup** (the single exception is one
`#svg841515696_447` feather icon on `index.html`) _(measured, from disk)_:

| Page                  | `<use>` → `sprite.svg` | `<use>` → `#fragment` |
| --------------------- | ---------------------- | --------------------- |
| `index.html`          | 15                     | 0                     |
| `about.html`          | 21                     | 0                     |
| `films.html`          | 15                     | 0                     |
| `volunteer.html`      | 15                     | 0                     |
| `donate.html`         | 15                     | 0                     |
| `privacy-policy.html` | 13                     | 0                     |
| `404.html`            | 15                     | 0                     |

And `#svg-templates` — the div the Framer runtime uses as its symbol store — is served
**empty**, 33 characters of markup, on every page _(measured)_.

What happens at runtime _(measured, `index.html`)_:

|                       | `#svg-templates` innerHTML       | `<use>` hrefs                               |
| --------------------- | -------------------------------- | ------------------------------------------- |
| at `DOMContentLoaded` | 33 chars (empty)                 | 15 × `assets/svg/sprite.svg#…`, 1 × `#svg…` |
| after settle          | **28,255 chars, 4 `<svg>` defs** | **4 × local `#…` fragments**                |

So the runtime:

1. Fetches `assets/svg/sprite.svg` — **exactly once** _(measured)_.
2. Parses it and **injects the referenced defs into the empty `#svg-templates` div**.
3. **Rewrites every external `<use>` href to a local fragment.** 16 external references
   collapse to 4 injected defs.
4. Keeps a `Map` (plus a second bucket for "vector set" artwork) and, when a component
   needs a symbol, **clones** the def with the id **re-prefixed** — `id="x"` →
   `id="<prefix>_x"`, `href="#x"` → `#<prefix>_x`, `url(#x)` → `url(#<prefix>_x)`. Absolute
   references are left alone. That is why id collisions between pages never mattered.
5. Tears defs down on unsubscribe after a grace window.

**The sprite file is _not_ redundant — it is the site's graceful-degradation asset**
_(measured)_. My first reading of this was wrong, and the error is worth recording, because
it is an easy mistake to make.

The obvious experiment is to block `sprite.svg` and see whether anything changes. It
doesn't: the _settled_ state is byte-for-byte identical, because the runtime injects the
defs from the **CDN page chunk** and rewrites every `<use>` to a local fragment. That makes
the file look like 76 KB (532 KB across the site) of dead transfer, and the obvious
recommendation is to stop deploying it.

That recommendation is wrong. Two further measurements:

**(a) With the runtime alive**, the file only affects the pre-hydration window, and it
helps — a few icons paint natively before the runtime finishes, because external
`use` references to a served sprite resolve without any JavaScript:

| Page          | sprite served                                    | sprite blocked                    |
| ------------- | ------------------------------------------------ | --------------------------------- |
| `index.html`  | 3 icons painted by **449 ms**, all 4 by 1,017 ms | 0 by 423 ms, all 4 by **832 ms**  |
| `about.html`  | 9 by **253 ms**, all 20 by 553 ms                | 0 by 276 ms, all 20 by **518 ms** |
| `donate.html` | 3 by **176 ms**, all 6 by 518 ms                 | 0 by 206 ms, all 6 by **512 ms**  |

So deleting it costs a sub-second window with no icons, and saves ~185 ms of hydration
time (the runtime stops waiting on a file it discards).

**(b) With the CDN unreachable**, the file is the only thing keeping the artwork on screen.
Counting only icons a visitor can actually see (`checkVisibility`, so inactive responsive
variants are excluded — see §5.6 for why that distinction matters):

| Page                  | **A**: all available | **C**: CDN blocked, sprite served | **D**: CDN blocked, sprite absent |
| --------------------- | -------------------- | --------------------------------- | --------------------------------- |
| `index.html`          | 4 / 4 painted        | **3 / 4**                         | **0 / 4**                         |
| `about.html`          | 20 / 20 painted      | **9 / 20**                        | **0 / 20**                        |
| `films.html`          | 3 / 3 painted        | **3 / 3**                         | **0 / 3**                         |
| `volunteer.html`      | 5 / 5 painted        | **3 / 5**                         | **0 / 5**                         |
| `donate.html`         | 6 / 6 painted        | **3 / 6**                         | **0 / 6**                         |
| `privacy-policy.html` | 3 / 3 painted        | **3 / 3**                         | **0 / 3**                         |
| `404.html`            | 3 / 3 painted        | **3 / 3**                         | **0 / 3**                         |

Scenario **D** is what deleting the file would actually buy you: **zero icons, on every
page, permanently.** 76 KB — under 1% of the homepage's 8.58 MB and about 2% of the
lightest page — is a cheap insurance premium against an uncontrolled CDN (§13.3).

**Keep `sprite.svg`.** The 6.3a externalisation was the right call: it shrank the HTML by
~1.45 MB while leaving a working no-JavaScript fallback, and it is the only thing on the
site that renders the artwork when Framer is down.

_(Also worth noting: `#svg-templates` is the one element that keeps its `pc-i-040` class
after hydration, because it sits outside `#main` and React never touches it. That is the
`pc-i = 1` in §5.2's table.)_

---

## 8. Fonts

`assets/fonts/fonts.css` is loaded on all 7 pages — but every `src:` inside it is a
**remote** `https://fonts.gstatic.com/s/...` URL. So the 41 `.woff2` files in
`assets/fonts/` (863 kB) are **orphaned** _(measured: the only match for `assets/fonts/`
in any HTML/CSS/JS is the `fonts.css` link itself)_.

The actual font traffic has two sources _(measured)_:

1. **`fonts.gstatic.com`** — from `fonts.css` (Google-hosted Manrope).
2. **`framerusercontent.com/assets/*.woff2`** — from the Framer JS font loader, which
   builds `new FontFace(...)` and calls `document.fonts.add()`. The runtime dispatches on a
   font `source` of `google` / `fontshare` / `framer`, each a **dynamic `import()`** of a
   different chunk. `framer` short-circuits — it needs no chunk at all.

_(measured on `index.html`: 50 faces registered. Real faces loaded: Manrope 400/500/600/700,
`BN Rigidly` 400, `PP Supply Sans Bold` 700, `PP Supply Mono` Medium. The remaining entries
are `…Placeholder` metric-compatible faces, which are not downloads. `about` and `films` load
one Manrope weight fewer and no PP Supply Sans Bold. One console error:_
`OTS parsing error: Size of decompressed WOFF 2.0 is less than compressed size` _— one
shipped font file is corrupt and silently fails; the loader retries `NetworkError` N times
then throws `Font is not ready (Nms timeout exceeded)`.)_

`privacy-policy.html` is the only page that also pulls `fonts.googleapis.com` (0.07 MB).

---

## 9. Navigation, the client router, and reduced motion

`autobahnNavigation: true` means the router is live. Three distinct link mechanisms:

1. **React-rendered links** — an `onClick` handler that calls `preventDefault()` and routes
   internally. ⌘/ctrl/middle/shift clicks and `target="_blank"` fall through to the browser.
   (Framer patches `history.pushState`/`replaceState`, and swallows the `popstate` its own
   push causes.)
2. **Plain `<a>` tags in the SSR HTML** — rewritten at load to carry
   `data-framer-page-link-target`, `data-framer-page-link-element`,
   `data-framer-page-link-path-variables` and `data-framer-page-link-current`. **40
   elements site-wide** _(measured)_.
3. **Rich-text links** — a delegated `click` listener on `dangerouslySetInnerHTML` content
   that reads the `data-framer-page-link-*` attributes off the anchor. This is why mechanism
   2 exists at all: rich-text anchors are never React components.

The site's routes, from the runtime's route table _(static)_. Sizes are the **local
mirror's**; the CDN's differ, including index at 338 kB rather than 782 kB (§5.4):

| Page                  | `routeId`   | Path              | Page chunk (local size)      |
| --------------------- | ----------- | ----------------- | ---------------------------- |
| `index.html`          | `augiA20Il` | `/`               | `LBrkLi3nukZbyr…` (782 kB)   |
| `about.html`          | `kps3uKS_g` | `/about`          | `EXrM7VaSlbnUd3…` (297 kB)   |
| `films.html`          | `JanopNEp5` | `/films`          | `FvZPiGslLQY2Out…` (303 kB)  |
| `volunteer.html`      | `dNb59erKa` | `/volunteer`      | `F1Ovb6g782NIyc…` (183 kB)   |
| `donate.html`         | `N5J0YRRfS` | `/donate`         | `4wxosxOwvgQPTck3…` (107 kB) |
| `privacy-policy.html` | `OEM6A8Dal` | `/privacy-policy` | `pkRWASm2dKAeNwM…` (8 kB)    |
| `404.html`            | `SSvPzpRsn` | not-found         | `FCSiEZ4Vj7n8Qqgo…` (48 kB)  |

`/` has three named element variants — `first`, `second`, `third` — because the route
carries an `abTestId`. That is an A/B test, not a nav structure. All three are present in
the DOM simultaneously and are 2030 px wide each, which is what sets the homepage's
overflow in §5.5.

### Reduced motion is ignored — confirmed in-browser

Two independent code paths, both of which say no:

- `script_main` passes `isReducedMotion: undefined`, which the runtime resolves to
  `reducedMotion: "never"`. Searching the whole 465 kB runtime for
  `prefers-reduced-motion` returns **one** hit, and it is a cross-document
  view-transition override — it does not gate appear effects, layout transitions, or hover
  motion.
- The inline `matchMedia` in `index.html`'s appear trigger is hardcoded to pass `false` as
  its `reduced` argument.

**Verified with the media feature emulated** _(measured, `index.html`, Chromium
`reducedMotion: 'reduce'`)_:

```
matchMedia('(prefers-reduced-motion: reduce)').matches   -> true      <- browser agrees
matchMedia('(prefers-reduced-motion: no-preference)')    -> false
window.animator present                                  -> object
framer-appear-start / framer-appear-end marks fired       -> true / true
computed opacity of [data-framer-appear-id="d5kl3q"]:
   t=  63ms  0.001
   t= 269ms  0.060
   t= 303ms  0.340
   t= 353ms  0.747
   t= 403ms  0.948
   …          1
```

The full spring curve plays out over ~200 ms of visible motion anyway. A visitor with OS-level
reduced motion set **still gets the full hero entrance animation**. This is a genuine
accessibility defect, and it is trivially fixable in the inline trigger, since the `reduced`
parameter is already plumbed through
`animateAppearEffects(payload, cb, attr, token, reduced, variantHash)`.

---

## 10. Forms (`volunteer.html`)

One `<form>` with **no `action` and no `method`**, and no `data-framer-*` form attribute
_(measured)_. Submission is entirely dependent on the Framer runtime's form interceptor.
**Without the runtime, submitting would GET the current URL.**

15 non-hidden inputs, of which **11 are honeypots** — leaving 4 real fields _(measured)_:
Name (text, required), Email (email, required), Location (text, required), Message
(textarea, required), plus a `data-reset="button"` submit button.

The honeypots each carry `tabindex="-1"` + `aria-hidden="true"` +
`style="position:absolute;transform:scale(0)"` and are tagged for 1Password / LastPass /
Bitwarden ignore.

There are **no** `framer-form-success` / `-fail` / `-error` / `-loading` classes in the
markup — the runtime must inject them. A Cloudflare Turnstile challenge also fires on this
page, pulled in by remote code.

---

## 11. What the load actually costs _(measured, 8 s settle, cold cache, all 7 pages)_

| Page                  | Total        | doc  | css  | js       | media    | xhr  | font | img  | other | Largest remote hosts                                                                                  |
| --------------------- | ------------ | ---- | ---- | -------- | -------- | ---- | ---- | ---- | ----- | ----------------------------------------------------------------------------------------------------- |
| `donate.html`         | **11.50 MB** | 0.15 | 1.44 | **9.41** | 0        | 0.17 | 0.17 | 0.02 | 0.07  | givebuttercdn 3.84 · maps.googleapis 1.30 · js.stripe 1.07 · framercdn 0.98 · widgets.givebutter 0.77 |
| `index.html`          | **8.58 MB**  | 0.84 | 1.24 | 1.86     | **2.36** | 1.51 | 0.08 | 0.61 | 0.07  | framercdn 4.56 · challenges.cloudflare 2.15 † · video.gumlet 0.12                                      |
| `privacy-policy.html` | **3.73 MB**  | 0.08 | 1.34 | 1.70     | 0        | 0.25 | 0.28 | 0    | 0.07  | framercdn 0.88 · **app.termly 0.72** · **cdn.weglot 0.32**                                            |

† `challenges.cloudflare 2.15` on `index.html` is **Vimeo's, not ours** — it is initiated
inside the two `player.vimeo.com` iframes, not by the page's own code, and is therefore
not removable short of dropping the Vimeo embeds. See the correction note in §1.
| `films.html`          | **3.18 MB**  | 0.18 | 1.24 | 1.49     | 0        | 0.02 | 0.06 | 0.12 | 0.07  | framercdn 1.62                                                                                        |
| `about.html`          | **2.87 MB**  | 0.19 | 1.24 | 1.03     | 0        | 0    | 0.06 | 0.28 | 0.07  | framercdn 1.30                                                                                        |
| `volunteer.html`      | **2.60 MB**  | 0.13 | 1.24 | 1.01     | 0        | 0    | 0.06 | 0.09 | 0.07  | framercdn 1.09                                                                                        |
| `404.html`            | **2.42 MB**  | 0.13 | 1.24 | 0.94     | 0        | 0    | 0.04 | 0    | 0.07  | framercdn 0.91                                                                                        |

_(all figures MB; `framercdn` = `framerusercontent.com`)_

Three things stand out:

- **`site.css` is 1.24 MB and is requested on every page.** It dominates `about`, `404`,
  `volunteer` and `films` entirely. This is the obvious remaining win — and unlike the HTML
  optimisations, it is a _real_ transfer cost, not erased at runtime.
- **`donate.html` is 11.5 MB and 82% of it is Givebutter's JavaScript**, including a Google
  Maps load (1.30 MB) that a donation page should not need.
- **Turnstile costs 2.15 MB on `index.html`** and is pulled in by _remote_ code, so it
  cannot be removed from the local files without also killing the page's hydration.

---

## 12. Failure modes

### 12.1 If `framerusercontent.com` is unreachable _(measured)_

Blocking `framerusercontent.com`, `events.framer.com`, `framer.com`,
`app.framerstatic.com` and `api.framer.com`. Full per-page numbers are in §5.6; the
headline for `index.html`:

|                           | CDN available       | CDN blocked                                            |
| ------------------------- | ------------------- | ------------------------------------------------------ |
| `#main` outerHTML         | 96,381              | **180,322** (the _full_ served DOM, unpruned)          |
| elements in `#main`       | 465                 | 1,404                                                  |
| nav `<a>` present         | 18                  | **72**                                                 |
| nav `<a>` **visible**     | 18                  | **18** — CSS hides the inactive breakpoints on its own |
| `scrollWidth`             | 2750                | **1638**                                               |
| `<style>` tags            | 4                   | **0**                                                  |
| `.pc-i-*` classes         | 1                   | **749**                                                |
| `data-framer-name`        | 318                 | **0**                                                  |
| `<use>` → `sprite.svg`    | 0                   | **15** (and **13 of 16 `<use>` are zero-size**)        |
| appear elements invisible | 0 of 5              | **21 of 26**                                           |
| vote counter              | `166 CURRENT VOTES` | **`LOADING CURRENT VOTES`**                            |

**So: the page still renders, is correctly laid out, and is navigable. What is lost is**
the entire SVG icon set, the hero entrance content (21 of 26 elements stay invisible), the
vote counter, video playback, the donation and privacy embeds, client-side routing, the
scroll animations, and analytics. `privacy-policy.html` additionally collapses to a 900 px
stub.

This is expected behaviour for a static export and it is the good news: the site does not
hard-depend on Framer being up to show its _text content_. But note the second `scrollWidth`
row — **the served HTML lays out better than the re-rendered version** (1638 px vs
2750 px), and the artwork and hero content do not survive at all.

### 12.2 Known live defects

| Symptom                                                                               | Cause                                                                                                                                                                                                                    | Evidence               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| **Full client re-render on every page load**                                          | 6 of 12 CDN chunks differ from the export, incl. the homepage component chunk by 443 kB (§5.4)                                                                                                                           | _(measured)_           |
| **Hero animation ignores OS reduced-motion**                                          | `reducedMotion: "never"` + hardcoded `false` in the inline appear trigger (§9)                                                                                                                                           | _(measured, emulated)_ |
| **6 of 7 pages lay out 2750 px wide at a 1440 px viewport**                           | flex `min-width: auto` lets 2030 px items set `#main`'s min-content width (§5.5)                                                                                                                                         | _(measured)_           |
| **Most SVG icons die if the Framer CDN is unreachable**                               | the runtime normally supplies the sprite defs from the CDN page chunk; with `sprite.svg` served, 3–9 icons per page survive, and 0 survive without it (§7b)                                                              | _(measured)_           |
| **21 of 26 homepage hero elements stay at `opacity: 0.001` without the CDN**          | the appear engine never runs; `AGENTS.md` §6.8 measured the same 21/26                                                                                                                                                   | _(measured)_           |
| ~~`HTTP 404 …/assets/css/&quot;assets/svg/uri_1.svg&quot;`~~ | **Fixed 2026-09-25.** The URLs carried literal `&quot;` entities **and** resolved against `assets/css/`, at `site.css:36486, 36591, 36712`. Corrected to `url("../svg/uri_N.svg")` — 3 lines, verified 200 + decode. Affected rules: `.pc-i-012`, `.pc-i-025` (34 elements site-wide) and `.pc-i-041` (6) — 40 background images that were silently not painting. | _(measured, fixed)_ |
| `NotSupportedError: the name "givebutter-dialog" has already been used`               | Givebutter's UMD is loaded five times in the main document on `donate.html`                                                                                                                                              | _(measured)_           |
| Two Vimeo embeds return `HTTP 401`                                                    | `player.vimeo.com` rejects the embed params                                                                                                                                                                              | _(measured)_           |
| A Weglot translation widget loads on `privacy-policy`                                 | not in the markup; pulled by remote code                                                                                                                                                                                 | _(measured)_           |
| `OTS parsing error … WOFF 2.0`                                                        | one shipped font file is corrupt                                                                                                                                                                                         | _(measured)_           |
| `Turnstile has already been rendered in this container`                               | two Turnstile widgets race                                                                                                                                                                                               | _(measured)_           |
| `[data-nested-link]` handler is dead code                                             | 0 matches site-wide                                                                                                                                                                                                      | _(static)_             |
| `framer_variant` query preservation is dead code                                      | 0 `data-framer-preserve-params`, and the script tag lacks `data-preserve-internal-params` so the fallback selector is never used                                                                                         | _(static)_             |
| `donate.html` has 3 ResizeObserver modules but 2 `srcdoc` iframes                     | one module has no iframe to talk to                                                                                                                                                                                      | _(measured)_           |

**Resolved, no longer a concern:** the `&apos;` entities still visible inside
`privacy-policy.html`'s Termly `srcdoc` attribute **do** decode correctly _(measured: every
frame reports 0 remaining literal `&apos;`; the `srcdoc` frame loads
`app.termly.io/embed-policy.min.js`, which spawns a nested
`app.termly.io/policy-viewer/ifra` frame rendering 38,474 characters of policy text)_.

**Not a defect, despite appearances:** `about.html` initially reports only 3 of 9 images
loaded. That is `loading="lazy"` (8 of 9 carry it) — scrolling the page loads all 9, with
no HTTP 4xx _(measured)_.

### 12.3 Orphaned assets _(measured)_

Everything under `assets/` **except** the 5 files in §1.1 is unreferenced. This is because
the URL-rewriting pass described in `docs/README.md` is not present in the working tree —
the HTML still points at `framerusercontent.com` throughout.

| Path                                 | Size   | Referenced by                                                                                             |
| ------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------- |
| `assets/scripts/*.mjs` (25 files)    | 5.6 MB | nothing — all 70 `modulepreload` + 7 `script_main` tags are remote                                        |
| `assets/images/*` (33)               | 7.8 MB | nothing — every `<img>` is remote                                                                         |
| `assets/video/*.mp4` (2)             | 4.1 MB | nothing — `<video src>` is remote                                                                         |
| `assets/fonts/*.woff2` (41)          | 863 kB | nothing — `fonts.css` points at `fonts.gstatic.com`                                                       |
| `assets/data/searchIndex-*.json` (2) | 55 kB  | nothing — the two `<meta name="framer-search-index">` tags are remote                                     |
| `assets/animations/*.lottie` (3)     | 25 kB  | nothing locally — **but a Lottie _is_ fetched remotely on `index.html`**, so the files mirror real assets |
| `assets/_asset_map.txt`              | 15 kB  | nothing (documented as a migration artifact)                                                              |

`assets/svg/sprite.svg` (76 kB) is the odd one out: it **is** requested on all 7 pages, and
the runtime discards its contents in favour of the CDN page chunk (§7). But it is **not**
pointless — it is the only thing that renders the artwork when the CDN is unreachable, and
it improves the pre-hydration paint when the CDN is up. Keep it.

---

## 13. Open questions and decisions

1. **Does the 2750 px layout in §5.5 show a real horizontal scrollbar to a visitor?** The
   mechanism is established across 6 pages, but I cannot view images, so the visual outcome
   needs a human eye on the live site. It is the single most consequential unknown here,
   because it affects every page but `privacy-policy`.
2. **Which specific component diverges during hydration?** The cause is established at the
   file level (§5.4), but React's production build reports only `#418` as an opaque string
   and there is no source map. Naming the component would need a development build of the
   same chunk, which Framer no longer offers for a frozen site.
3. **Should the site keep depending on a CDN it no longer controls?** §5.4 is the concrete
   argument for self-hosting `assets/scripts/`: the local mirror is not merely a
   convenience, it is the _only_ copy that matches the shipped HTML, and serving it locally
   would fix the hydration mismatch outright. That is a decision, not a finding.
4. **Keep `sprite.svg` — settled, after measurement.** I first concluded it was 532 KB of
   dead transfer and recommended dropping it, then measured the pre-hydration window and
   the no-CDN state (§7). Dropping it produces **0 visible icons on all 7 pages** whenever
   `framerusercontent.com` is unreachable, and 532 KB is under 3% of the lightest page. The
   6.3a externalisation should stand as-is.
5. **`AGENTS.md` §6.8 lists three things the runtime is load-bearing for. Two hold, one
   does not** _(measured, §5.6)_. "Materialising the sprite defs" and "driving the appear
   animations" are both confirmed. "Pruning the inactive responsive variants" is **not**
   required for a correct paint — the `hidden-*` classes and `@media` rules do that with no
   JavaScript, and the served pages show exactly the right number of visible nav links.
   That does not reopen §6.8's conclusion (0/35 matching screenshots still follows from the
   other two), but the reasoning behind it is partly wrong and `AGENTS.md` says "Don't
   retry this" on the strength of all three.
6. **The homepage vote counter depends on `total-votes-rzszi6ndna-uc.a.run.app`,** a Google
   Cloud Run service, and on Cloudflare Turnstile. Neither is in the repo. Both are
   third-party availability risks that the static export cannot fix.
7. **CDN behaviour is a snapshot.** The site is frozen but `framerusercontent.com` is not.
   Every remote figure in this document — chunk hashes, weights, vote count, editor-bar
   assets — was true at the time of testing and could change without notice. The local
   measurements will not drift; the remote ones will.

---

## 14. Reproducing the measurements

Served with `python -m http.server 8137` from the repo root. During development the
committed tree was also served on port 8138 from a `git archive` of HEAD, for A/B — per
`AGENTS.md`, on **two different ports**, since a stale server on a shared port has produced
phantom results before.

```powershell
python -m http.server 8137
```

The measurements came from throwaway scripts under `%TEMP%\opencode\`, run with `node`:

| Script             | What it establishes                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `facts.js`         | the bulk of this document: script-tag inventory from disk, mark timeline, post-hydration DOM, overflow attribution, fonts, forms, and the CDN-blocked comparison |
| `weights.js`       | §11 — per-page transfer by resource type and host, all 7 pages                                                                                                   |
| `verify2.js`       | React `#418`/`#423` via `page.on('console')`; `about.html` lazy-vs-broken images; the sprite → fragment rewrite                                                  |
| `sprite-test.js`   | §7 — blocks `sprite.svg` on all 7 pages and shows the icons are unaffected                                                                                       |
| `no-runtime.js`    | §5.6 — the A/B/C scenarios: runtime alive vs. runtime stripped vs. all remote Framer blocked                                                                     |
| `paint.js`         | §5.6 — visible-vs-present element counts, so the pre-hydration paint can be judged                                                                               |
| `early-sprite.js`  | §7(a) — samples icon paint every 40 ms with the sprite served vs. blocked                                                                                        |
| `visible-icons.js` | §7(b) — counts _visible_ `<use>` elements (excluding hidden variants) across scenarios A / C / D                                                                 |
| `q-probe.js`       | emulated reduced-motion + appear opacity timeline (§9); flex-tree overflow attribution; Termly `srcdoc` frame contents                                           |
| `q2-probe.js`      | CDN-vs-local SHA-256 for all 12 chunks (§5.4); `#main` snapshot at the `framer-hydration-start` mark, proving Suspense comments are balanced                     |
| `q2b-probe.js`     | `_asset_map.txt` cross-reference                                                                                                                                 |
| `remeasure.js`     | DCL-vs-settled DOM diff for all 7 pages                                                                                                                          |

Three things worth knowing if you re-run any of this:

- The installed package is **`playwright-core`**, not `playwright`, and the resolved module
  lives under `%TEMP%\opencode\node_modules`. `require('playwright')` fails.
- Patching `console.error` from an `addInitScript` does **not** capture React's hydration
  warnings — the array comes back empty. Use `page.on('console')`, which does.
- Snapshotting at `DOMContentLoaded` is misleading for anything the runtime does: DCL
  fires _before_ the breakpoint rewrite, before hydration, and before the sprite re-injection.
  To observe a pre-React state, listen for the `framer-hydration-start` **mark** instead.
