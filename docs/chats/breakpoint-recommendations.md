# What are recommended breakpoint sizes for websites these days?

These days, I would not design around a long list of device-specific breakpoints. A better approach is to choose a few breakpoints based on where your layout actually needs to change.

## A good modern breakpoint set

For a typical responsive website, I'd start with:

| Breakpoint | Typical purpose |
| --- | --- |
| < 480px | Small phones |
| 480px | Larger phones / small mobile |
| 768px | Tablet / mobile → desktop-ish transition |
| 1024px | Tablet landscape / small laptop |
| 1280px | Desktop |
| 1440px+ | Large desktop / wide displays |

But importantly, you probably don't need all six.

For a modern site, I'd typically use:

```css
/* Mobile-first */
base /* < 768px */

@media (min-width: 768px) {
  /* tablet / medium */
}

@media (min-width: 1024px) {
  /* desktop */
}

@media (min-width: 1280px) {
  /* large desktop */
}
```

And perhaps add 480px only if the design genuinely needs a different layout on very small phones.

## The more important idea: breakpoints should be content-driven

Don't think:

> "iPhone = 390px, tablet = 768px, laptop = 1366px."

Instead think:

> "At what width does this particular layout stop working?"

For example, suppose your navigation is:

```text
LOGO   Products   Solutions   Pricing   About   Contact   [Get Started]
```

If that becomes cramped at around 900px, that's where you introduce the hamburger menu — even if 900px isn't a standard device size.

This is why you will often see breakpoints such as:

```css
@media (min-width: 900px)
```

or

```css
@media (min-width: 960px)
```

There is nothing wrong with that.

## My recommendation for a new website in 2026

If you're building a conventional marketing/content site, I'd use something like:

```css
/* 0–639px: mobile */

@media (min-width: 640px) {
  /* larger mobile / small tablet */
}

@media (min-width: 768px) {
  /* tablet */
}

@media (min-width: 1024px) {
  /* desktop */
}

@media (min-width: 1280px) {
  /* large desktop */
}
```

However, I would only implement a breakpoint when you have a reason for it.

A very clean design system could therefore have just:

- **Mobile** — < 768
- **Tablet** — 768–1023
- **Desktop** — 1024–1279
- **Large** — 1280+

## Don't make 1440px your primary desktop breakpoint

One common mistake is designing the desktop version at 1440px and then treating 1024–1366px as an afterthought.

There are still enormous numbers of users on laptops and smaller desktop windows. Your layout should work very well around:

- 768px
- 1024px
- 1280px
- 1366px
- 1440px
- 1920px

without necessarily having a separate breakpoint for each.

## Also: use a max-width for your content

For large screens, you generally don't want the content continually expanding.

For example:

```css
.container {
  width: min(100% - 2rem, 1280px);
  margin-inline: auto;
}
```

That gives you:

```text
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ┌───────────────────────────────────────────┐               │
│   │                                           │               │
│   │              CONTENT                      │               │
│   │                                           │               │
│   └───────────────────────────────────────────┘               │
│                                                               │
└───────────────────────────────────────────────────────────────┘
1920px
```

The browser can be 1920, 2560, or 3840 pixels wide, but your actual content remains at a comfortable reading/layout width.

## One other modern technique: fewer media queries

CSS has gotten much better at allowing layouts to adapt without explicit breakpoints.

For example:

```css
.hero {
  padding-block: clamp(3rem, 8vw, 8rem);
}

h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
}

.cards {
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  );
}
```

That lets the design fluidly respond to the viewport instead of jumping between fixed sizes.

So if you're designing a site today, I'd generally aim for:

**fluid sizing + a small number of meaningful breakpoints**, rather than a breakpoint for every popular phone/tablet/laptop resolution.
