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
| Inline `<script>` blocks | ~5–40 kB | Small identical utilities on every page (§2.3). `index.html` also carries an ~11 kB appear-animation JSON. |
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

### 2.3 Inline scripts (identical on all pages)

1. `localStorage.get("__framer_force_showing_editorbar_since")` — loads the Framer edit-bar on demand.
2. `[data-nested-link]` click/keydown handler.
3. `preserve-params` handler (rewrites internal `href`s with the query string).
4. `data-framer-appear-animation` trigger + the `animator` motion helper.
5. `NODE_ENV="production"` polyfill.
6. On disk only: a custom snippet in `headStart` that locks `document.title` (present in the local files, **not** currently on the live site — see §5).

### 2.4 External scripts (referenced, not inlined)

- `https://framerusercontent.com/sites/21Hkz9s2D8H7aNrnx45o3p/script_main.YqCkgxnJ.mjs` — the Framer app/runtime bundle (local mirror: `assets/scripts/`).
- `https://events.framer.com/script?v=2` — Framer analytics.
- `donate.html` also loads the **Givebutter** widget: `https://widgets.givebutter.com/latest.umd.cjs?acct=…`.
- `privacy-policy.html` loads the **Termly** cookie-consent SDK (`app.termly.io/embed-policy.min.js`).

---

## 3. Per-file highlights

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

Across the 7 pages now (totals ~3.29 MB of HTML):

1. **Inline `style` attributes** — ~1.81 MB total (~55%). A large part of this (~1.4 MB) is
   URL-encoded SVG artwork these attributes carry as `background-image`.
2. **Inline `<svg>` / data-URI artwork** — ~1.48 MB (overlaps the item above).
3. **Whitespace / formatting** — removing indentation + blank lines saves ~985 kB
   total (≈30%) with zero behavior change.
4. **Framer editor attributes** (`data-framer-name`, `data-framer-*`, presets) — ~98 kB.
5. **Inline scripts** — ~78 kB (mostly duplicated on every page).
6. **Inline `<style>` blocks** — **now 0** (moved to `assets/css/site.css`, §7).
7. Everything else (meta, comments, nav duplication) — small.

---

## 5. Notes / gotchas

- **Local vs live drift:** the on-disk files contain a custom `headStart` snippet that
  makes `document.title` read-only. The current live site does **not** serve that
  snippet; any re-download/re-publish will silently drop it (keep it in a patch/build
  step if you still want it).
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
- Expected: ~3.29 MB → ~2.5 MB.

### 6.2 Extract the inline CSS into one shared file (✅ done — see §7)
Was: move `data-framer-css-ssr-minified` + `data-framer-breakpoint-css` (+ the tiny
`data-framer-html-style` and page-specific widget styles) into a shared
`assets/css/site.css`, and link it. **DONE.** Remaining polish (◑): the extracted file
still contains some repeated rules across the per-page sections and is not minified —
a minify + rule-level dedupe step would drop `site.css` from ~1.27 MB down further.

### 6.3 Externalize the inline SVG artwork (☐)
- Static icons → `assets/icons/sprite.svg` referenced with
  `<svg><use href="sprite.svg#id"/></svg>` or → `<img src="logo.svg">`.
- `background-image: url("data:image/svg+xml,…")` → move the same source into the
  external CSS (§6.2) so it lives once, not per element.
- Potential: removes ~1.4 MB from the HTML.

### 6.4 Push inline layout out of `style="…"` attributes into CSS (☐)
- Move layout declarations into the shared CSS using the existing `framer-…` classes.
- Elements with JS-driven dynamic states (appear/hover) must keep animated properties
  inline; static layout can be external.
- Targets the ~1.81 MB #1 cost.

### 6.5 Remove Framer-editor-only metadata (☐)
- Strip `data-framer-name`, `data-framer-component-type`, `data-styles-preset`,
  `data-framer-appear-id`, and the verbose `data-framer-hydrate-v2` JSON after load.
- Saves ~10–34 kB/page (~98 kB total).

### 6.6 De-duplicate the inline scripts (☐)
- Move the identical script blocks (§2.3) to `assets/js/site.js` (one cacheable file).
- Saves ~5–40 kB/page of repeated HTML.

### 6.7 Keep remote resources remote (◑ — already true by default)
- Images are external with `srcset` — keep them remote rather than base64-ing them.
- `fonts.css` (15 kB) is a local file of `@font-face` rules — subsetting would trim it.

### 6.8 Generate pages from a template (☐)
- Nav and footer are duplicated in every file. A static-site generator / include step
  would put them in one place and prevent ~30–60 kB duplication per page.

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
- ◑ Partially related: it also removes the duplicate CSS *transfer* per page-load.
- ☐ Not included (future work): CSS minification/rule-level dedupe (6.1/6.2 polish),
  whitespace minification, SVG/style/script extraction (6.3–6.6), and template
  generation (6.8).
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

---

## 8. Realistic expected totals

| Step | Per-page saving | Site-wide |
|---|---|---|
| ✅ Extract inline CSS (done) | 134–221 kB out of HTML | ~1.27 MB out of HTML (now cacheable) |
| Minify whitespace/comments (6.1) | 80–180 kB | ~985 kB |
| Externalize SVG (6.3) + layout styles (6.4) | 150–450 kB | ~2.5 MB |
| Editor metadata (6.5) | 10–34 kB | ~98 kB |
| Script dedupe (6.6) | 5–40 kB | ~78 kB |

With all steps applied, the HTML total can realistically go from the current
**~3.29 MB → below ~0.8 MB** (plus the shared, cached `site.css` and sprite/JS files).