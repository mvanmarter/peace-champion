/**
 * Every link on the site is defined here exactly once.
 *
 * Before this file the same five nav links were written out three times — the
 * desktop `.nav`, the mobile `.nav-panel`, and (in a different grouping) the
 * footer. Adding or removing one meant finding all three. `byId` is the single
 * definition; `primary` and `footerGroups` only reference ids.
 *
 * `external: true` is what makes a link render with target="_blank" rel="noopener".
 *
 * The footer is now the same block on all five pages (see `site-footer` in
 * site-new.css): a CTA, a divider, then the link groups and the brand column.
 * On the live site that block is the last element of every page and carries the
 * single "Vote yes for global peace" heading — so the footer, not a separate
 * section, owns the CTA. `social` marks which group gets the icon row.
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
  // Footer-only social links. `icon` is inline SVG geometry on a 24x24 grid,
  // drawn as a 2px stroke (see `.site-footer .footer-social svg`), so it is
  // emitted with `| safe` and must not contain anything untrusted.
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/globalpeaceyes",
    external: true,
    icon:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>' +
      '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>' +
      '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/globalpeaceyes/",
    external: true,
    icon:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>' +
      '<rect x="2" y="9" width="4" height="12"></rect>' +
      '<circle cx="4" cy="4" r="2"></circle>',
  },
};

export default {
  // Desktop nav and mobile panel, in order. The panel additionally appends the
  // Vote Now CTA, which is not a nav link.
  primary: ["about", "events", "donate", "volunteer", "films"],
  // The live footer's three link groups, in order. The third also carries the
  // social icon row, which the live draws under "Privacy Policy".
  footerGroups: [
    { links: ["about", "events"] },
    { links: ["donate", "volunteer"] },
    { links: ["privacy"], social: ["instagram", "linkedin"] },
  ],
  byId,
};
