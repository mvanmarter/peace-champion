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

## Current state (cleanup done)
The 7 pages went from ~4.55 MB of HTML to ~1.25 MB. Completed items from
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
- ◑ **6.7 — Remote stays remote** (already true): images remain external
  `framerusercontent.com` URLs with `srcset`; `assets/fonts/fonts.css` (15 kB of
  `@font-face`) is unsubsetted.

### Still open
- ☐ **6.1 — Minify whitespace/comments.** ~985 kB (~30%) of the remaining ~1.25 MB is
  removable indentation. Use `html-minifier-terser` with `collapseWhitespace`,
  `removeComments`, `minifyCSS`, `minifyJS`. This is a one-time pass, not a pipeline.
- ☐ Minify/dedupe `site.css` at rule level.
- ☐ **6.6 — De-duplicate the inline `<script>` blocks** (~78 kB) into
  `assets/js/site.js`.
- ☐ **6.8 — Nav/footer deduplication** (~30–60 kB per page of duplicated markup).

## Working conventions
- Serve over HTTP; ES-module scripts and relative asset paths do not work over
  `file://`.
- When screenshotting to verify a change, make sure **only one** `http.server` process
  holds the port. Stale servers on port 8123 have served old files and produced phantom
  diffs before.
- The Framer runtime rebuilds the DOM on load: it re-inserts the sprite defs, reverts
  `<use>` hrefs to local `#id`, and re-applies inline styles. So the served-HTML savings
  are transfer savings, and post-hydration DOM should match the pre-change baseline.
- Structure and run steps are documented in `docs/README.md` and
  `docs/HTML_ANALYSIS.md`.