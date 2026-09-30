/**
 * Every link on the site is defined here exactly once.
 *
 * Before this file the same five nav links were written out three times — the
 * desktop `.nav`, the mobile `.nav-panel`, and (in a different grouping) the
 * footer. Adding or removing one meant finding all three. `byId` is the single
 * definition; `primary` and `footerGroups` only reference ids.
 *
 * `external: true` is what makes a link render with target="_blank" rel="noopener".
 */
const byId = {
  about: { label: "About", href: "about.html" },
  events: {
    label: "Events",
    href: "https://www.eventbrite.com/o/global-peace-yes-89857821323",
    external: true,
  },
  donate: { label: "Donate", href: "donate.html" },
  volunteer: { label: "Volunteer", href: "volunteer.html" },
  films: { label: "Films", href: "films.html" },
  // Footer-only. Not in the primary nav.
  privacy: { label: "Privacy Policy", href: "privacy-policy.html" },
};

export default {
  // Desktop nav and mobile panel, in order. The panel additionally appends the
  // Vote Now CTA, which is not a nav link.
  primary: ["about", "events", "donate", "volunteer", "films"],
  // The live footer's three link groups, in order.
  footerGroups: [
    { links: ["about", "events"] },
    { links: ["donate", "volunteer"] },
    { links: ["privacy"] },
  ],
  byId,
};
