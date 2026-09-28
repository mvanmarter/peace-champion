# AGENTS.md — PeaceChampion

## Project status (IMPORTANT)
- This repo is a one-time static export of https://globalpeaceyes.org/ (7 HTML pages
  plus assets), originally published from Framer.
- The Framer.com site is FROZEN — it will NO LONGER be updated. There will be no more
  exports, re-syncs, or downloads from Framer.
- All work in this repo is a one-time activity. Do NOT build repeatable pipelines or
  "regeneration" procedures for pulling from Framer.

## Goal
- Take what was on the Framer site, clean it up, and deploy it to a new hosting
  provider as static files. The cleanup phase is essentially complete (see below);
  what remains is minification and picking a host.
- **There are now two tracks. Do not confuse them:**
  1. **The export track** — the 7 Framer pages and `assets/css/site.css`. Optimised but
     still requires the Framer runtime to render. Largely superseded for the homepage.
  2. **`index2.html`** — a hand-built, dependency-free static page that reproduces the
     homepage. Complete and verified. **This is the deployable artifact.**

## ⚠️ Do not deploy the export as-is
This is the single most important finding in the repo (`docs/NEW_SITE.md` §0):

> **The frozen export in this repo does not hydrate — but the live site does.**

Both run the same React app over the same component tree; the only difference is the
HTML each one is served. Framer re-renders the live site per request, so its served HTML
always matches the chunks currently on the CDN. Our export is a snapshot whose HTML no
longer matches those chunks, so **React throws the served DOM away and re-renders from
JavaScript on every page view.** Measured, same browser, 1440×900, all 7 pages:

| | `globalpeaceyes.org` (live) | this repo, served |
| --- | --- | --- |
| React hydration errors | **0** | **4 per page** (`#418`, `#423`) |
| `scrollWidth` @1440px | **1440** (correct) | **2750** (broken) |
| Pages that lay out correctly | 7 of 7 | **1 of 7** |

So 6.1–6.7 are transfer-size wins only, and 749 of the `.pc-i-*` classes they generated
become 1 before anything is painted. "Just deploy the current export" ships the live
site's content with a layout bug the live site does not have. Use `index2.html`.

## `index2.html` — the replacement homepage (DONE)
Reproduces the live homepage with no Framer code, no React, no analytics, no Turnstile.
`index.html` and the other six exported pages are untouched and remain the reference.

| file | bytes | what |
| --- | --- | --- |
| `index2.html` | 18,976 | the page — semantic markup, no build step |
| `assets/css/index2.css` | 35,823 | all styling, hand-tuned per breakpoint |
| `assets/vendor/dotlottie-player-2.5.6.js` | 779,388 | vendored animation player |
| `assets/animations/lxuQ2oapgQUgWt9Wml9hBUHUnfI.lottie` | 12,501 | crisis animation |
| `assets/animations/tjI5sUfMEowhcWXqGcU72bPwns.lottie` | 5,050 | solution animation (mobile) |

Verified against the live site with `cmp.js` (see Working conventions). Document-height
delta and `scrollWidth` at 12 widths (final measurement, Sep 2026):

| width | doc-height delta | scrollWidth |
| --- | --- | --- |
| 1728 / 1440 / 1200 | **0** (welcome, declaration, note, CTA, cards all ≤2px) | correct |
| 1199 / 1000 / 810 | +2 … +6 (uniform upstream noise from the hero cluster) | correct |
| 800 / 700 / 600 / 500 / 450 / 390 | −693 … −692 | correct, no overflow at any width (live overflows) |

The card grid is exact-to-quantized at every width: all 5/10 card boxes land within
1px (desktop) or 6–9px (mobile) and every box height matches (`dh=0`). The negative
mobile deltas are **intentional** — see "Intentional deviations" below. From 810px up
the page is exact; below 810px the doc/CTA/footer sit a uniform −693…−692, the CTA row
and the footer being shifted by exactly the same amount as the omitted empty block.
The footer itself reproduces the live layout (see below).

Measured live spacing facts baked into `index2.css` (do not "re-tune" by eye):
declaration note `margin-top` is **60px at every width**; the change block's top
padding is **89px mobile / 80px ≥810**; the section label sits flush under the second
video at mobile (`margin: 0 0 0 26px; padding: 23px 0`) with the change block capped
by **80px** — at desktop the label carries `margin-top: 127px`; `.variant--crisis`
has **no margin** (change block is contiguous with the cascade); solution/voice
panels are 41/40px below their precursors; mobile variant gaps are 64px. Mobile card
gaps: col A text gap 230@390→192@600+, col B text gap 192@390→173@600+, col B
stagger 185@390→147@600+ (curves via `max(_, calc(A - (100vw-390)*k))`); the crisis
more-card keeps 271@390→211@600 but the solution more-card uses the flat 64px; more-card
paragraphs are `font-weight: 500` with `margin-top: 0`. The B2.5/C relative delltas
are not present.

Both DotLottie player boxes match the live site within 1px at all widths; `lottie-check.js`
confirms both players load, animating frames advance, and the only console errors are
Vimeo's own Turnstile 401s. Two videos, both iframes, the hero and the vote counter
match exactly; the mobile cluster lands within ~22px. Full write-up:
`docs/NEW_SITE.md` Appendix B.

## Key findings (load-bearing, easy to get wrong)

- **Turnstile is Vimeo's, not ours.** Every `challenges.cloudflare.com` request on both
  the live site and `index2.html` is initiated by a `player.vimeo.com` frame — it is
  Vimeo's own bot protection, one per embed. Verified by frame attribution; `index2.html`
  contains zero Turnstile code yet produces the identical request set. This **corrects**
  the "2.15 MB CAPTCHA on the homepage" attribution in `docs/RUNTIME.md` (and repeated in
  `docs/NEW_SITE.md` §0): that weight is not removable by us and was never ours. Do not
  quote it as a saving, and do not re-verify it as a per-page origin cost.
- **The renderer-less Framer DotLottie player cannot be reused.** The export's
  `assets/scripts/dotlottie-player.BuSJ8xyR.mjs` (466,290 B, byte-identical to live) calls
  into the Framer runtime; standalone it dies with `getRenderer(...) is not a
  constructor`. Decision was to vendor the official publisher's package instead:
  **`dotlottie-player`, unscoped** (there is no `@dotlottie/player` — it 404s), pinned to
  **2.5.6**, **BSD-3-Clause** with license headers inside the bundle. Use the self-contained
  UMD `dist/index.js`; the ESM build imports bare `lit` / `lottie-web` / `fflate` and needs
  a bundler. Dev-only livereload preamble stripped. **This is the heaviest asset on the
  page and the first thing to revisit** — but it replaces a React runtime plus the
  Turnstile traffic, so it is a large net win.
- **The live site's second video is not in this repo.** It is now
  `https://video.gumlet.io/67611a6011dd4f4720ae667f/67611a695cc…/download.mp4`, 1920×1080.
  The repo only has the Framer-exported `MLWPbW1dUQawJLhhun3dBwpgJak.mp4` at 1280×720,
  which is what `index2.html` uses. Geometry is identical (`width/height: 100%`), so this
  is sharpness only. Kept local to stay self-contained; **switch `src` to the Gumlet URL
  if exact parity with today's live site matters more.**
- **The live site has no `films` link at mobile widths at all** (verified: zero in the
  DOM ≤800px). `index2.html` has it only inside the closed nav panel. Diff tools will
  report `films MISSING` in both directions — it is a false positive, not a bug.
- **Chrome defers autoplay for offscreen video.** The second video does not start until it
  scrolls into view (verified: `currentTime` advances after scroll). The live site is no
  different in practice. The live's video also carries `controls`; deliberately **not**
  copied, because a control bar on a paused video is a visible difference.
- **The Framer runtime injects a `framer.com/edit` badge iframe** on the live site.
  `index2.html` has no such frame. Harmless, but it means frame counts differ by one.
- **The live header is `position: fixed`, `z-index: 2`, 67.203px tall, and persistent** — it
  never hides or reappears on scroll (verified at scroll 1400). Its own rule is the **dark**
  `1px #222` full-box `::after` (`inset: 0; border-bottom`) at row `y=66`. Because the header
  is out of flow, `body` carries `padding-top: 67px` and the hero/bleed offsets were
  re-derived (see `docs/NEW_SITE.md` B.6).
- **The hero is a lattice of bordered squares, and the `1px #e1e0dd` line at `y=67` is its
  first row — not a content divider.** The live paints a `4060×725px` grid of `145×145px`
  cells (28×5) inside an `overflow: hidden` holder, horizontally centred, `725px` tall at
  ≥810px and `581px` tall below 810px with the inner lattice shifted `top: -72px` (first
  visible row then at `y=140`). Lines are `2px #e1e0dd` straddling the cell edges. The
  holder's right edge is why the live reports `scrollWidth 2750` at 1440px. Reproduced with
  one `<div class="hero-grid" aria-hidden="true">` and two repeating gradients, not 140
  cells (see `docs/NEW_SITE.md` B.7).
- **The live nav links measure two different boxes, and only one of them is the truth.**
  As inline `<a>`s in a `19.2px` line-height block they report `[x, 22, w, 22]`; the text
  block reports `[x, 24, w, 19.2]`. `.nav` stays at `line-height: 19.2px` — matching the
  block puts the glyph baselines within 0.1px of the live's, matching the `<a>` box lands the
  type 2px high. `cmp.js` compares blocks, so it scores these 0/0/0.
- **The live page has no custom scrollbar behaviour** (no hide-on-scroll, no
  `scrollbar-width` override, `scroll-behavior: auto`). Nothing to copy; keep ours default.

## Intentional deviations in `index2.html`
Do not "fix" these — they are choices, and all are recorded in `docs/NEW_SITE.md` B.5:
1. **Mobile document height is ~692–693px shorter.** The live page reserves an empty
   transparent block for an empty state. It renders nothing; reproducing dead space was
   judged not worth it. Everything above and below matches within a couple of pixels,
   and the doc, the CTA row and the footer all shift up by exactly the same −692/−693.
2. **The welcome heading fits instead of overflowing.** On the live site below ~600px it
   is 556px wide in a 342px column and overflows both edges, which is what makes the live
   page horizontally scrollable (`scrollWidth` 473 at a 390px viewport). Ours wraps.
3. **The mobile menu is a dropdown, not a full-screen takeover.** On the live, opening the
   burger expands the fixed header element to `height: 2000px`, turning the bar into a
   full-viewport overlay. Ours is a positioned panel. The panel's own geometry *does* match
   (`top: 83px`, full-bleed, 24px inset, links on a 51px pitch, CTA stretched to 342px);
   only the takeover behaviour was not copied.

### `cmp.js` false positives (do not chase these)
- `films MISSING` in both directions at mobile — see above.
- `saying 'yes'`, `— massive goal`, `— easy` reported `MISSING` on the live side: the live
  splits those across elements differently. Our `.taglines` block is index2.html:440-447.
- `lbl-t` / `lbl-s` show a consistent ~106px delta at desktop. This is **not** moved text —
  it is the live's taller wrapper around the same two lines, and both rows carry the *same*
  offset, so it is a box-convention difference rather than a displacement. `cmp.js` compares
  wrapper boxes; the document height is exact at every width ≥1200, which it could not be if
  a text block had really moved. The `taglines` block sits between the card grid and the
  CTA (index2.html:440-447), not above the cards — don't re-derive section spacing from it.
  Note: the label's text could not be located on the live by exact-content match at desktop
  (Framer splits it differently), so this row is unverified by ink measurement.
- `eyebrow` / `change` / `note` show width deltas: same cause, the live's text blocks span
  the full container while ours are content-width. Text y positions match.

### Footer parity (implemented)

The footer was restructured to the live's exact layout: a single row of three two-line
link groups — `{About, Events}` 46px, `{Donate, Volunteer}` 55px, `{Privacy Policy}`
102px — with a 24px gap below 810px and 40px at ≥810px, plus the copyright line, which
at ≥810px sits on the same row opposite the link groups (links right, copy left,
bottom-aligned). The old vertical column, the footer brand logo, and the Instagram /
LinkedIn social icons are gone (the live footer has none of them). Verified at
390 / 600 / 800 / 810 / 1000 / 1200 / 1440 / 1728: every link box and the copyright
line land within 1px of the live, and the desktop document height stays exactly 0.

## Export track (cleanup done)
The 7 pages went from ~4.55 MB of HTML to ~1.22 MB. Completed items from
`docs/HTML_ANALYSIS.md` §6:

- ✅ **6.2 — Inline CSS extracted.** All 17 distinct inline `<style>` blocks moved to
  `assets/css/site.css` (1.28 MB), linked from each page's `<head>`. Head size per
  page dropped from ~135–225 kB to ~3.5 kB. Not yet minified/deduped at rule level.
- ✅ **6.3 — Inline SVG externalized.** Data-URI `background-image` artwork moved to
  `assets/svg/uri_1.svg` (34 uses), `uri_2.svg`, `uri_3.svg`. The 16 shared
  `<svg id="svg-…">` defs moved to `assets/svg/sprite.svg`; all `<use>` shells point
  at `assets/svg/sprite.svg#svg-…`. Saved ~1.45 MB.
- ✅ **6.4 — Repeated inline `style="…"` moved to classes.** Only 128 distinct values
  across 2,557 occurrences; the 63 values repeated ≥2× became generated `.pc-i-NNN`
  rules appended to the end of `site.css` (so the inline-wins cascade is preserved).
  1,738 occurrences converted, ~470 kB removed. Values containing `transform`,
  `opacity`, `filter`, `animation`, `transition`, `will-change`, or `var(` were left
  inline on purpose (animation/hover-driven).
- ✅ **6.5 — Framer-editor-only metadata removed** (~116 kB): `data-framer-name`,
  `data-styles-preset`, `data-framer-bundle`, `data-framer-page-optimized-at`,
  `data-fid`, `data-redirect-timezone`, `data-framer-ssr-released-at`. Runtime attrs
  were deliberately **kept**: `data-framer-hydrate-v2`, `data-framer-component-type`,
  `data-framer-page-link-current`, `data-framer-appear-id`/`-animation`, `data-border`,
  `data-highlight`, `data-nested-link`, and the volunteer form attrs.
- ✅ **6.6 — Inline scripts de-duplicated.** The 5 byte-identical shared blocks moved to
  `assets/js/site.js` (head) and `assets/js/site-end.js` (tail of body) — two files, not
  one, because the head pair must run before the body is parsed and the body-tail trio
  must run after (they `querySelectorAll` over the DOM). Both are classic scripts with
  no `defer`/`async`, so they still execute at the same document position. −29,130 chars
  (−4,162/page exactly), +3,991 B of cacheable JS. Still inline on purpose: the
  `type="framer/appear"` payloads (read back by id), `index.html`'s `animator` +
  appear trigger, `404.html`'s hardcoded URL rewriter, the zero-byte `no-preference`
  marker, and everything inside `srcdoc='…'` iframes.
- ◑ **6.7 — Remote stays remote** (already true): images remain external
  `framerusercontent.com` URLs with `srcset`; `assets/fonts/fonts.css` (15 kB of
  `@font-face`) is unsubsetted.
- ✗ **6.8 — Nav/footer deduplication: closed as not viable** (see
  `docs/HTML_ANALYSIS.md` §10). Measured, not assumed: deleting `assets/scripts/`
  (5.62 MB) and stripping the runtime tags gives **0/35** matching screenshots across
  7 pages × 5 breakpoint widths. The runtime is load-bearing for three things —
  pruning the inactive responsive variants, materializing the sprite defs into
  `#svg-templates`, and driving the appear animations (21 of 26 `index.html` elements
  otherwise stay at `opacity: 0.001` permanently, even after scrolling). Don't retry
  this. Two candidate fixes for the pre-hydration paint were built, measured, and
  reverted: 7.1% less error for +22% page weight, and the variant fix is fragile
  because the per-component breakpoint data isn't in the served markup. `index2.html`
  sidesteps the whole problem.

### Still open (export track only — does not affect `index2.html`)
- ☐ **6.1 — Minify whitespace/comments.** ~548 kB (~45%) of the remaining ~1.22 MB is
  removable indentation. Use `html-minifier-terser` with `collapseWhitespace`,
  `removeComments`, `minifyCSS`, `minifyJS`. This is a one-time pass, not a pipeline.
  Now moot for the homepage (use `index2.html`); still applies to the other 6 pages.
- ☐ Minify/dedupe `site.css` at rule level.
- ☐ **Known bug in `site.css`** (documented in `docs/HTML_ANALYSIS.md` §9): three
  `url("assets/svg/uri_N.svg")` declarations are relative to the wrong base and still
  contain `&quot;` entities, so 14 + 6 uses of the artwork 404. Left over from the 6.3a
  pass; fix is `../svg/uri_N.svg`. `index2.css` does not use `site.css` and is unaffected.
- ☐ **Decide:** rebuild the other 6 pages the `index2.html` way, or ship them from the
  export and accept the hydration/layout bug. Not yet discussed — ask before starting.
- ☐ Working tree: `index2.html`, `assets/css/index2.css` and `assets/vendor/` are
  **untracked**; `docs/NEW_SITE.md` and `docs/PROMPTS.md` have uncommitted edits.
  Nothing has been committed this session.

## Working conventions
- Serve over HTTP; ES-module scripts and relative asset paths do not work over
  `file://`.
- **Only one `http.server` process may hold a port.** Stale servers on port 8123 have
  served old files and produced phantom diffs before. For an A/B comparison, serve the
  baseline and the change on **two different ports** so a stale server can't serve half
  of either.
- The Framer runtime rebuilds the DOM on load: it re-inserts the sprite defs, reverts
  `<use>` hrefs to local `#id`, and re-applies inline styles. So the served-HTML savings
  are transfer savings, and post-hydration DOM should match the pre-change baseline.
- `index.html` and `donate.html` are **not hash-stable against themselves** (hero
  animations, Gumlet/Vimeo video, Givebutter iframe sizing). Screenshot MD5 comparison
  is meaningless for those two — compare normalized DOM dumps instead. `404`, `about`,
  `films`, `volunteer` and `privacy-policy` do hash-stable.
- **To verify `index2.html`, use `cmp.js`** (`%TEMP%\opencode\`), which loads the live
  site and `http://127.0.0.1:8137/index2.html` in one browser at each width and compares
  doc height, `scrollWidth`, ~25 landmarks and every text node's box. It is
  landmark-based, not pixel-based — do **not** substitute screenshot MD5s for it.
  ```powershell
  python -m http.server 8137     # from the repo root
  $env:W="1728,1440,1200,1199,1000,810,800,700,600,500,450,390"; node cmp.js
  ```
  Useful siblings: `lottie-geom.js` (player boxes vs live), `lottie-check.js` (player
  loads, shape count, frames advancing, console errors), `runtime.js` (fonts, videos,
  burger, requests), `turnstile-origin.js` (frame attribution for third-party requests).
- Structure and run steps are documented in `docs/README.md` and
  `docs/HTML_ANALYSIS.md`. `docs/RUNTIME.md` is a plain-English account of what the
  Framer runtime does to the markup after the browser has it. `docs/NEW_SITE.md` is the
  rebuild proposal (§0–9) plus the `index2.html` build record (Appendix B).
