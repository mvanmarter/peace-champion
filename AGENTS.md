# AGENTS.md — PeaceChampion

## Project status (IMPORTANT)
- This repo is a one-time static export of https://globalpeaceyes.org/ (7 HTML pages
  plus assets), originally published from Framer.
- The Framer.com site is FROZEN — it will NO LONGER be updated. There will be no more
  exports, re-syncs, or downloads from Framer.
- All work in this repo is a one-time activity. Do NOT build repeatable pipelines or
  "regeneration" procedures for pulling from Framer.

## Goal
- Take what was on the Framer site, clean it up (already underway: CSS extracted to
  `assets/css/site.css`, further optimization discussed in `docs/HTML_ANALYSIS.md`),
  and deploy it to a new hosting provider as static files.

## Working conventions
- Serve over HTTP; ES-module scripts and relative asset paths do not work over
  `file://`.
- Structure and run steps are documented in `docs/README.md` and
  `docs/HTML_ANALYSIS.md`.