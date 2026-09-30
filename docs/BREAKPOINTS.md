# breakpoints.md — the breakpoints in this project

Reference for every breakpoint in the repo, what each one is _for_, and the traps
around them. Written 2026-09-29.

Everything marked **verified** was measured, not inferred. The commands are in
[§8](#8-how-to-verify).

---

## 1. TL;DR

There are **two real breakpoints**: **810px** and **1200px**.

| range           | name    | `index2.css` query                                     |
| --------------- | ------- | ------------------------------------------------------ |
| ≤ 809.98px      | mobile  | `@media (max-width: 809.98px)`                         |
| 810 – 1199.98px | tablet  | `@media (min-width: 810px) and (max-width: 1199.98px)` |
| ≥ 1200px        | desktop | `@media (min-width: 1200px)`                           |

The live Framer site has **four** tiers, not two — it also splits at **1440px** and
**1728px**. `index2.css` deliberately collapses those two into the `≥ 1200px`
branch, because on the homepage they change nothing visible (see [§4](#4-the-two-tiers-we-collapsed)).

**Both breakpoints are 810 and 1200 on the live site, verified at the exact
boundary pixels.** 810 and 809 differ; 1200 and 1199 differ.

---

## 2. Which file is authoritative

Per `AGENTS.md` there are two tracks. They have **different** breakpoint systems,
and this is the single most confusing thing in the repo.

|                   | file                                                  | authoritative for                                  |
| ----------------- | ----------------------------------------------------- | -------------------------------------------------- |
| **export track**  | `assets/css/site.css` (1.28 MB, 7 pages concatenated) | the 6 non-homepage exported pages                  |
| **`index2.html`** | `assets/css/index2.css`                               | **the homepage — this is the deployable artifact** |

If you are changing the homepage, `index2.css` is the only file that matters.
`site.css` is the frozen Framer export and does **not** control `index2.html` at
all — `index2.html` does not link it.

---

## 3. The live site's four tiers (verified)

Taken from Chrome's own report of which media conditions actually match the live
homepage's app root (`.framer-fu3UK`), via the CDP `CSS.getMatchedStylesForNode`
domain — not by reading the stylesheet:

| viewport         | matching conditions                                         | `h2` size | nav    | burger |
| ---------------- | ----------------------------------------------------------- | --------- | ------ | ------ |
| 1920, 1728       | `(always)`                                                  | 52px      | flex   | absent |
| 1727, 1441, 1440 | `(always)` + `(min-width:1440px) and (max-width:1727.98px)` | 52px      | flex   | absent |
| 1439, 1201, 1200 | `(always)` + `(min-width:1200px) and (max-width:1439.98px)` | 52px      | flex   | absent |
| 1199, 811, 810   | `(always)` + `(min-width:810px) and (max-width:1199.98px)`  | 48px      | flex   | absent |
| 809, 390         | `(always)` + `(max-width:809.98px)`                         | 32px      | absent | block  |

So the live's tier set is: **≤809.98 / 810–1199.98 / 1200–1439.98 / 1440–1727.98 /
≥1728**. The `.98` suffix is Framer's (Tailwind's) convention and is real — it is
not sloppiness in our CSS. See [§6.1](#61-the-98-suffix-is-load-bearing).

The live's own homepage CSS in `site.css` is scoped under `.framer-fu3UK` and uses
exactly these four queries, all in `.98` form. Confirmed: 4 media blocks contain
`framer-fu3UK`, and all four are `.98` queries.

---

## 4. The two tiers we collapsed

`index2.css` has **no** 1440px or 1728px query. The live homepage's `1440–1727`
tier and its `≥1728` base tier both render the same as our `≥1200px` branch.

Supporting evidence, in descending order of strength:

- **Re-verified today (29 Sep 2026):** the live's `h2` is **52px at every one of
  1920 / 1728 / 1727 / 1440 / 1439 / 1200**, and the only thing that changes across
  that whole span is _which media condition matched_ — never a rendered value
  (§3 table). The 1440 tier exists in the CSS but is behaviourally inert on the
  homepage.
- **`AGENTS.md`'s recorded `cmp.js` result** (not re-run today): document-height
  delta **−1** at 1728 / 1440 / 1200, correct `scrollWidth` at all three — i.e. no
  discontinuity at 1440 on either site. Note this number is now stale, see §9.

Safe **for the homepage only**. Do **not** assume the other 6 pages collapse the
same way — their media queries carry different rules and were never verified, see
[§7](#7-the-export-tracks-breakpoints).

---

## 5. What each breakpoint actually changes

### 5.1 The mobile query — `@media (max-width: 809.98px)`

Two blocks. The second is the big one.

**Type and body scale**

|               | mobile        | tablet               | desktop              |
| ------------- | ------------- | -------------------- | -------------------- |
| `body`        | 18px / 23.4px | _(base)_ 20px / 26px | _(base)_ 20px / 26px |
| all four `h2` | 32px / 32px   | 48px / 48px          | _(base)_ 52px / 52px |

The four headings share one selector list:
`.welcome h2, .declaration-copy h2, .slides h2, .cta h2`.

**Header / nav** — the burger replaces the inline nav and the "Vote Now" CTA:

- `.header-cta { display: none }` — the header CTA is dropped
- `.nav-toggle` becomes visible and `.js .nav` is hidden

⚠️ This is the one place the cascade runs **the other way** — see
[§6.3](#63-the-nav-is-mobile-first-the-one-exception). The mobile nav state is
the _base_, and the `≥810` blocks opt _into_ the inline nav.

**Hero**

- `.hero { padding-top: 100px }`
- **`.hero-video` changes aspect ratio, not just size** — base is
  `577px` wide at `aspect-ratio: 577 / 435` (landscape); mobile caps at `342px` at
  `aspect-ratio: 342 / 381` (portrait). `.hero-video-box` is a separate wrapper
  class and is _not_ affected by this breakpoint.
- `.hero-title { margin-top: 180px }`, `.hero-lower { margin-top: 40px }`
- `.hero-bleed { top: -72px }` — the live parks the illustrations mostly off-screen
- `.hero-grid { height: 581px }` (vs 725px above 810) and `.hero-grid::before { top: -72px }`

**The icon cluster becomes a full-bleed mobile composition.** This is the single
biggest layout change in the file. It is _not_ a proportional scale of the desktop
cluster — the live's cluster height is **linear in viewport width**, so it is built
from `calc()`s:

```
row    = (100vw - 65px) / 3
video  = (100vw - 48px) * 16/9
height = 2.4444 * 100vw - 47.67px
```

- `.cluster { width: 100vw; height: calc(2.4444*100vw - 47.67px); margin-top: 32px; margin-left: calc(50% - 50vw) }`
- `.cluster::after { border-width: 1px 0 }` — **top and bottom edges only.** The box is
  full-bleed, so its left/right edges land on the viewport boundary and the live does
  not paint them. Verified by pixel probe at 390.
- icon rows become `repeat(3, 1fr)` with an 8.5px gap, `width: calc(100vw - 48px)`

**Sections stack**

| selector            | mobile                 | tablet / desktop                         |
| ------------------- | ---------------------- | ---------------------------------------- |
| `.welcome`          | `padding-block: 80px`  | _(base)_ — same value, a redundant no-op |
| `.declaration`      | `padding-block: 120px` | _(base)_ — same value, a redundant no-op |
| `.declaration-grid` | 1 column, 40px gap     | _(base)_                                 |
| `.change-grid`      | 1 column, 24px gap     | _(base)_                                 |
| `.change`           | `padding-top: 89px`    | _(base)_ 80px                            |
| `.declaration-note` | `padding: 20px 28px`   | `24px 32px`                              |

**Footer flips** — `.footer-inner` goes `column` with a 32px gap; the links stack
_above_ the brand column. The 810+ rule does the opposite (see §5.2).

### 5.2 The tablet query — `@media (min-width: 810px) and (max-width: 1199.98px)`

The "in-between" tier. It is much smaller than the mobile block and is mostly about
proportion rather than structure.

**Nav returns** — identical to the desktop block:

```css
.js .nav-toggle {
  display: none;
}
.js .nav {
  display: flex;
}
.js .nav-panel {
  display: none;
}
```

**Hero / cluster**

- `.hero-lower { grid-template-columns: 1fr }` — the vote block and the cluster
  **stack** (at ≥1200 they sit side by side in `392px 1fr`)
- `.cluster { justify-self: start; margin-top: 40px }` — left-aligned
  (≥1200 is `justify-self: end`, i.e. right)

**Slides become two columns** — this is the tablet tier's real job:

```css
.slide {
  grid-template-columns: minmax(0, 40%) 1fr;
  column-gap: 0;
  align-items: stretch;
}
.slide-copy {
  padding-right: 32px;
}
.slide-panel {
  border-left: 1px solid #000;
  padding: 48px 0 48px 32px;
}
```

The `1px` vertical rule **replaces** the grid gap (`column-gap: 0`), and each side
carries its own padding so text clears the rule. `align-items: stretch` makes the
rule span the full row height. Verified: at 1199 the columns resolve to
`460.391px 690.609px` (40% of the 1151px content box), at 810 to
`304.797px 457.203px`.

**Also** — the `h2` set drops to 48px, `.welcome p { max-width: 100% }`, the
declaration note returns to `24px 32px` / 456px text measure, `.cta { margin-top: 96px }`,
and the footer goes `row` with `align-items: center`, brand left / links right,
40px link gap.

### 5.3 The desktop query — `@media (min-width: 1200px)`

- `.hero-lower { grid-template-columns: 392px 1fr }` — cluster beside the vote block
- `.cluster { justify-self: end }` — right-aligned
- `.slide { grid-template-columns: 536px 1fr }` — a **flat 536px** copy column
  (not a percentage, unlike tablet)
- `.slide-copy { padding-right: 48px }`, `.slide-panel { padding: 48px 0 48px 48px }`
- **`.cards` becomes two columns** — `repeat(2, minmax(0, 1fr))`, gap 24px.
  This is the only card-layout change; tablet and mobile are both a single column.
- `.cta` spreads its heading and button to opposite ends
  (`justify-content: space-between; align-items: center`) instead of stacking
- the same nav rules and the same footer `row` rules as tablet

Verified: at 1440 the slide columns resolve to `536px 616px`.

---

## 6. Gotchas

### 6.1 The `.98` suffix is load-bearing

**Do not "clean up" `809.98px` to `809px`.** The live really does use `809.98px`,
`1199.98px`, `1439.98px` and `1727.98px`, and `index2.css` matches it deliberately.

The suffix is what keeps the ranges from overlapping or leaving a gap when a
viewport lands on a fractional CSS pixel (browser zoom at a non-integer scale, or a
fractional `devicePixelRatio`). With `max-width: 809.98px` the mobile block still
matches at 809.5px, so the handoff is continuous.

`AGENTS.md`'s verification widths are all integers, so the `.98` is invisible to
`cmp.js`. It is still the correct value.

> Note: the **other 6 export pages** in `site.css` use the _integer_ form
> (`809px`, `1199px`, …). Both forms are present in `site.css` because it
> concatenates two generations of Framer CSS with different page roots. Only the
> homepage (`.framer-fu3UK`) uses `.98`. See [§7](#7-the-export-tracks-breakpoints).

### 6.2 The base rules are DESKTOP, not mobile

`index2.css` is **mobile-last**. Unconditional rules carry the desktop values and
the two media queries override them downward:

| selector        | base value (= desktop)                  |
| --------------- | --------------------------------------- |
| `h2` (all four) | `52px / 52px`                           |
| `body`          | `20px / 26px`                           |
| `.slide`        | `grid-template-columns: 1fr; gap: 64px` |
| `.cards`        | `grid-template-columns: 1fr; gap: 16px` |
| `.cluster`      | `760px × 604px`                         |
| `.hero-lower`   | `display: grid` (no columns → single)   |
| `.footer-inner` | `column`, 32px gap                      |

So `.cluster { width: 760px }` looks like a mobile rule and is not — it is the
desktop cluster, and the mobile block replaces it wholesale. **Adding a rule
outside a media query means "at 1200 and up".**

The two columns of the tablet block are the easy thing to get wrong: a base rule
plus a mobile override leaves the tablet tier reading the base unless you also add
it to the tablet query.

### 6.3 The nav is mobile-first, the one exception

Everything else in `index2.css` is mobile-last (§6.2). **The header nav is the
opposite, and this will bite you.**

The _base_ (unconditional) rules are the mobile/burger state:

| line | rule                                 | state                      |
| ---- | ------------------------------------ | -------------------------- |
| 262  | `.nav-toggle { display: none }`      | no-JS → never shown        |
| 284  | `.js .nav-toggle { display: block }` | **JS → burger shown**      |
| 288  | `.js .nav { display: none }`         | **JS → inline nav hidden** |
| 292  | `.js .nav-panel { display: none }`   | panel closed               |
| 313  | `.js .nav-panel[data-open] { … }`    | panel open                 |

Then both `≥810` blocks (lines 1334 and 1434) _opt back into_ the desktop nav:

```css
.js .nav-toggle {
  display: none;
}
.js .nav {
  display: flex;
}
.js .nav-panel {
  display: none;
}
```

Consequence: a nav rule you add in the base is a **mobile** rule, and you must
duplicate it into **both** the tablet and the desktop block to make it apply at
810 and up. Adding it to only one of the two leaves a tier where your rule is
silently wrong.

### 6.4 `.js` is not a breakpoint

`index2.html`'s head does `document.documentElement.className += " js"`. The nav
rules are scoped `.js .nav-toggle`, `.js .nav`, `.js .nav-panel`.

That is **progressive enhancement, not a media query**: without JS the inline nav
stays visible at every width and no burger is ever shown, so a no-JS visitor never
sees a button they cannot operate. The actual breakpoint is still 810 — the `.js`
prefix only decides _who gets the burger_.

### 6.5 There is no JavaScript breakpoint logic at all

Verified: `index2.html` contains **no** `matchMedia`, **no** `innerWidth`, **no**
`resize` listener. All three inline scripts are:

1. the `.js` class,
2. a `fetch` of the live vote total that writes `[data-vote-count]`,
3. the burger click handler toggling `data-open` / `aria-expanded`.

Every responsive behaviour on the page is pure CSS. If you need a new
breakpoint-dependent behaviour, it belongs in `index2.css`. Do not introduce a
JS media-query listener.

### 6.6 The container is NOT a breakpoint

```css
--pad: 24px; /* :root, unconditional */
--measure: 1152px; /* :root, unconditional */

.container {
  width: 100%;
  max-width: calc(var(--measure) + var(--pad) * 2); /* 1200px */
  margin-inline: auto;
  padding-inline: var(--pad);
}
```

No media query. The container is fluid up to a 1200px cap with a 24px gutter.
Verified against the live header at 1440 (x=144, width=1152) and at 810
(x=24, width=762). Don't add a container breakpoint — there isn't one.

### 6.7 Known duplication in the ≥810 blocks

The nav rules (`.js .nav-toggle` / `.js .nav` / `.js .nav-panel`) and the footer
rules (`.footer-inner` / `.footer-links` / `.footer-brand`) are **byte-identical
in the tablet and desktop blocks**. That's harmless and deliberate-looking, but it
is duplication — a shared `@media (min-width: 810px)` block would be equivalent.
Don't treat the two blocks as independently meaningful, and don't "fix" one
without the other.

### 6.8 The boundaries are 810/809 and 1200/1199 — 800 is not one

`AGENTS.md` repeatedly cites 800 as the mobile cutoff ("zero in the DOM ≤800px").
**800 is a test width, not a breakpoint.** The live switches between 810 and 809.
When changing anything structural, test `810` _and_ `809`, not `810` and `800`.

---

## 7. The export track's breakpoints

Only relevant if you ever rebuild the other 6 pages the `index2.html` way
(undecided — see `AGENTS.md`). `assets/css/site.css` contains **14 distinct**
media queries. They fall into two families:

**Homepage root `.framer-fu3UK`** — 4 queries, all `.98`:

```
@media (max-width: 809.98px)
@media (min-width: 810px) and (max-width: 1199.98px)
@media (min-width: 1200px) and (max-width: 1439.98px)
@media (min-width: 1440px) and (max-width: 1727.98px)
```

plus `(always)` for ≥1728.

**Other page roots** (`.framer-nj3x10`, `.framer-90vj06`, …) — the **integer**
form:

```
@media (max-width: 809px) and (min-width: 0)
@media (max-width: 1199px) and (min-width: 810px)
@media (max-width: 1439px) and (min-width: 1200px)
@media (max-width: 1727px) and (min-width: 1440px)
```

Plus one **dead query**: `@media (min-width: 1200px) and (max-width: 1199px)`
appears 3 times and can never match. Harmless; don't propagate it.

Caveat: `site.css` is the **frozen export**, whose HTML no longer matches the live
chunks (see `AGENTS.md` §0). Only the homepage's tier set has been verified against
the live site. Treat the other pages' breakpoints as unverified.

---

## 8. How to verify

Serve over HTTP from the repo root — never `file://`:

```powershell
python -m http.server 8137
```

The sanctioned comparison tool is **`cmp.js`** (`%TEMP%\opencode\`) — it loads the
live site and `http://127.0.0.1:8137/index2.html` side by side and compares
document height, `scrollWidth`, ~25 landmarks and every text node's box. Use the
boundary widths:

```powershell
$env:W="1440,1200,1199,1000,810,809,800,600,390"; node cmp.js
```

Siblings worth knowing: `lottie-geom.js`, `runtime.js`, `turnstile-origin.js`.

### Scripts written for this document

All in `%TEMP%\opencode\`, all Playwright (`playwright-core`):

| script               | what it answers                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `media-inventory.js` | brace-aware dump of every `@media` and its top-level selectors                             |
| `bp-roots.js`        | which Framer page root owns each `@media` in `site.css`                                    |
| `bp-tiers.js`        | **the live's active tier per width**, via CDP `getMatchedStylesForNode` — the source of §3 |
| `bp-sweep.js`        | behavioural sweep of `h2` / nav / burger / cluster / footer per width                      |
| `live-header.js`     | everything the live paints in its top 80px, per width                                      |
| `bp-matched.js`      | which rules match a given node, and their media conditions                                 |

`bp-tiers.js` is the one to re-run if the live site is ever re-exported — it is the
only check that reads the _live_ tier set rather than a local stylesheet.

---

## 9. Stale claims to be aware of

`AGENTS.md` and `docs/NEW_SITE.md` predate the current `index2.html` in places.
Two things asserted there are **not true of the files as they stand now**:

- **The DotLottie players are gone from the page.** `AGENTS.md` describes
  `index2.html` as carrying two vendored `.lottie` players and a 779 KB
  `dotlottie-player-2.5.6.js`. The slide panels are now static `<ul class="cards">`
  lists. `grep` finds **no** `dotlottie`/`lottie` reference in `index2.html` or
  `index2.css`. The asset files are still on disk in `assets/vendor/` and
  `assets/animations/` but **unreferenced** — dead weight. There is also a fourth
  animation, `DpX3m5yT5Z.lottie` (7,324 B), that `AGENTS.md` never mentions.
- **The `--lot-y: -318px` rule does not exist.** `AGENTS.md` lists "the DotLottie
  player is 318px too high from 1200px up" as an open one-line fix in the
  `@media (min-width: 1200px)` block. There is no `--lot-y` in `index2.css`. The
  `≥1200px` block contains only the rules listed in §5.3.

Also note the live site's document height has drifted since `AGENTS.md`'s table was
recorded. Measured 29 Sep 2026 (live vs `index2.html`):

| width | live docH | ours docH | delta     | `AGENTS.md` recorded |
| ----- | --------- | --------- | --------- | -------------------- |
| 1440  | 7396      | 6220      | **−1176** | −1                   |
| 1200  | 7396      | 6220      | **−1176** | −1                   |
| 810   | 7680      | 6981      | **−699**  | —                    |
| 390   | 9039      | 8065      | **−974**  | −694 … −662          |

At 390 the entire footer block sits 974px lower on the live than on ours
(`cmp.js`: `about` −974, `privacy policy` −974, `vote yes for global peace` −974),
so the drift is **content the live has and we do not**, concentrated below the
cards — not a spacing regression in our CSS. The breakpoints themselves are
unaffected: the 810/1200 switch points, the container geometry and the cluster
geometry were all re-verified today against the drifted live and still match.

Two consequences for the diff tools:

- `cmp.js` will now report the **footer copyright as `MISSING`** in both
  directions. That is intentional — we changed it to `© 2026` and the live still
  says `2025`. Not a regression.
- `films MISSING` at mobile is the long-standing false positive documented in
  `AGENTS.md`, not new.

---

## 10. Generic breakpoint advice, considered and declined

[chats/breakpoint-recommendations.md](chats/breakpoint-recommendations.md) is a
general "what are recommended breakpoint sizes these days" answer, kept for
reference. It is **not** a prescription for this repo — the recommendations assume
a new site being designed from scratch, while `index2.html` is a measured
reproduction of a frozen one. Why each suggestion does not apply:

- **Keep 810 and 1200 as-is.** They are not design choices here — they are spec,
  read off the live site via CDP (§3, `bp-tiers.js`). The recommended
  768/1024/1280 would put viewports 1024–1199 in our desktop branch where the live
  uses the tablet branch (§5.2), and would flip five of the widths `cmp.js`
  actually tests.
- **The "add 480 for small phones" and "1440px+/large desktop" tiers are already
  covered.** The mobile tier is fluid off `100vw` — the cluster is
  `calc(2.4444*100vw - 47.67px)` with `repeat(3, 1fr)` rows, verified at
  390/450/550/650/750/800/809 — so a 480 query would have nothing to switch. And
  `.container`'s 1200px cap makes everything above 1200 a **constant** 1152px
  layout, so there is provably nothing for 1440 or 1728 to switch either. That is
  the structural reason §4's collapse is safe, and is stronger than the
  measured-`h2` argument already in that section.
- **"Use a max-width for your content" and "content-driven breakpoints" are
  already satisfied** (§6.6). 1200 is genuinely content-driven: the desktop grids
  sum to it exactly — `392 + 760 = 1152` for `.hero-lower` and `536 + 616 = 1152`
  for `.slide`. 810, by contrast, is *not* fit-driven — the inline nav fits down
  to roughly 680px. What flips at 810 is topology: the cluster (fixed 760×604
  composition → full-bleed linear one) and the hero film (577/435 → 342/381), not
  a squeeze.
- **The only real takeaway was de-duplication**, not breakpoint values: the nav
  and footer rules are byte-identical in the two `≥810` blocks (§6.7), and
  hoisting them into one `@media (min-width: 810px)` would be byte-identical
  output. Deliberately **not applied** — §6.3's "duplicate a nav rule into both
  blocks" footgun stands as-is.

⚠️ **If `--measure` is ever raised, the `@media (min-width: 1200px)` query has to
move with it**, or the desktop grid gets a content box wider than the
`392 + 760` it was tuned for.

- **Unverified:** a `@media (width)` query is evaluated against a viewport width
  that *includes* a classic scrollbar, while `.container`'s `100%` resolves
  against the layout viewport, which *does not*. So at a window viewport of
  roughly 1200–1214px the desktop branch can engage with a content box around
  1137px rather than 1152, leaving the cluster's grid track ~15px short. The live
  Framer site inherits the identical quirk, so parity holds either way. Flagged
  from the CSS spec, not measured — see §8 if it ever needs checking.

**In plain English:** the page's two layout switch points (810 and 1200) aren't a
choice we made — they're exactly where the original website switches, and the entire
goal of this rebuild is to look identical to the original at every screen width, so
they have to stay put. The parts of the advice that *do* make sense to copy — a
mobile layout that flows smoothly instead of jumping, and a content area that stops
growing on huge screens — are already in place, so there's nothing left to change.
