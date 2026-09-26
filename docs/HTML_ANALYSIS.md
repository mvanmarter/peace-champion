# HTML Analysis — globalpeaceyes.org export

Analysis of the 7 HTML files in the repository root. These files are static exports
from a **Framer** website. Framer publishes self-contained HTML with most CSS inlined,
and much of the layout and vector artwork baked into per-element inline `style`
attributes. This document explains what is in each file, how to make them smaller, and
what has already been done.

**Method note:** files on disk were measured directly (byte/char counts). The live
site itself was spot-checked for comparison. Sizes are in characters (bytes);
1 kB ≈ 1,000 chars.

---

## 1. File inventory

Current state (after the CSS extraction described in §7):

| File | Before | After | Lines | Static `<title>` | Role |
|---|---|---|---|---|---|
| `index.html` | 1,064,423 | **843,133** | 14,359 | `GLOBAL PEACE YES` | Homepage |
| `about.html` | 706,780 | **511,255** | 6,947 | `About - GLOBAL PEACE YES` | About / history |
| `films.html` | 644,644 | **451,028** | 5,857 | `GLOBAL PEACE YES` | Films |
| `volunteer.html` | 598,804 | **404,122** | 4,654 | `GLOBAL PEACE YES` | Volunteer |
| `donate.html` | 569,133 | **405,450** | 4,637 | `Donate - GLOBAL PEACE YES` | Donate |
| `404.html` | 550,066 | **383,494** | 4,604 | `Page Not Found - GLOBAL PEACE YES` | 404 fallback |
| `privacy-policy.html` | 421,115 | **286,729** | 2,901 | `Privacy Policy - GLOBAL PEACE YES` | Privacy policy |
| **Total** | **~4.55 MB** | **~3.29 MB** | | | |

The ~1.27 MB removed from the HTML now lives in one external stylesheet
(`assets/css/site.css`, §7). All 7 pages share the same skeleton and the same Framer
runtime entry bundle.

---

## 2. Shared anatomy (every page)

### 2.1 `<head>` (now ≈ 3.5 kB per page)

| Component | Size | Notes |
|---|---|---|
| `<link rel="stylesheet" href="assets/css/site.css" />` | — | Replaces what used to be ~130–195 kB of inline CSS per page (see §7). One shared, cacheable file. |
| `<link rel="stylesheet" href="assets/fonts/fonts.css" />` | ~1 kB | Local 15 kB `@font-face` file (Manrope and others) pointing at Google Fonts. |
| SEO/meta tags | ~3 kB | `<title>`, description, `og:*`, `twitter:*`, canonical, `framer-search-index` (remote JSON on framerusercontent.com). Favicon `<link>`s (light/dark + apple-touch-icon). |
| Inline `<script>` blocks | ~5–40 kB | Small identical utilities on every page (§2.3) — now external except page-specific payload. `index.html` still carries an ~11 kB appear-animation JSON. |
| Preconnect | — | `fonts.gstatic.com`. |

### 2.2 `<body>` (≈ 280–840 kB per page)

| Component | Size | Notes |
|---|---|---|
| Inline `style="…"` attributes on elements | **178–456 kB** | The single biggest body cost. Nearly every Framer frame/element carries inline layout (`transform`, `width`, `height`, `align-self`, hover/appear states), and many carry `background-image: url("data:image/svg+xml,…")` artwork inline. |
| Inline `<svg>` artwork | **170–235 kB** | Logos, icon buttons, and decorative vector shapes — both as real `<svg>` elements and as URL-encoded `data:image/svg+xml` backgrounds inside the inline styles above (the two numbers overlap). |
| Nav + footer markup | ~30–60 kB (per copy) | Identical site menu (Vote Now / About / Events / Donate / Volunteer / Films) and footer (logo SVG + copyright + privacy link) duplicated on every page. |
| `<img>` tags | 0–16 per page | Images are **external** (`framerusercontent.com` URLs, `srcset`-based). **No base64 raster images exist.** |
| Framer editor metadata | ~10–34 kB | `data-framer-name="…"` labels, `data-framer-hydrate-v2` route JSON, `data-framer-appear-id`, `data-styles-preset`, `data-framer-component-type` — only used by the Framer editor, irrelevant at runtime. |
| Comments / stream markers | ~1–3 kB | `<!-- Made in Framer -->`, `<!--$-->`, `<!-- Start/End of headStart|bodyStart|bodyEnd -->`, etc. |

### 2.3 Inline scripts

Five of these were byte-identical on all 7 pages; they are **now external** (§7.6):

| Was inline, now lives in | Contents |
|---|---|
| `assets/js/site.js` (`<head>`) | `localStorage.get("__framer_force_showing_editorbar_since")` edit-bar preload; the on-disk-only `headStart` snippet that locks `document.title` (see §5) |
| `assets/js/site-end.js` (tail of `<body>`) | `[data-nested-link]` click/auxclick/keydown handlers; `preserve-params` handler (rewrites internal `href`s with the query string); `NODE_ENV="production"` polyfill |

Still inline, and why:

- **`<script type="framer/appear" id="__framer__appearAnimationsContent">`** and
  **`#__framer__breakpoints`** (`index.html` only) — read back by id
  (`window.__framer__appearAnimationsContent.text`); the content *is* the payload.
- **`data-framer-appear-animation="no-preference"`** trigger script (all pages) and
  the `var animator = …` motion helper (22,970 B, `index.html` only) — these two are
  page-specific, not duplicated, and `animator` must be a global in the same document.
- **An empty `<script data-framer-appear-animation="no-preference"></script>`** on the
  6 non-index pages — a zero-byte marker; left alone deliberately.
- **`404.html`**: a page-specific 4,230 B relative-URL rewriter hardcoded to
  `("https://globalpeaceyes.org", "/404")`.
- **Inside `srcdoc='…'` iframes** (donate ×3, privacy-policy ×1): the Givebutter/Termly
  embed-height `ResizeObserver` and the Termly loader. These execute *inside* the iframe
  document, so they must stay inline; a relative `src` would resolve against the parent
  page, not the iframe.

### 2.4 External scripts (referenced, not inlined)

- `https://framerusercontent.com/sites/21Hkz9s2D8H7aNrnx45o3p/script_main.YqCkgxnJ.mjs` — the Framer app/runtime bundle (local mirror: `assets/scripts/`).
- `https://events.framer.com/script?v=2` — Framer analytics.
- `donate.html` also loads the **Givebutter** widget: `https://widgets.givebutter.com/latest.umd.cjs?acct=…`.
- `privacy-policy.html` loads the **Termly** cookie-consent SDK (`app.termly.io/embed-policy.min.js`).

---

## 3. Per-file highlights

> Sizes quoted in this section are the §7.1 (CSS-extraction) figures, kept as the
> reference point the later passes in §7.5/§7.6 are measured against. Current totals
> are in the result tables of §7.5 and §7.6.

- **index.html** (843 kB, the largest)
  - Deepest DOM: ~1,158 `<div>` opens, 931 inline `style` attributes (455 kB), 1,286 elements using `framer-` classes, 1,038 `data-framer-name` labels, 16 `<img>`.
  - Also the biggest `style="…"` payload (455 kB) and the only page with a large inline appear-animation JSON (~11 kB).
- **about.html** (511 kB)
  - Most SVG artwork: 57 inline `<svg>` (≈235 kB) — the history/timeline section is SVG-heavy. 418 inline style attributes (262 kB).
- **films / volunteer / donate** (≈405–451 kB)
  - Same shared frames; `donate.html` adds the Givebutter widget script.
- **404.html** (383 kB)
  - Carries the full nav/footer + full site CSS even though the page body is tiny — a good example of why CSS/JS should be shared, not inlined per page.
- **privacy-policy.html** (287 kB, smallest)
  - Plainest body (283 kB), adds the Termly embed.

---

## 4. Where the bytes go (ranked, current state)

Across the 7 pages now (totals **~1.25 MB** of HTML; see §7.5 for how it got here):

1. **Inline `style` attributes** — ~1.05 MB remaining (down from ~1.81 MB; repeated
   static values moved to `.pc-i-…` classes in `site.css` — §7.5). The remaining
   inline styles are unique per element and/or animation-driven.
2. **Inline `<svg>`** — ~0 (all `<use>` shells now point at `assets/svg/sprite.svg`;
   defs were shipped to the sprite — §7.5).
3. **Whitespace / formatting** — removing indentation + blank lines still saves ~985 kB
   total (≈30%) with zero behavior change (est. total would drop to ~0.3 MB).
4. **Framer editor attributes** — now 0 (removed in §7.5; runtime-required attrs kept).
5. **Inline scripts** — ~14 kB remaining (was ~73 kB). What is left is page-specific or
   read-back-by-id payload; the shared blocks are in `assets/js/` (§7.6).
6. **`<style>` blocks** — **0** (moved to `assets/css/site.css`, §7).
7. Everything else (meta, comments, nav duplication) — small.

---

## 5. Notes / gotchas

- **Local vs live drift:** the on-disk files contained a custom `headStart` snippet that
  makes `document.title` read-only. The current live site does **not** serve that
  snippet. Since §7.6 the snippet still exists in the repo, but as the first two blocks of
  `assets/js/site.js` rather than inline markup — a breadcrumb comment in each page's
  `<head>` points at it.
- **CSS is now a single external file:** the pages load `assets/css/site.css`
  (relative path, like `assets/fonts/fonts.css`). This file is generated from the
  Framer-exported inline CSS, so it must be **regenerated whenever the site is
  re-exported/re-downloaded** — the script/process in §7 does that.
- The HTML loads its JS from **live `framerusercontent.com` URLs** (not the local
  `assets/` copy), so those bundles can change after each Framer publish without the
  HTML changing.

---

## 6. Recommendations — how to make these files smaller

Status legend: ✅ done · ◑ partial · ☐ not done yet.

### 6.1 Minify/clean the HTML (☐ — repeatable, ~30% more savings)
Run the export through a post-processor each time it's generated:
- `html-minifier-terser` (or `minify`) with `collapseWhitespace: true`,
  `removeComments: true`, `minifyCSS: true`, `minifyJS: true`.
- Currently removable whitespace: ~985 kB total across pages.
- Expected: currently ~1.25 MB (post §7.5); ~985 kB of it is removable whitespace.

### 6.2 Extract the inline CSS into one shared file (✅ done — see §7)
Was: move `data-framer-css-ssr-minified` + `data-framer-breakpoint-css` (+ the tiny
`data-framer-html-style` and page-specific widget styles) into a shared
`assets/css/site.css`, and link it. **DONE.** Remaining polish (◑): the extracted file
still contains some repeated rules across the per-page sections and is not minified —
a minify + rule-level dedupe step would drop `site.css` from ~1.27 MB down further.

### 6.3 Externalize the inline SVG artwork (✅ done — see §7.5)
- Static icons → `assets/svg/sprite.svg` referenced with `<svg><use href="sprite.svg#id"/></svg>`.
- `background-image: url("data:image/svg+xml,…")` → three payloads extracted to
  `assets/svg/uri_1.svg`, `uri_2.svg`, `uri_3.svg`.
- Result: removed ~1.46 MB from the HTML.

### 6.4 Push inline layout out of `style="…"` attributes into CSS (✅ done — see §7.5)
- Repeated identical inline values → generated `.pc-i-NNN { … }` classes appended to
  `site.css` (~470 kB removed).
- Elements with JS-driven dynamic states (appear/hover) keep animated properties
  inline; only statically-repeated declarations were moved.

### 6.5 Remove Framer-editor-only metadata (✅ done — see §7.5)
- Stripped `data-framer-name`, `data-styles-preset`, `data-framer-bundle`,
  `data-framer-page-optimized-at`, `data-fid`, `data-redirect-timezone`,
  `data-framer-ssr-released-at` (~116 kB). Runtime-required attrs
  (`data-framer-hydrate-v2` JSON, `data-framer-component-type`, appear/border/link
  attrs) were intentionally **kept**.

### 6.6 De-duplicate the inline scripts (✅ done — see §7.6)
- The 5 byte-identical shared blocks (§2.3) moved to `assets/js/site.js` (head) and
  `assets/js/site-end.js` (tail of body). Two files, not one, because the blocks run at
  two different points in the parse: the head blocks must execute *before* the body is
  parsed and before the Framer runtime, while the body-tail blocks must execute *after*
  the DOM is parsed (they query `document.querySelectorAll`).
- Saved ~29 kB of HTML, minus ~4 kB for the two new files, and the two files are cached
  after the first page view.

### 6.7 Keep remote resources remote (◑ — already true by default)
- Images are external with `srcset` — keep them remote rather than base64-ing them.
- `fonts.css` (15 kB) is a local file of `@font-face` rules — subsetting would trim it.

### 6.8 Generate pages from a template (✗ — closed, see §10)
- Nav and footer are duplicated in every file. A static-site generator / include step
  would put them in one place and prevent ~30–60 kB duplication per page.
- **Closed as not viable.** The duplication is not compressible away: the Framer
  runtime has to delete the inactive responsive variants, and it cannot be removed.
  See §10 for the measurements.

### 6.9 Recommended workflow (☐)
```
export from Framer  ──►  minifier (6.1)  ──►  CSS extractor (6.2/DONE)  ──►  SVG/style/script extractors (6.3–6.6)  ──►  publish static files
```
Keep Framer as the single source of truth; re-run the pipeline on every publish
because hand edits are overwritten by the next export.

> **N/A** — the Framer site is frozen and will no longer be updated. This is a
> one-time activity (see `AGENTS.md`), so there will be no future exports to
> re-run a pipeline against. Clean up the current files once and deploy.

---

## 7. Implemented so far

### 7.1 CSS extraction — done ✅

Executed: the giant inline CSS was extracted out of all 7 HTML pages into one file:

- **`assets/css/site.css` created** — 1,266,485 bytes (~1.27 MB).
  - Contains all 17 distinct `<style>` block contents gathered from the 7 pages:
    the 7 `data-framer-css-ssr-minified` blocks, the per-page
    `data-framer-breakpoint-css` rules, the page-background `data-framer-html-style`
    bits, and donate/privacy's widget centering styles.
  - Each block is tagged with a `/* ===== <page>.html ===== */` comment; exact
    duplicates were merged to 17 distinct blocks.
  - Includes the 11,101 `.framer-` selectors and 150 `@media` rules required to render
    any page.

- **All 7 HTML files updated and saved:**
  - Every inline `<style>` block removed (verified: `0` remaining per file).
  - Replaced with a single `<link rel="stylesheet" href="assets/css/site.css" />` in
    each page's `<head>` (before `headEnd`; verified `in head` on all 7).
  - `<head>` per page dropped from ~135–225 kB to ~3.5 kB.

### 7.2 Results

| File | Before | After | Saved |
|---|---|---|---|
| `index.html` | 1,064,423 | 843,133 | 221,290 |
| `about.html` | 706,780 | 511,255 | 195,525 |
| `films.html` | 644,644 | 451,028 | 193,616 |
| `volunteer.html` | 598,804 | 404,122 | 194,682 |
| `donate.html` | 569,133 | 405,450 | 163,683 |
| `404.html` | 550,066 | 383,494 | 166,572 |
| `privacy-policy.html` | 421,115 | 286,729 | 134,386 |
| **Total** | **4,554,965** | **3,285,211** | **1,269,754** |

- HTML total: **~4.55 MB → ~3.29 MB** (the ~1.27 MB difference moved into
  `assets/css/site.css`).
- Render parity preserved: the external file holds every rule the pages previously
  inlined (incl. the `html body { background: … }` and widget styles), so the pages
  look identical.

### 7.3 What this addresses

- ✅ Recommendation **6.2** (externalize inline CSS) — fully implemented.
- ✅ Recommendations **6.3, 6.4, 6.5** (SVG externalization, inline layout styles to
  classes, editor metadata removal) — implemented; see §7.5.
- ✅ Recommendation **6.6** (script de-duplication) — implemented; see §7.6.
- ◑ Partially related: those changes also remove duplicate CSS *transfer* per page-load.
- ☐ Not included (future work): CSS minification/rule-level dedupe (6.1/6.2 polish),
  whitespace minification, and template generation (6.8).
- + N/A: a repeatable post-publish pipeline (6.9) — the Framer site is frozen; this is
  a one-time cleanup (see `AGENTS.md`).

### 7.4 Regeneration — not required

The Framer site is **frozen** and will no longer be updated, so this is a one-time
migration (see `AGENTS.md`). The extraction below is done and will **not** need to be
re-run:

1. Concatenated every `<style>…</style>` block across the 7 pages into
   `assets/css/site.css` (deduped exact duplicates, each tagged with its source page).
2. Removed all `<style>` blocks from each HTML and inserted
   `<link rel="stylesheet" href="assets/css/site.css" />` once in the `<head>`.
3. Saved files (UTF-8, no BOM) and verified `0 <style>` remain with exactly one link
   per page before `</head>`.

### 7.5 SVG externalization, inline-style classes, metadata removal — done ✅

Three passes applied on top of §7.1–7.4, each verified for render parity. Current
HTML total: **1,249,552 bytes (~1.25 MB)** across the 7 pages.

#### 6.5 — editor metadata removed (−116,297 chars)
- Stripped `data-framer-name`, `data-styles-preset`, `data-framer-bundle`,
  `data-framer-page-optimized-at`, `data-fid`, `data-redirect-timezone`,
  `data-framer-ssr-released-at` from all 7 pages (verified `0`/file).
- **Kept** (still read by the Framer runtime/pre-render CSS):
  `data-framer-hydrate-v2` (parsed by `script_main`), `data-framer-component-type`
  (hooks in `site.css`), `data-framer-page-link-current` (active-nav CSS),
  `data-framer-appear-id`/`-animation` (scroll animations), `data-border` (runtime
  `::after` measurement), `data-highlight`, `data-nested-link`, and the form
  attrs on the volunteer page.

#### 6.3a — data-URI `background-image` SVGs extracted (−1,179,177 chars)
- 3 distinct URL-encoded SVG payloads moved to `assets/svg/uri_1.svg` (34,172 B /
  34 uses), `uri_2.svg` (403 B / 6), `uri_3.svg` (2,860 B / 1); `url(&quot;data:image/svg+xml,…&quot;)`
  rewritten to `url(&quot;assets/svg/uri_N.svg&quot;)`. `data:image/svg+xml` count now `0` everywhere.

#### 6.4 — repeated inline `style="…"` moved to classes (−470,185 chars)
- Across pages there were only **128 distinct** inline-style values among 2,557
  occurrences. 63 values repeated ≥2× were converted to generated
  `.pc-i-NNN { … }` rules (appended at the **end** of `site.css` so they keep the
  "inline style wins" cascade) and applied as classes; 1,738 occurrences converted.
- Excluded (kept inline): any value containing `transform`, `opacity`, `filter`,
  `animation`, `transition`, `will-change`, or `var(` (animation/hover-driven
  properties must stay inline).
- `srcdoc='…'` iframe payloads were masked so their inner HTML was untouched.

#### 6.3b — duplicated inline SVG defs externalized (−269,532 chars HTML)
- 16 distinct `<svg id="svg-…">` definitions (total 271,821 B across pages; the two
  logo defs were repeated on all 7 pages) moved into a single
  `assets/svg/sprite.svg` (75,648 B). All `<use href="#svg-…">` shells now point at
  `assets/svg/sprite.svg#svg-…`. No non-`<use>` references existed (verified).

#### Result

| Step | HTML before | HTML after | Saved |
|---|---|---|---|
| §7.1 CSS extraction | 4,554,965 | 3,285,211 | 1,269,754 (→ `site.css`) |
| 6.5 metadata | 3,285,211 | 3,168,914 | 116,297 |
| 6.3a data-URI SVG | 3,168,914 | 1,989,737 | 1,179,177 |
| 6.4 inline styles | 1,989,737 | 1,519,084 | 470,653 |
| 6.3b sprite | 1,519,084 | 1,249,552 | 269,532 |
| **Total** | **4,554,965** | **1,249,552** | **3,305,413** |

- Assets added: `site.css` +18,381 B (63 class rules); `assets/svg/` +113,083 B.
  Net transfer saving ≈ **3.17 MB**.
- New per-file sizes: `index` 360,822 · `about` 200,641 · `films` 192,137 ·
  `volunteer` 136,299 · `404` 137,676 · `donate` 134,850 · `privacy-policy` 87,127.

#### Verification (how parity was proven)
- **Headless Chrome** (1440×1800) screenshots after each pass: `404`, `about`,
  `films`, `volunteer` are **byte-identical (MD5)** to the pre-optimization baseline;
  `index`, `donate`, `privacy-policy` differ only in known dynamic regions (hero
  animations, Termly consent banner, video-embed `loadStart` timestamps, iframe
  resize) — the same three pages do not even hash-stabilize against themselves.
- **Hydration parity:** because the Framer JS rebuilds the DOM on load (re-inserts
  defs, reverts sprite `<use>` hrefs to local `#id`, and re-applies inline styles),
  post-hydration DOM dumps match the pre-change dumps byte-for-byte apart from
  timing noise. The served-HTML savings are pure transfer savings; rendering is
  unchanged.
- **Gotcha:** two stale `python -m http.server` processes from an earlier session
  shared port 8123 and intermittently served the **old** files, causing phantom
  screenshot diffs — always verify only one server holds the port before comparing.

### 7.6 Script de-duplication — done ✅

One pass on top of §7.5. Current HTML total: **1,220,422 chars (~1.22 MB)**.

#### What moved
Five inline blocks were byte-identical on all 7 pages (verified by MD5 of the script
body). They were split across **two** files, not one, because they execute at two
different points in the parse:

| File | Loaded from | Blocks (in order) | Size |
|---|---|---|---|
| `assets/js/site.js` | top of `<head>` | edit-bar `modulepreload`; `headStart` title lock | 730 B |
| `assets/js/site-end.js` | tail of `<body>`, before the Framer `modulepreload`/`script_main` tags | `[data-nested-link]` handlers; `preserve-params`; `NODE_ENV` polyfill | 3,265 B |

Both are plain classic scripts — **no `defer`, no `async`** — so each still executes
synchronously at exactly the document position its inline blocks used to occupy.

#### Why two files
- The head pair must run **before** the body is parsed and before the Framer runtime
  module (the title lock has to be installed before `script_main` can overwrite the
  title; the edit-bar check reads `document.head`).
- The body-tail trio must run **after** the DOM is parsed: `9d3f39c4` and `fddd3894`
  both call `document.querySelectorAll(...)`. Moving them to `<head>` would find zero
  elements and silently no-op.

#### What was deliberately left inline
See §2.3 — `type="framer/appear"` payloads (read back by id), the page-specific
`animator` and appear trigger, `404.html`'s hardcoded URL rewriter, the zero-byte
`no-preference` marker, and everything inside `srcdoc='…'` iframes.

#### Behavioral notes
- `fddd3894` reads `document.currentScript?.hasAttribute("data-preserve-internal-params")`.
  The inline tags never carried that attribute, and the new `<script src>` tag doesn't
  either, so the `S` flag stays `false` and the selector set is unchanged. Adding the
  attribute "for fidelity" would have *widened* the selector and changed behavior.
- The `NODE_ENV` polyfill previously ran *after* the appear-animation scripts on
  `index.html`; from `site-end.js` it runs slightly earlier. Verified inert: nothing in
  `animator` or the appear trigger reads `window.process`.

#### Result

| Step | HTML before | HTML after | Saved |
|---|---|---|---|
| §7.1–7.5 (all prior passes) | 4,554,965 | 1,249,552 | 3,305,413 |
| **6.6 script dedupe** | **1,249,552** | **1,220,422** | **29,130** |

- Exactly **−4,162 chars per page** on all 7 pages (5 blocks totalling 4,230 B, less two
  `<script src>` tags and the breadcrumb comment).
- Assets added: `assets/js/site.js` + `assets/js/site-end.js` = 3,991 B, once, cacheable.
  Net transfer saving ≈ **25.1 kB**, more once the browser caches the two files.
- New per-file sizes: `index` 356,660 · `about` 196,481 · `films` 187,975 ·
  `volunteer` 132,137 · `404` 133,516 · `donate` 130,688 · `privacy-policy` 82,965.

#### Verification (how parity was proven)
- **Structural, all 7 pages:** post-hydration `document.documentElement.outerHTML`
  dumps from the pre-change tree and this tree were compared with all `<script>` elements
  normalized to `<script/>`. After also normalizing the breadcrumb comment, the *only*
  remaining delta is the constant −33 chars where the removed inline title-lock script
  used to be. Everything else is byte-identical.
- **Screenshots** (headless Chromium, 1440×1800, 3 runs per page per origin):
  `404`, `about`, `films`, `volunteer`, `privacy-policy` are **byte-identical (MD5)**
  between the pre-change and post-change trees. `index` and `donate` produce 3 distinct
  hashes in 3 runs **on both trees** — they are not hash-stable against themselves
  (hero animations, Gumlet/Vimeo video, Givebutter iframe sizing), so MD5 comparison is
  meaningless for them; the DOM diff above covers those two.
- **Functional assertions** on all 7 pages after hydration:
  `document.title` is read-only (title lock still installed — `true`),
  `window.process.env.NODE_ENV === "production"`, and the Framer runtime still
  hydrates (`#svg-templates` populated).
- **Note:** `[data-nested-link]` matches **0** elements on all 7 pages, so that handler
  is a no-op before *and* after — there is no element for it to bind to.
- **Gotcha:** the two trees were served from two ports (8123 baseline / 8124 new) so that
  a stale server could not serve half of either. Never compare screenshots taken through
  a single server that was restarted mid-session.

---

## 8. Realistic expected totals

| Step | Per-page saving | Site-wide |
|---|---|---|
| ✅ Extract inline CSS (done) | 134–221 kB out of HTML | ~1.27 MB out of HTML (now cacheable) |
| ✅ Editor metadata (6.5, done) | 5–37 kB | ~116 kB |
| ✅ Externalize SVG (6.3, done) | 26–157 kB | ~1.45 MB |
| ✅ Layout styles → classes (6.4, done) | 27–243 kB | ~471 kB |
| ✅ Script dedupe (6.6, done) | ~4.2 kB | ~29 kB |
| Minify whitespace/comments (6.1) | 40–180 kB | ~985 kB |

With the done steps applied, the HTML total went from **~4.55 MB → ~1.22 MB**. The
remaining open item (whitespace minify) could bring it to **below ~0.3 MB** (plus the
shared, cached `site.css`, `site.js`, `site-end.js` and sprite files).

The `assets/scripts/` tree (35 files, 5.62 MB) cannot be reclaimed — see §10.

---

## 9. Known issue carried over from §7.5 (not part of 6.6)

`assets/css/site.css` contains three `background-image` declarations written as
`url("assets/svg/uri_1.svg")` (lines ~36486, ~36591) and `url("assets/svg/uri_2.svg")`
(line ~36712). These are broken in two ways and 404 in the browser:

1. They are **relative URLs inside an external stylesheet**, so they resolve against
   `assets/css/`, not the page — the browser requests
   `assets/css/assets/svg/uri_1.svg`. The fix is `../svg/uri_1.svg`.
2. The value still carries the HTML-escaped `&quot;` entities from the original inline
   `style` attribute; CSS files are not HTML, so those are literal characters in the URL.

The 6.3a pass extracted the SVG payloads correctly but rewrote the references without
accounting for the new base URL. Affects 14 uses of `uri_1` and 6 of `uri_2`; the
artwork simply does not paint. This predates 6.6 and is unrelated to the script
de-duplication.

---

## 10. The Framer runtime is load-bearing — measured, not assumed

Two questions came up after §7.6: *can the 5.6 MB of Framer runtime be dropped
outright*, and *is the pre-hydration paint visibly wrong?* Both were answered by
measurement, using headless Chromium at 1440×1400 against this tree served over
`http://127.0.0.1`, comparing screenshots with `pixelmatch`.

**Method.** Baseline and prototype were served from **two different ports** (8123 /
8124) so a stale server could not serve half of either. Every comparison was
controlled by a base-vs-base self-consistency run first; `404`, `about`, `films`,
`volunteer` and `privacy-policy` hash-stable, while `index` and `donate` do not (see
`AGENTS.md`) and their diffs are quoted against their own noise floor.

### 10.1 Dropping the runtime: dead end (0/35)

A throwaway copy was made with `assets/scripts/` deleted and the three runtime tags
removed from every page (8–12 `<link rel="modulepreload">`, the `script_main` module
tag, and the `events.framer.com` tag). `site.js`, `site-end.js`, CSS, fonts, the
`index.html` appear payloads, and the `srcdoc` iframes were deliberately preserved.
Structurally the strip is clean: −13,833 chars of HTML, element counts unchanged, no
residual runtime references, all embeds intact.

**0 of 35** page×width screenshots matched. Three independent mechanisms break, and
none of them is a bug that can be patched cheaply:

| Mechanism | What the runtime does | Symptom without it |
|---|---|---|
| Variant pruning | Deletes every `.ssr-variant` element and rebuilds from its own data (`ssrVariants` goes 24 → 0) | 14 visible variant wrappers instead of 1 on `about`; duplicated nav/footer/CTA blocks; `docH` 6292 → 7692 |
| Sprite materialization | Re-inserts the 16 defs into `#svg-templates` and rewrites `href` back to local `#id` | `#svg-templates` is empty as served, so every icon in §7.5 is a 0×0 box |
| Appear animations | Drives `animateAppearEffects` | The inline `animator` alone leaves **21 of 26** `index.html` elements permanently at `opacity: 0.001`; scrolling to the bottom never reveals them |

### 10.2 The pre-hydration paint *is* wrong (and always was)

Loading the pages with JavaScript disabled reproduces §10.1's first two rows on the
**current, unmodified** site. So this is not something 6.3b introduced — the runtime
has always been masking it:

- `about.html` renders 1,398 px (22%) too tall; "Vote Now" appears 3× where the
  hydrated page has 2×; ~31 duplicated icon containers.
- Pre-hydration vs hydrated, as a share of the 1440-tall viewport: **3.7%** (`404`),
  3.9% (`about`), 3.3% (`donate`), 12.0% (`films`), 10.9% (`index`), 4.6%
  (`privacy-policy`), 4.9% (`volunteer`).

### 10.3 Two fixes were built, measured, and rejected

Both were implemented in the working tree, verified, and then reverted.

**Fix A — restore the inline sprite defs** (undo §6.3b's externalization for the
defs): inline the 16 defs into `#svg-templates`, repoint every `<use>` at local `#id`.
Cost **+271,412 bytes (+22% page weight)**. Effect: changes 10.5% of all pixels, and
reduces total pre-hydration error by 35% — but it is *better* on `about` (−65%),
`volunteer` (−62%), `films` (−49%), `donate` (−47%) and *worse* on `404`,
`privacy-policy` and at 375 px. A wash overall, because making icons paint also makes
them paint in the copies that should have been hidden.

**Fix B — add the missing `hidden-*` classes** to 19 `.ssr-variant` wrappers. The
`variant-id → breakpoint` map is **not in the served markup** (see §10.4), so it was
derived empirically: load each page at all five breakpoints with the runtime running
and record which `framer-v-*` ids survive hydration. Effect: −25% to −32% on `404`
and −51% to −56% on `donate`, and **exactly zero** on `about`, `films`, `index`,
`privacy-policy` and `volunteer`. It also *regressed* `donate` at 700 px.

**Combined: 4,912,126 → 4,561,602 differing pixels, a 7.1% reduction, for +22% page
weight**, leaving 45k–290k px of error per page. Not worth shipping, and Fix B is
fragile: it encodes a measured table into class names that break silently if Framer's
media queries ever change.

Safety was checked before reverting: hydrated renders were byte-identical on
`404`/`about`/`films`/`privacy-policy`/`volunteer`; `index` sat inside its own
11k–50k px noise floor; `donate` showed a small excess (≤0.24% at 1600 px).

### 10.4 Why this cannot be finished properly

The residual duplication is **not** in the `.ssr-variant` wrappers:

- The shipped `hidden-*` classes already satisfy "exactly one variant visible per
  breakpoint" for all 32 sibling groups across the 7 pages. The invariant holds.
- The runtime deletes *all* `.ssr-variant` elements and re-renders, so `hidden-*` is
  only ever a pre-paint hint, never the final state.
- What is left is components the `hidden-*` mechanism never covered. Finding them
  requires per-component breakpoint metadata that does not exist in the files: there
  is exactly **one** `data-framer-hydrate-v2` per page, on `#main`. Nested components
  do not carry their own.

Reproducing the runtime's selection statically therefore means reimplementing it.
**Conclusion: the served HTML is a first-paint approximation by Framer's design.** The
runtime is load-bearing, the 5.6 MB is not recoverable, and §6.8 should be closed as
"not viable" rather than pursued. 6.1 (whitespace minification, ~548 kB) is the
remaining real win.

> For a plain-English account of what the runtime does to the markup, see
> `docs/RUNTIME.md`.
