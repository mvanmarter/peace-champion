import { n as e } from "./rolldown-runtime.DaQlKkf0.mjs";
import {
  E as t,
  M as n,
  O as r,
  S as i,
  _ as a,
  a as o,
  c as s,
  h as ee,
  i as c,
  k as te,
  l,
  o as ne,
  s as u,
} from "./react.DjGraiHU.mjs";
import {
  S as d,
  a as re,
  n as f,
  r as ie,
  t as p,
} from "./motion.BonBzg_H.mjs";
import {
  A as ae,
  L as m,
  R as h,
  S as g,
  T as oe,
  W as _,
  _ as v,
  b as y,
  c as se,
  ct as ce,
  d as b,
  dt as x,
  et as le,
  it as ue,
  j as S,
  k as C,
  m as w,
  mt as T,
  n as E,
  ot as D,
  rt as de,
  st as fe,
  t as O,
  tt as pe,
  u as k,
  ut as me,
  vt as A,
  z as j,
} from "./framer.1egicfVa.mjs";
import {
  a as he,
  c as M,
  i as N,
  n as P,
  o as F,
  r as I,
  s as L,
  t as ge,
} from "./foETv8QB7.DNP8fQPC.mjs";
import {
  _ as R,
  a as _e,
  c as z,
  d as B,
  f as V,
  g as H,
  h as ve,
  i as U,
  l as W,
  m as G,
  o as ye,
  p as be,
  r as xe,
  s as Se,
  u as Ce,
  v as we,
} from "./shared-lib.Da7y4iR1.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./h3JjhDKFx.Cf_Eftua.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./XzgMKSLcl.DfWRurZu.mjs";
import { n as Ne, r as Pe } from "./JanopNEp5.C_jAug0Y.mjs";
var Fe,
  Ie,
  Le,
  Re = e(() => {
    (_(),
      ae.loadFonts([`FS;Manrope-regular`, `FS;Manrope-bold`]),
      (Fe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../fonts/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../fonts/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ie = [
        `.framer-COhGr .framer-styles-preset-rlf4v7:not(.rich-text-wrapper), .framer-COhGr .framer-styles-preset-rlf4v7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1727px) and (min-width: 1440px) { .framer-COhGr .framer-styles-preset-rlf4v7:not(.rich-text-wrapper), .framer-COhGr .framer-styles-preset-rlf4v7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1439px) and (min-width: 1200px) { .framer-COhGr .framer-styles-preset-rlf4v7:not(.rich-text-wrapper), .framer-COhGr .framer-styles-preset-rlf4v7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-COhGr .framer-styles-preset-rlf4v7:not(.rich-text-wrapper), .framer-COhGr .framer-styles-preset-rlf4v7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-COhGr .framer-styles-preset-rlf4v7:not(.rich-text-wrapper), .framer-COhGr .framer-styles-preset-rlf4v7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Le = `framer-COhGr`));
  }),
  ze,
  Be,
  Ve,
  He,
  K,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  q,
  Je,
  Ye,
  J,
  Y,
  X,
  Z,
  Q,
  Xe,
  Ze,
  $,
  Qe,
  $e;
e(() => {
  (ne(),
    _(),
    p(),
    i(),
    o(),
    M(),
    we(),
    Ce(),
    he(),
    V(),
    xe(),
    Re(),
    N(),
    Te(),
    H(),
    z(),
    ke(),
    Ne(),
    (ze = m(B)),
    (Be = m(L)),
    (Ve = m(R)),
    (He = m(F)),
    (K = A(F)),
    (Ue = m(U)),
    (We = m(W)),
    (Ge = {
      cSfDKgYK0: `(min-width: 810px) and (max-width: 1199.98px)`,
      KsBWtohXg: `(min-width: 1200px) and (max-width: 1439.98px)`,
      l2sglEYrG: `(max-width: 809.98px)`,
      q1wwcm8vK: `(min-width: 1440px) and (max-width: 1727.98px)`,
      Rw_QhGAj1: `(min-width: 1728px)`,
    }),
    (Ke = () => typeof document < `u`),
    (qe = []),
    (q = `framer-ggZNy`),
    (Je = {
      cSfDKgYK0: `framer-v-1x1ad55`,
      KsBWtohXg: `framer-v-u2uoie`,
      l2sglEYrG: `framer-v-1eyp2rv`,
      q1wwcm8vK: `framer-v-10jc5iy`,
      Rw_QhGAj1: `framer-v-90vj06`,
    }),
    (Ye = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (X = ({
      children: e,
      blockDocumentScrolling: t,
      dismissWithEsc: n,
      enabled: r = !0,
    }) => {
      let [i, a] = me({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({
        hide: () => a(!1),
        show: () => a(!0),
        toggle: () => a(!i),
        visible: r && i,
      });
    }),
    (Z = (e, t) => `translate(-50%, -50%) ${t}`),
    (Q = {
      "Desktop 2": `q1wwcm8vK`,
      "Desktop 3": `KsBWtohXg`,
      Desktop: `Rw_QhGAj1`,
      Phone: `l2sglEYrG`,
      Tablet: `cSfDKgYK0`,
    }),
    (Xe = ({ value: e }) =>
      D()
        ? null
        : s(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `Rw_QhGAj1`,
    })),
    ($ = T(
      ee(function (e, i) {
        let o = t(null),
          ee = i ?? o,
          ne = a(),
          { activeLocale: p, setLocale: ae } = fe(),
          m = pe(),
          { style: h, className: oe, layoutId: _, variant: S, ...T } = Ze(e);
        ce(te(() => Pe({}, p), [p]));
        let [D, me] = ue(S, Ge, !1),
          { activeVariantCallback: A, delay: he } = le(void 0),
          M = ({ overlay: e }) =>
            A(async (...t) => {
              e.toggle();
            }),
          N = ({ overlay: e }) =>
            A(async (...t) => {
              e.hide();
            }),
          P = C(q, _e, Oe, Me, ge, Le, be),
          F = r(se)?.isLayoutTemplate,
          I = Ye(F, !!r(re)?.transition?.layout),
          z = () => (Ke() ? D !== `l2sglEYrG` : !0),
          V = x(`pFojT34gh`),
          H = t(null),
          ve = x(`h99P5QInJ`),
          G = t(null);
        return (
          de({}),
          s(se.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Q,
              primaryVariantId: `Rw_QhGAj1`,
              variantClassNames: Je,
            },
            children: l(ie, {
              id: _ ?? ne,
              children: [
                s(Xe, {
                  value: `html body { background: rgb(250, 249, 246); }`,
                }),
                l(d.div, {
                  ...T,
                  className: C(P, `framer-90vj06`, oe),
                  ref: ee,
                  style: { ...h },
                  children: [
                    l(d.div, {
                      className: `framer-19jf6kr`,
                      "data-framer-name": `Hero`,
                      layout: I,
                      children: [
                        z() &&
                          l(`div`, {
                            className: `framer-drlpl6 hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-1eljgha`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-8573gu`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1n7o1f4`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-w01ifm`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-15fu43d`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1h9nlnw`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-f8411w`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-152vhwh`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-wzij1e`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1xeoi09`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1hinhg4`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-61jh99`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ntoykz`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-feqqxv`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-6b7khs`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1mtvr00`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1cmrf10`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1eyo467`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1cg79ws`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-lqgkp6`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1hxk1jz`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-8md8jc`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ebz0dy`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-c0a52s`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1liukuk`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        z() &&
                          l(`div`, {
                            className: `framer-1i9k798 hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-drcyjk`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-w58pbp`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-rzsii`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1rq7qyy`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-14vipqj`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1vbi37g`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-c2kdof`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-gjasnr`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ofy1lp`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-14v6f93`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-kxzyqp`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-12xaior`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-12g259y`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ro2y86`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-8zz3no`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-19el9mt`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-uvlws1`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-u44y36`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-y7ljay`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-noeb2b`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1xuhxwy`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1uw9tix`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1rhovdd`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-b3w8ow`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-tdwaon`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        z() &&
                          l(`div`, {
                            className: `framer-aq8x94 hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-11ra3q`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1uro8sc`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-aq906s`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ltbofw`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1ktyghd`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1u9kjgo`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-scxswz`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1dd4xoj`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-11uclkk`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1v4p46w`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-x5tn0l`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1cqks5r`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-kavhbf`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-157tyu2`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-7t0gku`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-5ntqik`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1biev11`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1hsdsd9`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-17jrvl9`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1il2ic7`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1qohjve`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-p6ake1`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1eim1zg`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-2wp2sl`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ohz11u`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        l(`div`, {
                          className: `framer-1hxivmy`,
                          "data-framer-name": `Grid`,
                          children: [
                            l(`div`, {
                              className: `framer-c26jp1`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                s(`div`, {
                                  className: `framer-187j4ip`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                s(`div`, {
                                  className: `framer-1246sqa`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                s(`div`, {
                                  className: `framer-1vsurpd`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                s(`div`, {
                                  className: `framer-1gq3dw7`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-hswago`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                s(`div`, {
                                  className: `framer-1tw0ksq`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                s(`div`, {
                                  className: `framer-1kls3a7`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                s(`div`, {
                                  className: `framer-pwyzjx`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                s(`div`, {
                                  className: `framer-1rdxsue`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-13c3n6w`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                s(`div`, {
                                  className: `framer-add5lb`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                s(`div`, {
                                  className: `framer-rk4z0f`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                s(`div`, {
                                  className: `framer-uhiyjb`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                s(`div`, {
                                  className: `framer-1frpp0e`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1rwmc2u`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                s(`div`, {
                                  className: `framer-9r28ew`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                s(`div`, {
                                  className: `framer-1ixiobw`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                s(`div`, {
                                  className: `framer-rk5jz5`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                s(`div`, {
                                  className: `framer-1xcq8nr`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-11s6eth`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                s(`div`, {
                                  className: `framer-ah887w`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                s(`div`, {
                                  className: `framer-o0gmmd`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                s(`div`, {
                                  className: `framer-17prfb4`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                s(`div`, {
                                  className: `framer-isfymb`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        z() &&
                          l(`div`, {
                            className: `framer-190a9lo hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-l64mqh`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-l0ykga`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-bt0k0b`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-m8tys3`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-3d1jld`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-wjoe9o`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-qwniyp`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-22t79v`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-15hvzkd`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-17ohfjd`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1n33b6l`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-10cqscq`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-ecnole`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-2i07su`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1aeuoth`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1yoj13q`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1hbz6pr`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-js25i3`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1x8dtd8`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-mwbuwx`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-61q1g7`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1jysqqj`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-nl6957`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-2x2sst`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1kga5pu`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        z() &&
                          l(`div`, {
                            className: `framer-1qkkyl8 hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-1p421c0`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-w4vd85`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1daefen`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1j8pecs`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-mlarg7`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-r3jkdg`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1h3ci1t`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1648fvb`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-9ifkcw`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1qacp4d`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1hne5n5`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-kiarh2`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-l0pb1d`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-tglvvy`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-f842ma`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-kxgvjc`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1s8pdx`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1e2wxj8`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-xdzji7`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1b0orca`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1t9nplp`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1gf6tvv`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-tyi3kv`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1mvzke3`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-16uh65g`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        z() &&
                          l(`div`, {
                            className: `framer-tnerqe hidden-1eyp2rv`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              l(`div`, {
                                className: `framer-1w6u7z6`,
                                "data-framer-name": `Frame 69`,
                                children: [
                                  s(`div`, {
                                    className: `framer-cv2fi`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-s7k1cs`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1pgwpzm`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1f3yjsf`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-lcmxfv`,
                                "data-framer-name": `Frame 74`,
                                children: [
                                  s(`div`, {
                                    className: `framer-jy4igu`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-y5bndf`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1m1cvtp`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-141hj15`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-uch9dv`,
                                "data-framer-name": `Frame 75`,
                                children: [
                                  s(`div`, {
                                    className: `framer-16wfp29`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-wt0tkp`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1lz716y`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-hztux9`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-wn6pla`,
                                "data-framer-name": `Frame 78`,
                                children: [
                                  s(`div`, {
                                    className: `framer-1gu0wu9`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-19hvrio`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-cb0pas`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-k7lqhd`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                              l(`div`, {
                                className: `framer-1vf73ih`,
                                "data-framer-name": `Frame 76`,
                                children: [
                                  s(`div`, {
                                    className: `framer-7xkiuh`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 113`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1ii9hwj`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 124`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1c9pv7u`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 122`,
                                  }),
                                  s(`div`, {
                                    className: `framer-1l6j9e6`,
                                    "data-border": !0,
                                    "data-framer-name": `Frame 121`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        s(`div`, {
                          className: `framer-1rwta9y`,
                          children: s(`div`, {
                            className: `framer-6vxxu7`,
                            "data-framer-name": `Hero`,
                            children: l(`div`, {
                              className: `framer-1lbp4lw`,
                              "data-framer-name": `Header`,
                              children: [
                                l(`div`, {
                                  className: `framer-jszrua`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-2j4pyd`,
                                          "data-styles-preset": `SSEsK9psT`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                          },
                                          children: `Promoting the kind in humankind.`,
                                        }),
                                      }),
                                      className: `framer-dfw3yd`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-2j4pyd`,
                                          "data-styles-preset": `SSEsK9psT`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                          },
                                          children: `Peace Entertainment Films`,
                                        }),
                                      }),
                                      className: `framer-15tnkyh`,
                                      "data-framer-name": `vote yes for global peace`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: l(n, {
                                    children: [
                                      s(`p`, {
                                        className: `framer-styles-preset-wlepxr`,
                                        "data-styles-preset": `h3JjhDKFx`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `To help change the world, it is wise to create life-changing experiences that elevate the world’s thinking and strengthen kindness, compassion, and unity. `,
                                      }),
                                      s(`p`, {
                                        className: `framer-styles-preset-wlepxr`,
                                        "data-styles-preset": `h3JjhDKFx`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `Guided by this healing intention, we use the universal power of films to tell wisdom-based stories that teach the heart to love unconditionally and awaken the mind to higher states of consciousness.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1krxkgn`,
                                  "data-framer-name": `vote yes for global peace`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-1auwmy1`,
                      "data-framer-name": `Admissions`,
                      layout: I,
                      children: l(`div`, {
                        className: `framer-gc5c6i`,
                        "data-border": !0,
                        "data-framer-name": `Container`,
                        children: [
                          l(`div`, {
                            className: `framer-11yg9kk`,
                            "data-border": !0,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-1q6512p`,
                                "data-framer-name": `Title`,
                                children: s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-1xt9e56`,
                                      "data-styles-preset": `XzgMKSLcl`,
                                      children: `Admissions`,
                                    }),
                                  }),
                                  className: `framer-fbgo0j`,
                                  "data-framer-name": `helping the world live with love over of fear`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(g, {
                                __fromCanvasComponent: !0,
                                children: s(n, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-wlepxr`,
                                    "data-styles-preset": `h3JjhDKFx`,
                                    children: `“Admissions” stars Academy Award® nominee and Emmy-Award® winner James Cromwell and promotes the establishment of Ministries & Departments of Peace in governments worldwide. The “Admissions Room” setting in the film operates symbolically like a Ministry of Peace with James Cromwell’s character “the clerk” serving as a Minister of Peace. His wise purpose is to resolve conflict and help people, cultures, religions, and countries find forgiveness, common ground, and lasting peace.`,
                                  }),
                                }),
                                className: `framer-b0hsw`,
                                "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(v, {
                            breakpoint: D,
                            overrides: {
                              cSfDKgYK0: { fitImageDimension: `height` },
                              KsBWtohXg: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: j(
                                    (m?.y || 0) + 67 + 581 + 0 + 0 + 302,
                                  ),
                                  pixelHeight: 688,
                                  pixelWidth: 1224,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(max(${m?.width || `100vw`} - 68px, 1px), 1152px)`,
                                  src: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png`,
                                  srcSet: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 512w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1024w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1224w`,
                                },
                              },
                              l2sglEYrG: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: j(
                                    (m?.y || 0) + 67 + 595 + 0 + 0 + 0 + 250,
                                  ),
                                  pixelHeight: 688,
                                  pixelWidth: 1224,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(${m?.width || `100vw`} - 48px, 1152px)`,
                                  src: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png`,
                                  srcSet: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 512w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1024w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1224w`,
                                },
                              },
                            },
                            children: s(k, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                loading: j(
                                  (m?.y || 0) + 67 + 581 + 0 + 0 + 302,
                                ),
                                pixelHeight: 688,
                                pixelWidth: 1224,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `min(max(${m?.width || `100vw`} - 48px, 1px), 1152px)`,
                                src: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png`,
                                srcSet: `../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 512w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1024w,../images/EBOEzXlvm7JGEc6d8mHxHKwCJM.png 1224w`,
                              },
                              className: `framer-d2t7d7`,
                              "data-framer-name": `Thumbnail`,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-116de04`,
                            "data-border": !0,
                            "data-framer-name": `Film Overview`,
                            children: s(`div`, {
                              className: `framer-15xejxw`,
                              "data-framer-name": `Overview Bottom`,
                              children: s(g, {
                                __fromCanvasComponent: !0,
                                children: l(n, {
                                  children: [
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The film’s concise, 20-minute length makes it perfect for classroom study and viral transmission in the world at large. For this reason, the audience for Admissions grows year after year. `,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The film has now won over 30 International Awards and has been translated into Spanish, German, Italian, Arabic, Hebrew, and Farsi and broadcast to 80 million homes. `,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The deeply relevant modern parable is also taught in the world-renowned curriculum of The Stanford University Forgiveness Project and has been screened in prestigious venues across the globe, including The Parliament of World Religions, The Jimmy Carter Presidential Library, and The Rotary Global Peace Conference. `,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The Time Is Now theme song in the end credits was a finalist in the Global Peace Song Awards.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1ir9eb7`,
                                "data-framer-name": `Crispin Clarke`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          l(`div`, {
                            className: `framer-wx37n4`,
                            "data-border": !0,
                            "data-framer-name": `Film Time`,
                            children: [
                              s(v, {
                                breakpoint: D,
                                overrides: {
                                  l2sglEYrG: {
                                    children: l(n, {
                                      children: [
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `Admissions and The Time is Now were written and co-produced`,
                                        }),
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `by PEACE CHAMPION Co-founder, John Viscount`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: s(g, {
                                  __fromCanvasComponent: !0,
                                  children: l(n, {
                                    children: [
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `Admissions and The Time is Now were written and co-produced`,
                                      }),
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `by PEACE CHAMPION Co-founder, John Viscount`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-imekfa`,
                                  fonts: [`FS;Manrope-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(`div`, {
                                className: `framer-g0muoh`,
                                "data-framer-name": `Time + Preview`,
                                children: [
                                  s(g, {
                                    __fromCanvasComponent: !0,
                                    children: s(n, {
                                      children: s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1ib2xk`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `17px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `140%`,
                                        },
                                        children: `Run-time: 22 min.`,
                                      }),
                                    }),
                                    className: `framer-1qw4z98`,
                                    fonts: [`FS;Manrope-bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  s(X, {
                                    blockDocumentScrolling: !0,
                                    dismissWithEsc: !0,
                                    children: (e) =>
                                      s(u, {
                                        children: s(v, {
                                          breakpoint: D,
                                          overrides: {
                                            cSfDKgYK0: {
                                              y:
                                                (m?.y || 0) +
                                                67 +
                                                581 +
                                                0 +
                                                0 +
                                                1612 +
                                                23 +
                                                0 +
                                                33.8,
                                            },
                                            l2sglEYrG: {
                                              y:
                                                (m?.y || 0) +
                                                67 +
                                                595 +
                                                0 +
                                                0 +
                                                0 +
                                                1112 +
                                                23 +
                                                250 +
                                                0 +
                                                33.8,
                                            },
                                          },
                                          children: s(O, {
                                            height: 35,
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              581 +
                                              0 +
                                              0 +
                                              1611.5 +
                                              23 +
                                              0 +
                                              33.8,
                                            children: l(E, {
                                              className: `framer-1l2jub2-container`,
                                              id: `1l2jub2`,
                                              nodeId: `wOnuqIW36`,
                                              scopeId: `JanopNEp5`,
                                              children: [
                                                s(B, {
                                                  hDCfDLevY: M({ overlay: e }),
                                                  height: `100%`,
                                                  id: `wOnuqIW36`,
                                                  layoutId: `wOnuqIW36`,
                                                  OrxO1kMMP: `Watch Film`,
                                                  variant: J(
                                                    e.visible && `oT2Re4_ZM`,
                                                    e.visible
                                                      ? `oT2Re4_ZM`
                                                      : `KiiZYVQb4`,
                                                  ),
                                                  width: `100%`,
                                                  y83G76X8S: `https://vimeo.com/1132595380?fl=tl&fe=ec`,
                                                }),
                                                s(f, {
                                                  children:
                                                    e.visible &&
                                                    s(u, {
                                                      children: c(
                                                        s(b, {
                                                          triggerId: `1l2jub2`,
                                                          children: l(y, {
                                                            children: [
                                                              s(
                                                                d.div,
                                                                {
                                                                  animate: {
                                                                    opacity: 1,
                                                                    transition:
                                                                      {
                                                                        delay: 0,
                                                                        duration: 0.3,
                                                                        ease: [
                                                                          0.5,
                                                                          0,
                                                                          0.88,
                                                                          0.77,
                                                                        ],
                                                                        type: `tween`,
                                                                      },
                                                                  },
                                                                  className: C(
                                                                    P,
                                                                    `framer-1my46w1`,
                                                                  ),
                                                                  "data-framer-portal-id": `1l2jub2`,
                                                                  exit: {
                                                                    opacity: 0,
                                                                    transition:
                                                                      {
                                                                        delay: 0,
                                                                        duration: 0,
                                                                        ease: [
                                                                          0, 0,
                                                                          1, 1,
                                                                        ],
                                                                        type: `tween`,
                                                                      },
                                                                  },
                                                                  initial: {
                                                                    opacity: 0,
                                                                  },
                                                                  onTap: () =>
                                                                    e.hide(),
                                                                },
                                                                `NYmygxLab`,
                                                              ),
                                                              l(d.div, {
                                                                className: C(
                                                                  P,
                                                                  `framer-vrt56s`,
                                                                ),
                                                                "data-framer-name": `Preview Wrapper`,
                                                                "data-framer-portal-id": `1l2jub2`,
                                                                children: [
                                                                  s(O, {
                                                                    children: s(
                                                                      E,
                                                                      {
                                                                        className: `framer-1nex5o6-container`,
                                                                        inComponentSlot:
                                                                          !0,
                                                                        isAuthoredByUser:
                                                                          !0,
                                                                        isModuleExternal:
                                                                          !0,
                                                                        nodeId: `QTGuBiosP`,
                                                                        rendersWithMotion:
                                                                          !0,
                                                                        scopeId: `JanopNEp5`,
                                                                        children:
                                                                          s(L, {
                                                                            autoplay:
                                                                              !1,
                                                                            backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                            borderRadius: 0,
                                                                            bottomLeftRadius: 0,
                                                                            bottomRightRadius: 0,
                                                                            controls:
                                                                              !0,
                                                                            height: `100%`,
                                                                            id: `QTGuBiosP`,
                                                                            isMixedBorderRadius:
                                                                              !1,
                                                                            layoutId: `QTGuBiosP`,
                                                                            loop: !1,
                                                                            mute: !1,
                                                                            style:
                                                                              {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            topLeftRadius: 0,
                                                                            topRightRadius: 0,
                                                                            video: `https://vimeo.com/1132598832/95654404d8?fl=pl&fe=sh`,
                                                                            width: `100%`,
                                                                          }),
                                                                      },
                                                                    ),
                                                                  }),
                                                                  s(O, {
                                                                    children: s(
                                                                      E,
                                                                      {
                                                                        className: `framer-f5x2gu-container`,
                                                                        inComponentSlot:
                                                                          !0,
                                                                        isAuthoredByUser:
                                                                          !0,
                                                                        isModuleExternal:
                                                                          !0,
                                                                        nodeId: `iVpSq2Og8`,
                                                                        rendersWithMotion:
                                                                          !0,
                                                                        scopeId: `JanopNEp5`,
                                                                        children:
                                                                          s(R, {
                                                                            color: `var(--token-9590db14-fb3c-4b21-9e1d-4bea837e55ea, rgb(255, 255, 255))`,
                                                                            height: `100%`,
                                                                            iconSearch: `Home`,
                                                                            iconSelection: `x`,
                                                                            id: `iVpSq2Og8`,
                                                                            layoutId: `iVpSq2Og8`,
                                                                            mirrored:
                                                                              !1,
                                                                            onClick:
                                                                              N(
                                                                                {
                                                                                  overlay:
                                                                                    e,
                                                                                },
                                                                              ),
                                                                            selectByList:
                                                                              !0,
                                                                            style:
                                                                              {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            width: `100%`,
                                                                          }),
                                                                      },
                                                                    ),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                        Y(),
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l(d.div, {
                      className: `framer-b985qc`,
                      "data-border": !0,
                      "data-framer-name": `About Admissions`,
                      layout: I,
                      children: [
                        s(`div`, {
                          className: `framer-zrfv11`,
                          "data-framer-name": `Left`,
                          children: s(`div`, {
                            className: `framer-7y9l0u`,
                            "data-border": !0,
                            "data-framer-name": `Admissions James`,
                            id: V,
                            ref: H,
                            children: l(`div`, {
                              className: `framer-10mrnj2`,
                              "data-framer-name": `Left Content`,
                              children: [
                                l(`div`, {
                                  className: `framer-1dtjcq7`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h5`, {
                                          className: `framer-styles-preset-16h47ph`,
                                          "data-styles-preset": `foETv8QB7`,
                                          children: `Admissions`,
                                        }),
                                      }),
                                      className: `framer-nh45on`,
                                      "data-framer-name": `you can feel it`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-2j4pyd`,
                                          "data-styles-preset": `SSEsK9psT`,
                                          children: `About James Cromwell`,
                                        }),
                                      }),
                                      className: `framer-w4sycu`,
                                      "data-framer-name": `it’s right outside your door.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(v, {
                                  breakpoint: D,
                                  overrides: {
                                    cSfDKgYK0: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j(
                                          (m?.y || 0) +
                                            67 +
                                            2387.8 +
                                            0 +
                                            0 +
                                            0 +
                                            64 +
                                            0 +
                                            129.6,
                                        ),
                                        pixelHeight: 878,
                                        pixelWidth: 800,
                                        sizes: `calc(${m?.width || `100vw`} / 2 - 64px)`,
                                        src: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp`,
                                        srcSet: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp 800w`,
                                      },
                                    },
                                    l2sglEYrG: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j(
                                          (m?.y || 0) +
                                            67 +
                                            2151.8 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            129.6,
                                        ),
                                        pixelHeight: 878,
                                        pixelWidth: 800,
                                        sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                        src: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp`,
                                        srcSet: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp 800w`,
                                      },
                                    },
                                  },
                                  children: s(k, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          2387.3 +
                                          0 +
                                          0 +
                                          0 +
                                          64 +
                                          0 +
                                          129.6,
                                      ),
                                      pixelHeight: 878,
                                      pixelWidth: 800,
                                      sizes: `min((${m?.width || `100vw`} / 2 - 64px) * 0.67, 536px)`,
                                      src: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp`,
                                      srcSet: `../images/zIVoMXnn9Kyhjek3T5fl0AmVKTo.webp 800w`,
                                    },
                                    className: `framer-1t0bpoa`,
                                    "data-border": !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l(`div`, {
                          className: `framer-a0w5rb`,
                          "data-framer-name": `Right`,
                          children: [
                            l(`div`, {
                              className: `framer-1u2g70b`,
                              "data-framer-name": `Director Content`,
                              children: [
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `JAMES CROMWELL received a Best Supporting Actor Oscar nomination for his performance as Farmer Hoggett in the international smash, Babe, and went on to play the role in the hit sequel Babe: Pig in the City. Cromwell’s other memorable motion picture work includes The Longest Yard, I, Robot, Space Cowboys, Frank Darabont’s critically acclaimed The Green Mile, The General’s Daughter, Snow Falling on Cedars, The Bachelor, The Sum of All Fears, Star Trek: First Contact, The People vs. Larry Flynt, DreamWorks SKG’s Spirit: Stallion of The Cimarron, Stephen Frears’ Oscar nominated The Queen, Becoming Jane, The Education of Little Tree, Secretariat, Spiderman 3, and as Police Captain, Dudley Smith, in L.A. Confidential. He played a pivotal role in The Artist, which received the Oscar for Best Picture. He was the first recipient of the Canadian Screen Best Actor Award for his role in the film Still Mine.`,
                                    }),
                                  }),
                                  className: `framer-s43a3u`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Cromwell recently won an Emmy for his portrayal of Dr. Arden on American Horror Story: Asylum. He earned multiple Emmy nominations for his work on the HBO original series, Six Feet Under, the HBO movie, RKO 281, and the NBC drama, ER. His body of work encompasses dozens of miniseries and movies-of-the-week, including a starring role in TNT’s A Slight Case of Murder, ABC's Betrayal, a cameo appearance in HBO’s Angels in America, West Wing, Picket Fences, Home Improvement, L.A. Law, Star Trek: The Next Generation, and is now shooting a new series, Murder in The First.`,
                                    }),
                                  }),
                                  className: `framer-b60oiu`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Cromwell has also performed in many revered plays, including Hamlet, The Iceman Cometh, Devil’s Disciple, All’s Well That Ends Well, Beckett, and Othello in many of the country’s most distinguished theaters, including the South Coast Repertory, the Goodman Theatre, the Mark Taper Forum, the American Shakespeare Festival, Center Stage, the Long Wharf Theatre, and the Old Globe. He recently played A. E. Houseman in the American premiere of Tom Stoppard’s The Invention of Love at ACT in San Francisco. Cromwell has directed at resident theaters across the country and was the founder and Artistic Director of his own company, Stage West, in Springfield, Massachusetts. He also co-directed a short film, which was shown at the London Film Festival.`,
                                    }),
                                  }),
                                  className: `framer-86ley7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Born in Los Angeles, Cromwell grew up in New York and Waterford, Connecticut, and studied at Carnegie Mellon University (then Carnegie Tech). His father, John Cromwell, an acclaimed actor and director, was one of the first presidents of the Screen Directors Guild. His mother, Kay Johnson, was an actress of stage and film.`,
                                    }),
                                  }),
                                  className: `framer-1voxn9m`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(X, {
                                  blockDocumentScrolling: !0,
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(u, {
                                      children: s(v, {
                                        breakpoint: D,
                                        overrides: {
                                          cSfDKgYK0: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              2387.8 +
                                              0 +
                                              64 +
                                              0 +
                                              0 +
                                              680,
                                          },
                                          l2sglEYrG: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              2151.8 +
                                              0 +
                                              775.6 +
                                              64 +
                                              0 +
                                              0 +
                                              680,
                                          },
                                        },
                                        children: s(O, {
                                          height: 35,
                                          y:
                                            (m?.y || 0) +
                                            67 +
                                            2387.3 +
                                            0 +
                                            64 +
                                            0 +
                                            0 +
                                            680,
                                          children: l(E, {
                                            className: `framer-ztqx1m-container`,
                                            id: `ztqx1m`,
                                            nodeId: `JN0jwMZdo`,
                                            scopeId: `JanopNEp5`,
                                            children: [
                                              s(B, {
                                                hDCfDLevY: M({ overlay: e }),
                                                height: `100%`,
                                                id: `JN0jwMZdo`,
                                                layoutId: `JN0jwMZdo`,
                                                OrxO1kMMP: `Watch Film`,
                                                variant: J(
                                                  e.visible && `oT2Re4_ZM`,
                                                  e.visible
                                                    ? `oT2Re4_ZM`
                                                    : `KiiZYVQb4`,
                                                ),
                                                width: `100%`,
                                              }),
                                              s(f, {
                                                children:
                                                  e.visible &&
                                                  s(u, {
                                                    children: c(
                                                      s(b, {
                                                        triggerId: `ztqx1m`,
                                                        children: l(y, {
                                                          children: [
                                                            s(
                                                              d.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [
                                                                      0.5, 0,
                                                                      0.88,
                                                                      0.77,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                className: C(
                                                                  P,
                                                                  `framer-17d6mh7`,
                                                                ),
                                                                "data-framer-portal-id": `ztqx1m`,
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0,
                                                                    ease: [
                                                                      0, 0, 1,
                                                                      1,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  e.hide(),
                                                              },
                                                              `qVx6zgstH`,
                                                            ),
                                                            l(d.div, {
                                                              className: C(
                                                                P,
                                                                `framer-17wmzpe`,
                                                              ),
                                                              "data-framer-name": `Preview Wrapper`,
                                                              "data-framer-portal-id": `ztqx1m`,
                                                              children: [
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-1y3syix-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `j8gtKt3AY`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(L, {
                                                                          autoplay:
                                                                            !1,
                                                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                          borderRadius: 0,
                                                                          bottomLeftRadius: 0,
                                                                          bottomRightRadius: 0,
                                                                          controls:
                                                                            !0,
                                                                          height: `100%`,
                                                                          id: `j8gtKt3AY`,
                                                                          isMixedBorderRadius:
                                                                            !1,
                                                                          layoutId: `j8gtKt3AY`,
                                                                          loop: !1,
                                                                          mute: !1,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          topLeftRadius: 0,
                                                                          topRightRadius: 0,
                                                                          video: `https://vimeo.com/1132595380/0651ddd552?fl=pl&fe=sh`,
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-iph27h-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `FVJRs96J1`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(R, {
                                                                          color: `var(--token-9590db14-fb3c-4b21-9e1d-4bea837e55ea, rgb(255, 255, 255))`,
                                                                          height: `100%`,
                                                                          iconSearch: `Home`,
                                                                          iconSelection: `x`,
                                                                          id: `FVJRs96J1`,
                                                                          layoutId: `FVJRs96J1`,
                                                                          mirrored:
                                                                            !1,
                                                                          onClick:
                                                                            N({
                                                                              overlay:
                                                                                e,
                                                                            }),
                                                                          selectByList:
                                                                            !0,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Y(),
                                                    ),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-rlf4v7`,
                                      "data-styles-preset": `A9_Ewbxwq`,
                                      children: s(w, {
                                        href: { webPageId: `N5J0YRRfS` },
                                        motionChild: !0,
                                        nodeId: `W9uF8lz_k`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `JanopNEp5`,
                                        smoothScroll: !1,
                                        children: s(d.a, {
                                          className: `framer-styles-preset-9z5it5`,
                                          "data-styles-preset": `mt77im6XF`,
                                          children: `Thank you for making a $2 donation in order to watch Admissions`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-k3sl8s`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            z() &&
                              s(v, {
                                breakpoint: D,
                                overrides: {
                                  cSfDKgYK0: {
                                    y: (m?.y || 0) + 67 + 2387.8 + 0 + 102.5887,
                                  },
                                },
                                children: s(O, {
                                  height: 798,
                                  width: `864px`,
                                  y: (m?.y || 0) + 67 + 2387.3 + 0 + 102.5887,
                                  children: s(E, {
                                    className: `framer-enkg5i-container hidden-1eyp2rv`,
                                    nodeId: `JXQT6b4DU`,
                                    rendersWithMotion: !0,
                                    scopeId: `JanopNEp5`,
                                    transformTemplate: Z,
                                    children: s(K, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: H, target: `oMsCODsYX` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `JXQT6b4DU`,
                                      layoutId: `JXQT6b4DU`,
                                      style: { width: `100%` },
                                      variant: J(`oMsCODsYX`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-uttvae`,
                      "data-framer-name": `The Principle`,
                      layout: I,
                      children: l(`div`, {
                        className: `framer-16yl664`,
                        "data-border": !0,
                        "data-framer-name": `Container`,
                        children: [
                          l(`div`, {
                            className: `framer-zwem5o`,
                            "data-border": !0,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-hhkicz`,
                                "data-framer-name": `Title`,
                                children: s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-1xt9e56`,
                                      "data-styles-preset": `XzgMKSLcl`,
                                      children: `The Principle`,
                                    }),
                                  }),
                                  className: `framer-yg5haq`,
                                  "data-framer-name": `helping the world live with love over of fear`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(g, {
                                __fromCanvasComponent: !0,
                                children: l(n, {
                                  children: [
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Throughout history, traditional bullying in all its forms has destroyed millions of lives both on the personal level and, on the international level, in endless wars. The global reach and instant, 24-hour accessibility of today’s internet and social media platforms make modern cyberbullying even more destructive. This devastating plague of the digital age affects millions of people and is rapidly spreading. Increasing numbers of children, teenagers, and adults are being bullied online and on social media, with often tragic consequences like suicide and extreme acts of gun violence. `,
                                    }),
                                    s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `This bullying has led to a gross coarsening of public dialogue and sets the worst kind of example for our world's impressionable youth, who are increasingly adopting these bad habits at earlier ages. This has strengthened prejudice and division in society and has resulted in an overall loss of kindness in our world. `,
                                    }),
                                  ],
                                }),
                                className: `framer-2py3ul`,
                                "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(v, {
                            breakpoint: D,
                            overrides: {
                              cSfDKgYK0: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: j(
                                    (m?.y || 0) + 67 + 3389.8 + 80 + 0 + 464,
                                  ),
                                  pixelHeight: 347,
                                  pixelWidth: 610,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(max(${m?.width || `100vw`} - 48px, 1px), 1152px)`,
                                  src: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png`,
                                  srcSet: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 512w,../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 610w`,
                                },
                                fitImageDimension: `height`,
                              },
                              KsBWtohXg: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: j(
                                    (m?.y || 0) + 67 + 3389.3 + 80 + 0 + 464,
                                  ),
                                  pixelHeight: 347,
                                  pixelWidth: 610,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(max(${m?.width || `100vw`} - 68px, 1px), 1152px)`,
                                  src: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png`,
                                  srcSet: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 512w,../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 610w`,
                                },
                              },
                              l2sglEYrG: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: j(
                                    (m?.y || 0) +
                                      67 +
                                      3929.4 +
                                      80 +
                                      0 +
                                      0 +
                                      412,
                                  ),
                                  pixelHeight: 347,
                                  pixelWidth: 610,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(${m?.width || `100vw`} - 48px, 1152px)`,
                                  src: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png`,
                                  srcSet: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 512w,../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 610w`,
                                },
                              },
                            },
                            children: s(k, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                loading: j(
                                  (m?.y || 0) + 67 + 3389.3 + 80 + 0 + 464,
                                ),
                                pixelHeight: 347,
                                pixelWidth: 610,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `min(max(${m?.width || `100vw`} - 48px, 1px), 1152px)`,
                                src: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png`,
                                srcSet: `../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 512w,../images/NkUtS7KG7xqOHqXOlzpPDD1PM0.png 610w`,
                              },
                              className: `framer-1o135nh`,
                              "data-framer-name": `Thumbnail`,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-41p75e`,
                            "data-border": !0,
                            "data-framer-name": `Film Overview`,
                            children: s(`div`, {
                              className: `framer-10bb625`,
                              "data-framer-name": `Overview Bottom`,
                              children: s(g, {
                                __fromCanvasComponent: !0,
                                children: s(n, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-wlepxr`,
                                    "data-styles-preset": `h3JjhDKFx`,
                                    children: `In “The Principle”, an enlightened master played by 4-Time Grammy Award nominee Mickey Guyton, is called upon to moderate between two teenagers - a painfully misguided cyberbully and the tragic target of his abuse. In this life-changing confrontation, the master delivers transformational wisdom that alters the two young men’s destinies and is designed to help heal cyberbullying in the world at large.`,
                                  }),
                                }),
                                className: `framer-1pcynvb`,
                                "data-framer-name": `Crispin Clarke`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          l(`div`, {
                            className: `framer-9b3uwy`,
                            "data-border": !0,
                            "data-framer-name": `Film Time`,
                            children: [
                              s(v, {
                                breakpoint: D,
                                overrides: {
                                  l2sglEYrG: {
                                    children: l(n, {
                                      children: [
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `The Principle premiered at The Martin Luther King Jr. Center for Nonviolent Social`,
                                        }),
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `Change “Be Love Day” Global Celebration with King Center CEO and Global Thought`,
                                        }),
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `Leader, Dr. Bernice King, Mickey Guyton, Malcolm Jamaal Warner, and John Viscount.`,
                                        }),
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `The Principle and its theme song, Love Being were written and co-produced by John`,
                                        }),
                                        s(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-line-height": `140%`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                          },
                                          children: `Viscount.`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: s(g, {
                                  __fromCanvasComponent: !0,
                                  children: l(n, {
                                    children: [
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `The Principle premiered at The Martin Luther King Jr. Center for Nonviolent Social`,
                                      }),
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `Change “Be Love Day” Global Celebration with King Center CEO and Global Thought`,
                                      }),
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `Leader, Dr. Bernice King, Mickey Guyton, Malcolm Jamaal Warner, and John Viscount.`,
                                      }),
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `The Principle and its theme song, Love Being were written and co-produced by John`,
                                      }),
                                      s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1yZWd1bGFy`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `140%`,
                                          "--framer-text-color": `var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, rgb(0, 0, 0))`,
                                        },
                                        children: `Viscount.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-3v9aig`,
                                  fonts: [`FS;Manrope-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(`div`, {
                                className: `framer-7osyir`,
                                "data-framer-name": `Time + Preview`,
                                children: [
                                  s(g, {
                                    __fromCanvasComponent: !0,
                                    children: s(n, {
                                      children: s(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TWFucm9wZS1ib2xk`,
                                          "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                          "--framer-font-size": `17px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `140%`,
                                        },
                                        children: `Run-time: 30 min.`,
                                      }),
                                    }),
                                    className: `framer-1qmme83`,
                                    fonts: [`FS;Manrope-bold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  s(X, {
                                    blockDocumentScrolling: !0,
                                    dismissWithEsc: !0,
                                    children: (e) =>
                                      s(u, {
                                        children: s(v, {
                                          breakpoint: D,
                                          overrides: {
                                            cSfDKgYK0: {
                                              y:
                                                (m?.y || 0) +
                                                67 +
                                                3389.8 +
                                                80 +
                                                0 +
                                                1288 +
                                                23 +
                                                145 +
                                                0 +
                                                33.8,
                                            },
                                            l2sglEYrG: {
                                              y:
                                                (m?.y || 0) +
                                                67 +
                                                3929.4 +
                                                80 +
                                                0 +
                                                0 +
                                                788 +
                                                23 +
                                                565 +
                                                0 +
                                                33.8,
                                            },
                                          },
                                          children: s(O, {
                                            height: 35,
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              3389.3 +
                                              80 +
                                              0 +
                                              1296 +
                                              23 +
                                              0 +
                                              33.8,
                                            children: l(E, {
                                              className: `framer-82fcw5-container`,
                                              id: `82fcw5`,
                                              nodeId: `lHqqO8Baf`,
                                              scopeId: `JanopNEp5`,
                                              children: [
                                                s(B, {
                                                  hDCfDLevY: M({ overlay: e }),
                                                  height: `100%`,
                                                  id: `lHqqO8Baf`,
                                                  layoutId: `lHqqO8Baf`,
                                                  OrxO1kMMP: `Watch Film`,
                                                  variant: J(
                                                    e.visible && `oT2Re4_ZM`,
                                                    e.visible
                                                      ? `oT2Re4_ZM`
                                                      : `KiiZYVQb4`,
                                                  ),
                                                  width: `100%`,
                                                  y83G76X8S: `https://vimeo.com/1132302418?fl=ml&fe=ec`,
                                                }),
                                                s(f, {
                                                  children:
                                                    e.visible &&
                                                    s(u, {
                                                      children: c(
                                                        s(b, {
                                                          triggerId: `82fcw5`,
                                                          children: l(y, {
                                                            children: [
                                                              s(
                                                                d.div,
                                                                {
                                                                  animate: {
                                                                    opacity: 1,
                                                                    transition:
                                                                      {
                                                                        delay: 0,
                                                                        duration: 0.3,
                                                                        ease: [
                                                                          0.5,
                                                                          0,
                                                                          0.88,
                                                                          0.77,
                                                                        ],
                                                                        type: `tween`,
                                                                      },
                                                                  },
                                                                  className: C(
                                                                    P,
                                                                    `framer-wpb847`,
                                                                  ),
                                                                  "data-framer-portal-id": `82fcw5`,
                                                                  exit: {
                                                                    opacity: 0,
                                                                    transition:
                                                                      {
                                                                        delay: 0,
                                                                        duration: 0,
                                                                        ease: [
                                                                          0, 0,
                                                                          1, 1,
                                                                        ],
                                                                        type: `tween`,
                                                                      },
                                                                  },
                                                                  initial: {
                                                                    opacity: 0,
                                                                  },
                                                                  onTap: () =>
                                                                    e.hide(),
                                                                },
                                                                `HFL6P_LLJ`,
                                                              ),
                                                              l(d.div, {
                                                                className: C(
                                                                  P,
                                                                  `framer-fhjw2v`,
                                                                ),
                                                                "data-framer-name": `Preview Wrapper`,
                                                                "data-framer-portal-id": `82fcw5`,
                                                                children: [
                                                                  s(O, {
                                                                    children: s(
                                                                      E,
                                                                      {
                                                                        className: `framer-1a19iox-container`,
                                                                        inComponentSlot:
                                                                          !0,
                                                                        isAuthoredByUser:
                                                                          !0,
                                                                        isModuleExternal:
                                                                          !0,
                                                                        nodeId: `f97Xw8azB`,
                                                                        rendersWithMotion:
                                                                          !0,
                                                                        scopeId: `JanopNEp5`,
                                                                        children:
                                                                          s(L, {
                                                                            autoplay:
                                                                              !1,
                                                                            backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                            borderRadius: 0,
                                                                            bottomLeftRadius: 0,
                                                                            bottomRightRadius: 0,
                                                                            controls:
                                                                              !0,
                                                                            height: `100%`,
                                                                            id: `f97Xw8azB`,
                                                                            isMixedBorderRadius:
                                                                              !1,
                                                                            layoutId: `f97Xw8azB`,
                                                                            loop: !1,
                                                                            mute: !1,
                                                                            style:
                                                                              {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            topLeftRadius: 0,
                                                                            topRightRadius: 0,
                                                                            video: `https://vimeo.com/1146761342/c9a992902e`,
                                                                            width: `100%`,
                                                                          }),
                                                                      },
                                                                    ),
                                                                  }),
                                                                  s(O, {
                                                                    children: s(
                                                                      E,
                                                                      {
                                                                        className: `framer-1udvn23-container`,
                                                                        inComponentSlot:
                                                                          !0,
                                                                        isAuthoredByUser:
                                                                          !0,
                                                                        isModuleExternal:
                                                                          !0,
                                                                        nodeId: `xgEyzZBWv`,
                                                                        rendersWithMotion:
                                                                          !0,
                                                                        scopeId: `JanopNEp5`,
                                                                        children:
                                                                          s(R, {
                                                                            color: `var(--token-9590db14-fb3c-4b21-9e1d-4bea837e55ea, rgb(255, 255, 255))`,
                                                                            height: `100%`,
                                                                            iconSearch: `Home`,
                                                                            iconSelection: `x`,
                                                                            id: `xgEyzZBWv`,
                                                                            layoutId: `xgEyzZBWv`,
                                                                            mirrored:
                                                                              !1,
                                                                            onClick:
                                                                              N(
                                                                                {
                                                                                  overlay:
                                                                                    e,
                                                                                },
                                                                              ),
                                                                            selectByList:
                                                                              !0,
                                                                            style:
                                                                              {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            width: `100%`,
                                                                          }),
                                                                      },
                                                                    ),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                        Y(),
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l(d.div, {
                      className: `framer-1m5o4hq`,
                      "data-framer-name": `Press Release`,
                      layout: I,
                      children: [
                        s(`div`, {
                          className: `framer-utetjz`,
                          "data-border": !0,
                          "data-framer-name": `Container`,
                          children: l(`div`, {
                            className: `framer-z8sj3w`,
                            "data-border": !0,
                            "data-framer-name": `Left`,
                            children: [
                              s(`div`, {
                                className: `framer-xdff2f`,
                                "data-framer-name": `Header`,
                                children: s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-1xt9e56`,
                                      "data-styles-preset": `XzgMKSLcl`,
                                      children: `The Principle Press release`,
                                    }),
                                  }),
                                  className: `framer-1prmqmc`,
                                  "data-framer-name": `helping the world live with love over of fear`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(g, {
                                __fromCanvasComponent: !0,
                                children: s(n, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-wlepxr`,
                                    "data-styles-preset": `h3JjhDKFx`,
                                    children: `Four-time Grammy-Nominee Mickey Guyton Makes Her Acting Debut with\xA0Groundbreaking\xA0Cyber-Bullying Short Film\xA0"The Principle”`,
                                  }),
                                }),
                                className: `framer-15nc0lp`,
                                "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                        l(`div`, {
                          className: `framer-1rgy0l0`,
                          children: [
                            l(`div`, {
                              className: `framer-9vbtvf`,
                              "data-border": !0,
                              "data-framer-name": `Content`,
                              children: [
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Utilizing the latest in cutting-edge on-set virtual production technology, four-time Grammy nominee Mickey Guyton makes her acting debut in the transformational short film "The Principle." The film tackles the destructive plague of the digital age, cyber-bullying, and brings together an unprecedented level of award-winning talent dedicated to promoting kindness in the modern age.`,
                                    }),
                                  }),
                                  className: `framer-f8pudh`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `The crew of "The Principal" includes Emmy-winning cinematographer Baz Idoine ("Thor: Love and Thunder, "Rogue One: A Star Wars Story, "The Mandalorian," "There Will Be Blood") and Oscar-nominated sound mixer Julian Howarth ("Avatar: The Way of Water," "Obi-Wan Kenobi"), ILM's Christopher Balog, known for his work on notable projects such as "Transformers: Dark of the Moon," "The Avengers," "Star Trek," "Obi-Wan Kenobi," "The Mandalorian," and "Space Jam: A New Legacy," serves as the VFX supervisor.  Edited by Ryan Chan ("The Witches", "Welcome to Marwen", and "Flight").`,
                                    }),
                                  }),
                                  className: `framer-1mhn7wj`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-y7emh3`,
                              "data-border": !0,
                              "data-framer-name": `Img Wrapper`,
                              children: s(v, {
                                breakpoint: D,
                                overrides: {
                                  cSfDKgYK0: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5097.6 +
                                          0 +
                                          0 +
                                          0 +
                                          364 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 853,
                                      pixelWidth: 1280,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg`,
                                      srcSet: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 512w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1024w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1280w`,
                                    },
                                  },
                                  KsBWtohXg: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          4996.3 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 853,
                                      pixelWidth: 1280,
                                      sizes: `max(min(${m?.width || `100vw`} - 68px, 1152px) / 2, 50px)`,
                                      src: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg`,
                                      srcSet: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 512w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1024w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1280w`,
                                    },
                                  },
                                  l2sglEYrG: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5557.2 +
                                          0 +
                                          250 +
                                          0 +
                                          348 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 853,
                                      pixelWidth: 1280,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg`,
                                      srcSet: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 512w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1024w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1280w`,
                                    },
                                  },
                                },
                                children: s(k, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: j(
                                      (m?.y || 0) +
                                        67 +
                                        4996.3 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    ),
                                    pixelHeight: 853,
                                    pixelWidth: 1280,
                                    sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px) / 2, 50px)`,
                                    src: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg`,
                                    srcSet: `../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 512w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1024w,../images/kvFtL6Wbi3Uy8O54jRucNWgoQyE.jpg 1280w`,
                                  },
                                  className: `framer-pzxqbh`,
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-fd22ky`,
                              "data-border": !0,
                              "data-framer-name": `Img Wrapper`,
                              children: s(v, {
                                breakpoint: D,
                                overrides: {
                                  cSfDKgYK0: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5097.6 +
                                          0 +
                                          0 +
                                          0 +
                                          1185 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 4e3,
                                      pixelWidth: 6e3,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg`,
                                      srcSet: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 512w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 1024w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 2048w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 4096w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 6000w`,
                                    },
                                  },
                                  KsBWtohXg: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          4996.3 +
                                          0 +
                                          0 +
                                          0 +
                                          650 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 4e3,
                                      pixelWidth: 6e3,
                                      sizes: `max(min(${m?.width || `100vw`} - 68px, 1152px) / 2, 50px)`,
                                      src: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg`,
                                      srcSet: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 512w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 1024w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 2048w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 4096w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 6000w`,
                                    },
                                  },
                                  l2sglEYrG: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5557.2 +
                                          0 +
                                          250 +
                                          0 +
                                          946 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 4e3,
                                      pixelWidth: 6e3,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg`,
                                      srcSet: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 512w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 1024w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 2048w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 4096w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 6000w`,
                                    },
                                  },
                                },
                                children: s(k, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: j(
                                      (m?.y || 0) +
                                        67 +
                                        4996.3 +
                                        0 +
                                        0 +
                                        0 +
                                        624 +
                                        0 +
                                        0,
                                    ),
                                    pixelHeight: 4e3,
                                    pixelWidth: 6e3,
                                    sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px) / 2, 50px)`,
                                    src: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg`,
                                    srcSet: `../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 512w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 1024w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 2048w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 4096w,../images/Aoz8zU5kurkOQn9Mw8KrrNm0ao.jpg 6000w`,
                                  },
                                  className: `framer-1mejxtu`,
                                }),
                              }),
                            }),
                            l(`div`, {
                              className: `framer-42tmvj`,
                              "data-border": !0,
                              "data-framer-name": `Content`,
                              children: [
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Producing is Gavin Behrman, a 28-year film production veteran whose credits as a production manager and producer include "Blade Runner 2049," season two of "The Mandalorian," "Terminator Genisys," and the upcoming final season of "Stranger Things."\xA0`,
                                    }),
                                  }),
                                  className: `framer-1rdjrgb`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Gavin Behrman quote: "We are humbled by the amazing\xA0cast and crew who stepped up to support this project to ensure that our film will make a powerful impact in addressing the crucial issue of cyberbullying, which has increased 70 percent since the pandemic. "The Principle" aims to captivate audiences worldwide with its poignant narrative and provide practical strategies for fostering kindness and empathy. With the luminous talent of Mickey Guyton and an exceptional team behind the scenes, this short film is poised to become a catalyst for positive change."`,
                                    }),
                                  }),
                                  className: `framer-xilv4h`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1gftyxg`,
                              "data-border": !0,
                              "data-framer-name": `Right`,
                              children: [
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: l(n, {
                                    children: [
                                      s(`p`, {
                                        className: `framer-styles-preset-wlepxr`,
                                        "data-styles-preset": `h3JjhDKFx`,
                                        children: `PEACE CHAMPION Co-Founder John Viscount is the writer, producer, and director of “The Principle” and composer of the film’s theme song, “Love Being” with Marc Van Marter. John also sings “Love Being” and co-produced it. Greg Sims is doing the music score. \xA0`,
                                      }),
                                      s(`p`, {
                                        className: `framer-styles-preset-wlepxr`,
                                        "data-styles-preset": `h3JjhDKFx`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `"The Principle" is Viscount’s latest effort as he continues to make an impact through his “peace entertainment.” With his previous work, "Admissions," winning over 30 international awards and reaching millions of viewers worldwide, Viscount's commitment to creating positive change through peace-centered storytelling remains unwavering.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1x5bvqb`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `"The Principle" has\xA0garnered support from industry giants, including Industrial Light & Magic /Lucasfilm and Manhattan Beach Studios, ensuring access to world-class production facilities and cutting-edge technology through a collaboration with Epic Games and their Unreal game engine. The integration of this exciting tech amplifies the film's visual impact and showcases the team's dedication to pushing boundaries in storytelling.\xA0`,
                                    }),
                                  }),
                                  className: `framer-1t4uy9w`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `This short film has been financed completely through tax-deductible donations to The Peace Entertainment Project Inc.  This non-profit was founded by John Viscount\xA0to offer fiscal sponsorship and support to uplifting filmmakers and content creators who address global challenges, inspire hearts and minds, and “promote the kind in humankind.”\xA0PEPSTAR has now merged with PEACE CHAMPION, which will carry the Peace Entertainment mission forward.`,
                                    }),
                                  }),
                                  className: `framer-1ke7gkk`,
                                  "data-framer-name": `After being apart of major peace movements over the past 40 years, we launched Peace Champion to unite the world, all through the single word “Yes.”`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(X, {
                                  blockDocumentScrolling: !0,
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(u, {
                                      children: s(v, {
                                        breakpoint: D,
                                        overrides: {
                                          cSfDKgYK0: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              5097.6 +
                                              0 +
                                              0 +
                                              0 +
                                              1642 +
                                              40 +
                                              624,
                                          },
                                          KsBWtohXg: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              4996.3 +
                                              0 +
                                              0 +
                                              0 +
                                              1222 +
                                              40 +
                                              624,
                                          },
                                          l2sglEYrG: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              5557.2 +
                                              0 +
                                              250 +
                                              0 +
                                              1196 +
                                              24 +
                                              672,
                                          },
                                        },
                                        children: s(O, {
                                          height: 35,
                                          y:
                                            (m?.y || 0) +
                                            67 +
                                            4996.3 +
                                            0 +
                                            0 +
                                            0 +
                                            1196 +
                                            40 +
                                            624,
                                          children: l(E, {
                                            className: `framer-jv8jcq-container`,
                                            id: `jv8jcq`,
                                            nodeId: `NLuIdGnIP`,
                                            scopeId: `JanopNEp5`,
                                            children: [
                                              s(B, {
                                                hDCfDLevY: M({ overlay: e }),
                                                height: `100%`,
                                                id: `NLuIdGnIP`,
                                                layoutId: `NLuIdGnIP`,
                                                OrxO1kMMP: `Watch Film`,
                                                variant: J(
                                                  e.visible && `oT2Re4_ZM`,
                                                  e.visible
                                                    ? `oT2Re4_ZM`
                                                    : `KiiZYVQb4`,
                                                ),
                                                width: `100%`,
                                              }),
                                              s(f, {
                                                children:
                                                  e.visible &&
                                                  s(u, {
                                                    children: c(
                                                      s(b, {
                                                        triggerId: `jv8jcq`,
                                                        children: l(y, {
                                                          children: [
                                                            s(
                                                              d.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [
                                                                      0.5, 0,
                                                                      0.88,
                                                                      0.77,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                className: C(
                                                                  P,
                                                                  `framer-yflkrt`,
                                                                ),
                                                                "data-framer-portal-id": `jv8jcq`,
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0,
                                                                    ease: [
                                                                      0, 0, 1,
                                                                      1,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  e.hide(),
                                                              },
                                                              `lblHZqOTZ`,
                                                            ),
                                                            l(d.div, {
                                                              className: C(
                                                                P,
                                                                `framer-1xoj6as`,
                                                              ),
                                                              "data-framer-name": `Preview Wrapper`,
                                                              "data-framer-portal-id": `jv8jcq`,
                                                              children: [
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-137lfgt-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `phHsdCm4e`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(L, {
                                                                          autoplay:
                                                                            !1,
                                                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                          borderRadius: 0,
                                                                          bottomLeftRadius: 0,
                                                                          bottomRightRadius: 0,
                                                                          controls:
                                                                            !0,
                                                                          height: `100%`,
                                                                          id: `phHsdCm4e`,
                                                                          isMixedBorderRadius:
                                                                            !1,
                                                                          layoutId: `phHsdCm4e`,
                                                                          loop: !1,
                                                                          mute: !1,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          topLeftRadius: 0,
                                                                          topRightRadius: 0,
                                                                          video: `https://vimeo.com/1132302418/a867879bb2`,
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-18ndojf-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `AfFKZUCmv`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(R, {
                                                                          color: `var(--token-9590db14-fb3c-4b21-9e1d-4bea837e55ea, rgb(255, 255, 255))`,
                                                                          height: `100%`,
                                                                          iconSearch: `Home`,
                                                                          iconSelection: `x`,
                                                                          id: `AfFKZUCmv`,
                                                                          layoutId: `AfFKZUCmv`,
                                                                          mirrored:
                                                                            !1,
                                                                          onClick:
                                                                            N({
                                                                              overlay:
                                                                                e,
                                                                            }),
                                                                          selectByList:
                                                                            !0,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Y(),
                                                    ),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-f9ubeo`,
                              "data-border": !0,
                              "data-framer-name": `Img Wrapper`,
                              children: s(v, {
                                breakpoint: D,
                                overrides: {
                                  cSfDKgYK0: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5097.6 +
                                          0 +
                                          0 +
                                          0 +
                                          2381 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 720,
                                      pixelWidth: 1280,
                                      positionX: `62.7%`,
                                      positionY: `51.2%`,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg`,
                                      srcSet: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 512w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1024w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1280w`,
                                    },
                                  },
                                  KsBWtohXg: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          4996.3 +
                                          0 +
                                          0 +
                                          0 +
                                          1222 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 720,
                                      pixelWidth: 1280,
                                      positionX: `62.7%`,
                                      positionY: `51.2%`,
                                      sizes: `max(min(${m?.width || `100vw`} - 68px, 1152px) / 2, 50px)`,
                                      src: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg`,
                                      srcSet: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 512w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1024w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1280w`,
                                    },
                                  },
                                  l2sglEYrG: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          5557.2 +
                                          0 +
                                          250 +
                                          0 +
                                          1951 +
                                          0 +
                                          0,
                                      ),
                                      pixelHeight: 720,
                                      pixelWidth: 1280,
                                      positionX: `62.7%`,
                                      positionY: `51.2%`,
                                      sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px), 50px)`,
                                      src: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg`,
                                      srcSet: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 512w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1024w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1280w`,
                                    },
                                  },
                                },
                                children: s(k, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: j(
                                      (m?.y || 0) +
                                        67 +
                                        4996.3 +
                                        0 +
                                        0 +
                                        0 +
                                        1196 +
                                        0 +
                                        0,
                                    ),
                                    pixelHeight: 720,
                                    pixelWidth: 1280,
                                    positionX: `62.7%`,
                                    positionY: `51.2%`,
                                    sizes: `max(min(${m?.width || `100vw`} - 48px, 1152px) / 2, 50px)`,
                                    src: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg`,
                                    srcSet: `../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 512w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1024w,../images/OjXLFwwzoGOFXSXLyuX18jzzavw.jpg 1280w`,
                                  },
                                  className: `framer-wo07va`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(d.div, {
                      className: `framer-tjzilf`,
                      "data-border": !0,
                      "data-framer-name": `About Principle`,
                      layout: I,
                      children: [
                        s(`div`, {
                          className: `framer-rihaf6`,
                          "data-framer-name": `Left`,
                          children: s(`div`, {
                            className: `framer-ysiga3`,
                            "data-border": !0,
                            "data-framer-name": `Admissions James`,
                            id: ve,
                            ref: G,
                            children: l(`div`, {
                              className: `framer-9qynym`,
                              "data-framer-name": `Left Content`,
                              children: [
                                l(`div`, {
                                  className: `framer-10qxyv1`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h5`, {
                                          className: `framer-styles-preset-16h47ph`,
                                          "data-styles-preset": `foETv8QB7`,
                                          children: `The Principle`,
                                        }),
                                      }),
                                      className: `framer-wkedfg`,
                                      "data-framer-name": `you can feel it`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(g, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h2`, {
                                          className: `framer-styles-preset-2j4pyd`,
                                          "data-styles-preset": `SSEsK9psT`,
                                          children: `About MickEy Guyton`,
                                        }),
                                      }),
                                      className: `framer-1qyflbx`,
                                      "data-framer-name": `it’s right outside your door.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(v, {
                                  breakpoint: D,
                                  overrides: {
                                    cSfDKgYK0: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j(
                                          (m?.y || 0) +
                                            67 +
                                            8139.6 +
                                            0 +
                                            0 +
                                            0 +
                                            64 +
                                            0 +
                                            129.6,
                                        ),
                                        pixelHeight: 1330,
                                        pixelWidth: 886,
                                        sizes: `calc(${m?.width || `100vw`} / 2 - 64px)`,
                                        src: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp`,
                                        srcSet: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 682w,../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 886w`,
                                      },
                                    },
                                    KsBWtohXg: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j(
                                          (m?.y || 0) +
                                            67 +
                                            7375.3 +
                                            0 +
                                            0 +
                                            0 +
                                            64 +
                                            0 +
                                            129.6,
                                        ),
                                        pixelHeight: 1330,
                                        pixelWidth: 886,
                                        sizes: `min((${m?.width || `100vw`} / 2 - 64px) * 0.67, 536px)`,
                                        src: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp`,
                                        srcSet: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 682w,../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 886w`,
                                      },
                                    },
                                    l2sglEYrG: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: j(
                                          (m?.y || 0) +
                                            67 +
                                            8088.2 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            129.6,
                                        ),
                                        pixelHeight: 1330,
                                        pixelWidth: 886,
                                        sizes: `calc(${m?.width || `100vw`} - 48px)`,
                                        src: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp`,
                                        srcSet: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 682w,../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 886w`,
                                      },
                                    },
                                  },
                                  children: s(k, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: j(
                                        (m?.y || 0) +
                                          67 +
                                          7323.3 +
                                          0 +
                                          0 +
                                          0 +
                                          64 +
                                          0 +
                                          129.6,
                                      ),
                                      pixelHeight: 1330,
                                      pixelWidth: 886,
                                      sizes: `min((${m?.width || `100vw`} / 2 - 64px) * 0.67, 536px)`,
                                      src: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp`,
                                      srcSet: `../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 682w,../images/HT5fwu70NNOr5SD10AejljZ8Tuw.webp 886w`,
                                    },
                                    className: `framer-1bir80u`,
                                    "data-border": !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l(`div`, {
                          className: `framer-1ptcbbq`,
                          "data-framer-name": `Right`,
                          children: [
                            l(`div`, {
                              className: `framer-814we7`,
                              "data-framer-name": `Director Content`,
                              children: [
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Capitol Nashville’s Mickey Guyton “raises the rafters and distills emotion with impeccable clarity. Her high notes thrill, her nuance in storytelling captivates. A star for our times claims her place” (NPR). The four-time GRAMMY nominee and 2022 TIME Breakthrough Artist of the Year Guyton released songs “I Still Pray,” “How You Love Someone” and “Somethin’ Bout You” following her critically acclaimed 2021 debut album Remember Her Name. Mickey now has her new single “Nothing Compares To You” featuring Kane Brown out and presently playing on radio.`,
                                    }),
                                  }),
                                  className: `framer-c54i97`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `With Remember Her Name, Mickey made history as the first Black artist to earn a GRAMMY nomination for Best Country Album. Title track “Remember Her Name” also landed Mickey with GRAMMY nominations for Best Country Song and Best Country Solo Performance. This follows Mickey’s groundbreaking GRAMMY nomination as the first-ever Black female solo artist to earn a nod in a country category (Best Country Solo Performance) for “Black Like Me” which she performed as part of the 2021 awards ceremony. “Black Like Me” was named one of the Top 10 all-genre songs of 2020 by NPR, Billboard and Associated Press. She also co-hosted the 56th Academy of Country Music Awards on CBS along with Keith Urban and she was named CMT’s 2021 Breakout Artist of the Year. Audiences around the world watched Mickey deliver a powerful message of inclusivity and togetherness with her “awe-inspiring,” “soulful and soaring” national anthem at Super Bowl 56 in Los Angeles. More recently, she performed Imagine in Times Square to ring in 2025, performing for a global audience.`,
                                    }),
                                  }),
                                  className: `framer-hq1x5k`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-wlepxr`,
                                      "data-styles-preset": `h3JjhDKFx`,
                                      children: `Mickey and her music have been featured on the cover of Billboard and profiled in The New Yorker, The New York Times and Rolling Stone. Additionally, she has been featured in American Songwriter, BBC News, CBS This Morning, Ebony, Elle, Ellen, Entertainment Weekly, Essence, HITS, Sesame Street, SHERRI, The Jennifer Hudson Show, The Kelly Clarkson Show, The Late Show with Stephen Colbert, Los Angeles Times, New York Magazine’s Vulture, PEOPLE, Pollstar, Sesame Street, TODAY Show, The Tonight Show Starring Jimmy Fallon, USA Today, Variety, VIBE, The View, Vogue, The Washington Post and many more.`,
                                    }),
                                  }),
                                  className: `framer-10w837t`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-rlf4v7`,
                                      "data-styles-preset": `A9_Ewbxwq`,
                                      style: {
                                        "--framer-text-color": `rgb(115, 115, 115)`,
                                      },
                                      children: `Mickey Guyton is represented by Cameo Carlson of mtheory.`,
                                    }),
                                  }),
                                  className: `framer-u7fa9z`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(X, {
                                  blockDocumentScrolling: !0,
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(u, {
                                      children: s(v, {
                                        breakpoint: D,
                                        overrides: {
                                          cSfDKgYK0: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              8139.6 +
                                              0 +
                                              64 +
                                              0 +
                                              0 +
                                              669,
                                          },
                                          KsBWtohXg: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              7375.3 +
                                              0 +
                                              64 +
                                              0 +
                                              0 +
                                              669,
                                          },
                                          l2sglEYrG: {
                                            y:
                                              (m?.y || 0) +
                                              67 +
                                              8088.2 +
                                              0 +
                                              902.6 +
                                              64 +
                                              0 +
                                              0 +
                                              669,
                                          },
                                        },
                                        children: s(O, {
                                          height: 35,
                                          y:
                                            (m?.y || 0) +
                                            67 +
                                            7323.3 +
                                            0 +
                                            64 +
                                            0 +
                                            0 +
                                            669,
                                          children: l(E, {
                                            className: `framer-qre9pp-container`,
                                            id: `qre9pp`,
                                            nodeId: `II2HchfNG`,
                                            scopeId: `JanopNEp5`,
                                            children: [
                                              s(B, {
                                                hDCfDLevY: M({ overlay: e }),
                                                height: `100%`,
                                                id: `II2HchfNG`,
                                                layoutId: `II2HchfNG`,
                                                OrxO1kMMP: `Watch Film`,
                                                variant: J(
                                                  e.visible && `oT2Re4_ZM`,
                                                  e.visible
                                                    ? `oT2Re4_ZM`
                                                    : `KiiZYVQb4`,
                                                ),
                                                width: `100%`,
                                              }),
                                              s(f, {
                                                children:
                                                  e.visible &&
                                                  s(u, {
                                                    children: c(
                                                      s(b, {
                                                        triggerId: `qre9pp`,
                                                        children: l(y, {
                                                          children: [
                                                            s(
                                                              d.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0.3,
                                                                    ease: [
                                                                      0.5, 0,
                                                                      0.88,
                                                                      0.77,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                className: C(
                                                                  P,
                                                                  `framer-1hqwljn`,
                                                                ),
                                                                "data-framer-portal-id": `qre9pp`,
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    delay: 0,
                                                                    duration: 0,
                                                                    ease: [
                                                                      0, 0, 1,
                                                                      1,
                                                                    ],
                                                                    type: `tween`,
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  e.hide(),
                                                              },
                                                              `hpPx0gb9j`,
                                                            ),
                                                            l(d.div, {
                                                              className: C(
                                                                P,
                                                                `framer-acj0do`,
                                                              ),
                                                              "data-framer-name": `Preview Wrapper`,
                                                              "data-framer-portal-id": `qre9pp`,
                                                              children: [
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-f2mr0v-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `Oz7rEFtht`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(L, {
                                                                          autoplay:
                                                                            !1,
                                                                          backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                          borderRadius: 0,
                                                                          bottomLeftRadius: 0,
                                                                          bottomRightRadius: 0,
                                                                          controls:
                                                                            !0,
                                                                          height: `100%`,
                                                                          id: `Oz7rEFtht`,
                                                                          isMixedBorderRadius:
                                                                            !1,
                                                                          layoutId: `Oz7rEFtht`,
                                                                          loop: !1,
                                                                          mute: !1,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          topLeftRadius: 0,
                                                                          topRightRadius: 0,
                                                                          video: `https://vimeo.com/1132302418/a867879bb2`,
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                                s(O, {
                                                                  children: s(
                                                                    E,
                                                                    {
                                                                      className: `framer-ky4tkm-container`,
                                                                      inComponentSlot:
                                                                        !0,
                                                                      isAuthoredByUser:
                                                                        !0,
                                                                      isModuleExternal:
                                                                        !0,
                                                                      nodeId: `GkHObTudR`,
                                                                      rendersWithMotion:
                                                                        !0,
                                                                      scopeId: `JanopNEp5`,
                                                                      children:
                                                                        s(R, {
                                                                          color: `var(--token-9590db14-fb3c-4b21-9e1d-4bea837e55ea, rgb(255, 255, 255))`,
                                                                          height: `100%`,
                                                                          iconSearch: `Home`,
                                                                          iconSelection: `x`,
                                                                          id: `GkHObTudR`,
                                                                          layoutId: `GkHObTudR`,
                                                                          mirrored:
                                                                            !1,
                                                                          onClick:
                                                                            N({
                                                                              overlay:
                                                                                e,
                                                                            }),
                                                                          selectByList:
                                                                            !0,
                                                                          style:
                                                                            {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                          width: `100%`,
                                                                        }),
                                                                    },
                                                                  ),
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Y(),
                                                    ),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                s(g, {
                                  __fromCanvasComponent: !0,
                                  children: s(n, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-rlf4v7`,
                                      "data-styles-preset": `A9_Ewbxwq`,
                                      children: s(w, {
                                        href: { webPageId: `N5J0YRRfS` },
                                        motionChild: !0,
                                        nodeId: `f8olPiZC9`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `JanopNEp5`,
                                        smoothScroll: !1,
                                        children: s(d.a, {
                                          className: `framer-styles-preset-9z5it5`,
                                          "data-styles-preset": `mt77im6XF`,
                                          children: `Thank you for making a $2 donation in order to watch The Principle`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1ejba7m`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            z() &&
                              s(v, {
                                breakpoint: D,
                                overrides: {
                                  cSfDKgYK0: {
                                    y: (m?.y || 0) + 67 + 8139.6 + 0 + 97.0823,
                                  },
                                  KsBWtohXg: {
                                    y: (m?.y || 0) + 67 + 7375.3 + 0 + 97.0823,
                                  },
                                },
                                children: s(O, {
                                  height: 798,
                                  width: `864px`,
                                  y: (m?.y || 0) + 67 + 7323.3 + 0 + 97.0823,
                                  children: s(E, {
                                    className: `framer-10plsqs-container hidden-1eyp2rv`,
                                    nodeId: `SF52D1lUq`,
                                    rendersWithMotion: !0,
                                    scopeId: `JanopNEp5`,
                                    transformTemplate: Z,
                                    children: s(K, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: G, target: `oMsCODsYX` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `SF52D1lUq`,
                                      layoutId: `SF52D1lUq`,
                                      style: { width: `100%` },
                                      variant: J(`oMsCODsYX`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    s(v, {
                      breakpoint: D,
                      overrides: {
                        cSfDKgYK0: { y: (m?.y || 0) + 67 + 9130.6 },
                        KsBWtohXg: { y: (m?.y || 0) + 67 + 8366.3 },
                        l2sglEYrG: { y: (m?.y || 0) + 67 + 9981.8 },
                      },
                      children: s(O, {
                        height: 462,
                        width: m?.width || `100vw`,
                        y: (m?.y || 0) + 67 + 8314.3,
                        children: s(E, {
                          className: `framer-12z16db-container`,
                          layout: I,
                          nodeId: `jwb2d8Cnx`,
                          scopeId: `JanopNEp5`,
                          children: s(v, {
                            breakpoint: D,
                            overrides: {
                              cSfDKgYK0: { variant: J(`z_KCxy1by`) },
                              KsBWtohXg: { variant: J(`kltl97472`) },
                              l2sglEYrG: { variant: J(`REZcr_g_6`) },
                              q1wwcm8vK: { variant: J(`zer3ntXsH`) },
                            },
                            children: s(U, {
                              height: `100%`,
                              id: `jwb2d8Cnx`,
                              layoutId: `jwb2d8Cnx`,
                              style: { width: `100%` },
                              variant: J(`TjsNYcWYY`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    s(O, {
                      height: 67,
                      width: `100vw`,
                      y: 0,
                      children: s(E, {
                        className: `framer-10obli2-container`,
                        layout: I,
                        layoutScroll: !0,
                        nodeId: `ij6RWqlOv`,
                        scopeId: `JanopNEp5`,
                        children: s(v, {
                          breakpoint: D,
                          overrides: {
                            cSfDKgYK0: { variant: J(`EFYbh1FDG`) },
                            KsBWtohXg: { variant: J(`vtvSUblLE`) },
                            l2sglEYrG: { variant: J(`WE2mbDQk8`) },
                            q1wwcm8vK: { variant: J(`lqgFjEwKv`) },
                          },
                          children: s(W, {
                            height: `100%`,
                            id: `ij6RWqlOv`,
                            layoutId: `ij6RWqlOv`,
                            style: { width: `100%` },
                            variant: J(`zP3AL12Ww`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ggZNy.framer-e3ohht, .framer-ggZNy .framer-e3ohht { display: block; }`,
        `.framer-ggZNy.framer-90vj06 { align-content: center; align-items: center; background-color: #faf9f6; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 67px 0px 0px 0px; position: relative; width: 1728px; }`,
        `.framer-ggZNy .framer-19jf6kr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-drlpl6, .framer-ggZNy .framer-1i9k798, .framer-ggZNy .framer-aq8x94, .framer-ggZNy .framer-1hxivmy, .framer-ggZNy .framer-190a9lo, .framer-ggZNy .framer-1qkkyl8, .framer-ggZNy .framer-tnerqe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 581px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ggZNy .framer-1eljgha, .framer-ggZNy .framer-1h9nlnw, .framer-ggZNy .framer-1hinhg4, .framer-ggZNy .framer-1mtvr00, .framer-ggZNy .framer-1hxk1jz, .framer-ggZNy .framer-drcyjk, .framer-ggZNy .framer-1vbi37g, .framer-ggZNy .framer-kxzyqp, .framer-ggZNy .framer-19el9mt, .framer-ggZNy .framer-1xuhxwy, .framer-ggZNy .framer-11ra3q, .framer-ggZNy .framer-1u9kjgo, .framer-ggZNy .framer-x5tn0l, .framer-ggZNy .framer-5ntqik, .framer-ggZNy .framer-1qohjve, .framer-ggZNy .framer-c26jp1, .framer-ggZNy .framer-hswago, .framer-ggZNy .framer-13c3n6w, .framer-ggZNy .framer-1rwmc2u, .framer-ggZNy .framer-11s6eth, .framer-ggZNy .framer-l64mqh, .framer-ggZNy .framer-wjoe9o, .framer-ggZNy .framer-1n33b6l, .framer-ggZNy .framer-1yoj13q, .framer-ggZNy .framer-61q1g7, .framer-ggZNy .framer-1p421c0, .framer-ggZNy .framer-r3jkdg, .framer-ggZNy .framer-1hne5n5, .framer-ggZNy .framer-kxgvjc, .framer-ggZNy .framer-1t9nplp, .framer-ggZNy .framer-1w6u7z6, .framer-ggZNy .framer-lcmxfv, .framer-ggZNy .framer-uch9dv, .framer-ggZNy .framer-wn6pla, .framer-ggZNy .framer-1vf73ih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-8573gu, .framer-ggZNy .framer-1n7o1f4, .framer-ggZNy .framer-w01ifm, .framer-ggZNy .framer-15fu43d, .framer-ggZNy .framer-f8411w, .framer-ggZNy .framer-152vhwh, .framer-ggZNy .framer-wzij1e, .framer-ggZNy .framer-1xeoi09, .framer-ggZNy .framer-61jh99, .framer-ggZNy .framer-ntoykz, .framer-ggZNy .framer-feqqxv, .framer-ggZNy .framer-6b7khs, .framer-ggZNy .framer-8md8jc, .framer-ggZNy .framer-ebz0dy, .framer-ggZNy .framer-c0a52s, .framer-ggZNy .framer-1liukuk, .framer-ggZNy .framer-w58pbp, .framer-ggZNy .framer-rzsii, .framer-ggZNy .framer-1rq7qyy, .framer-ggZNy .framer-14vipqj, .framer-ggZNy .framer-c2kdof, .framer-ggZNy .framer-gjasnr, .framer-ggZNy .framer-ofy1lp, .framer-ggZNy .framer-14v6f93, .framer-ggZNy .framer-12xaior, .framer-ggZNy .framer-12g259y, .framer-ggZNy .framer-ro2y86, .framer-ggZNy .framer-8zz3no, .framer-ggZNy .framer-1uw9tix, .framer-ggZNy .framer-1rhovdd, .framer-ggZNy .framer-b3w8ow, .framer-ggZNy .framer-tdwaon, .framer-ggZNy .framer-1uro8sc, .framer-ggZNy .framer-aq906s, .framer-ggZNy .framer-ltbofw, .framer-ggZNy .framer-1ktyghd, .framer-ggZNy .framer-scxswz, .framer-ggZNy .framer-1dd4xoj, .framer-ggZNy .framer-11uclkk, .framer-ggZNy .framer-1cqks5r, .framer-ggZNy .framer-kavhbf, .framer-ggZNy .framer-157tyu2, .framer-ggZNy .framer-p6ake1, .framer-ggZNy .framer-1eim1zg, .framer-ggZNy .framer-2wp2sl, .framer-ggZNy .framer-ohz11u, .framer-ggZNy .framer-187j4ip, .framer-ggZNy .framer-1246sqa, .framer-ggZNy .framer-1vsurpd, .framer-ggZNy .framer-1gq3dw7, .framer-ggZNy .framer-ah887w, .framer-ggZNy .framer-o0gmmd, .framer-ggZNy .framer-17prfb4, .framer-ggZNy .framer-isfymb, .framer-ggZNy .framer-l0ykga, .framer-ggZNy .framer-bt0k0b, .framer-ggZNy .framer-m8tys3, .framer-ggZNy .framer-3d1jld, .framer-ggZNy .framer-22t79v, .framer-ggZNy .framer-15hvzkd, .framer-ggZNy .framer-17ohfjd, .framer-ggZNy .framer-ecnole, .framer-ggZNy .framer-2i07su, .framer-ggZNy .framer-1aeuoth, .framer-ggZNy .framer-1jysqqj, .framer-ggZNy .framer-nl6957, .framer-ggZNy .framer-2x2sst, .framer-ggZNy .framer-1kga5pu, .framer-ggZNy .framer-w4vd85, .framer-ggZNy .framer-1daefen, .framer-ggZNy .framer-1j8pecs, .framer-ggZNy .framer-mlarg7, .framer-ggZNy .framer-1h3ci1t, .framer-ggZNy .framer-1648fvb, .framer-ggZNy .framer-9ifkcw, .framer-ggZNy .framer-1qacp4d, .framer-ggZNy .framer-kiarh2, .framer-ggZNy .framer-l0pb1d, .framer-ggZNy .framer-tglvvy, .framer-ggZNy .framer-f842ma, .framer-ggZNy .framer-1gf6tvv, .framer-ggZNy .framer-tyi3kv, .framer-ggZNy .framer-1mvzke3, .framer-ggZNy .framer-16uh65g, .framer-ggZNy .framer-cv2fi, .framer-ggZNy .framer-s7k1cs, .framer-ggZNy .framer-1pgwpzm, .framer-ggZNy .framer-1f3yjsf, .framer-ggZNy .framer-jy4igu, .framer-ggZNy .framer-y5bndf, .framer-ggZNy .framer-1m1cvtp, .framer-ggZNy .framer-141hj15, .framer-ggZNy .framer-16wfp29, .framer-ggZNy .framer-wt0tkp, .framer-ggZNy .framer-1lz716y, .framer-ggZNy .framer-hztux9, .framer-ggZNy .framer-7xkiuh, .framer-ggZNy .framer-1ii9hwj, .framer-ggZNy .framer-1c9pv7u, .framer-ggZNy .framer-1l6j9e6 { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-1cmrf10, .framer-ggZNy .framer-1eyo467, .framer-ggZNy .framer-1cg79ws, .framer-ggZNy .framer-lqgkp6, .framer-ggZNy .framer-uvlws1, .framer-ggZNy .framer-u44y36, .framer-ggZNy .framer-y7ljay, .framer-ggZNy .framer-noeb2b, .framer-ggZNy .framer-1biev11, .framer-ggZNy .framer-1hsdsd9, .framer-ggZNy .framer-17jrvl9, .framer-ggZNy .framer-1il2ic7, .framer-ggZNy .framer-9r28ew, .framer-ggZNy .framer-1ixiobw, .framer-ggZNy .framer-rk5jz5, .framer-ggZNy .framer-1xcq8nr, .framer-ggZNy .framer-1hbz6pr, .framer-ggZNy .framer-js25i3, .framer-ggZNy .framer-1x8dtd8, .framer-ggZNy .framer-mwbuwx, .framer-ggZNy .framer-1s8pdx, .framer-ggZNy .framer-1e2wxj8, .framer-ggZNy .framer-xdzji7, .framer-ggZNy .framer-1b0orca, .framer-ggZNy .framer-1gu0wu9, .framer-ggZNy .framer-19hvrio, .framer-ggZNy .framer-cb0pas, .framer-ggZNy .framer-k7lqhd { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 146px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-1v4p46w { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-7t0gku { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-1tw0ksq, .framer-ggZNy .framer-1kls3a7, .framer-ggZNy .framer-pwyzjx, .framer-ggZNy .framer-1rdxsue { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-add5lb, .framer-ggZNy .framer-rk4z0f, .framer-ggZNy .framer-uhiyjb, .framer-ggZNy .framer-1frpp0e { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-qwniyp { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-10cqscq { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-ggZNy .framer-1rwta9y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 1px; min-height: 435px; overflow: hidden; padding: 0px; position: absolute; right: -1px; top: 63%; transform: translateY(-50%); z-index: 1; }`,
        `.framer-ggZNy .framer-6vxxu7 { align-content: center; align-items: center; bottom: 135px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: calc(50.00000000000002% - min(1160px, 100%) / 2); max-width: 1160px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-ggZNy .framer-1lbp4lw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; overflow: visible; padding: 16px 80px 16px 80px; position: relative; width: 1px; }`,
        `.framer-ggZNy .framer-jszrua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-dfw3yd, .framer-ggZNy .framer-imekfa, .framer-ggZNy .framer-1qw4z98, .framer-ggZNy .framer-3v9aig, .framer-ggZNy .framer-1qmme83 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ggZNy .framer-15tnkyh, .framer-ggZNy .framer-fbgo0j, .framer-ggZNy .framer-b0hsw, .framer-ggZNy .framer-nh45on, .framer-ggZNy .framer-w4sycu, .framer-ggZNy .framer-yg5haq, .framer-ggZNy .framer-2py3ul, .framer-ggZNy .framer-1prmqmc, .framer-ggZNy .framer-15nc0lp, .framer-ggZNy .framer-f8pudh, .framer-ggZNy .framer-1mhn7wj, .framer-ggZNy .framer-1rdjrgb, .framer-ggZNy .framer-xilv4h, .framer-ggZNy .framer-1x5bvqb, .framer-ggZNy .framer-1t4uy9w, .framer-ggZNy .framer-1ke7gkk, .framer-ggZNy .framer-wkedfg, .framer-ggZNy .framer-1qyflbx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ggZNy .framer-1krxkgn { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 800px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ggZNy .framer-1auwmy1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 80px 24px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-gc5c6i { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 107, 212, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1152px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ggZNy .framer-11yg9kk, .framer-ggZNy .framer-zwem5o { --border-bottom-width: 0px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-1q6512p, .framer-ggZNy .framer-hhkicz, .framer-ggZNy .framer-xdff2f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-d2t7d7 { flex: none; height: 648px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-116de04, .framer-ggZNy .framer-41p75e { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 23px 26px 23px 26px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-15xejxw, .framer-ggZNy .framer-10bb625 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-1ir9eb7, .framer-ggZNy .framer-1pcynvb { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ggZNy .framer-wx37n4, .framer-ggZNy .framer-9b3uwy { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-6b491181-5141-4006-b3c8-6658b280fd28, #e3e3e3); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 23px 26px 23px 26px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-g0muoh, .framer-ggZNy .framer-7osyir { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ggZNy .framer-1l2jub2-container, .framer-ggZNy .framer-ztqx1m-container, .framer-ggZNy .framer-82fcw5-container, .framer-ggZNy .framer-jv8jcq-container, .framer-ggZNy .framer-qre9pp-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ggZNy.framer-1my46w1, .framer-ggZNy.framer-17d6mh7, .framer-ggZNy.framer-wpb847, .framer-ggZNy.framer-yflkrt, .framer-ggZNy.framer-1hqwljn { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 3; }`,
        `.framer-ggZNy.framer-vrt56s, .framer-ggZNy.framer-17wmzpe, .framer-ggZNy.framer-fhjw2v, .framer-ggZNy.framer-1xoj6as, .framer-ggZNy.framer-acj0do { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; left: calc(50.00000000000002% - min(800px, 712px) / 2); max-width: 800px; overflow: hidden; padding: 0px; position: fixed; top: calc(50.00000000000002% - 800px / 2); width: 712px; z-index: 3; }`,
        `.framer-ggZNy .framer-1nex5o6-container, .framer-ggZNy .framer-1y3syix-container, .framer-ggZNy .framer-1a19iox-container, .framer-ggZNy .framer-137lfgt-container, .framer-ggZNy .framer-f2mr0v-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-f5x2gu-container, .framer-ggZNy .framer-iph27h-container, .framer-ggZNy .framer-1udvn23-container, .framer-ggZNy .framer-18ndojf-container, .framer-ggZNy .framer-ky4tkm-container { cursor: pointer; flex: none; height: 27px; position: absolute; right: 30px; top: 30px; width: 24px; z-index: 1; }`,
        `.framer-ggZNy .framer-b985qc, .framer-ggZNy .framer-tjzilf { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-zrfv11, .framer-ggZNy .framer-rihaf6 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-ggZNy .framer-7y9l0u { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-37e13c56-c32c-4fe1-b1bc-0d0022b49ae3, rgba(0, 107, 212, 0.1)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 100%; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 64px 40px 64px 24px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ggZNy .framer-10mrnj2, .framer-ggZNy .framer-9qynym { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 536px; overflow: visible; padding: 0px; position: sticky; top: 84px; width: 67%; z-index: 1; }`,
        `.framer-ggZNy .framer-1dtjcq7, .framer-ggZNy .framer-10qxyv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-1t0bpoa { --border-bottom-width: 1px; --border-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: 486px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-a0w5rb, .framer-ggZNy .framer-1ptcbbq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 24px 64px 24px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ggZNy .framer-1u2g70b, .framer-ggZNy .framer-814we7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-s43a3u, .framer-ggZNy .framer-b60oiu, .framer-ggZNy .framer-86ley7, .framer-ggZNy .framer-1voxn9m, .framer-ggZNy .framer-c54i97, .framer-ggZNy .framer-hq1x5k, .framer-ggZNy .framer-10w837t, .framer-ggZNy .framer-u7fa9z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ggZNy .framer-k3sl8s, .framer-ggZNy .framer-1ejba7m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ggZNy .framer-enkg5i-container, .framer-ggZNy .framer-10plsqs-container { flex: none; height: auto; left: 50%; opacity: 0.1; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 864px; z-index: -1; }`,
        `.framer-ggZNy .framer-uttvae { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 24px 80px 24px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-16yl664 { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-ab7df53b-c400-40bf-a2cc-45b385526f10, rgba(0, 138, 23, 0.1)); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1152px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ggZNy .framer-1o135nh { flex: none; height: 656px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-1m5o4hq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 80px 24px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-utetjz { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-ab7df53b-c400-40bf-a2cc-45b385526f10, rgba(0, 138, 23, 0.1)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1152px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-z8sj3w { --border-bottom-width: 0px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
        `.framer-ggZNy .framer-1rgy0l0 { background-color: var(--token-6b491181-5141-4006-b3c8-6658b280fd28, #e3e3e3); display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 1152px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-9vbtvf, .framer-ggZNy .framer-1gftyxg { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-y7emh3 { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 624px; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-pzxqbh, .framer-ggZNy .framer-1mejxtu, .framer-ggZNy .framer-wo07va { flex: none; height: 100%; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-fd22ky { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 572px; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-42tmvj { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 40px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-f9ubeo { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1051px; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-ysiga3 { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-ab7df53b-c400-40bf-a2cc-45b385526f10, rgba(0, 138, 23, 0.1)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 100%; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 64px 40px 64px 24px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ggZNy .framer-1bir80u { --border-bottom-width: 1px; --border-color: var(--token-ce433f7d-1361-4b21-8258-6053dad8c9bd, #000000); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: 613px; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-12z16db-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ggZNy .framer-10obli2-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 2; }`,
        ...ye,
        ...Ee,
        ...Ae,
        ...P,
        ...Ie,
        ...G,
        `.framer-ggZNy[data-border="true"]::after, .framer-ggZNy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1440px) and (max-width: 1727.98px) { .framer-ggZNy.framer-90vj06 { width: 1440px; }}`,
        `@media (min-width: 1200px) and (max-width: 1439.98px) { .framer-ggZNy.framer-90vj06 { width: 1200px; } .framer-ggZNy .framer-1cmrf10, .framer-ggZNy .framer-1eyo467, .framer-ggZNy .framer-1cg79ws, .framer-ggZNy .framer-lqgkp6, .framer-ggZNy .framer-uvlws1, .framer-ggZNy .framer-u44y36, .framer-ggZNy .framer-y7ljay, .framer-ggZNy .framer-noeb2b, .framer-ggZNy .framer-1biev11, .framer-ggZNy .framer-1hsdsd9, .framer-ggZNy .framer-17jrvl9, .framer-ggZNy .framer-1il2ic7, .framer-ggZNy .framer-9r28ew, .framer-ggZNy .framer-1ixiobw, .framer-ggZNy .framer-rk5jz5, .framer-ggZNy .framer-1xcq8nr, .framer-ggZNy .framer-1hbz6pr, .framer-ggZNy .framer-js25i3, .framer-ggZNy .framer-1x8dtd8, .framer-ggZNy .framer-mwbuwx, .framer-ggZNy .framer-1s8pdx, .framer-ggZNy .framer-1e2wxj8, .framer-ggZNy .framer-xdzji7, .framer-ggZNy .framer-1b0orca, .framer-ggZNy .framer-1gu0wu9, .framer-ggZNy .framer-19hvrio, .framer-ggZNy .framer-cb0pas, .framer-ggZNy .framer-k7lqhd { height: var(--framer-aspect-ratio-supported, 145px); } .framer-ggZNy .framer-1auwmy1, .framer-ggZNy .framer-1m5o4hq { padding: 0px 34px 80px 34px; } .framer-ggZNy .framer-uttvae { padding: 80px 34px 80px 34px; } .framer-ggZNy .framer-y7emh3 { height: 650px; } .framer-ggZNy .framer-f9ubeo { height: 1077px; }}`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ggZNy.framer-90vj06 { width: 810px; } .framer-ggZNy .framer-1cmrf10, .framer-ggZNy .framer-1eyo467, .framer-ggZNy .framer-1cg79ws, .framer-ggZNy .framer-lqgkp6, .framer-ggZNy .framer-uvlws1, .framer-ggZNy .framer-u44y36, .framer-ggZNy .framer-y7ljay, .framer-ggZNy .framer-noeb2b, .framer-ggZNy .framer-1biev11, .framer-ggZNy .framer-1hsdsd9, .framer-ggZNy .framer-17jrvl9, .framer-ggZNy .framer-1il2ic7, .framer-ggZNy .framer-9r28ew, .framer-ggZNy .framer-1ixiobw, .framer-ggZNy .framer-rk5jz5, .framer-ggZNy .framer-1xcq8nr, .framer-ggZNy .framer-1hbz6pr, .framer-ggZNy .framer-js25i3, .framer-ggZNy .framer-1x8dtd8, .framer-ggZNy .framer-mwbuwx, .framer-ggZNy .framer-1s8pdx, .framer-ggZNy .framer-1e2wxj8, .framer-ggZNy .framer-xdzji7, .framer-ggZNy .framer-1b0orca, .framer-ggZNy .framer-1gu0wu9, .framer-ggZNy .framer-19hvrio, .framer-ggZNy .framer-cb0pas, .framer-ggZNy .framer-k7lqhd { height: var(--framer-aspect-ratio-supported, 145px); } .framer-ggZNy .framer-6vxxu7 { bottom: unset; height: min-content; left: 50%; transform: translateX(-50%); } .framer-ggZNy .framer-1lbp4lw { height: 300px; } .framer-ggZNy .framer-dfw3yd { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-ggZNy .framer-d2t7d7, .framer-ggZNy .framer-1o135nh { height: auto; } .framer-ggZNy .framer-10mrnj2, .framer-ggZNy .framer-9qynym { max-width: unset; width: 100%; } .framer-ggZNy .framer-9b3uwy { flex-direction: column; gap: 40px; justify-content: center; } .framer-ggZNy .framer-7osyir { align-content: flex-start; align-items: flex-start; flex: none; width: 100%; } .framer-ggZNy .framer-1rgy0l0 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-ggZNy .framer-9vbtvf { order: 0; } .framer-ggZNy .framer-y7emh3 { height: 457px; order: 1; } .framer-ggZNy .framer-fd22ky { height: 457px; order: 3; } .framer-ggZNy .framer-42tmvj { order: 2; } .framer-ggZNy .framer-1gftyxg { order: 4; } .framer-ggZNy .framer-f9ubeo { height: 581px; order: 5; }}`,
        `@media (max-width: 809.98px) { .framer-ggZNy.framer-90vj06 { width: 390px; } .framer-ggZNy .framer-19jf6kr, .framer-ggZNy .framer-1auwmy1, .framer-ggZNy .framer-b985qc, .framer-ggZNy .framer-uttvae, .framer-ggZNy .framer-utetjz, .framer-ggZNy .framer-tjzilf { flex-direction: column; } .framer-ggZNy .framer-1hxivmy { height: 595px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; } .framer-ggZNy .framer-187j4ip, .framer-ggZNy .framer-1246sqa, .framer-ggZNy .framer-1vsurpd, .framer-ggZNy .framer-1gq3dw7, .framer-ggZNy .framer-1tw0ksq, .framer-ggZNy .framer-1kls3a7, .framer-ggZNy .framer-pwyzjx, .framer-ggZNy .framer-1rdxsue, .framer-ggZNy .framer-ah887w, .framer-ggZNy .framer-o0gmmd, .framer-ggZNy .framer-17prfb4, .framer-ggZNy .framer-isfymb { height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-ggZNy .framer-add5lb, .framer-ggZNy .framer-rk4z0f, .framer-ggZNy .framer-uhiyjb, .framer-ggZNy .framer-1frpp0e { --border-bottom-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-ggZNy .framer-9r28ew, .framer-ggZNy .framer-1ixiobw, .framer-ggZNy .framer-rk5jz5, .framer-ggZNy .framer-1xcq8nr { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-ggZNy .framer-1rwta9y { flex-direction: column; left: unset; min-height: unset; position: relative; right: unset; top: unset; transform: unset; width: 100%; } .framer-ggZNy .framer-6vxxu7 { bottom: unset; height: 595px; left: unset; position: relative; top: unset; } .framer-ggZNy .framer-1lbp4lw { height: min-content; padding: 100px 24px 48px 24px; } .framer-ggZNy .framer-dfw3yd, .framer-ggZNy .framer-imekfa, .framer-ggZNy .framer-3v9aig { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-ggZNy .framer-1krxkgn { width: 100%; } .framer-ggZNy .framer-gc5c6i, .framer-ggZNy .framer-16yl664 { flex: none; width: 100%; } .framer-ggZNy .framer-11yg9kk, .framer-ggZNy .framer-zwem5o { --border-bottom-width: 1px; --border-right-width: 0px; gap: 40px; justify-content: center; padding: 24px; } .framer-ggZNy .framer-d2t7d7, .framer-ggZNy .framer-1o135nh { height: 200px; } .framer-ggZNy .framer-wx37n4 { align-content: center; align-items: center; flex-direction: column; gap: 40px; justify-content: center; } .framer-ggZNy .framer-g0muoh, .framer-ggZNy .framer-7osyir { align-content: center; align-items: center; flex: none; width: 100%; } .framer-ggZNy .framer-zrfv11, .framer-ggZNy .framer-rihaf6 { align-content: center; align-items: center; align-self: unset; height: min-content; order: 0; width: 100%; } .framer-ggZNy .framer-7y9l0u, .framer-ggZNy .framer-ysiga3 { --border-right-width: 0px; height: min-content; order: 0; padding: 80px 24px 80px 24px; } .framer-ggZNy .framer-10mrnj2, .framer-ggZNy .framer-9qynym { max-width: unset; width: 100%; } .framer-ggZNy .framer-a0w5rb, .framer-ggZNy .framer-1ptcbbq { flex: none; order: 1; width: 100%; } .framer-ggZNy .framer-9b3uwy { flex-direction: column; gap: 40px; justify-content: center; } .framer-ggZNy .framer-z8sj3w { --border-bottom-width: 1px; --border-right-width: 0px; align-self: unset; flex: none; gap: 40px; height: min-content; justify-content: center; padding: 24px; width: 100%; } .framer-ggZNy .framer-1rgy0l0 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-ggZNy .framer-9vbtvf { gap: 40px; justify-content: center; order: 0; padding: 24px; } .framer-ggZNy .framer-y7emh3 { --border-left-width: 1px; gap: 0px; height: 250px; justify-content: center; order: 1; } .framer-ggZNy .framer-fd22ky { gap: 0px; height: 250px; justify-content: center; order: 3; } .framer-ggZNy .framer-42tmvj { --border-left-width: 1px; gap: 40px; justify-content: center; order: 2; padding: 24px; } .framer-ggZNy .framer-1gftyxg { gap: 40px; justify-content: center; order: 4; padding: 24px; } .framer-ggZNy .framer-f9ubeo { --border-left-width: 1px; gap: 0px; height: 250px; justify-content: center; order: 5; }}`,
      ],
      `framer-ggZNy`,
    )),
    (Qe = $),
    ($.displayName = `Volunteer`),
    ($.defaultProps = { height: 8978.5, width: 1728 }),
    oe(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../fonts/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../fonts/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
        ...ze,
        ...Be,
        ...Ve,
        ...He,
        ...Ue,
        ...We,
        ...h(Se),
        ...h(De),
        ...h(je),
        ...h(I),
        ...h(Fe),
        ...h(ve),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([S(B, {}, t), S(F, {}, t), S(U, {}, t), S(W, {}, t)])
      ),
    }),
    ($e = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJanopNEp5`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicHeight: `8978.5`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"q1wwcm8vK":{"layout":["fixed","auto"]},"KsBWtohXg":{"layout":["fixed","auto"]},"cSfDKgYK0":{"layout":["fixed","auto"]},"l2sglEYrG":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"pFojT34gh":{"pattern":":pFojT34gh","name":"first"},"h99P5QInJ":{"pattern":":h99P5QInJ","name":"first"}}`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1728`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $e as __FramerMetadata__, Qe as default, qe as queryParamNames };
//# sourceMappingURL=FvZPiGslLQY2OutwBtWox7Tu-vkzylDRGR6h13h_mzA.By12Gnto.mjs.map
