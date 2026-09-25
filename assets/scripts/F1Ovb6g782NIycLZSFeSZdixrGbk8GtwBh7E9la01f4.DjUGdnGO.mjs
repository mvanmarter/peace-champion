import { n as e } from "./rolldown-runtime.DaQlKkf0.mjs";
import {
  E as t,
  M as n,
  O as r,
  S as i,
  _ as a,
  c as o,
  h as ee,
  j as te,
  k as s,
  l as c,
  o as l,
  s as u,
  x as ne,
} from "./react.DjGraiHU.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.BonBzg_H.mjs";
import {
  C as h,
  E as g,
  L as _,
  R as v,
  S as y,
  T as b,
  W as x,
  _ as S,
  c as C,
  ht as w,
  it as T,
  k as E,
  mt as D,
  n as O,
  o as re,
  ot as ie,
  pt as k,
  r as ae,
  rt as oe,
  s as A,
  st as j,
  t as M,
  tt as N,
  u as se,
} from "./framer.1egicfVa.mjs";
import {
  a as ce,
  c as le,
  i as P,
  l as F,
  o as ue,
  r as de,
  s as fe,
  u as pe,
} from "./shared-lib.Da7y4iR1.mjs";
import { i as me, n as he, r as ge, t as _e } from "./h3JjhDKFx.Cf_Eftua.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./XzgMKSLcl.DfWRurZu.mjs";
import { n as Se, r as I } from "./dNb59erKa.D5bUbBDG.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  Ce,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  we,
  Te,
  Ee,
  J,
  Y,
  De = e(() => {
    (l(),
      x(),
      m(),
      i(),
      (R = w(d.div)),
      (Ce = { bm0_gHeiZ: { hover: !0, pressed: !0 } }),
      (z = [`bm0_gHeiZ`, `Fw7wtA62f`, `A2GBWPm8r`, `RUVVqFj1R`, `oR_rYDlSu`]),
      (B = `framer-gkqhr`),
      (V = {
        A2GBWPm8r: `framer-v-pbpqxp`,
        bm0_gHeiZ: `framer-v-1aqmoxe`,
        Fw7wtA62f: `framer-v-1yj6os1`,
        oR_rYDlSu: `framer-v-1a2psy4`,
        RUVVqFj1R: `framer-v-1vmzf66`,
      }),
      (H = {
        delay: 0,
        duration: 0.2,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (U = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (W = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (G = (e, t) => `translateX(-50%) ${t}`),
      (K = ({ value: e, children: t }) => {
        let n = r(f),
          i = e ?? n.transition,
          a = s(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (q = {
        Default: `bm0_gHeiZ`,
        Disabled: `A2GBWPm8r`,
        Error: `oR_rYDlSu`,
        Loading: `Fw7wtA62f`,
        Success: `RUVVqFj1R`,
      }),
      (we = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `bm0_gHeiZ`,
      })),
      (Te = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ee = d.create(n)),
      (J = D(
        ee(function (e, r) {
          let { activeLocale: i, setLocale: ee } = j(),
            { style: te, className: s, layoutId: l, variant: u, ...ne } = we(e),
            {
              baseVariant: f,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: v,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = k({
              cycleOrder: z,
              defaultVariant: `bm0_gHeiZ`,
              enabledGestures: Ce,
              variant: u,
              variantClassNames: V,
            }),
            C = Te(e, S),
            w = E(B),
            T = t(null),
            D = () => f !== `Fw7wtA62f`,
            O = () => f === `Fw7wtA62f`,
            re = a();
          return (
            N(),
            o(p, {
              id: l ?? re,
              children: o(Ee, {
                animate: S,
                initial: !1,
                children: o(K, {
                  value: H,
                  children: c(d.button, {
                    ...ne,
                    ...g,
                    className: E(w, `framer-1aqmoxe`, s, m),
                    "data-framer-name": `Default`,
                    "data-reset": `button`,
                    layoutDependency: C,
                    layoutId: `bm0_gHeiZ`,
                    ref: r ?? T,
                    style: {
                      backgroundColor: `rgb(0, 0, 0)`,
                      borderBottomLeftRadius: 400,
                      borderBottomRightRadius: 400,
                      borderTopLeftRadius: 400,
                      borderTopRightRadius: 400,
                      opacity: 1,
                      ...te,
                    },
                    variants: {
                      "bm0_gHeiZ-hover": {
                        backgroundColor: `rgba(51, 51, 51, 0.85)`,
                      },
                      "bm0_gHeiZ-pressed": {
                        backgroundColor: `rgb(51, 51, 51)`,
                      },
                      A2GBWPm8r: { opacity: 0.5 },
                      oR_rYDlSu: { backgroundColor: `rgba(255, 34, 68, 0.15)` },
                    },
                    ...L(
                      {
                        "bm0_gHeiZ-hover": { "data-framer-name": void 0 },
                        "bm0_gHeiZ-pressed": { "data-framer-name": void 0 },
                        A2GBWPm8r: { "data-framer-name": `Disabled` },
                        Fw7wtA62f: { "data-framer-name": `Loading` },
                        oR_rYDlSu: { "data-framer-name": `Error` },
                        RUVVqFj1R: { "data-framer-name": `Success` },
                      },
                      f,
                      _,
                    ),
                    children: [
                      D() &&
                        o(y, {
                          __fromCanvasComponent: !0,
                          children: o(n, {
                            children: o(d.p, {
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS1zZW1pYm9sZA==`,
                                "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-font-weight": `600`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `Submit`,
                            }),
                          }),
                          className: `framer-lhkuec`,
                          fonts: [`FS;Manrope-semibold`],
                          layoutDependency: C,
                          layoutId: `NBHVYVoYs`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          variants: {
                            oR_rYDlSu: {
                              "--extracted-r6o4lv": `rgb(255, 34, 68)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...L(
                            {
                              oR_rYDlSu: {
                                children: o(n, {
                                  children: o(d.p, {
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                    },
                                    children: `Something Went Wrong`,
                                  }),
                                }),
                                fonts: [`Inter-SemiBold`],
                              },
                              RUVVqFj1R: {
                                children: o(n, {
                                  children: o(d.p, {
                                    style: {
                                      "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                      "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `Message Sent!`,
                                  }),
                                }),
                                fonts: [`Inter-SemiBold`],
                              },
                            },
                            f,
                            _,
                          ),
                        }),
                      O() &&
                        o(d.div, {
                          className: `framer-q72qge`,
                          "data-framer-name": `Spinner`,
                          layoutDependency: C,
                          layoutId: `ODvp3s6Wb`,
                          style: {
                            mask: `url('../images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('../images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                          children: o(R, {
                            __framer__loop: W,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: U,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1obyu8`,
                            "data-framer-name": `Conic`,
                            layoutDependency: C,
                            layoutId: `SqkkLT82m`,
                            style: {
                              background: `conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)`,
                              backgroundColor: `rgb(68, 204, 255)`,
                              mask: `none`,
                              WebkitMask: `none`,
                            },
                            variants: {
                              Fw7wtA62f: {
                                background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                mask: `url('../images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                                WebkitMask: `url('../images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                              },
                            },
                            children: o(d.div, {
                              className: `framer-ov0c9m`,
                              "data-framer-name": `Rounding`,
                              layoutDependency: C,
                              layoutId: `I4WTCyLi7`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                              transformTemplate: G,
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gkqhr.framer-9jf8jq, .framer-gkqhr .framer-9jf8jq { display: block; }`,
          `.framer-gkqhr.framer-1aqmoxe { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-gkqhr .framer-lhkuec { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-gkqhr .framer-q72qge { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-gkqhr .framer-1obyu8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-gkqhr .framer-ov0c9m { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gkqhr.framer-1aqmoxe { gap: 0px; } .framer-gkqhr.framer-1aqmoxe > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-gkqhr.framer-1aqmoxe > :first-child { margin-left: 0px; } .framer-gkqhr.framer-1aqmoxe > :last-child { margin-right: 0px; } }`,
          `.framer-gkqhr.framer-v-1yj6os1.framer-1aqmoxe, .framer-gkqhr.framer-v-pbpqxp.framer-1aqmoxe, .framer-gkqhr.framer-v-1vmzf66.framer-1aqmoxe, .framer-gkqhr.framer-v-1a2psy4.framer-1aqmoxe { cursor: unset; }`,
          `.framer-gkqhr.framer-v-1yj6os1 .framer-1obyu8 { overflow: hidden; }`,
        ],
        `framer-gkqhr`,
      )),
      (Y = J),
      (J.displayName = `Button 2`),
      (J.defaultProps = { height: 40, width: 240 }),
      g(J, {
        variant: {
          options: [
            `bm0_gHeiZ`,
            `Fw7wtA62f`,
            `A2GBWPm8r`,
            `RUVVqFj1R`,
            `oR_rYDlSu`,
          ],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: ae.Enum,
        },
      }),
      b(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                url: `../fonts/JNU3GNMUBPWW6V6JTED3S27XL5HN7NM5.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Oe,
  ke,
  Ae,
  X,
  Z,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Q,
  Re,
  $;
e(() => {
  (l(),
    x(),
    m(),
    i(),
    pe(),
    De(),
    de(),
    me(),
    le(),
    ve(),
    Se(),
    (Oe = _(Y)),
    (ke = _(P)),
    (Ae = _(F)),
    (X = {
      G7GBJRjVr: `(min-width: 810px) and (max-width: 1199px)`,
      lYOWNe2Vi: `(min-width: 1200px) and (max-width: 1439px)`,
      NqnIZoJt7: `(min-width: 1728px)`,
      rC8a81MeH: `(max-width: 809px)`,
      TTgEFZQHH: `(min-width: 1440px) and (max-width: 1727px)`,
    }),
    (Z = () => typeof document < `u`),
    (je = `framer-X55ZG`),
    (Me = {
      G7GBJRjVr: `framer-v-jx0dgh`,
      lYOWNe2Vi: `framer-v-1mwnhsz`,
      NqnIZoJt7: `framer-v-wqbf2n`,
      rC8a81MeH: `framer-v-7efg67`,
      TTgEFZQHH: `framer-v-eva5ng`,
    }),
    (Ne = (e, t) => `translateY(-50%) ${t}`),
    (Pe = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
      }
    }),
    (Fe = ({ value: e }) =>
      ie()
        ? null
        : o(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Ie = {
      "Desktop 2": `TTgEFZQHH`,
      "Desktop 3": `lYOWNe2Vi`,
      Desktop: `NqnIZoJt7`,
      Phone: `rC8a81MeH`,
      Tablet: `G7GBJRjVr`,
    }),
    (Le = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ie[r.variant] ?? r.variant ?? `NqnIZoJt7`,
    })),
    (Q = D(
      ee(function (e, r) {
        let { activeLocale: i, setLocale: ee } = j(),
          { style: s, className: l, layoutId: f, variant: m, ...g } = Le(e);
        (te(() => {
          let e = I(void 0, i);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, i]),
          ne(() => {
            let e = I(void 0, i);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, i]));
        let [_, v] = T(m, X, !1),
          b = E(je, ce, _e, xe),
          x = t(null),
          w = () => (Z() ? _ !== `rC8a81MeH` : !0),
          D = () => !Z() || _ === `rC8a81MeH`,
          ie = a();
        oe({});
        let k = N();
        return o(C.Provider, {
          value: { primaryVariantId: `NqnIZoJt7`, variantClassNames: Me },
          children: c(p, {
            id: f ?? ie,
            children: [
              o(Fe, { value: `html body { background: rgb(250, 249, 246); }` }),
              c(d.div, {
                ...g,
                className: E(b, `framer-wqbf2n`, l),
                ref: r ?? x,
                style: { ...s },
                children: [
                  c(`div`, {
                    className: `framer-mnk1hm`,
                    "data-framer-name": `Hero`,
                    children: [
                      w() &&
                        c(`div`, {
                          className: `framer-1xznxx1 hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            c(`div`, {
                              className: `framer-1572bbu`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-102xnnd`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1ld9vf3`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-tmfmnq`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-hlucba`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-59s9ms`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-17f7uqh`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1fbazv7`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-5v41u`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-p5mfgb`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-g4w7a5`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-k1ohsj`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1wr5j20`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1b2a5mb`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1m52af5`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-q9duzx`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-1emx7h0`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-9fa236`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-11sua7i`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1c3t4uq`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-tk7etl`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-1fjukiq`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-6l1zwt`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-c0ex8i`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1gzw9l`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      w() &&
                        c(`div`, {
                          className: `framer-128rov7 hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            c(`div`, {
                              className: `framer-18b911e`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-pzdtc8`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-huv3m0`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1i6djhr`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-fxdcek`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1ovj426`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-m802ml`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1rx2r1o`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-76x7h8`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-13jxl7c`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-ohhvm`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-175i69m`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-kl914x`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-5reh5y`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-183ubpo`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-17jxj5s`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-osqxst`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-ee25yv`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1qdoi6l`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-veg4ho`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-8aoazz`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-1r45vu8`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-su3r23`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-17iv6p5`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-yl7zys`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      w() &&
                        c(`div`, {
                          className: `framer-1hw9en6 hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            c(`div`, {
                              className: `framer-fqz0z4`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-1x8y1ve`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-64sk2t`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-aj3563`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1cboyuj`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-155ftfu`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-eiqola`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1grf3rl`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1qb4yhn`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-nzqsl`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-19gxkiy`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-15ymnig`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1jjac4u`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-pkbwi7`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1pledk`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-7bge46`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-1a7ftnv`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-471e3n`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-14fzwfo`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-7lu19t`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-a8axr`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-isbp72`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-10r5rm1`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-iknv25`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-17tpxoa`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      c(`div`, {
                        className: `framer-djn4a6`,
                        "data-framer-name": `Frame 69`,
                        children: [
                          c(`div`, {
                            className: `framer-1w5cgcw`,
                            "data-framer-name": `Frame 69`,
                            children: [
                              o(`div`, {
                                className: `framer-9n1lb9`,
                                "data-border": !0,
                                "data-framer-name": `Frame 113`,
                              }),
                              o(`div`, {
                                className: `framer-as3fkh`,
                                "data-border": !0,
                                "data-framer-name": `Frame 124`,
                              }),
                              o(`div`, {
                                className: `framer-zr6b9y`,
                                "data-border": !0,
                                "data-framer-name": `Frame 122`,
                              }),
                              o(`div`, {
                                className: `framer-12ns4rl`,
                                "data-border": !0,
                                "data-framer-name": `Frame 121`,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1cdiejm`,
                            "data-framer-name": `Frame 74`,
                            children: [
                              o(`div`, {
                                className: `framer-faundk`,
                                "data-border": !0,
                                "data-framer-name": `Frame 113`,
                              }),
                              o(`div`, {
                                className: `framer-oh3te0`,
                                "data-border": !0,
                                "data-framer-name": `Frame 124`,
                              }),
                              o(`div`, {
                                className: `framer-lgyxmt`,
                                "data-border": !0,
                                "data-framer-name": `Frame 122`,
                              }),
                              o(`div`, {
                                className: `framer-1ifn2zf`,
                                "data-border": !0,
                                "data-framer-name": `Frame 121`,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-vem45v`,
                            "data-framer-name": `Frame 75`,
                            children: [
                              o(`div`, {
                                className: `framer-c48gtg`,
                                "data-border": !0,
                                "data-framer-name": `Frame 113`,
                              }),
                              o(`div`, {
                                className: `framer-1xr090p`,
                                "data-border": !0,
                                "data-framer-name": `Frame 124`,
                              }),
                              o(`div`, {
                                className: `framer-1u833vo`,
                                "data-border": !0,
                                "data-framer-name": `Frame 122`,
                              }),
                              o(`div`, {
                                className: `framer-q3f7gf`,
                                "data-border": !0,
                                "data-framer-name": `Frame 121`,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-zjsjxg`,
                            "data-framer-name": `Frame 78`,
                            children: [
                              o(`div`, {
                                className: `framer-1jgf875`,
                                "data-border": !0,
                                "data-framer-name": `Frame 113`,
                              }),
                              o(`div`, {
                                className: `framer-apa2uk`,
                                "data-border": !0,
                                "data-framer-name": `Frame 124`,
                              }),
                              o(`div`, {
                                className: `framer-1c9ukva`,
                                "data-border": !0,
                                "data-framer-name": `Frame 122`,
                              }),
                              o(`div`, {
                                className: `framer-15qb8bw`,
                                "data-border": !0,
                                "data-framer-name": `Frame 121`,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1w38xkk`,
                            "data-framer-name": `Frame 76`,
                            children: [
                              o(`div`, {
                                className: `framer-abbdf7`,
                                "data-border": !0,
                                "data-framer-name": `Frame 113`,
                              }),
                              o(`div`, {
                                className: `framer-1xzqu28`,
                                "data-border": !0,
                                "data-framer-name": `Frame 124`,
                              }),
                              o(`div`, {
                                className: `framer-hzjjhv`,
                                "data-border": !0,
                                "data-framer-name": `Frame 122`,
                              }),
                              o(`div`, {
                                className: `framer-gqqchk`,
                                "data-border": !0,
                                "data-framer-name": `Frame 121`,
                              }),
                            ],
                          }),
                          o(S, {
                            breakpoint: _,
                            overrides: {
                              rC8a81MeH: {
                                background: {
                                  alt: ``,
                                  fit: `stretch`,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${k?.width || `100vw`} / 4)`,
                                  src: `../images/2SZrfD5iqU974LmqpG0z5MBRw.png`,
                                  srcSet: `../images/2SZrfD5iqU974LmqpG0z5MBRw.png 512w,../images/2SZrfD5iqU974LmqpG0z5MBRw.png 1024w,../images/2SZrfD5iqU974LmqpG0z5MBRw.png 1152w`,
                                },
                                transformTemplate: void 0,
                              },
                            },
                            children: o(se, {
                              background: {
                                alt: ``,
                                fit: `stretch`,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `290px`,
                                src: `../images/2SZrfD5iqU974LmqpG0z5MBRw.png`,
                                srcSet: `../images/2SZrfD5iqU974LmqpG0z5MBRw.png 512w,../images/2SZrfD5iqU974LmqpG0z5MBRw.png 1024w,../images/2SZrfD5iqU974LmqpG0z5MBRw.png 1152w`,
                              },
                              className: `framer-hoeunt`,
                              "data-framer-name": `IMG_5514 2`,
                              transformTemplate: Ne,
                            }),
                          }),
                          o(`div`, {
                            className: `framer-q6qxg2`,
                            "data-framer-name": `Rectangle 2`,
                          }),
                          D() &&
                            o(h, {
                              className: `framer-1vbvsgr hidden-wqbf2n hidden-eva5ng hidden-1mwnhsz hidden-jx0dgh`,
                              "data-framer-name": `Frame 123`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 146,
                              intrinsicWidth: 290,
                              svg: `<svg width="290" height="146" viewBox="0 0 290 146" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2347_5226)">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="#FAF9F6"/>
<path d="M-254 146.5C-240.667 136.5 -227.333 136.5 -214 146.5C-200.667 156.5 -187.333 156.5 -174 146.5C-160.667 136.5 -147.333 136.5 -134 146.5C-120.667 156.5 -107.333 156.5 -94 146.5C-80.6667 136.5 -67.3333 136.5 -54 146.5C-40.6667 156.5 -27.3333 156.5 -14 146.5C-0.666667 136.5 12.6667 136.5 26 146.5C39.3333 156.5 52.6667 156.5 66 146.5C79.3333 136.5 92.6667 136.5 106 146.5C119.333 156.5 132.667 156.5 146 146.5C159.333 136.5 172.667 136.5 186 146.5C199.333 156.5 212.667 156.5 226 146.5C239.333 136.5 252.667 136.5 266 146.5C279.333 156.5 292.667 156.5 306 146.5C319.333 136.5 332.667 136.5 346 146.5C359.333 156.5 372.667 156.5 386 146.5C399.333 136.5 412.667 136.5 426 146.5C439.333 156.5 452.667 156.5 466 146.5C479.333 136.5 492.667 136.5 506 146.5C519.333 156.5 532.667 156.5 546 146.5" stroke="black"/>
<path d="M-254 139.5C-240.667 129.5 -227.333 129.5 -214 139.5C-200.667 149.5 -187.333 149.5 -174 139.5C-160.667 129.5 -147.333 129.5 -134 139.5C-120.667 149.5 -107.333 149.5 -94 139.5C-80.6667 129.5 -67.3333 129.5 -54 139.5C-40.6667 149.5 -27.3333 149.5 -14 139.5C-0.666667 129.5 12.6667 129.5 26 139.5C39.3333 149.5 52.6667 149.5 66 139.5C79.3333 129.5 92.6667 129.5 106 139.5C119.333 149.5 132.667 149.5 146 139.5C159.333 129.5 172.667 129.5 186 139.5C199.333 149.5 212.667 149.5 226 139.5C239.333 129.5 252.667 129.5 266 139.5C279.333 149.5 292.667 149.5 306 139.5C319.333 129.5 332.667 129.5 346 139.5C359.333 149.5 372.667 149.5 386 139.5C399.333 129.5 412.667 129.5 426 139.5C439.333 149.5 452.667 149.5 466 139.5C479.333 129.5 492.667 129.5 506 139.5C519.333 149.5 532.667 149.5 546 139.5" stroke="black"/>
<path d="M-254 132.5C-240.667 122.5 -227.333 122.5 -214 132.5C-200.667 142.5 -187.333 142.5 -174 132.5C-160.667 122.5 -147.333 122.5 -134 132.5C-120.667 142.5 -107.333 142.5 -94 132.5C-80.6667 122.5 -67.3333 122.5 -54 132.5C-40.6667 142.5 -27.3333 142.5 -14 132.5C-0.666667 122.5 12.6667 122.5 26 132.5C39.3333 142.5 52.6667 142.5 66 132.5C79.3333 122.5 92.6667 122.5 106 132.5C119.333 142.5 132.667 142.5 146 132.5C159.333 122.5 172.667 122.5 186 132.5C199.333 142.5 212.667 142.5 226 132.5C239.333 122.5 252.667 122.5 266 132.5C279.333 142.5 292.667 142.5 306 132.5C319.333 122.5 332.667 122.5 346 132.5C359.333 142.5 372.667 142.5 386 132.5C399.333 122.5 412.667 122.5 426 132.5C439.333 142.5 452.667 142.5 466 132.5C479.333 122.5 492.667 122.5 506 132.5C519.333 142.5 532.667 142.5 546 132.5" stroke="black"/>
<path d="M-254 125.5C-240.667 115.5 -227.333 115.5 -214 125.5C-200.667 135.5 -187.333 135.5 -174 125.5C-160.667 115.5 -147.333 115.5 -134 125.5C-120.667 135.5 -107.333 135.5 -94 125.5C-80.6667 115.5 -67.3333 115.5 -54 125.5C-40.6667 135.5 -27.3333 135.5 -14 125.5C-0.666667 115.5 12.6667 115.5 26 125.5C39.3333 135.5 52.6667 135.5 66 125.5C79.3333 115.5 92.6667 115.5 106 125.5C119.333 135.5 132.667 135.5 146 125.5C159.333 115.5 172.667 115.5 186 125.5C199.333 135.5 212.667 135.5 226 125.5C239.333 115.5 252.667 115.5 266 125.5C279.333 135.5 292.667 135.5 306 125.5C319.333 115.5 332.667 115.5 346 125.5C359.333 135.5 372.667 135.5 386 125.5C399.333 115.5 412.667 115.5 426 125.5C439.333 135.5 452.667 135.5 466 125.5C479.333 115.5 492.667 115.5 506 125.5C519.333 135.5 532.667 135.5 546 125.5" stroke="black"/>
<path d="M-254 118.5C-240.667 108.5 -227.333 108.5 -214 118.5C-200.667 128.5 -187.333 128.5 -174 118.5C-160.667 108.5 -147.333 108.5 -134 118.5C-120.667 128.5 -107.333 128.5 -94 118.5C-80.6667 108.5 -67.3333 108.5 -54 118.5C-40.6667 128.5 -27.3333 128.5 -14 118.5C-0.666667 108.5 12.6667 108.5 26 118.5C39.3333 128.5 52.6667 128.5 66 118.5C79.3333 108.5 92.6667 108.5 106 118.5C119.333 128.5 132.667 128.5 146 118.5C159.333 108.5 172.667 108.5 186 118.5C199.333 128.5 212.667 128.5 226 118.5C239.333 108.5 252.667 108.5 266 118.5C279.333 128.5 292.667 128.5 306 118.5C319.333 108.5 332.667 108.5 346 118.5C359.333 128.5 372.667 128.5 386 118.5C399.333 108.5 412.667 108.5 426 118.5C439.333 128.5 452.667 128.5 466 118.5C479.333 108.5 492.667 108.5 506 118.5C519.333 128.5 532.667 128.5 546 118.5" stroke="black"/>
<path d="M-254 111.5C-240.667 101.5 -227.333 101.5 -214 111.5C-200.667 121.5 -187.333 121.5 -174 111.5C-160.667 101.5 -147.333 101.5 -134 111.5C-120.667 121.5 -107.333 121.5 -94 111.5C-80.6667 101.5 -67.3333 101.5 -54 111.5C-40.6667 121.5 -27.3333 121.5 -14 111.5C-0.666667 101.5 12.6667 101.5 26 111.5C39.3333 121.5 52.6667 121.5 66 111.5C79.3333 101.5 92.6667 101.5 106 111.5C119.333 121.5 132.667 121.5 146 111.5C159.333 101.5 172.667 101.5 186 111.5C199.333 121.5 212.667 121.5 226 111.5C239.333 101.5 252.667 101.5 266 111.5C279.333 121.5 292.667 121.5 306 111.5C319.333 101.5 332.667 101.5 346 111.5C359.333 121.5 372.667 121.5 386 111.5C399.333 101.5 412.667 101.5 426 111.5C439.333 121.5 452.667 121.5 466 111.5C479.333 101.5 492.667 101.5 506 111.5C519.333 121.5 532.667 121.5 546 111.5" stroke="black"/>
<path d="M-254 104.5C-240.667 94.5 -227.333 94.5 -214 104.5C-200.667 114.5 -187.333 114.5 -174 104.5C-160.667 94.5 -147.333 94.5 -134 104.5C-120.667 114.5 -107.333 114.5 -94 104.5C-80.6667 94.5 -67.3333 94.5 -54 104.5C-40.6667 114.5 -27.3333 114.5 -14 104.5C-0.666667 94.5 12.6667 94.5 26 104.5C39.3333 114.5 52.6667 114.5 66 104.5C79.3333 94.5 92.6667 94.5 106 104.5C119.333 114.5 132.667 114.5 146 104.5C159.333 94.5 172.667 94.5 186 104.5C199.333 114.5 212.667 114.5 226 104.5C239.333 94.5 252.667 94.5 266 104.5C279.333 114.5 292.667 114.5 306 104.5C319.333 94.5 332.667 94.5 346 104.5C359.333 114.5 372.667 114.5 386 104.5C399.333 94.5 412.667 94.5 426 104.5C439.333 114.5 452.667 114.5 466 104.5C479.333 94.5 492.667 94.5 506 104.5C519.333 114.5 532.667 114.5 546 104.5" stroke="black"/>
<path d="M-254 97.5C-240.667 87.5 -227.333 87.5 -214 97.5C-200.667 107.5 -187.333 107.5 -174 97.5C-160.667 87.5 -147.333 87.5 -134 97.5C-120.667 107.5 -107.333 107.5 -94 97.5C-80.6667 87.5 -67.3333 87.5 -54 97.5C-40.6667 107.5 -27.3333 107.5 -14 97.5C-0.666667 87.5 12.6667 87.5 26 97.5C39.3333 107.5 52.6667 107.5 66 97.5C79.3333 87.5 92.6667 87.5 106 97.5C119.333 107.5 132.667 107.5 146 97.5C159.333 87.5 172.667 87.5 186 97.5C199.333 107.5 212.667 107.5 226 97.5C239.333 87.5 252.667 87.5 266 97.5C279.333 107.5 292.667 107.5 306 97.5C319.333 87.5 332.667 87.5 346 97.5C359.333 107.5 372.667 107.5 386 97.5C399.333 87.5 412.667 87.5 426 97.5C439.333 107.5 452.667 107.5 466 97.5C479.333 87.5 492.667 87.5 506 97.5C519.333 107.5 532.667 107.5 546 97.5" stroke="black"/>
<path d="M-254 90.5C-240.667 80.5 -227.333 80.5 -214 90.5C-200.667 100.5 -187.333 100.5 -174 90.5C-160.667 80.5 -147.333 80.5 -134 90.5C-120.667 100.5 -107.333 100.5 -94 90.5C-80.6667 80.5 -67.3333 80.5 -54 90.5C-40.6667 100.5 -27.3333 100.5 -14 90.5C-0.666667 80.5 12.6667 80.5 26 90.5C39.3333 100.5 52.6667 100.5 66 90.5C79.3333 80.5 92.6667 80.5 106 90.5C119.333 100.5 132.667 100.5 146 90.5C159.333 80.5 172.667 80.5 186 90.5C199.333 100.5 212.667 100.5 226 90.5C239.333 80.5 252.667 80.5 266 90.5C279.333 100.5 292.667 100.5 306 90.5C319.333 80.5 332.667 80.5 346 90.5C359.333 100.5 372.667 100.5 386 90.5C399.333 80.5 412.667 80.5 426 90.5C439.333 100.5 452.667 100.5 466 90.5C479.333 80.5 492.667 80.5 506 90.5C519.333 100.5 532.667 100.5 546 90.5" stroke="black"/>
<path d="M-254 83.5C-240.667 73.5 -227.333 73.5 -214 83.5C-200.667 93.5 -187.333 93.5 -174 83.5C-160.667 73.5 -147.333 73.5 -134 83.5C-120.667 93.5 -107.333 93.5 -94 83.5C-80.6667 73.5 -67.3333 73.5 -54 83.5C-40.6667 93.5 -27.3333 93.5 -14 83.5C-0.666667 73.5 12.6667 73.5 26 83.5C39.3333 93.5 52.6667 93.5 66 83.5C79.3333 73.5 92.6667 73.5 106 83.5C119.333 93.5 132.667 93.5 146 83.5C159.333 73.5 172.667 73.5 186 83.5C199.333 93.5 212.667 93.5 226 83.5C239.333 73.5 252.667 73.5 266 83.5C279.333 93.5 292.667 93.5 306 83.5C319.333 73.5 332.667 73.5 346 83.5C359.333 93.5 372.667 93.5 386 83.5C399.333 73.5 412.667 73.5 426 83.5C439.333 93.5 452.667 93.5 466 83.5C479.333 73.5 492.667 73.5 506 83.5C519.333 93.5 532.667 93.5 546 83.5" stroke="black"/>
<path d="M-254 76.5C-240.667 66.5 -227.333 66.5 -214 76.5C-200.667 86.5 -187.333 86.5 -174 76.5C-160.667 66.5 -147.333 66.5 -134 76.5C-120.667 86.5 -107.333 86.5 -94 76.5C-80.6667 66.5 -67.3333 66.5 -54 76.5C-40.6667 86.5 -27.3333 86.5 -14 76.5C-0.666667 66.5 12.6667 66.5 26 76.5C39.3333 86.5 52.6667 86.5 66 76.5C79.3333 66.5 92.6667 66.5 106 76.5C119.333 86.5 132.667 86.5 146 76.5C159.333 66.5 172.667 66.5 186 76.5C199.333 86.5 212.667 86.5 226 76.5C239.333 66.5 252.667 66.5 266 76.5C279.333 86.5 292.667 86.5 306 76.5C319.333 66.5 332.667 66.5 346 76.5C359.333 86.5 372.667 86.5 386 76.5C399.333 66.5 412.667 66.5 426 76.5C439.333 86.5 452.667 86.5 466 76.5C479.333 66.5 492.667 66.5 506 76.5C519.333 86.5 532.667 86.5 546 76.5" stroke="black"/>
<path d="M-254 69.5C-240.667 59.5 -227.333 59.5 -214 69.5C-200.667 79.5 -187.333 79.5 -174 69.5C-160.667 59.5 -147.333 59.5 -134 69.5C-120.667 79.5 -107.333 79.5 -94 69.5C-80.6667 59.5 -67.3333 59.5 -54 69.5C-40.6667 79.5 -27.3333 79.5 -14 69.5C-0.666667 59.5 12.6667 59.5 26 69.5C39.3333 79.5 52.6667 79.5 66 69.5C79.3333 59.5 92.6667 59.5 106 69.5C119.333 79.5 132.667 79.5 146 69.5C159.333 59.5 172.667 59.5 186 69.5C199.333 79.5 212.667 79.5 226 69.5C239.333 59.5 252.667 59.5 266 69.5C279.333 79.5 292.667 79.5 306 69.5C319.333 59.5 332.667 59.5 346 69.5C359.333 79.5 372.667 79.5 386 69.5C399.333 59.5 412.667 59.5 426 69.5C439.333 79.5 452.667 79.5 466 69.5C479.333 59.5 492.667 59.5 506 69.5C519.333 79.5 532.667 79.5 546 69.5" stroke="black"/>
<path d="M-254 62.5C-240.667 52.5 -227.333 52.5 -214 62.5C-200.667 72.5 -187.333 72.5 -174 62.5C-160.667 52.5 -147.333 52.5 -134 62.5C-120.667 72.5 -107.333 72.5 -94 62.5C-80.6667 52.5 -67.3333 52.5 -54 62.5C-40.6667 72.5 -27.3333 72.5 -14 62.5C-0.666667 52.5 12.6667 52.5 26 62.5C39.3333 72.5 52.6667 72.5 66 62.5C79.3333 52.5 92.6667 52.5 106 62.5C119.333 72.5 132.667 72.5 146 62.5C159.333 52.5 172.667 52.5 186 62.5C199.333 72.5 212.667 72.5 226 62.5C239.333 52.5 252.667 52.5 266 62.5C279.333 72.5 292.667 72.5 306 62.5C319.333 52.5 332.667 52.5 346 62.5C359.333 72.5 372.667 72.5 386 62.5C399.333 52.5 412.667 52.5 426 62.5C439.333 72.5 452.667 72.5 466 62.5C479.333 52.5 492.667 52.5 506 62.5C519.333 72.5 532.667 72.5 546 62.5" stroke="black"/>
<path d="M-254 55.5C-240.667 45.5 -227.333 45.5 -214 55.5C-200.667 65.5 -187.333 65.5 -174 55.5C-160.667 45.5 -147.333 45.5 -134 55.5C-120.667 65.5 -107.333 65.5 -94 55.5C-80.6667 45.5 -67.3333 45.5 -54 55.5C-40.6667 65.5 -27.3333 65.5 -14 55.5C-0.666667 45.5 12.6667 45.5 26 55.5C39.3333 65.5 52.6667 65.5 66 55.5C79.3333 45.5 92.6667 45.5 106 55.5C119.333 65.5 132.667 65.5 146 55.5C159.333 45.5 172.667 45.5 186 55.5C199.333 65.5 212.667 65.5 226 55.5C239.333 45.5 252.667 45.5 266 55.5C279.333 65.5 292.667 65.5 306 55.5C319.333 45.5 332.667 45.5 346 55.5C359.333 65.5 372.667 65.5 386 55.5C399.333 45.5 412.667 45.5 426 55.5C439.333 65.5 452.667 65.5 466 55.5C479.333 45.5 492.667 45.5 506 55.5C519.333 65.5 532.667 65.5 546 55.5" stroke="black"/>
<path d="M-254 48.5C-240.667 38.5 -227.333 38.5 -214 48.5C-200.667 58.5 -187.333 58.5 -174 48.5C-160.667 38.5 -147.333 38.5 -134 48.5C-120.667 58.5 -107.333 58.5 -94 48.5C-80.6667 38.5 -67.3333 38.5 -54 48.5C-40.6667 58.5 -27.3333 58.5 -14 48.5C-0.666667 38.5 12.6667 38.5 26 48.5C39.3333 58.5 52.6667 58.5 66 48.5C79.3333 38.5 92.6667 38.5 106 48.5C119.333 58.5 132.667 58.5 146 48.5C159.333 38.5 172.667 38.5 186 48.5C199.333 58.5 212.667 58.5 226 48.5C239.333 38.5 252.667 38.5 266 48.5C279.333 58.5 292.667 58.5 306 48.5C319.333 38.5 332.667 38.5 346 48.5C359.333 58.5 372.667 58.5 386 48.5C399.333 38.5 412.667 38.5 426 48.5C439.333 58.5 452.667 58.5 466 48.5C479.333 38.5 492.667 38.5 506 48.5C519.333 58.5 532.667 58.5 546 48.5" stroke="black"/>
<path d="M-254 41.5C-240.667 31.5 -227.333 31.5 -214 41.5C-200.667 51.5 -187.333 51.5 -174 41.5C-160.667 31.5 -147.333 31.5 -134 41.5C-120.667 51.5 -107.333 51.5 -94 41.5C-80.6667 31.5 -67.3333 31.5 -54 41.5C-40.6667 51.5 -27.3333 51.5 -14 41.5C-0.666667 31.5 12.6667 31.5 26 41.5C39.3333 51.5 52.6667 51.5 66 41.5C79.3333 31.5 92.6667 31.5 106 41.5C119.333 51.5 132.667 51.5 146 41.5C159.333 31.5 172.667 31.5 186 41.5C199.333 51.5 212.667 51.5 226 41.5C239.333 31.5 252.667 31.5 266 41.5C279.333 51.5 292.667 51.5 306 41.5C319.333 31.5 332.667 31.5 346 41.5C359.333 51.5 372.667 51.5 386 41.5C399.333 31.5 412.667 31.5 426 41.5C439.333 51.5 452.667 51.5 466 41.5C479.333 31.5 492.667 31.5 506 41.5C519.333 51.5 532.667 51.5 546 41.5" stroke="black"/>
<path d="M-254 34.5C-240.667 24.5 -227.333 24.5 -214 34.5C-200.667 44.5 -187.333 44.5 -174 34.5C-160.667 24.5 -147.333 24.5 -134 34.5C-120.667 44.5 -107.333 44.5 -94 34.5C-80.6667 24.5 -67.3333 24.5 -54 34.5C-40.6667 44.5 -27.3333 44.5 -14 34.5C-0.666667 24.5 12.6667 24.5 26 34.5C39.3333 44.5 52.6667 44.5 66 34.5C79.3333 24.5 92.6667 24.5 106 34.5C119.333 44.5 132.667 44.5 146 34.5C159.333 24.5 172.667 24.5 186 34.5C199.333 44.5 212.667 44.5 226 34.5C239.333 24.5 252.667 24.5 266 34.5C279.333 44.5 292.667 44.5 306 34.5C319.333 24.5 332.667 24.5 346 34.5C359.333 44.5 372.667 44.5 386 34.5C399.333 24.5 412.667 24.5 426 34.5C439.333 44.5 452.667 44.5 466 34.5C479.333 24.5 492.667 24.5 506 34.5C519.333 44.5 532.667 44.5 546 34.5" stroke="black"/>
<path d="M-254 27.5C-240.667 17.5 -227.333 17.5 -214 27.5C-200.667 37.5 -187.333 37.5 -174 27.5C-160.667 17.5 -147.333 17.5 -134 27.5C-120.667 37.5 -107.333 37.5 -94 27.5C-80.6667 17.5 -67.3333 17.5 -54 27.5C-40.6667 37.5 -27.3333 37.5 -14 27.5C-0.666667 17.5 12.6667 17.5 26 27.5C39.3333 37.5 52.6667 37.5 66 27.5C79.3333 17.5 92.6667 17.5 106 27.5C119.333 37.5 132.667 37.5 146 27.5C159.333 17.5 172.667 17.5 186 27.5C199.333 37.5 212.667 37.5 226 27.5C239.333 17.5 252.667 17.5 266 27.5C279.333 37.5 292.667 37.5 306 27.5C319.333 17.5 332.667 17.5 346 27.5C359.333 37.5 372.667 37.5 386 27.5C399.333 17.5 412.667 17.5 426 27.5C439.333 37.5 452.667 37.5 466 27.5C479.333 17.5 492.667 17.5 506 27.5C519.333 37.5 532.667 37.5 546 27.5" stroke="black"/>
<path d="M-254 20.5C-240.667 10.5 -227.333 10.5 -214 20.5C-200.667 30.5 -187.333 30.5 -174 20.5C-160.667 10.5 -147.333 10.5 -134 20.5C-120.667 30.5 -107.333 30.5 -94 20.5C-80.6667 10.5 -67.3333 10.5 -54 20.5C-40.6667 30.5 -27.3333 30.5 -14 20.5C-0.666667 10.5 12.6667 10.5 26 20.5C39.3333 30.5 52.6667 30.5 66 20.5C79.3333 10.5 92.6667 10.5 106 20.5C119.333 30.5 132.667 30.5 146 20.5C159.333 10.5 172.667 10.5 186 20.5C199.333 30.5 212.667 30.5 226 20.5C239.333 10.5 252.667 10.5 266 20.5C279.333 30.5 292.667 30.5 306 20.5C319.333 10.5 332.667 10.5 346 20.5C359.333 30.5 372.667 30.5 386 20.5C399.333 10.5 412.667 10.5 426 20.5C439.333 30.5 452.667 30.5 466 20.5C479.333 10.5 492.667 10.5 506 20.5C519.333 30.5 532.667 30.5 546 20.5" stroke="black"/>
<path d="M-254 13.5C-240.667 3.5 -227.333 3.5 -214 13.5C-200.667 23.5 -187.333 23.5 -174 13.5C-160.667 3.5 -147.333 3.5 -134 13.5C-120.667 23.5 -107.333 23.5 -94 13.5C-80.6667 3.5 -67.3333 3.5 -54 13.5C-40.6667 23.5 -27.3333 23.5 -14 13.5C-0.666667 3.5 12.6667 3.5 26 13.5C39.3333 23.5 52.6667 23.5 66 13.5C79.3333 3.5 92.6667 3.5 106 13.5C119.333 23.5 132.667 23.5 146 13.5C159.333 3.5 172.667 3.5 186 13.5C199.333 23.5 212.667 23.5 226 13.5C239.333 3.5 252.667 3.5 266 13.5C279.333 23.5 292.667 23.5 306 13.5C319.333 3.5 332.667 3.5 346 13.5C359.333 23.5 372.667 23.5 386 13.5C399.333 3.5 412.667 3.5 426 13.5C439.333 23.5 452.667 23.5 466 13.5C479.333 3.5 492.667 3.5 506 13.5C519.333 23.5 532.667 23.5 546 13.5" stroke="black"/>
<path d="M-254 6.5C-240.667 -3.5 -227.333 -3.5 -214 6.5C-200.667 16.5 -187.333 16.5 -174 6.5C-160.667 -3.5 -147.333 -3.5 -134 6.5C-120.667 16.5 -107.333 16.5 -94 6.5C-80.6667 -3.5 -67.3333 -3.5 -54 6.5C-40.6667 16.5 -27.3333 16.5 -14 6.5C-0.666667 -3.5 12.6667 -3.5 26 6.5C39.3333 16.5 52.6667 16.5 66 6.5C79.3333 -3.5 92.6667 -3.5 106 6.5C119.333 16.5 132.667 16.5 146 6.5C159.333 -3.5 172.667 -3.5 186 6.5C199.333 16.5 212.667 16.5 226 6.5C239.333 -3.5 252.667 -3.5 266 6.5C279.333 16.5 292.667 16.5 306 6.5C319.333 -3.5 332.667 -3.5 346 6.5C359.333 16.5 372.667 16.5 386 6.5C399.333 -3.5 412.667 -3.5 426 6.5C439.333 16.5 452.667 16.5 466 6.5C479.333 -3.5 492.667 -3.5 506 6.5C519.333 16.5 532.667 16.5 546 6.5" stroke="black"/>
<path d="M-254 -0.5C-240.667 -10.5 -227.333 -10.5 -214 -0.5C-200.667 9.5 -187.333 9.5 -174 -0.5C-160.667 -10.5 -147.333 -10.5 -134 -0.5C-120.667 9.5 -107.333 9.5 -94 -0.5C-80.6667 -10.5 -67.3333 -10.5 -54 -0.5C-40.6667 9.5 -27.3333 9.5 -14 -0.5C-0.666667 -10.5 12.6667 -10.5 26 -0.5C39.3333 9.5 52.6667 9.5 66 -0.5C79.3333 -10.5 92.6667 -10.5 106 -0.5C119.333 9.5 132.667 9.5 146 -0.5C159.333 -10.5 172.667 -10.5 186 -0.5C199.333 9.5 212.667 9.5 226 -0.5C239.333 -10.5 252.667 -10.5 266 -0.5C279.333 9.5 292.667 9.5 306 -0.5C319.333 -10.5 332.667 -10.5 346 -0.5C359.333 9.5 372.667 9.5 386 -0.5C399.333 -10.5 412.667 -10.5 426 -0.5C439.333 9.5 452.667 9.5 466 -0.5C479.333 -10.5 492.667 -10.5 506 -0.5C519.333 9.5 532.667 9.5 546 -0.5" stroke="black"/>
<path d="M-254 -7.5C-240.667 -17.5 -227.333 -17.5 -214 -7.5C-200.667 2.5 -187.333 2.5 -174 -7.5C-160.667 -17.5 -147.333 -17.5 -134 -7.5C-120.667 2.5 -107.333 2.5 -94 -7.5C-80.6667 -17.5 -67.3333 -17.5 -54 -7.5C-40.6667 2.5 -27.3333 2.5 -14 -7.5C-0.666667 -17.5 12.6667 -17.5 26 -7.5C39.3333 2.5 52.6667 2.5 66 -7.5C79.3333 -17.5 92.6667 -17.5 106 -7.5C119.333 2.5 132.667 2.5 146 -7.5C159.333 -17.5 172.667 -17.5 186 -7.5C199.333 2.5 212.667 2.5 226 -7.5C239.333 -17.5 252.667 -17.5 266 -7.5C279.333 2.5 292.667 2.5 306 -7.5C319.333 -17.5 332.667 -17.5 346 -7.5C359.333 2.5 372.667 2.5 386 -7.5C399.333 -17.5 412.667 -17.5 426 -7.5C439.333 2.5 452.667 2.5 466 -7.5C479.333 -17.5 492.667 -17.5 506 -7.5C519.333 2.5 532.667 2.5 546 -7.5" stroke="black"/>
</g>
<rect x="1.19321" y="0.500556" width="288.179" height="144.087" stroke="#E1E0DD" stroke-width="1.00116"/>
<defs>
<clipPath id="clip0_2347_5226">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                      w() &&
                        c(`div`, {
                          className: `framer-z3u4n0 hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            o(h, {
                              className: `framer-1uk5yr2`,
                              "data-framer-name": `Frame 123`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 146,
                              intrinsicWidth: 290,
                              svg: `<svg width="290" height="146" viewBox="0 0 290 146" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2347_5226)">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="#FAF9F6"/>
<path d="M-254 146.5C-240.667 136.5 -227.333 136.5 -214 146.5C-200.667 156.5 -187.333 156.5 -174 146.5C-160.667 136.5 -147.333 136.5 -134 146.5C-120.667 156.5 -107.333 156.5 -94 146.5C-80.6667 136.5 -67.3333 136.5 -54 146.5C-40.6667 156.5 -27.3333 156.5 -14 146.5C-0.666667 136.5 12.6667 136.5 26 146.5C39.3333 156.5 52.6667 156.5 66 146.5C79.3333 136.5 92.6667 136.5 106 146.5C119.333 156.5 132.667 156.5 146 146.5C159.333 136.5 172.667 136.5 186 146.5C199.333 156.5 212.667 156.5 226 146.5C239.333 136.5 252.667 136.5 266 146.5C279.333 156.5 292.667 156.5 306 146.5C319.333 136.5 332.667 136.5 346 146.5C359.333 156.5 372.667 156.5 386 146.5C399.333 136.5 412.667 136.5 426 146.5C439.333 156.5 452.667 156.5 466 146.5C479.333 136.5 492.667 136.5 506 146.5C519.333 156.5 532.667 156.5 546 146.5" stroke="black"/>
<path d="M-254 139.5C-240.667 129.5 -227.333 129.5 -214 139.5C-200.667 149.5 -187.333 149.5 -174 139.5C-160.667 129.5 -147.333 129.5 -134 139.5C-120.667 149.5 -107.333 149.5 -94 139.5C-80.6667 129.5 -67.3333 129.5 -54 139.5C-40.6667 149.5 -27.3333 149.5 -14 139.5C-0.666667 129.5 12.6667 129.5 26 139.5C39.3333 149.5 52.6667 149.5 66 139.5C79.3333 129.5 92.6667 129.5 106 139.5C119.333 149.5 132.667 149.5 146 139.5C159.333 129.5 172.667 129.5 186 139.5C199.333 149.5 212.667 149.5 226 139.5C239.333 129.5 252.667 129.5 266 139.5C279.333 149.5 292.667 149.5 306 139.5C319.333 129.5 332.667 129.5 346 139.5C359.333 149.5 372.667 149.5 386 139.5C399.333 129.5 412.667 129.5 426 139.5C439.333 149.5 452.667 149.5 466 139.5C479.333 129.5 492.667 129.5 506 139.5C519.333 149.5 532.667 149.5 546 139.5" stroke="black"/>
<path d="M-254 132.5C-240.667 122.5 -227.333 122.5 -214 132.5C-200.667 142.5 -187.333 142.5 -174 132.5C-160.667 122.5 -147.333 122.5 -134 132.5C-120.667 142.5 -107.333 142.5 -94 132.5C-80.6667 122.5 -67.3333 122.5 -54 132.5C-40.6667 142.5 -27.3333 142.5 -14 132.5C-0.666667 122.5 12.6667 122.5 26 132.5C39.3333 142.5 52.6667 142.5 66 132.5C79.3333 122.5 92.6667 122.5 106 132.5C119.333 142.5 132.667 142.5 146 132.5C159.333 122.5 172.667 122.5 186 132.5C199.333 142.5 212.667 142.5 226 132.5C239.333 122.5 252.667 122.5 266 132.5C279.333 142.5 292.667 142.5 306 132.5C319.333 122.5 332.667 122.5 346 132.5C359.333 142.5 372.667 142.5 386 132.5C399.333 122.5 412.667 122.5 426 132.5C439.333 142.5 452.667 142.5 466 132.5C479.333 122.5 492.667 122.5 506 132.5C519.333 142.5 532.667 142.5 546 132.5" stroke="black"/>
<path d="M-254 125.5C-240.667 115.5 -227.333 115.5 -214 125.5C-200.667 135.5 -187.333 135.5 -174 125.5C-160.667 115.5 -147.333 115.5 -134 125.5C-120.667 135.5 -107.333 135.5 -94 125.5C-80.6667 115.5 -67.3333 115.5 -54 125.5C-40.6667 135.5 -27.3333 135.5 -14 125.5C-0.666667 115.5 12.6667 115.5 26 125.5C39.3333 135.5 52.6667 135.5 66 125.5C79.3333 115.5 92.6667 115.5 106 125.5C119.333 135.5 132.667 135.5 146 125.5C159.333 115.5 172.667 115.5 186 125.5C199.333 135.5 212.667 135.5 226 125.5C239.333 115.5 252.667 115.5 266 125.5C279.333 135.5 292.667 135.5 306 125.5C319.333 115.5 332.667 115.5 346 125.5C359.333 135.5 372.667 135.5 386 125.5C399.333 115.5 412.667 115.5 426 125.5C439.333 135.5 452.667 135.5 466 125.5C479.333 115.5 492.667 115.5 506 125.5C519.333 135.5 532.667 135.5 546 125.5" stroke="black"/>
<path d="M-254 118.5C-240.667 108.5 -227.333 108.5 -214 118.5C-200.667 128.5 -187.333 128.5 -174 118.5C-160.667 108.5 -147.333 108.5 -134 118.5C-120.667 128.5 -107.333 128.5 -94 118.5C-80.6667 108.5 -67.3333 108.5 -54 118.5C-40.6667 128.5 -27.3333 128.5 -14 118.5C-0.666667 108.5 12.6667 108.5 26 118.5C39.3333 128.5 52.6667 128.5 66 118.5C79.3333 108.5 92.6667 108.5 106 118.5C119.333 128.5 132.667 128.5 146 118.5C159.333 108.5 172.667 108.5 186 118.5C199.333 128.5 212.667 128.5 226 118.5C239.333 108.5 252.667 108.5 266 118.5C279.333 128.5 292.667 128.5 306 118.5C319.333 108.5 332.667 108.5 346 118.5C359.333 128.5 372.667 128.5 386 118.5C399.333 108.5 412.667 108.5 426 118.5C439.333 128.5 452.667 128.5 466 118.5C479.333 108.5 492.667 108.5 506 118.5C519.333 128.5 532.667 128.5 546 118.5" stroke="black"/>
<path d="M-254 111.5C-240.667 101.5 -227.333 101.5 -214 111.5C-200.667 121.5 -187.333 121.5 -174 111.5C-160.667 101.5 -147.333 101.5 -134 111.5C-120.667 121.5 -107.333 121.5 -94 111.5C-80.6667 101.5 -67.3333 101.5 -54 111.5C-40.6667 121.5 -27.3333 121.5 -14 111.5C-0.666667 101.5 12.6667 101.5 26 111.5C39.3333 121.5 52.6667 121.5 66 111.5C79.3333 101.5 92.6667 101.5 106 111.5C119.333 121.5 132.667 121.5 146 111.5C159.333 101.5 172.667 101.5 186 111.5C199.333 121.5 212.667 121.5 226 111.5C239.333 101.5 252.667 101.5 266 111.5C279.333 121.5 292.667 121.5 306 111.5C319.333 101.5 332.667 101.5 346 111.5C359.333 121.5 372.667 121.5 386 111.5C399.333 101.5 412.667 101.5 426 111.5C439.333 121.5 452.667 121.5 466 111.5C479.333 101.5 492.667 101.5 506 111.5C519.333 121.5 532.667 121.5 546 111.5" stroke="black"/>
<path d="M-254 104.5C-240.667 94.5 -227.333 94.5 -214 104.5C-200.667 114.5 -187.333 114.5 -174 104.5C-160.667 94.5 -147.333 94.5 -134 104.5C-120.667 114.5 -107.333 114.5 -94 104.5C-80.6667 94.5 -67.3333 94.5 -54 104.5C-40.6667 114.5 -27.3333 114.5 -14 104.5C-0.666667 94.5 12.6667 94.5 26 104.5C39.3333 114.5 52.6667 114.5 66 104.5C79.3333 94.5 92.6667 94.5 106 104.5C119.333 114.5 132.667 114.5 146 104.5C159.333 94.5 172.667 94.5 186 104.5C199.333 114.5 212.667 114.5 226 104.5C239.333 94.5 252.667 94.5 266 104.5C279.333 114.5 292.667 114.5 306 104.5C319.333 94.5 332.667 94.5 346 104.5C359.333 114.5 372.667 114.5 386 104.5C399.333 94.5 412.667 94.5 426 104.5C439.333 114.5 452.667 114.5 466 104.5C479.333 94.5 492.667 94.5 506 104.5C519.333 114.5 532.667 114.5 546 104.5" stroke="black"/>
<path d="M-254 97.5C-240.667 87.5 -227.333 87.5 -214 97.5C-200.667 107.5 -187.333 107.5 -174 97.5C-160.667 87.5 -147.333 87.5 -134 97.5C-120.667 107.5 -107.333 107.5 -94 97.5C-80.6667 87.5 -67.3333 87.5 -54 97.5C-40.6667 107.5 -27.3333 107.5 -14 97.5C-0.666667 87.5 12.6667 87.5 26 97.5C39.3333 107.5 52.6667 107.5 66 97.5C79.3333 87.5 92.6667 87.5 106 97.5C119.333 107.5 132.667 107.5 146 97.5C159.333 87.5 172.667 87.5 186 97.5C199.333 107.5 212.667 107.5 226 97.5C239.333 87.5 252.667 87.5 266 97.5C279.333 107.5 292.667 107.5 306 97.5C319.333 87.5 332.667 87.5 346 97.5C359.333 107.5 372.667 107.5 386 97.5C399.333 87.5 412.667 87.5 426 97.5C439.333 107.5 452.667 107.5 466 97.5C479.333 87.5 492.667 87.5 506 97.5C519.333 107.5 532.667 107.5 546 97.5" stroke="black"/>
<path d="M-254 90.5C-240.667 80.5 -227.333 80.5 -214 90.5C-200.667 100.5 -187.333 100.5 -174 90.5C-160.667 80.5 -147.333 80.5 -134 90.5C-120.667 100.5 -107.333 100.5 -94 90.5C-80.6667 80.5 -67.3333 80.5 -54 90.5C-40.6667 100.5 -27.3333 100.5 -14 90.5C-0.666667 80.5 12.6667 80.5 26 90.5C39.3333 100.5 52.6667 100.5 66 90.5C79.3333 80.5 92.6667 80.5 106 90.5C119.333 100.5 132.667 100.5 146 90.5C159.333 80.5 172.667 80.5 186 90.5C199.333 100.5 212.667 100.5 226 90.5C239.333 80.5 252.667 80.5 266 90.5C279.333 100.5 292.667 100.5 306 90.5C319.333 80.5 332.667 80.5 346 90.5C359.333 100.5 372.667 100.5 386 90.5C399.333 80.5 412.667 80.5 426 90.5C439.333 100.5 452.667 100.5 466 90.5C479.333 80.5 492.667 80.5 506 90.5C519.333 100.5 532.667 100.5 546 90.5" stroke="black"/>
<path d="M-254 83.5C-240.667 73.5 -227.333 73.5 -214 83.5C-200.667 93.5 -187.333 93.5 -174 83.5C-160.667 73.5 -147.333 73.5 -134 83.5C-120.667 93.5 -107.333 93.5 -94 83.5C-80.6667 73.5 -67.3333 73.5 -54 83.5C-40.6667 93.5 -27.3333 93.5 -14 83.5C-0.666667 73.5 12.6667 73.5 26 83.5C39.3333 93.5 52.6667 93.5 66 83.5C79.3333 73.5 92.6667 73.5 106 83.5C119.333 93.5 132.667 93.5 146 83.5C159.333 73.5 172.667 73.5 186 83.5C199.333 93.5 212.667 93.5 226 83.5C239.333 73.5 252.667 73.5 266 83.5C279.333 93.5 292.667 93.5 306 83.5C319.333 73.5 332.667 73.5 346 83.5C359.333 93.5 372.667 93.5 386 83.5C399.333 73.5 412.667 73.5 426 83.5C439.333 93.5 452.667 93.5 466 83.5C479.333 73.5 492.667 73.5 506 83.5C519.333 93.5 532.667 93.5 546 83.5" stroke="black"/>
<path d="M-254 76.5C-240.667 66.5 -227.333 66.5 -214 76.5C-200.667 86.5 -187.333 86.5 -174 76.5C-160.667 66.5 -147.333 66.5 -134 76.5C-120.667 86.5 -107.333 86.5 -94 76.5C-80.6667 66.5 -67.3333 66.5 -54 76.5C-40.6667 86.5 -27.3333 86.5 -14 76.5C-0.666667 66.5 12.6667 66.5 26 76.5C39.3333 86.5 52.6667 86.5 66 76.5C79.3333 66.5 92.6667 66.5 106 76.5C119.333 86.5 132.667 86.5 146 76.5C159.333 66.5 172.667 66.5 186 76.5C199.333 86.5 212.667 86.5 226 76.5C239.333 66.5 252.667 66.5 266 76.5C279.333 86.5 292.667 86.5 306 76.5C319.333 66.5 332.667 66.5 346 76.5C359.333 86.5 372.667 86.5 386 76.5C399.333 66.5 412.667 66.5 426 76.5C439.333 86.5 452.667 86.5 466 76.5C479.333 66.5 492.667 66.5 506 76.5C519.333 86.5 532.667 86.5 546 76.5" stroke="black"/>
<path d="M-254 69.5C-240.667 59.5 -227.333 59.5 -214 69.5C-200.667 79.5 -187.333 79.5 -174 69.5C-160.667 59.5 -147.333 59.5 -134 69.5C-120.667 79.5 -107.333 79.5 -94 69.5C-80.6667 59.5 -67.3333 59.5 -54 69.5C-40.6667 79.5 -27.3333 79.5 -14 69.5C-0.666667 59.5 12.6667 59.5 26 69.5C39.3333 79.5 52.6667 79.5 66 69.5C79.3333 59.5 92.6667 59.5 106 69.5C119.333 79.5 132.667 79.5 146 69.5C159.333 59.5 172.667 59.5 186 69.5C199.333 79.5 212.667 79.5 226 69.5C239.333 59.5 252.667 59.5 266 69.5C279.333 79.5 292.667 79.5 306 69.5C319.333 59.5 332.667 59.5 346 69.5C359.333 79.5 372.667 79.5 386 69.5C399.333 59.5 412.667 59.5 426 69.5C439.333 79.5 452.667 79.5 466 69.5C479.333 59.5 492.667 59.5 506 69.5C519.333 79.5 532.667 79.5 546 69.5" stroke="black"/>
<path d="M-254 62.5C-240.667 52.5 -227.333 52.5 -214 62.5C-200.667 72.5 -187.333 72.5 -174 62.5C-160.667 52.5 -147.333 52.5 -134 62.5C-120.667 72.5 -107.333 72.5 -94 62.5C-80.6667 52.5 -67.3333 52.5 -54 62.5C-40.6667 72.5 -27.3333 72.5 -14 62.5C-0.666667 52.5 12.6667 52.5 26 62.5C39.3333 72.5 52.6667 72.5 66 62.5C79.3333 52.5 92.6667 52.5 106 62.5C119.333 72.5 132.667 72.5 146 62.5C159.333 52.5 172.667 52.5 186 62.5C199.333 72.5 212.667 72.5 226 62.5C239.333 52.5 252.667 52.5 266 62.5C279.333 72.5 292.667 72.5 306 62.5C319.333 52.5 332.667 52.5 346 62.5C359.333 72.5 372.667 72.5 386 62.5C399.333 52.5 412.667 52.5 426 62.5C439.333 72.5 452.667 72.5 466 62.5C479.333 52.5 492.667 52.5 506 62.5C519.333 72.5 532.667 72.5 546 62.5" stroke="black"/>
<path d="M-254 55.5C-240.667 45.5 -227.333 45.5 -214 55.5C-200.667 65.5 -187.333 65.5 -174 55.5C-160.667 45.5 -147.333 45.5 -134 55.5C-120.667 65.5 -107.333 65.5 -94 55.5C-80.6667 45.5 -67.3333 45.5 -54 55.5C-40.6667 65.5 -27.3333 65.5 -14 55.5C-0.666667 45.5 12.6667 45.5 26 55.5C39.3333 65.5 52.6667 65.5 66 55.5C79.3333 45.5 92.6667 45.5 106 55.5C119.333 65.5 132.667 65.5 146 55.5C159.333 45.5 172.667 45.5 186 55.5C199.333 65.5 212.667 65.5 226 55.5C239.333 45.5 252.667 45.5 266 55.5C279.333 65.5 292.667 65.5 306 55.5C319.333 45.5 332.667 45.5 346 55.5C359.333 65.5 372.667 65.5 386 55.5C399.333 45.5 412.667 45.5 426 55.5C439.333 65.5 452.667 65.5 466 55.5C479.333 45.5 492.667 45.5 506 55.5C519.333 65.5 532.667 65.5 546 55.5" stroke="black"/>
<path d="M-254 48.5C-240.667 38.5 -227.333 38.5 -214 48.5C-200.667 58.5 -187.333 58.5 -174 48.5C-160.667 38.5 -147.333 38.5 -134 48.5C-120.667 58.5 -107.333 58.5 -94 48.5C-80.6667 38.5 -67.3333 38.5 -54 48.5C-40.6667 58.5 -27.3333 58.5 -14 48.5C-0.666667 38.5 12.6667 38.5 26 48.5C39.3333 58.5 52.6667 58.5 66 48.5C79.3333 38.5 92.6667 38.5 106 48.5C119.333 58.5 132.667 58.5 146 48.5C159.333 38.5 172.667 38.5 186 48.5C199.333 58.5 212.667 58.5 226 48.5C239.333 38.5 252.667 38.5 266 48.5C279.333 58.5 292.667 58.5 306 48.5C319.333 38.5 332.667 38.5 346 48.5C359.333 58.5 372.667 58.5 386 48.5C399.333 38.5 412.667 38.5 426 48.5C439.333 58.5 452.667 58.5 466 48.5C479.333 38.5 492.667 38.5 506 48.5C519.333 58.5 532.667 58.5 546 48.5" stroke="black"/>
<path d="M-254 41.5C-240.667 31.5 -227.333 31.5 -214 41.5C-200.667 51.5 -187.333 51.5 -174 41.5C-160.667 31.5 -147.333 31.5 -134 41.5C-120.667 51.5 -107.333 51.5 -94 41.5C-80.6667 31.5 -67.3333 31.5 -54 41.5C-40.6667 51.5 -27.3333 51.5 -14 41.5C-0.666667 31.5 12.6667 31.5 26 41.5C39.3333 51.5 52.6667 51.5 66 41.5C79.3333 31.5 92.6667 31.5 106 41.5C119.333 51.5 132.667 51.5 146 41.5C159.333 31.5 172.667 31.5 186 41.5C199.333 51.5 212.667 51.5 226 41.5C239.333 31.5 252.667 31.5 266 41.5C279.333 51.5 292.667 51.5 306 41.5C319.333 31.5 332.667 31.5 346 41.5C359.333 51.5 372.667 51.5 386 41.5C399.333 31.5 412.667 31.5 426 41.5C439.333 51.5 452.667 51.5 466 41.5C479.333 31.5 492.667 31.5 506 41.5C519.333 51.5 532.667 51.5 546 41.5" stroke="black"/>
<path d="M-254 34.5C-240.667 24.5 -227.333 24.5 -214 34.5C-200.667 44.5 -187.333 44.5 -174 34.5C-160.667 24.5 -147.333 24.5 -134 34.5C-120.667 44.5 -107.333 44.5 -94 34.5C-80.6667 24.5 -67.3333 24.5 -54 34.5C-40.6667 44.5 -27.3333 44.5 -14 34.5C-0.666667 24.5 12.6667 24.5 26 34.5C39.3333 44.5 52.6667 44.5 66 34.5C79.3333 24.5 92.6667 24.5 106 34.5C119.333 44.5 132.667 44.5 146 34.5C159.333 24.5 172.667 24.5 186 34.5C199.333 44.5 212.667 44.5 226 34.5C239.333 24.5 252.667 24.5 266 34.5C279.333 44.5 292.667 44.5 306 34.5C319.333 24.5 332.667 24.5 346 34.5C359.333 44.5 372.667 44.5 386 34.5C399.333 24.5 412.667 24.5 426 34.5C439.333 44.5 452.667 44.5 466 34.5C479.333 24.5 492.667 24.5 506 34.5C519.333 44.5 532.667 44.5 546 34.5" stroke="black"/>
<path d="M-254 27.5C-240.667 17.5 -227.333 17.5 -214 27.5C-200.667 37.5 -187.333 37.5 -174 27.5C-160.667 17.5 -147.333 17.5 -134 27.5C-120.667 37.5 -107.333 37.5 -94 27.5C-80.6667 17.5 -67.3333 17.5 -54 27.5C-40.6667 37.5 -27.3333 37.5 -14 27.5C-0.666667 17.5 12.6667 17.5 26 27.5C39.3333 37.5 52.6667 37.5 66 27.5C79.3333 17.5 92.6667 17.5 106 27.5C119.333 37.5 132.667 37.5 146 27.5C159.333 17.5 172.667 17.5 186 27.5C199.333 37.5 212.667 37.5 226 27.5C239.333 17.5 252.667 17.5 266 27.5C279.333 37.5 292.667 37.5 306 27.5C319.333 17.5 332.667 17.5 346 27.5C359.333 37.5 372.667 37.5 386 27.5C399.333 17.5 412.667 17.5 426 27.5C439.333 37.5 452.667 37.5 466 27.5C479.333 17.5 492.667 17.5 506 27.5C519.333 37.5 532.667 37.5 546 27.5" stroke="black"/>
<path d="M-254 20.5C-240.667 10.5 -227.333 10.5 -214 20.5C-200.667 30.5 -187.333 30.5 -174 20.5C-160.667 10.5 -147.333 10.5 -134 20.5C-120.667 30.5 -107.333 30.5 -94 20.5C-80.6667 10.5 -67.3333 10.5 -54 20.5C-40.6667 30.5 -27.3333 30.5 -14 20.5C-0.666667 10.5 12.6667 10.5 26 20.5C39.3333 30.5 52.6667 30.5 66 20.5C79.3333 10.5 92.6667 10.5 106 20.5C119.333 30.5 132.667 30.5 146 20.5C159.333 10.5 172.667 10.5 186 20.5C199.333 30.5 212.667 30.5 226 20.5C239.333 10.5 252.667 10.5 266 20.5C279.333 30.5 292.667 30.5 306 20.5C319.333 10.5 332.667 10.5 346 20.5C359.333 30.5 372.667 30.5 386 20.5C399.333 10.5 412.667 10.5 426 20.5C439.333 30.5 452.667 30.5 466 20.5C479.333 10.5 492.667 10.5 506 20.5C519.333 30.5 532.667 30.5 546 20.5" stroke="black"/>
<path d="M-254 13.5C-240.667 3.5 -227.333 3.5 -214 13.5C-200.667 23.5 -187.333 23.5 -174 13.5C-160.667 3.5 -147.333 3.5 -134 13.5C-120.667 23.5 -107.333 23.5 -94 13.5C-80.6667 3.5 -67.3333 3.5 -54 13.5C-40.6667 23.5 -27.3333 23.5 -14 13.5C-0.666667 3.5 12.6667 3.5 26 13.5C39.3333 23.5 52.6667 23.5 66 13.5C79.3333 3.5 92.6667 3.5 106 13.5C119.333 23.5 132.667 23.5 146 13.5C159.333 3.5 172.667 3.5 186 13.5C199.333 23.5 212.667 23.5 226 13.5C239.333 3.5 252.667 3.5 266 13.5C279.333 23.5 292.667 23.5 306 13.5C319.333 3.5 332.667 3.5 346 13.5C359.333 23.5 372.667 23.5 386 13.5C399.333 3.5 412.667 3.5 426 13.5C439.333 23.5 452.667 23.5 466 13.5C479.333 3.5 492.667 3.5 506 13.5C519.333 23.5 532.667 23.5 546 13.5" stroke="black"/>
<path d="M-254 6.5C-240.667 -3.5 -227.333 -3.5 -214 6.5C-200.667 16.5 -187.333 16.5 -174 6.5C-160.667 -3.5 -147.333 -3.5 -134 6.5C-120.667 16.5 -107.333 16.5 -94 6.5C-80.6667 -3.5 -67.3333 -3.5 -54 6.5C-40.6667 16.5 -27.3333 16.5 -14 6.5C-0.666667 -3.5 12.6667 -3.5 26 6.5C39.3333 16.5 52.6667 16.5 66 6.5C79.3333 -3.5 92.6667 -3.5 106 6.5C119.333 16.5 132.667 16.5 146 6.5C159.333 -3.5 172.667 -3.5 186 6.5C199.333 16.5 212.667 16.5 226 6.5C239.333 -3.5 252.667 -3.5 266 6.5C279.333 16.5 292.667 16.5 306 6.5C319.333 -3.5 332.667 -3.5 346 6.5C359.333 16.5 372.667 16.5 386 6.5C399.333 -3.5 412.667 -3.5 426 6.5C439.333 16.5 452.667 16.5 466 6.5C479.333 -3.5 492.667 -3.5 506 6.5C519.333 16.5 532.667 16.5 546 6.5" stroke="black"/>
<path d="M-254 -0.5C-240.667 -10.5 -227.333 -10.5 -214 -0.5C-200.667 9.5 -187.333 9.5 -174 -0.5C-160.667 -10.5 -147.333 -10.5 -134 -0.5C-120.667 9.5 -107.333 9.5 -94 -0.5C-80.6667 -10.5 -67.3333 -10.5 -54 -0.5C-40.6667 9.5 -27.3333 9.5 -14 -0.5C-0.666667 -10.5 12.6667 -10.5 26 -0.5C39.3333 9.5 52.6667 9.5 66 -0.5C79.3333 -10.5 92.6667 -10.5 106 -0.5C119.333 9.5 132.667 9.5 146 -0.5C159.333 -10.5 172.667 -10.5 186 -0.5C199.333 9.5 212.667 9.5 226 -0.5C239.333 -10.5 252.667 -10.5 266 -0.5C279.333 9.5 292.667 9.5 306 -0.5C319.333 -10.5 332.667 -10.5 346 -0.5C359.333 9.5 372.667 9.5 386 -0.5C399.333 -10.5 412.667 -10.5 426 -0.5C439.333 9.5 452.667 9.5 466 -0.5C479.333 -10.5 492.667 -10.5 506 -0.5C519.333 9.5 532.667 9.5 546 -0.5" stroke="black"/>
<path d="M-254 -7.5C-240.667 -17.5 -227.333 -17.5 -214 -7.5C-200.667 2.5 -187.333 2.5 -174 -7.5C-160.667 -17.5 -147.333 -17.5 -134 -7.5C-120.667 2.5 -107.333 2.5 -94 -7.5C-80.6667 -17.5 -67.3333 -17.5 -54 -7.5C-40.6667 2.5 -27.3333 2.5 -14 -7.5C-0.666667 -17.5 12.6667 -17.5 26 -7.5C39.3333 2.5 52.6667 2.5 66 -7.5C79.3333 -17.5 92.6667 -17.5 106 -7.5C119.333 2.5 132.667 2.5 146 -7.5C159.333 -17.5 172.667 -17.5 186 -7.5C199.333 2.5 212.667 2.5 226 -7.5C239.333 -17.5 252.667 -17.5 266 -7.5C279.333 2.5 292.667 2.5 306 -7.5C319.333 -17.5 332.667 -17.5 346 -7.5C359.333 2.5 372.667 2.5 386 -7.5C399.333 -17.5 412.667 -17.5 426 -7.5C439.333 2.5 452.667 2.5 466 -7.5C479.333 -17.5 492.667 -17.5 506 -7.5C519.333 2.5 532.667 2.5 546 -7.5" stroke="black"/>
</g>
<rect x="1.19321" y="0.500556" width="288.179" height="144.087" stroke="#E1E0DD" stroke-width="1.00116"/>
<defs>
<clipPath id="clip0_2347_5226">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            c(`div`, {
                              className: `framer-45gx62`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-1ecyehz`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-10ttei6`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-14gtu5w`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-zobgxo`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-196cgua`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-lt4lq0`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-w2jh40`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-12d17ai`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-140tgea`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1yz25p9`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-1w7ipd1`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-151dp78`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1rdqg2g`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-4cnks1`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-11w5e5q`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-hkwsur`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1bbpgtf`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-imrubz`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-pcfup0`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-cx2e3o`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-jjnxap`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-mw4hs2`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-l2e9f9`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1orzpu`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            o(h, {
                              className: `framer-1u5ad53`,
                              "data-framer-name": `Frame 123`,
                              fill: `rgba(0,0,0,1)`,
                              intrinsicHeight: 146,
                              intrinsicWidth: 290,
                              svg: `<svg width="290" height="146" viewBox="0 0 290 146" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2347_5226)">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="#FAF9F6"/>
<path d="M-254 146.5C-240.667 136.5 -227.333 136.5 -214 146.5C-200.667 156.5 -187.333 156.5 -174 146.5C-160.667 136.5 -147.333 136.5 -134 146.5C-120.667 156.5 -107.333 156.5 -94 146.5C-80.6667 136.5 -67.3333 136.5 -54 146.5C-40.6667 156.5 -27.3333 156.5 -14 146.5C-0.666667 136.5 12.6667 136.5 26 146.5C39.3333 156.5 52.6667 156.5 66 146.5C79.3333 136.5 92.6667 136.5 106 146.5C119.333 156.5 132.667 156.5 146 146.5C159.333 136.5 172.667 136.5 186 146.5C199.333 156.5 212.667 156.5 226 146.5C239.333 136.5 252.667 136.5 266 146.5C279.333 156.5 292.667 156.5 306 146.5C319.333 136.5 332.667 136.5 346 146.5C359.333 156.5 372.667 156.5 386 146.5C399.333 136.5 412.667 136.5 426 146.5C439.333 156.5 452.667 156.5 466 146.5C479.333 136.5 492.667 136.5 506 146.5C519.333 156.5 532.667 156.5 546 146.5" stroke="black"/>
<path d="M-254 139.5C-240.667 129.5 -227.333 129.5 -214 139.5C-200.667 149.5 -187.333 149.5 -174 139.5C-160.667 129.5 -147.333 129.5 -134 139.5C-120.667 149.5 -107.333 149.5 -94 139.5C-80.6667 129.5 -67.3333 129.5 -54 139.5C-40.6667 149.5 -27.3333 149.5 -14 139.5C-0.666667 129.5 12.6667 129.5 26 139.5C39.3333 149.5 52.6667 149.5 66 139.5C79.3333 129.5 92.6667 129.5 106 139.5C119.333 149.5 132.667 149.5 146 139.5C159.333 129.5 172.667 129.5 186 139.5C199.333 149.5 212.667 149.5 226 139.5C239.333 129.5 252.667 129.5 266 139.5C279.333 149.5 292.667 149.5 306 139.5C319.333 129.5 332.667 129.5 346 139.5C359.333 149.5 372.667 149.5 386 139.5C399.333 129.5 412.667 129.5 426 139.5C439.333 149.5 452.667 149.5 466 139.5C479.333 129.5 492.667 129.5 506 139.5C519.333 149.5 532.667 149.5 546 139.5" stroke="black"/>
<path d="M-254 132.5C-240.667 122.5 -227.333 122.5 -214 132.5C-200.667 142.5 -187.333 142.5 -174 132.5C-160.667 122.5 -147.333 122.5 -134 132.5C-120.667 142.5 -107.333 142.5 -94 132.5C-80.6667 122.5 -67.3333 122.5 -54 132.5C-40.6667 142.5 -27.3333 142.5 -14 132.5C-0.666667 122.5 12.6667 122.5 26 132.5C39.3333 142.5 52.6667 142.5 66 132.5C79.3333 122.5 92.6667 122.5 106 132.5C119.333 142.5 132.667 142.5 146 132.5C159.333 122.5 172.667 122.5 186 132.5C199.333 142.5 212.667 142.5 226 132.5C239.333 122.5 252.667 122.5 266 132.5C279.333 142.5 292.667 142.5 306 132.5C319.333 122.5 332.667 122.5 346 132.5C359.333 142.5 372.667 142.5 386 132.5C399.333 122.5 412.667 122.5 426 132.5C439.333 142.5 452.667 142.5 466 132.5C479.333 122.5 492.667 122.5 506 132.5C519.333 142.5 532.667 142.5 546 132.5" stroke="black"/>
<path d="M-254 125.5C-240.667 115.5 -227.333 115.5 -214 125.5C-200.667 135.5 -187.333 135.5 -174 125.5C-160.667 115.5 -147.333 115.5 -134 125.5C-120.667 135.5 -107.333 135.5 -94 125.5C-80.6667 115.5 -67.3333 115.5 -54 125.5C-40.6667 135.5 -27.3333 135.5 -14 125.5C-0.666667 115.5 12.6667 115.5 26 125.5C39.3333 135.5 52.6667 135.5 66 125.5C79.3333 115.5 92.6667 115.5 106 125.5C119.333 135.5 132.667 135.5 146 125.5C159.333 115.5 172.667 115.5 186 125.5C199.333 135.5 212.667 135.5 226 125.5C239.333 115.5 252.667 115.5 266 125.5C279.333 135.5 292.667 135.5 306 125.5C319.333 115.5 332.667 115.5 346 125.5C359.333 135.5 372.667 135.5 386 125.5C399.333 115.5 412.667 115.5 426 125.5C439.333 135.5 452.667 135.5 466 125.5C479.333 115.5 492.667 115.5 506 125.5C519.333 135.5 532.667 135.5 546 125.5" stroke="black"/>
<path d="M-254 118.5C-240.667 108.5 -227.333 108.5 -214 118.5C-200.667 128.5 -187.333 128.5 -174 118.5C-160.667 108.5 -147.333 108.5 -134 118.5C-120.667 128.5 -107.333 128.5 -94 118.5C-80.6667 108.5 -67.3333 108.5 -54 118.5C-40.6667 128.5 -27.3333 128.5 -14 118.5C-0.666667 108.5 12.6667 108.5 26 118.5C39.3333 128.5 52.6667 128.5 66 118.5C79.3333 108.5 92.6667 108.5 106 118.5C119.333 128.5 132.667 128.5 146 118.5C159.333 108.5 172.667 108.5 186 118.5C199.333 128.5 212.667 128.5 226 118.5C239.333 108.5 252.667 108.5 266 118.5C279.333 128.5 292.667 128.5 306 118.5C319.333 108.5 332.667 108.5 346 118.5C359.333 128.5 372.667 128.5 386 118.5C399.333 108.5 412.667 108.5 426 118.5C439.333 128.5 452.667 128.5 466 118.5C479.333 108.5 492.667 108.5 506 118.5C519.333 128.5 532.667 128.5 546 118.5" stroke="black"/>
<path d="M-254 111.5C-240.667 101.5 -227.333 101.5 -214 111.5C-200.667 121.5 -187.333 121.5 -174 111.5C-160.667 101.5 -147.333 101.5 -134 111.5C-120.667 121.5 -107.333 121.5 -94 111.5C-80.6667 101.5 -67.3333 101.5 -54 111.5C-40.6667 121.5 -27.3333 121.5 -14 111.5C-0.666667 101.5 12.6667 101.5 26 111.5C39.3333 121.5 52.6667 121.5 66 111.5C79.3333 101.5 92.6667 101.5 106 111.5C119.333 121.5 132.667 121.5 146 111.5C159.333 101.5 172.667 101.5 186 111.5C199.333 121.5 212.667 121.5 226 111.5C239.333 101.5 252.667 101.5 266 111.5C279.333 121.5 292.667 121.5 306 111.5C319.333 101.5 332.667 101.5 346 111.5C359.333 121.5 372.667 121.5 386 111.5C399.333 101.5 412.667 101.5 426 111.5C439.333 121.5 452.667 121.5 466 111.5C479.333 101.5 492.667 101.5 506 111.5C519.333 121.5 532.667 121.5 546 111.5" stroke="black"/>
<path d="M-254 104.5C-240.667 94.5 -227.333 94.5 -214 104.5C-200.667 114.5 -187.333 114.5 -174 104.5C-160.667 94.5 -147.333 94.5 -134 104.5C-120.667 114.5 -107.333 114.5 -94 104.5C-80.6667 94.5 -67.3333 94.5 -54 104.5C-40.6667 114.5 -27.3333 114.5 -14 104.5C-0.666667 94.5 12.6667 94.5 26 104.5C39.3333 114.5 52.6667 114.5 66 104.5C79.3333 94.5 92.6667 94.5 106 104.5C119.333 114.5 132.667 114.5 146 104.5C159.333 94.5 172.667 94.5 186 104.5C199.333 114.5 212.667 114.5 226 104.5C239.333 94.5 252.667 94.5 266 104.5C279.333 114.5 292.667 114.5 306 104.5C319.333 94.5 332.667 94.5 346 104.5C359.333 114.5 372.667 114.5 386 104.5C399.333 94.5 412.667 94.5 426 104.5C439.333 114.5 452.667 114.5 466 104.5C479.333 94.5 492.667 94.5 506 104.5C519.333 114.5 532.667 114.5 546 104.5" stroke="black"/>
<path d="M-254 97.5C-240.667 87.5 -227.333 87.5 -214 97.5C-200.667 107.5 -187.333 107.5 -174 97.5C-160.667 87.5 -147.333 87.5 -134 97.5C-120.667 107.5 -107.333 107.5 -94 97.5C-80.6667 87.5 -67.3333 87.5 -54 97.5C-40.6667 107.5 -27.3333 107.5 -14 97.5C-0.666667 87.5 12.6667 87.5 26 97.5C39.3333 107.5 52.6667 107.5 66 97.5C79.3333 87.5 92.6667 87.5 106 97.5C119.333 107.5 132.667 107.5 146 97.5C159.333 87.5 172.667 87.5 186 97.5C199.333 107.5 212.667 107.5 226 97.5C239.333 87.5 252.667 87.5 266 97.5C279.333 107.5 292.667 107.5 306 97.5C319.333 87.5 332.667 87.5 346 97.5C359.333 107.5 372.667 107.5 386 97.5C399.333 87.5 412.667 87.5 426 97.5C439.333 107.5 452.667 107.5 466 97.5C479.333 87.5 492.667 87.5 506 97.5C519.333 107.5 532.667 107.5 546 97.5" stroke="black"/>
<path d="M-254 90.5C-240.667 80.5 -227.333 80.5 -214 90.5C-200.667 100.5 -187.333 100.5 -174 90.5C-160.667 80.5 -147.333 80.5 -134 90.5C-120.667 100.5 -107.333 100.5 -94 90.5C-80.6667 80.5 -67.3333 80.5 -54 90.5C-40.6667 100.5 -27.3333 100.5 -14 90.5C-0.666667 80.5 12.6667 80.5 26 90.5C39.3333 100.5 52.6667 100.5 66 90.5C79.3333 80.5 92.6667 80.5 106 90.5C119.333 100.5 132.667 100.5 146 90.5C159.333 80.5 172.667 80.5 186 90.5C199.333 100.5 212.667 100.5 226 90.5C239.333 80.5 252.667 80.5 266 90.5C279.333 100.5 292.667 100.5 306 90.5C319.333 80.5 332.667 80.5 346 90.5C359.333 100.5 372.667 100.5 386 90.5C399.333 80.5 412.667 80.5 426 90.5C439.333 100.5 452.667 100.5 466 90.5C479.333 80.5 492.667 80.5 506 90.5C519.333 100.5 532.667 100.5 546 90.5" stroke="black"/>
<path d="M-254 83.5C-240.667 73.5 -227.333 73.5 -214 83.5C-200.667 93.5 -187.333 93.5 -174 83.5C-160.667 73.5 -147.333 73.5 -134 83.5C-120.667 93.5 -107.333 93.5 -94 83.5C-80.6667 73.5 -67.3333 73.5 -54 83.5C-40.6667 93.5 -27.3333 93.5 -14 83.5C-0.666667 73.5 12.6667 73.5 26 83.5C39.3333 93.5 52.6667 93.5 66 83.5C79.3333 73.5 92.6667 73.5 106 83.5C119.333 93.5 132.667 93.5 146 83.5C159.333 73.5 172.667 73.5 186 83.5C199.333 93.5 212.667 93.5 226 83.5C239.333 73.5 252.667 73.5 266 83.5C279.333 93.5 292.667 93.5 306 83.5C319.333 73.5 332.667 73.5 346 83.5C359.333 93.5 372.667 93.5 386 83.5C399.333 73.5 412.667 73.5 426 83.5C439.333 93.5 452.667 93.5 466 83.5C479.333 73.5 492.667 73.5 506 83.5C519.333 93.5 532.667 93.5 546 83.5" stroke="black"/>
<path d="M-254 76.5C-240.667 66.5 -227.333 66.5 -214 76.5C-200.667 86.5 -187.333 86.5 -174 76.5C-160.667 66.5 -147.333 66.5 -134 76.5C-120.667 86.5 -107.333 86.5 -94 76.5C-80.6667 66.5 -67.3333 66.5 -54 76.5C-40.6667 86.5 -27.3333 86.5 -14 76.5C-0.666667 66.5 12.6667 66.5 26 76.5C39.3333 86.5 52.6667 86.5 66 76.5C79.3333 66.5 92.6667 66.5 106 76.5C119.333 86.5 132.667 86.5 146 76.5C159.333 66.5 172.667 66.5 186 76.5C199.333 86.5 212.667 86.5 226 76.5C239.333 66.5 252.667 66.5 266 76.5C279.333 86.5 292.667 86.5 306 76.5C319.333 66.5 332.667 66.5 346 76.5C359.333 86.5 372.667 86.5 386 76.5C399.333 66.5 412.667 66.5 426 76.5C439.333 86.5 452.667 86.5 466 76.5C479.333 66.5 492.667 66.5 506 76.5C519.333 86.5 532.667 86.5 546 76.5" stroke="black"/>
<path d="M-254 69.5C-240.667 59.5 -227.333 59.5 -214 69.5C-200.667 79.5 -187.333 79.5 -174 69.5C-160.667 59.5 -147.333 59.5 -134 69.5C-120.667 79.5 -107.333 79.5 -94 69.5C-80.6667 59.5 -67.3333 59.5 -54 69.5C-40.6667 79.5 -27.3333 79.5 -14 69.5C-0.666667 59.5 12.6667 59.5 26 69.5C39.3333 79.5 52.6667 79.5 66 69.5C79.3333 59.5 92.6667 59.5 106 69.5C119.333 79.5 132.667 79.5 146 69.5C159.333 59.5 172.667 59.5 186 69.5C199.333 79.5 212.667 79.5 226 69.5C239.333 59.5 252.667 59.5 266 69.5C279.333 79.5 292.667 79.5 306 69.5C319.333 59.5 332.667 59.5 346 69.5C359.333 79.5 372.667 79.5 386 69.5C399.333 59.5 412.667 59.5 426 69.5C439.333 79.5 452.667 79.5 466 69.5C479.333 59.5 492.667 59.5 506 69.5C519.333 79.5 532.667 79.5 546 69.5" stroke="black"/>
<path d="M-254 62.5C-240.667 52.5 -227.333 52.5 -214 62.5C-200.667 72.5 -187.333 72.5 -174 62.5C-160.667 52.5 -147.333 52.5 -134 62.5C-120.667 72.5 -107.333 72.5 -94 62.5C-80.6667 52.5 -67.3333 52.5 -54 62.5C-40.6667 72.5 -27.3333 72.5 -14 62.5C-0.666667 52.5 12.6667 52.5 26 62.5C39.3333 72.5 52.6667 72.5 66 62.5C79.3333 52.5 92.6667 52.5 106 62.5C119.333 72.5 132.667 72.5 146 62.5C159.333 52.5 172.667 52.5 186 62.5C199.333 72.5 212.667 72.5 226 62.5C239.333 52.5 252.667 52.5 266 62.5C279.333 72.5 292.667 72.5 306 62.5C319.333 52.5 332.667 52.5 346 62.5C359.333 72.5 372.667 72.5 386 62.5C399.333 52.5 412.667 52.5 426 62.5C439.333 72.5 452.667 72.5 466 62.5C479.333 52.5 492.667 52.5 506 62.5C519.333 72.5 532.667 72.5 546 62.5" stroke="black"/>
<path d="M-254 55.5C-240.667 45.5 -227.333 45.5 -214 55.5C-200.667 65.5 -187.333 65.5 -174 55.5C-160.667 45.5 -147.333 45.5 -134 55.5C-120.667 65.5 -107.333 65.5 -94 55.5C-80.6667 45.5 -67.3333 45.5 -54 55.5C-40.6667 65.5 -27.3333 65.5 -14 55.5C-0.666667 45.5 12.6667 45.5 26 55.5C39.3333 65.5 52.6667 65.5 66 55.5C79.3333 45.5 92.6667 45.5 106 55.5C119.333 65.5 132.667 65.5 146 55.5C159.333 45.5 172.667 45.5 186 55.5C199.333 65.5 212.667 65.5 226 55.5C239.333 45.5 252.667 45.5 266 55.5C279.333 65.5 292.667 65.5 306 55.5C319.333 45.5 332.667 45.5 346 55.5C359.333 65.5 372.667 65.5 386 55.5C399.333 45.5 412.667 45.5 426 55.5C439.333 65.5 452.667 65.5 466 55.5C479.333 45.5 492.667 45.5 506 55.5C519.333 65.5 532.667 65.5 546 55.5" stroke="black"/>
<path d="M-254 48.5C-240.667 38.5 -227.333 38.5 -214 48.5C-200.667 58.5 -187.333 58.5 -174 48.5C-160.667 38.5 -147.333 38.5 -134 48.5C-120.667 58.5 -107.333 58.5 -94 48.5C-80.6667 38.5 -67.3333 38.5 -54 48.5C-40.6667 58.5 -27.3333 58.5 -14 48.5C-0.666667 38.5 12.6667 38.5 26 48.5C39.3333 58.5 52.6667 58.5 66 48.5C79.3333 38.5 92.6667 38.5 106 48.5C119.333 58.5 132.667 58.5 146 48.5C159.333 38.5 172.667 38.5 186 48.5C199.333 58.5 212.667 58.5 226 48.5C239.333 38.5 252.667 38.5 266 48.5C279.333 58.5 292.667 58.5 306 48.5C319.333 38.5 332.667 38.5 346 48.5C359.333 58.5 372.667 58.5 386 48.5C399.333 38.5 412.667 38.5 426 48.5C439.333 58.5 452.667 58.5 466 48.5C479.333 38.5 492.667 38.5 506 48.5C519.333 58.5 532.667 58.5 546 48.5" stroke="black"/>
<path d="M-254 41.5C-240.667 31.5 -227.333 31.5 -214 41.5C-200.667 51.5 -187.333 51.5 -174 41.5C-160.667 31.5 -147.333 31.5 -134 41.5C-120.667 51.5 -107.333 51.5 -94 41.5C-80.6667 31.5 -67.3333 31.5 -54 41.5C-40.6667 51.5 -27.3333 51.5 -14 41.5C-0.666667 31.5 12.6667 31.5 26 41.5C39.3333 51.5 52.6667 51.5 66 41.5C79.3333 31.5 92.6667 31.5 106 41.5C119.333 51.5 132.667 51.5 146 41.5C159.333 31.5 172.667 31.5 186 41.5C199.333 51.5 212.667 51.5 226 41.5C239.333 31.5 252.667 31.5 266 41.5C279.333 51.5 292.667 51.5 306 41.5C319.333 31.5 332.667 31.5 346 41.5C359.333 51.5 372.667 51.5 386 41.5C399.333 31.5 412.667 31.5 426 41.5C439.333 51.5 452.667 51.5 466 41.5C479.333 31.5 492.667 31.5 506 41.5C519.333 51.5 532.667 51.5 546 41.5" stroke="black"/>
<path d="M-254 34.5C-240.667 24.5 -227.333 24.5 -214 34.5C-200.667 44.5 -187.333 44.5 -174 34.5C-160.667 24.5 -147.333 24.5 -134 34.5C-120.667 44.5 -107.333 44.5 -94 34.5C-80.6667 24.5 -67.3333 24.5 -54 34.5C-40.6667 44.5 -27.3333 44.5 -14 34.5C-0.666667 24.5 12.6667 24.5 26 34.5C39.3333 44.5 52.6667 44.5 66 34.5C79.3333 24.5 92.6667 24.5 106 34.5C119.333 44.5 132.667 44.5 146 34.5C159.333 24.5 172.667 24.5 186 34.5C199.333 44.5 212.667 44.5 226 34.5C239.333 24.5 252.667 24.5 266 34.5C279.333 44.5 292.667 44.5 306 34.5C319.333 24.5 332.667 24.5 346 34.5C359.333 44.5 372.667 44.5 386 34.5C399.333 24.5 412.667 24.5 426 34.5C439.333 44.5 452.667 44.5 466 34.5C479.333 24.5 492.667 24.5 506 34.5C519.333 44.5 532.667 44.5 546 34.5" stroke="black"/>
<path d="M-254 27.5C-240.667 17.5 -227.333 17.5 -214 27.5C-200.667 37.5 -187.333 37.5 -174 27.5C-160.667 17.5 -147.333 17.5 -134 27.5C-120.667 37.5 -107.333 37.5 -94 27.5C-80.6667 17.5 -67.3333 17.5 -54 27.5C-40.6667 37.5 -27.3333 37.5 -14 27.5C-0.666667 17.5 12.6667 17.5 26 27.5C39.3333 37.5 52.6667 37.5 66 27.5C79.3333 17.5 92.6667 17.5 106 27.5C119.333 37.5 132.667 37.5 146 27.5C159.333 17.5 172.667 17.5 186 27.5C199.333 37.5 212.667 37.5 226 27.5C239.333 17.5 252.667 17.5 266 27.5C279.333 37.5 292.667 37.5 306 27.5C319.333 17.5 332.667 17.5 346 27.5C359.333 37.5 372.667 37.5 386 27.5C399.333 17.5 412.667 17.5 426 27.5C439.333 37.5 452.667 37.5 466 27.5C479.333 17.5 492.667 17.5 506 27.5C519.333 37.5 532.667 37.5 546 27.5" stroke="black"/>
<path d="M-254 20.5C-240.667 10.5 -227.333 10.5 -214 20.5C-200.667 30.5 -187.333 30.5 -174 20.5C-160.667 10.5 -147.333 10.5 -134 20.5C-120.667 30.5 -107.333 30.5 -94 20.5C-80.6667 10.5 -67.3333 10.5 -54 20.5C-40.6667 30.5 -27.3333 30.5 -14 20.5C-0.666667 10.5 12.6667 10.5 26 20.5C39.3333 30.5 52.6667 30.5 66 20.5C79.3333 10.5 92.6667 10.5 106 20.5C119.333 30.5 132.667 30.5 146 20.5C159.333 10.5 172.667 10.5 186 20.5C199.333 30.5 212.667 30.5 226 20.5C239.333 10.5 252.667 10.5 266 20.5C279.333 30.5 292.667 30.5 306 20.5C319.333 10.5 332.667 10.5 346 20.5C359.333 30.5 372.667 30.5 386 20.5C399.333 10.5 412.667 10.5 426 20.5C439.333 30.5 452.667 30.5 466 20.5C479.333 10.5 492.667 10.5 506 20.5C519.333 30.5 532.667 30.5 546 20.5" stroke="black"/>
<path d="M-254 13.5C-240.667 3.5 -227.333 3.5 -214 13.5C-200.667 23.5 -187.333 23.5 -174 13.5C-160.667 3.5 -147.333 3.5 -134 13.5C-120.667 23.5 -107.333 23.5 -94 13.5C-80.6667 3.5 -67.3333 3.5 -54 13.5C-40.6667 23.5 -27.3333 23.5 -14 13.5C-0.666667 3.5 12.6667 3.5 26 13.5C39.3333 23.5 52.6667 23.5 66 13.5C79.3333 3.5 92.6667 3.5 106 13.5C119.333 23.5 132.667 23.5 146 13.5C159.333 3.5 172.667 3.5 186 13.5C199.333 23.5 212.667 23.5 226 13.5C239.333 3.5 252.667 3.5 266 13.5C279.333 23.5 292.667 23.5 306 13.5C319.333 3.5 332.667 3.5 346 13.5C359.333 23.5 372.667 23.5 386 13.5C399.333 3.5 412.667 3.5 426 13.5C439.333 23.5 452.667 23.5 466 13.5C479.333 3.5 492.667 3.5 506 13.5C519.333 23.5 532.667 23.5 546 13.5" stroke="black"/>
<path d="M-254 6.5C-240.667 -3.5 -227.333 -3.5 -214 6.5C-200.667 16.5 -187.333 16.5 -174 6.5C-160.667 -3.5 -147.333 -3.5 -134 6.5C-120.667 16.5 -107.333 16.5 -94 6.5C-80.6667 -3.5 -67.3333 -3.5 -54 6.5C-40.6667 16.5 -27.3333 16.5 -14 6.5C-0.666667 -3.5 12.6667 -3.5 26 6.5C39.3333 16.5 52.6667 16.5 66 6.5C79.3333 -3.5 92.6667 -3.5 106 6.5C119.333 16.5 132.667 16.5 146 6.5C159.333 -3.5 172.667 -3.5 186 6.5C199.333 16.5 212.667 16.5 226 6.5C239.333 -3.5 252.667 -3.5 266 6.5C279.333 16.5 292.667 16.5 306 6.5C319.333 -3.5 332.667 -3.5 346 6.5C359.333 16.5 372.667 16.5 386 6.5C399.333 -3.5 412.667 -3.5 426 6.5C439.333 16.5 452.667 16.5 466 6.5C479.333 -3.5 492.667 -3.5 506 6.5C519.333 16.5 532.667 16.5 546 6.5" stroke="black"/>
<path d="M-254 -0.5C-240.667 -10.5 -227.333 -10.5 -214 -0.5C-200.667 9.5 -187.333 9.5 -174 -0.5C-160.667 -10.5 -147.333 -10.5 -134 -0.5C-120.667 9.5 -107.333 9.5 -94 -0.5C-80.6667 -10.5 -67.3333 -10.5 -54 -0.5C-40.6667 9.5 -27.3333 9.5 -14 -0.5C-0.666667 -10.5 12.6667 -10.5 26 -0.5C39.3333 9.5 52.6667 9.5 66 -0.5C79.3333 -10.5 92.6667 -10.5 106 -0.5C119.333 9.5 132.667 9.5 146 -0.5C159.333 -10.5 172.667 -10.5 186 -0.5C199.333 9.5 212.667 9.5 226 -0.5C239.333 -10.5 252.667 -10.5 266 -0.5C279.333 9.5 292.667 9.5 306 -0.5C319.333 -10.5 332.667 -10.5 346 -0.5C359.333 9.5 372.667 9.5 386 -0.5C399.333 -10.5 412.667 -10.5 426 -0.5C439.333 9.5 452.667 9.5 466 -0.5C479.333 -10.5 492.667 -10.5 506 -0.5C519.333 9.5 532.667 9.5 546 -0.5" stroke="black"/>
<path d="M-254 -7.5C-240.667 -17.5 -227.333 -17.5 -214 -7.5C-200.667 2.5 -187.333 2.5 -174 -7.5C-160.667 -17.5 -147.333 -17.5 -134 -7.5C-120.667 2.5 -107.333 2.5 -94 -7.5C-80.6667 -17.5 -67.3333 -17.5 -54 -7.5C-40.6667 2.5 -27.3333 2.5 -14 -7.5C-0.666667 -17.5 12.6667 -17.5 26 -7.5C39.3333 2.5 52.6667 2.5 66 -7.5C79.3333 -17.5 92.6667 -17.5 106 -7.5C119.333 2.5 132.667 2.5 146 -7.5C159.333 -17.5 172.667 -17.5 186 -7.5C199.333 2.5 212.667 2.5 226 -7.5C239.333 -17.5 252.667 -17.5 266 -7.5C279.333 2.5 292.667 2.5 306 -7.5C319.333 -17.5 332.667 -17.5 346 -7.5C359.333 2.5 372.667 2.5 386 -7.5C399.333 -17.5 412.667 -17.5 426 -7.5C439.333 2.5 452.667 2.5 466 -7.5C479.333 -17.5 492.667 -17.5 506 -7.5C519.333 2.5 532.667 2.5 546 -7.5" stroke="black"/>
</g>
<rect x="1.19321" y="0.500556" width="288.179" height="144.087" stroke="#E1E0DD" stroke-width="1.00116"/>
<defs>
<clipPath id="clip0_2347_5226">
<rect x="0.692627" y="-2.28882e-05" width="289.18" height="145.088" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      w() &&
                        c(`div`, {
                          className: `framer-1bsfjvh hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            c(`div`, {
                              className: `framer-1g29uwq`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-1ama66d`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-s2qwhs`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1lo090i`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-e7vlki`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-rzejj8`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-9m77wj`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1tk7iq3`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-163im35`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1rtffwd`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1vrz6dk`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-ng7rfi`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-pok9qp`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-2jafm`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-4te5f2`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-iftlj2`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-1yl8cp9`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-5rhgja`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1udrf9h`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-19atit1`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1kr7no7`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-1bnorof`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1g1hhe5`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-xfztkh`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-19tx415`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      w() &&
                        c(`div`, {
                          className: `framer-nnv5t hidden-7efg67`,
                          "data-framer-name": `Frame 69`,
                          children: [
                            c(`div`, {
                              className: `framer-1p34mkd`,
                              "data-framer-name": `Frame 69`,
                              children: [
                                o(`div`, {
                                  className: `framer-sbrf8y`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1xywx47`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1ibdbve`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-49ivr1`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1ovfg6w`,
                              "data-framer-name": `Frame 74`,
                              children: [
                                o(`div`, {
                                  className: `framer-s7mu9o`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1um2ntv`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-tjnkjt`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1j02p9q`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1tauyd2`,
                              "data-framer-name": `Frame 75`,
                              children: [
                                o(`div`, {
                                  className: `framer-1yfzom`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-1g11fda`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1alabsy`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-mfokge`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-14z8l78`,
                              "data-framer-name": `Frame 78`,
                              children: [
                                o(`div`, {
                                  className: `framer-v6p5ls`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-qbsxm6`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-1yl6655`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-ktv75e`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1is5yj8`,
                              "data-framer-name": `Frame 76`,
                              children: [
                                o(`div`, {
                                  className: `framer-mxt33o`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 113`,
                                }),
                                o(`div`, {
                                  className: `framer-11szoy6`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 124`,
                                }),
                                o(`div`, {
                                  className: `framer-110zobe`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 122`,
                                }),
                                o(`div`, {
                                  className: `framer-1q2nb23`,
                                  "data-border": !0,
                                  "data-framer-name": `Frame 121`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      o(`div`, {
                        className: `framer-16vz7jg`,
                        children: o(`div`, {
                          className: `framer-1as9dgs`,
                          "data-framer-name": `Hero`,
                          children: c(`div`, {
                            className: `framer-3esgda`,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(n, {
                                  children: o(`h2`, {
                                    className: `framer-styles-preset-2j4pyd`,
                                    "data-styles-preset": `SSEsK9psT`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                    },
                                    children: `volunteer with our team`,
                                  }),
                                }),
                                className: `framer-h1rk5n`,
                                "data-framer-name": `vote yes for global peace`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(n, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-wlepxr`,
                                    "data-styles-preset": `h3JjhDKFx`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                    },
                                    children: `Get in touch about volunteering at events, promoting the campaign and with the organization.`,
                                  }),
                                }),
                                className: `framer-v51jc5`,
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
                  o(`div`, {
                    className: `framer-1uhb1l8`,
                    children: c(`div`, {
                      className: `framer-6mqdp3`,
                      children: [
                        o(re, {
                          action: `https://api.framer.com/forms/v1/forms/f4138ddb-e6de-43dc-bb3e-ed0b32f05e9f/submit`,
                          className: `framer-10la9x9`,
                          "data-border": !0,
                          children: (e) =>
                            c(u, {
                              children: [
                                c(`label`, {
                                  className: `framer-fytqeq`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(n, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BQIFN1cHBseSBNb25vIE1lZGl1bQ==`,
                                            "--framer-font-family": `"PP Supply Mono Medium", "PP Supply Mono Medium Placeholder", monospace`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                          },
                                          children: `NAME`,
                                        }),
                                      }),
                                      className: `framer-pshw6j`,
                                      fonts: [`CUSTOM;PP Supply Mono Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(A, {
                                      className: `framer-110ror2`,
                                      inputName: `Name`,
                                      placeholder: `Jane Smith`,
                                      required: !0,
                                      type: `text`,
                                    }),
                                  ],
                                }),
                                c(`label`, {
                                  className: `framer-g0j7hv`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(n, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BQIFN1cHBseSBNb25vIE1lZGl1bQ==`,
                                            "--framer-font-family": `"PP Supply Mono Medium", "PP Supply Mono Medium Placeholder", monospace`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                          },
                                          children: `EMAIL`,
                                        }),
                                      }),
                                      className: `framer-w0o3cx`,
                                      fonts: [`CUSTOM;PP Supply Mono Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(A, {
                                      className: `framer-2u64rw`,
                                      inputName: `Email`,
                                      placeholder: `example@example.com`,
                                      required: !0,
                                      type: `email`,
                                    }),
                                  ],
                                }),
                                c(`label`, {
                                  className: `framer-1i3p6av`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(n, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BQIFN1cHBseSBNb25vIE1lZGl1bQ==`,
                                            "--framer-font-family": `"PP Supply Mono Medium", "PP Supply Mono Medium Placeholder", monospace`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                          },
                                          children: `LOCATION`,
                                        }),
                                      }),
                                      className: `framer-vaxqj5`,
                                      fonts: [`CUSTOM;PP Supply Mono Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(A, {
                                      className: `framer-n1s6lu`,
                                      inputName: `Location`,
                                      placeholder: `San Francisco, CA`,
                                      required: !0,
                                      type: `text`,
                                    }),
                                  ],
                                }),
                                c(`label`, {
                                  className: `framer-1xwy37p`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(n, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BQIFN1cHBseSBNb25vIE1lZGl1bQ==`,
                                            "--framer-font-family": `"PP Supply Mono Medium", "PP Supply Mono Medium Placeholder", monospace`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                          },
                                          children: `MESSAGE`,
                                        }),
                                      }),
                                      className: `framer-1r0rs7a`,
                                      fonts: [`CUSTOM;PP Supply Mono Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(A, {
                                      className: `framer-1yt4qs`,
                                      inputName: `Message`,
                                      placeholder: `Type your message here...`,
                                      required: !0,
                                      type: `textarea`,
                                    }),
                                  ],
                                }),
                                o(S, {
                                  breakpoint: _,
                                  overrides: {
                                    rC8a81MeH: {
                                      width: `calc(min(${k?.width || `100vw`} - 48px, 1152px) - 40px)`,
                                    },
                                  },
                                  children: o(M, {
                                    height: 40,
                                    width: `calc(max((min(max(${k?.width || `100vw`} - 48px, 1px), 1152px) - 40px) / 2, 1px) - 40px)`,
                                    children: o(O, {
                                      className: `framer-npi8qo-container`,
                                      children: o(Y, {
                                        height: `100%`,
                                        id: `tZwbm7keh`,
                                        layoutId: `tZwbm7keh`,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        type: `submit`,
                                        variant: Pe(
                                          e,
                                          {
                                            pending: `Fw7wtA62f`,
                                            success: `RUVVqFj1R`,
                                          },
                                          `bm0_gHeiZ`,
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        }),
                        o(`div`, {
                          className: `framer-ggchoh`,
                          children: c(`div`, {
                            className: `framer-6mzj7c`,
                            "data-framer-name": `Frame 133`,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(n, {
                                  children: o(`h3`, {
                                    className: `framer-styles-preset-1xt9e56`,
                                    "data-styles-preset": `XzgMKSLcl`,
                                    children: `REWARDING VOLUNTEER SERVICE IS AT OUR CORE`,
                                  }),
                                }),
                                className: `framer-1l1hzs2`,
                                "data-framer-name": `join a global community`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(n, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-wlepxr`,
                                    "data-styles-preset": `h3JjhDKFx`,
                                    children: `PEACE CHAMPION emerged from thousands of hours of pure volunteer efforts which remain a driving force behind our work. We are seeking talent and passion in many areas, especially at this time in social media marketing. Are you a yoga, dance, or meditation teacher who is interested to lead a class in your area? We are excited to hear from you.`,
                                  }),
                                }),
                                className: `framer-1jvj5q2`,
                                "data-framer-name": `Participate in events featuring activities such as walking, dancing, meditation, art shows, and yoga — all for peace.`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  o(M, {
                    height: 462,
                    width: k?.width || `100vw`,
                    children: o(O, {
                      className: `framer-1jm11zw-container`,
                      children: o(S, {
                        breakpoint: _,
                        overrides: {
                          G7GBJRjVr: { variant: `z_KCxy1by` },
                          lYOWNe2Vi: { variant: `kltl97472` },
                          rC8a81MeH: { variant: `REZcr_g_6` },
                          TTgEFZQHH: { variant: `zer3ntXsH` },
                        },
                        children: o(P, {
                          height: `100%`,
                          id: `YVEj9yChv`,
                          layoutId: `YVEj9yChv`,
                          style: { width: `100%` },
                          variant: `TjsNYcWYY`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  }),
                  o(M, {
                    height: 67,
                    width: `100vw`,
                    y: 0,
                    children: o(O, {
                      className: `framer-1okq62l-container`,
                      layoutScroll: !0,
                      children: o(S, {
                        breakpoint: _,
                        overrides: {
                          G7GBJRjVr: { variant: `EFYbh1FDG` },
                          lYOWNe2Vi: { variant: `vtvSUblLE` },
                          rC8a81MeH: { variant: `WE2mbDQk8` },
                          TTgEFZQHH: { variant: `lqgFjEwKv` },
                        },
                        children: o(F, {
                          height: `100%`,
                          id: `lf2cEOvqk`,
                          layoutId: `lf2cEOvqk`,
                          style: { width: `100%` },
                          variant: `zP3AL12Ww`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              o(`div`, { id: `overlay` }),
            ],
          }),
        });
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-X55ZG.framer-1v8eboc, .framer-X55ZG .framer-1v8eboc { display: block; }`,
        `.framer-X55ZG.framer-wqbf2n { align-content: center; align-items: center; background-color: #faf9f6; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 67px 0px 0px 0px; position: relative; width: 1728px; }`,
        `.framer-X55ZG .framer-mnk1hm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-1xznxx1, .framer-X55ZG .framer-128rov7, .framer-X55ZG .framer-1hw9en6, .framer-X55ZG .framer-djn4a6, .framer-X55ZG .framer-z3u4n0, .framer-X55ZG .framer-1bsfjvh, .framer-X55ZG .framer-nnv5t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 581px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-X55ZG .framer-1572bbu, .framer-X55ZG .framer-59s9ms, .framer-X55ZG .framer-g4w7a5, .framer-X55ZG .framer-q9duzx, .framer-X55ZG .framer-tk7etl, .framer-X55ZG .framer-18b911e, .framer-X55ZG .framer-1ovj426, .framer-X55ZG .framer-ohhvm, .framer-X55ZG .framer-17jxj5s, .framer-X55ZG .framer-8aoazz, .framer-X55ZG .framer-fqz0z4, .framer-X55ZG .framer-155ftfu, .framer-X55ZG .framer-19gxkiy, .framer-X55ZG .framer-7bge46, .framer-X55ZG .framer-a8axr, .framer-X55ZG .framer-1w5cgcw, .framer-X55ZG .framer-1cdiejm, .framer-X55ZG .framer-vem45v, .framer-X55ZG .framer-zjsjxg, .framer-X55ZG .framer-1w38xkk, .framer-X55ZG .framer-45gx62, .framer-X55ZG .framer-196cgua, .framer-X55ZG .framer-1yz25p9, .framer-X55ZG .framer-11w5e5q, .framer-X55ZG .framer-cx2e3o, .framer-X55ZG .framer-1g29uwq, .framer-X55ZG .framer-rzejj8, .framer-X55ZG .framer-1vrz6dk, .framer-X55ZG .framer-iftlj2, .framer-X55ZG .framer-1kr7no7, .framer-X55ZG .framer-1p34mkd, .framer-X55ZG .framer-1ovfg6w, .framer-X55ZG .framer-1tauyd2, .framer-X55ZG .framer-14z8l78, .framer-X55ZG .framer-1is5yj8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-102xnnd, .framer-X55ZG .framer-1ld9vf3, .framer-X55ZG .framer-tmfmnq, .framer-X55ZG .framer-hlucba, .framer-X55ZG .framer-17f7uqh, .framer-X55ZG .framer-1fbazv7, .framer-X55ZG .framer-5v41u, .framer-X55ZG .framer-p5mfgb, .framer-X55ZG .framer-k1ohsj, .framer-X55ZG .framer-1wr5j20, .framer-X55ZG .framer-1b2a5mb, .framer-X55ZG .framer-1m52af5, .framer-X55ZG .framer-1fjukiq, .framer-X55ZG .framer-6l1zwt, .framer-X55ZG .framer-c0ex8i, .framer-X55ZG .framer-1gzw9l, .framer-X55ZG .framer-pzdtc8, .framer-X55ZG .framer-huv3m0, .framer-X55ZG .framer-1i6djhr, .framer-X55ZG .framer-fxdcek, .framer-X55ZG .framer-m802ml, .framer-X55ZG .framer-1rx2r1o, .framer-X55ZG .framer-76x7h8, .framer-X55ZG .framer-13jxl7c, .framer-X55ZG .framer-175i69m, .framer-X55ZG .framer-kl914x, .framer-X55ZG .framer-5reh5y, .framer-X55ZG .framer-183ubpo, .framer-X55ZG .framer-1r45vu8, .framer-X55ZG .framer-su3r23, .framer-X55ZG .framer-17iv6p5, .framer-X55ZG .framer-yl7zys, .framer-X55ZG .framer-1x8y1ve, .framer-X55ZG .framer-64sk2t, .framer-X55ZG .framer-aj3563, .framer-X55ZG .framer-1cboyuj, .framer-X55ZG .framer-eiqola, .framer-X55ZG .framer-1grf3rl, .framer-X55ZG .framer-15ymnig, .framer-X55ZG .framer-1jjac4u, .framer-X55ZG .framer-isbp72, .framer-X55ZG .framer-10r5rm1, .framer-X55ZG .framer-iknv25, .framer-X55ZG .framer-17tpxoa, .framer-X55ZG .framer-9n1lb9, .framer-X55ZG .framer-as3fkh, .framer-X55ZG .framer-zr6b9y, .framer-X55ZG .framer-12ns4rl, .framer-X55ZG .framer-lgyxmt, .framer-X55ZG .framer-1ifn2zf, .framer-X55ZG .framer-1u833vo, .framer-X55ZG .framer-q3f7gf, .framer-X55ZG .framer-abbdf7, .framer-X55ZG .framer-1xzqu28, .framer-X55ZG .framer-hzjjhv, .framer-X55ZG .framer-gqqchk, .framer-X55ZG .framer-1ecyehz, .framer-X55ZG .framer-10ttei6, .framer-X55ZG .framer-14gtu5w, .framer-X55ZG .framer-zobgxo, .framer-X55ZG .framer-lt4lq0, .framer-X55ZG .framer-w2jh40, .framer-X55ZG .framer-12d17ai, .framer-X55ZG .framer-140tgea, .framer-X55ZG .framer-1w7ipd1, .framer-X55ZG .framer-151dp78, .framer-X55ZG .framer-1rdqg2g, .framer-X55ZG .framer-4cnks1, .framer-X55ZG .framer-jjnxap, .framer-X55ZG .framer-mw4hs2, .framer-X55ZG .framer-l2e9f9, .framer-X55ZG .framer-1orzpu, .framer-X55ZG .framer-1ama66d, .framer-X55ZG .framer-s2qwhs, .framer-X55ZG .framer-1lo090i, .framer-X55ZG .framer-e7vlki, .framer-X55ZG .framer-9m77wj, .framer-X55ZG .framer-1tk7iq3, .framer-X55ZG .framer-163im35, .framer-X55ZG .framer-1rtffwd, .framer-X55ZG .framer-ng7rfi, .framer-X55ZG .framer-pok9qp, .framer-X55ZG .framer-2jafm, .framer-X55ZG .framer-4te5f2, .framer-X55ZG .framer-1bnorof, .framer-X55ZG .framer-1g1hhe5, .framer-X55ZG .framer-xfztkh, .framer-X55ZG .framer-19tx415, .framer-X55ZG .framer-sbrf8y, .framer-X55ZG .framer-1xywx47, .framer-X55ZG .framer-1ibdbve, .framer-X55ZG .framer-49ivr1, .framer-X55ZG .framer-s7mu9o, .framer-X55ZG .framer-1um2ntv, .framer-X55ZG .framer-tjnkjt, .framer-X55ZG .framer-1j02p9q, .framer-X55ZG .framer-1yfzom, .framer-X55ZG .framer-1g11fda, .framer-X55ZG .framer-1alabsy, .framer-X55ZG .framer-mfokge, .framer-X55ZG .framer-mxt33o, .framer-X55ZG .framer-11szoy6, .framer-X55ZG .framer-110zobe, .framer-X55ZG .framer-1q2nb23 { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-1emx7h0, .framer-X55ZG .framer-9fa236, .framer-X55ZG .framer-11sua7i, .framer-X55ZG .framer-1c3t4uq, .framer-X55ZG .framer-osqxst, .framer-X55ZG .framer-ee25yv, .framer-X55ZG .framer-1qdoi6l, .framer-X55ZG .framer-veg4ho, .framer-X55ZG .framer-1a7ftnv, .framer-X55ZG .framer-471e3n, .framer-X55ZG .framer-14fzwfo, .framer-X55ZG .framer-7lu19t, .framer-X55ZG .framer-1jgf875, .framer-X55ZG .framer-apa2uk, .framer-X55ZG .framer-1c9ukva, .framer-X55ZG .framer-15qb8bw, .framer-X55ZG .framer-hkwsur, .framer-X55ZG .framer-1bbpgtf, .framer-X55ZG .framer-imrubz, .framer-X55ZG .framer-pcfup0, .framer-X55ZG .framer-1yl8cp9, .framer-X55ZG .framer-5rhgja, .framer-X55ZG .framer-1udrf9h, .framer-X55ZG .framer-19atit1, .framer-X55ZG .framer-v6p5ls, .framer-X55ZG .framer-qbsxm6, .framer-X55ZG .framer-1yl6655, .framer-X55ZG .framer-ktv75e { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 146px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-1qb4yhn { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-nzqsl, .framer-X55ZG .framer-faundk { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-pkbwi7 { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0.5px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-1pledk, .framer-X55ZG .framer-c48gtg { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-oh3te0 { --border-bottom-width: 0px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0.5px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-1xr090p { --border-bottom-width: 0.5px; --border-color: #e1e0dd; --border-left-width: 0px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 145px); overflow: hidden; position: relative; width: 145px; }`,
        `.framer-X55ZG .framer-hoeunt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 290px); position: absolute; right: 0px; top: 50%; transform: translateY(-50%); width: 290px; z-index: 1; }`,
        `.framer-X55ZG .framer-q6qxg2 { aspect-ratio: 1 / 1; background-color: #006bd4; flex: none; height: var(--framer-aspect-ratio-supported, 290px); mix-blend-mode: screen; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); width: 290px; z-index: 1; }`,
        `.framer-X55ZG .framer-1vbvsgr { aspect-ratio: 1.97979797979798 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 101px); left: 0px; position: absolute; top: 0px; width: 50%; z-index: 1; }`,
        `.framer-X55ZG .framer-1uk5yr2 { flex: none; height: 147px; left: -1px; position: absolute; top: 0px; width: 292px; z-index: 1; }`,
        `.framer-X55ZG .framer-1u5ad53 { bottom: -1px; flex: none; left: -1px; position: absolute; top: 435px; width: 292px; z-index: 1; }`,
        `.framer-X55ZG .framer-16vz7jg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 1px; min-height: 435px; overflow: hidden; padding: 0px; position: absolute; right: -1px; top: 63%; transform: translateY(-50%); z-index: 1; }`,
        `.framer-X55ZG .framer-1as9dgs { align-content: center; align-items: center; bottom: 145px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: calc(50.00000000000002% - min(1160px, 100%) / 2); max-width: 1160px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-X55ZG .framer-3esgda { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; max-width: 870px; overflow: visible; padding: 16px 24px 16px 24px; position: relative; width: 50%; }`,
        `.framer-X55ZG .framer-h1rk5n, .framer-X55ZG .framer-v51jc5, .framer-X55ZG .framer-1l1hzs2, .framer-X55ZG .framer-1jvj5q2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X55ZG .framer-1uhb1l8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 24px 80px 24px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-6mqdp3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1152px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-X55ZG .framer-10la9x9 { --border-bottom-width: 1px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
        `.framer-X55ZG .framer-fytqeq, .framer-X55ZG .framer-g0j7hv, .framer-X55ZG .framer-1i3p6av, .framer-X55ZG .framer-1xwy37p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-pshw6j, .framer-X55ZG .framer-w0o3cx, .framer-X55ZG .framer-vaxqj5, .framer-X55ZG .framer-1r0rs7a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-X55ZG .framer-110ror2, .framer-X55ZG .framer-2u64rw, .framer-X55ZG .framer-n1s6lu { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #000000; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-1yt4qs { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #000000; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-npi8qo-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-ggchoh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-X55ZG .framer-6mzj7c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-1jm11zw-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-X55ZG .framer-1okq62l-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 2; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-X55ZG.framer-wqbf2n, .framer-X55ZG .framer-mnk1hm, .framer-X55ZG .framer-1xznxx1, .framer-X55ZG .framer-1572bbu, .framer-X55ZG .framer-59s9ms, .framer-X55ZG .framer-g4w7a5, .framer-X55ZG .framer-q9duzx, .framer-X55ZG .framer-tk7etl, .framer-X55ZG .framer-128rov7, .framer-X55ZG .framer-18b911e, .framer-X55ZG .framer-1ovj426, .framer-X55ZG .framer-ohhvm, .framer-X55ZG .framer-17jxj5s, .framer-X55ZG .framer-8aoazz, .framer-X55ZG .framer-1hw9en6, .framer-X55ZG .framer-fqz0z4, .framer-X55ZG .framer-155ftfu, .framer-X55ZG .framer-19gxkiy, .framer-X55ZG .framer-7bge46, .framer-X55ZG .framer-a8axr, .framer-X55ZG .framer-djn4a6, .framer-X55ZG .framer-1w5cgcw, .framer-X55ZG .framer-1cdiejm, .framer-X55ZG .framer-vem45v, .framer-X55ZG .framer-zjsjxg, .framer-X55ZG .framer-1w38xkk, .framer-X55ZG .framer-z3u4n0, .framer-X55ZG .framer-45gx62, .framer-X55ZG .framer-196cgua, .framer-X55ZG .framer-1yz25p9, .framer-X55ZG .framer-11w5e5q, .framer-X55ZG .framer-cx2e3o, .framer-X55ZG .framer-1bsfjvh, .framer-X55ZG .framer-1g29uwq, .framer-X55ZG .framer-rzejj8, .framer-X55ZG .framer-1vrz6dk, .framer-X55ZG .framer-iftlj2, .framer-X55ZG .framer-1kr7no7, .framer-X55ZG .framer-nnv5t, .framer-X55ZG .framer-1p34mkd, .framer-X55ZG .framer-1ovfg6w, .framer-X55ZG .framer-1tauyd2, .framer-X55ZG .framer-14z8l78, .framer-X55ZG .framer-1is5yj8, .framer-X55ZG .framer-16vz7jg, .framer-X55ZG .framer-1as9dgs, .framer-X55ZG .framer-3esgda, .framer-X55ZG .framer-1uhb1l8, .framer-X55ZG .framer-6mqdp3, .framer-X55ZG .framer-10la9x9, .framer-X55ZG .framer-fytqeq, .framer-X55ZG .framer-g0j7hv, .framer-X55ZG .framer-1i3p6av, .framer-X55ZG .framer-1xwy37p, .framer-X55ZG .framer-ggchoh, .framer-X55ZG .framer-6mzj7c { gap: 0px; } .framer-X55ZG.framer-wqbf2n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-X55ZG.framer-wqbf2n > :first-child, .framer-X55ZG .framer-1xznxx1 > :first-child, .framer-X55ZG .framer-128rov7 > :first-child, .framer-X55ZG .framer-1hw9en6 > :first-child, .framer-X55ZG .framer-djn4a6 > :first-child, .framer-X55ZG .framer-z3u4n0 > :first-child, .framer-X55ZG .framer-1bsfjvh > :first-child, .framer-X55ZG .framer-nnv5t > :first-child, .framer-X55ZG .framer-3esgda > :first-child, .framer-X55ZG .framer-10la9x9 > :first-child, .framer-X55ZG .framer-fytqeq > :first-child, .framer-X55ZG .framer-g0j7hv > :first-child, .framer-X55ZG .framer-1i3p6av > :first-child, .framer-X55ZG .framer-1xwy37p > :first-child, .framer-X55ZG .framer-ggchoh > :first-child, .framer-X55ZG .framer-6mzj7c > :first-child { margin-top: 0px; } .framer-X55ZG.framer-wqbf2n > :last-child, .framer-X55ZG .framer-1xznxx1 > :last-child, .framer-X55ZG .framer-128rov7 > :last-child, .framer-X55ZG .framer-1hw9en6 > :last-child, .framer-X55ZG .framer-djn4a6 > :last-child, .framer-X55ZG .framer-z3u4n0 > :last-child, .framer-X55ZG .framer-1bsfjvh > :last-child, .framer-X55ZG .framer-nnv5t > :last-child, .framer-X55ZG .framer-3esgda > :last-child, .framer-X55ZG .framer-10la9x9 > :last-child, .framer-X55ZG .framer-fytqeq > :last-child, .framer-X55ZG .framer-g0j7hv > :last-child, .framer-X55ZG .framer-1i3p6av > :last-child, .framer-X55ZG .framer-1xwy37p > :last-child, .framer-X55ZG .framer-ggchoh > :last-child, .framer-X55ZG .framer-6mzj7c > :last-child { margin-bottom: 0px; } .framer-X55ZG .framer-mnk1hm > *, .framer-X55ZG .framer-1as9dgs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-X55ZG .framer-mnk1hm > :first-child, .framer-X55ZG .framer-1572bbu > :first-child, .framer-X55ZG .framer-59s9ms > :first-child, .framer-X55ZG .framer-g4w7a5 > :first-child, .framer-X55ZG .framer-q9duzx > :first-child, .framer-X55ZG .framer-tk7etl > :first-child, .framer-X55ZG .framer-18b911e > :first-child, .framer-X55ZG .framer-1ovj426 > :first-child, .framer-X55ZG .framer-ohhvm > :first-child, .framer-X55ZG .framer-17jxj5s > :first-child, .framer-X55ZG .framer-8aoazz > :first-child, .framer-X55ZG .framer-fqz0z4 > :first-child, .framer-X55ZG .framer-155ftfu > :first-child, .framer-X55ZG .framer-19gxkiy > :first-child, .framer-X55ZG .framer-7bge46 > :first-child, .framer-X55ZG .framer-a8axr > :first-child, .framer-X55ZG .framer-1w5cgcw > :first-child, .framer-X55ZG .framer-1cdiejm > :first-child, .framer-X55ZG .framer-vem45v > :first-child, .framer-X55ZG .framer-zjsjxg > :first-child, .framer-X55ZG .framer-1w38xkk > :first-child, .framer-X55ZG .framer-45gx62 > :first-child, .framer-X55ZG .framer-196cgua > :first-child, .framer-X55ZG .framer-1yz25p9 > :first-child, .framer-X55ZG .framer-11w5e5q > :first-child, .framer-X55ZG .framer-cx2e3o > :first-child, .framer-X55ZG .framer-1g29uwq > :first-child, .framer-X55ZG .framer-rzejj8 > :first-child, .framer-X55ZG .framer-1vrz6dk > :first-child, .framer-X55ZG .framer-iftlj2 > :first-child, .framer-X55ZG .framer-1kr7no7 > :first-child, .framer-X55ZG .framer-1p34mkd > :first-child, .framer-X55ZG .framer-1ovfg6w > :first-child, .framer-X55ZG .framer-1tauyd2 > :first-child, .framer-X55ZG .framer-14z8l78 > :first-child, .framer-X55ZG .framer-1is5yj8 > :first-child, .framer-X55ZG .framer-16vz7jg > :first-child, .framer-X55ZG .framer-1as9dgs > :first-child, .framer-X55ZG .framer-1uhb1l8 > :first-child, .framer-X55ZG .framer-6mqdp3 > :first-child { margin-left: 0px; } .framer-X55ZG .framer-mnk1hm > :last-child, .framer-X55ZG .framer-1572bbu > :last-child, .framer-X55ZG .framer-59s9ms > :last-child, .framer-X55ZG .framer-g4w7a5 > :last-child, .framer-X55ZG .framer-q9duzx > :last-child, .framer-X55ZG .framer-tk7etl > :last-child, .framer-X55ZG .framer-18b911e > :last-child, .framer-X55ZG .framer-1ovj426 > :last-child, .framer-X55ZG .framer-ohhvm > :last-child, .framer-X55ZG .framer-17jxj5s > :last-child, .framer-X55ZG .framer-8aoazz > :last-child, .framer-X55ZG .framer-fqz0z4 > :last-child, .framer-X55ZG .framer-155ftfu > :last-child, .framer-X55ZG .framer-19gxkiy > :last-child, .framer-X55ZG .framer-7bge46 > :last-child, .framer-X55ZG .framer-a8axr > :last-child, .framer-X55ZG .framer-1w5cgcw > :last-child, .framer-X55ZG .framer-1cdiejm > :last-child, .framer-X55ZG .framer-vem45v > :last-child, .framer-X55ZG .framer-zjsjxg > :last-child, .framer-X55ZG .framer-1w38xkk > :last-child, .framer-X55ZG .framer-45gx62 > :last-child, .framer-X55ZG .framer-196cgua > :last-child, .framer-X55ZG .framer-1yz25p9 > :last-child, .framer-X55ZG .framer-11w5e5q > :last-child, .framer-X55ZG .framer-cx2e3o > :last-child, .framer-X55ZG .framer-1g29uwq > :last-child, .framer-X55ZG .framer-rzejj8 > :last-child, .framer-X55ZG .framer-1vrz6dk > :last-child, .framer-X55ZG .framer-iftlj2 > :last-child, .framer-X55ZG .framer-1kr7no7 > :last-child, .framer-X55ZG .framer-1p34mkd > :last-child, .framer-X55ZG .framer-1ovfg6w > :last-child, .framer-X55ZG .framer-1tauyd2 > :last-child, .framer-X55ZG .framer-14z8l78 > :last-child, .framer-X55ZG .framer-1is5yj8 > :last-child, .framer-X55ZG .framer-16vz7jg > :last-child, .framer-X55ZG .framer-1as9dgs > :last-child, .framer-X55ZG .framer-1uhb1l8 > :last-child, .framer-X55ZG .framer-6mqdp3 > :last-child { margin-right: 0px; } .framer-X55ZG .framer-1xznxx1 > *, .framer-X55ZG .framer-128rov7 > *, .framer-X55ZG .framer-1hw9en6 > *, .framer-X55ZG .framer-djn4a6 > *, .framer-X55ZG .framer-z3u4n0 > *, .framer-X55ZG .framer-1bsfjvh > *, .framer-X55ZG .framer-nnv5t > * { margin: 0px; margin-bottom: calc(-0.5px / 2); margin-top: calc(-0.5px / 2); } .framer-X55ZG .framer-1572bbu > *, .framer-X55ZG .framer-59s9ms > *, .framer-X55ZG .framer-g4w7a5 > *, .framer-X55ZG .framer-q9duzx > *, .framer-X55ZG .framer-tk7etl > *, .framer-X55ZG .framer-18b911e > *, .framer-X55ZG .framer-1ovj426 > *, .framer-X55ZG .framer-ohhvm > *, .framer-X55ZG .framer-17jxj5s > *, .framer-X55ZG .framer-8aoazz > *, .framer-X55ZG .framer-fqz0z4 > *, .framer-X55ZG .framer-155ftfu > *, .framer-X55ZG .framer-19gxkiy > *, .framer-X55ZG .framer-7bge46 > *, .framer-X55ZG .framer-a8axr > *, .framer-X55ZG .framer-1w5cgcw > *, .framer-X55ZG .framer-1cdiejm > *, .framer-X55ZG .framer-vem45v > *, .framer-X55ZG .framer-zjsjxg > *, .framer-X55ZG .framer-1w38xkk > *, .framer-X55ZG .framer-45gx62 > *, .framer-X55ZG .framer-196cgua > *, .framer-X55ZG .framer-1yz25p9 > *, .framer-X55ZG .framer-11w5e5q > *, .framer-X55ZG .framer-cx2e3o > *, .framer-X55ZG .framer-1g29uwq > *, .framer-X55ZG .framer-rzejj8 > *, .framer-X55ZG .framer-1vrz6dk > *, .framer-X55ZG .framer-iftlj2 > *, .framer-X55ZG .framer-1kr7no7 > *, .framer-X55ZG .framer-1p34mkd > *, .framer-X55ZG .framer-1ovfg6w > *, .framer-X55ZG .framer-1tauyd2 > *, .framer-X55ZG .framer-14z8l78 > *, .framer-X55ZG .framer-1is5yj8 > * { margin: 0px; margin-left: calc(-0.5px / 2); margin-right: calc(-0.5px / 2); } .framer-X55ZG .framer-16vz7jg > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-X55ZG .framer-3esgda > *, .framer-X55ZG .framer-fytqeq > *, .framer-X55ZG .framer-g0j7hv > *, .framer-X55ZG .framer-1i3p6av > *, .framer-X55ZG .framer-1xwy37p > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-X55ZG .framer-1uhb1l8 > *, .framer-X55ZG .framer-6mqdp3 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-X55ZG .framer-10la9x9 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-X55ZG .framer-ggchoh > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-X55ZG .framer-6mzj7c > * { margin: 0px; margin-bottom: calc(17px / 2); margin-top: calc(17px / 2); } }`,
        ...ue,
        ...he,
        ...ye,
        `.framer-X55ZG[data-border="true"]::after, .framer-X55ZG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 1440px) and (max-width: 1727px) { .framer-X55ZG.framer-wqbf2n { width: 1440px; }}`,
        `@media (min-width: 1200px) and (max-width: 1439px) { .framer-X55ZG.framer-wqbf2n { width: 1200px; } .framer-X55ZG .framer-1emx7h0, .framer-X55ZG .framer-9fa236, .framer-X55ZG .framer-11sua7i, .framer-X55ZG .framer-1c3t4uq, .framer-X55ZG .framer-osqxst, .framer-X55ZG .framer-ee25yv, .framer-X55ZG .framer-1qdoi6l, .framer-X55ZG .framer-veg4ho, .framer-X55ZG .framer-1a7ftnv, .framer-X55ZG .framer-471e3n, .framer-X55ZG .framer-14fzwfo, .framer-X55ZG .framer-7lu19t, .framer-X55ZG .framer-1jgf875, .framer-X55ZG .framer-apa2uk, .framer-X55ZG .framer-1c9ukva, .framer-X55ZG .framer-15qb8bw, .framer-X55ZG .framer-hkwsur, .framer-X55ZG .framer-1bbpgtf, .framer-X55ZG .framer-imrubz, .framer-X55ZG .framer-pcfup0, .framer-X55ZG .framer-1yl8cp9, .framer-X55ZG .framer-5rhgja, .framer-X55ZG .framer-1udrf9h, .framer-X55ZG .framer-19atit1, .framer-X55ZG .framer-v6p5ls, .framer-X55ZG .framer-qbsxm6, .framer-X55ZG .framer-1yl6655, .framer-X55ZG .framer-ktv75e { height: var(--framer-aspect-ratio-supported, 145px); }}`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-X55ZG.framer-wqbf2n { width: 810px; } .framer-X55ZG .framer-1emx7h0, .framer-X55ZG .framer-9fa236, .framer-X55ZG .framer-11sua7i, .framer-X55ZG .framer-1c3t4uq, .framer-X55ZG .framer-osqxst, .framer-X55ZG .framer-ee25yv, .framer-X55ZG .framer-1qdoi6l, .framer-X55ZG .framer-veg4ho, .framer-X55ZG .framer-1a7ftnv, .framer-X55ZG .framer-471e3n, .framer-X55ZG .framer-14fzwfo, .framer-X55ZG .framer-7lu19t, .framer-X55ZG .framer-1jgf875, .framer-X55ZG .framer-apa2uk, .framer-X55ZG .framer-1c9ukva, .framer-X55ZG .framer-15qb8bw, .framer-X55ZG .framer-hkwsur, .framer-X55ZG .framer-1bbpgtf, .framer-X55ZG .framer-imrubz, .framer-X55ZG .framer-pcfup0, .framer-X55ZG .framer-1yl8cp9, .framer-X55ZG .framer-5rhgja, .framer-X55ZG .framer-1udrf9h, .framer-X55ZG .framer-19atit1, .framer-X55ZG .framer-v6p5ls, .framer-X55ZG .framer-qbsxm6, .framer-X55ZG .framer-1yl6655, .framer-X55ZG .framer-ktv75e { height: var(--framer-aspect-ratio-supported, 145px); } .framer-X55ZG .framer-1uhb1l8 { gap: 24px; padding: 80px 24px 40px 24px; } .framer-X55ZG .framer-ggchoh { padding: 40px 0px 0px 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-X55ZG .framer-1uhb1l8 { gap: 0px; } .framer-X55ZG .framer-1uhb1l8 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-X55ZG .framer-1uhb1l8 > :first-child { margin-left: 0px; } .framer-X55ZG .framer-1uhb1l8 > :last-child { margin-right: 0px; } }}`,
        `@media (max-width: 809px) { .framer-X55ZG.framer-wqbf2n { width: 390px; } .framer-X55ZG .framer-mnk1hm { flex-direction: column; } .framer-X55ZG .framer-djn4a6 { height: min-content; width: 100%; } .framer-X55ZG .framer-9n1lb9, .framer-X55ZG .framer-as3fkh, .framer-X55ZG .framer-zr6b9y, .framer-X55ZG .framer-12ns4rl, .framer-X55ZG .framer-faundk, .framer-X55ZG .framer-abbdf7, .framer-X55ZG .framer-1xzqu28, .framer-X55ZG .framer-hzjjhv, .framer-X55ZG .framer-gqqchk { height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-oh3te0 { --border-right-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-lgyxmt, .framer-X55ZG .framer-1ifn2zf { --border-bottom-width: 0px; --border-left-width: 0px; --border-right-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-c48gtg { --border-bottom-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-1xr090p { --border-bottom-width: 0px; --border-right-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-1u833vo, .framer-X55ZG .framer-q3f7gf { --border-bottom-width: 0px; --border-left-width: 0px; --border-right-width: 0px; --border-top-width: 0px; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-1jgf875, .framer-X55ZG .framer-apa2uk, .framer-X55ZG .framer-1c9ukva, .framer-X55ZG .framer-15qb8bw { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: var(--framer-aspect-ratio-supported, 200px); width: 25%; } .framer-X55ZG .framer-hoeunt, .framer-X55ZG .framer-q6qxg2 { bottom: 0px; height: var(--framer-aspect-ratio-supported, 200px); top: unset; transform: unset; width: 25%; } .framer-X55ZG .framer-16vz7jg { flex-direction: column; height: 100%; left: 0px; min-height: unset; right: unset; top: calc(50.05128205128207% - 100% / 2); transform: unset; width: 100%; } .framer-X55ZG .framer-1as9dgs { bottom: unset; height: 100%; } .framer-X55ZG .framer-3esgda { height: min-content; padding: 24px; width: 100%; } .framer-X55ZG .framer-1uhb1l8 { flex-direction: column; padding: 80px 24px 40px 24px; } .framer-X55ZG .framer-6mqdp3 { flex: none; flex-direction: column; width: 100%; } .framer-X55ZG .framer-10la9x9 { flex: none; width: 100%; } .framer-X55ZG .framer-ggchoh { flex: none; padding: 40px 0px 0px 0px; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-X55ZG .framer-mnk1hm, .framer-X55ZG .framer-16vz7jg, .framer-X55ZG .framer-1uhb1l8, .framer-X55ZG .framer-6mqdp3 { gap: 0px; } .framer-X55ZG .framer-mnk1hm > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-X55ZG .framer-mnk1hm > :first-child, .framer-X55ZG .framer-16vz7jg > :first-child, .framer-X55ZG .framer-1uhb1l8 > :first-child, .framer-X55ZG .framer-6mqdp3 > :first-child { margin-top: 0px; } .framer-X55ZG .framer-mnk1hm > :last-child, .framer-X55ZG .framer-16vz7jg > :last-child, .framer-X55ZG .framer-1uhb1l8 > :last-child, .framer-X55ZG .framer-6mqdp3 > :last-child { margin-bottom: 0px; } .framer-X55ZG .framer-16vz7jg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-X55ZG .framer-1uhb1l8 > *, .framer-X55ZG .framer-6mqdp3 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}`,
      ],
      `framer-X55ZG`,
    )),
    (Re = Q),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1746, width: 1728 }),
    b(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `PP Supply Mono Medium`,
              source: `custom`,
              url: `../fonts/eNuqXTvRPtKEzOhYkdRYJhylhz8.woff2`,
            },
            {
              family: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              url: `../fonts/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Oe,
        ...ke,
        ...Ae,
        ...v(fe),
        ...v(ge),
        ...v(be),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerdNb59erKa`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerIntrinsicWidth: `1728`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"TTgEFZQHH":{"layout":["fixed","auto"]},"lYOWNe2Vi":{"layout":["fixed","auto"]},"G7GBJRjVr":{"layout":["fixed","auto"]},"rC8a81MeH":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `1746`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Re as default };
//# sourceMappingURL=F1Ovb6g782NIycLZSFeSZdixrGbk8GtwBh7E9la01f4.DjUGdnGO.mjs.map
