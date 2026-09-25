/* Shared head script — loaded at the very top of <head> on every page.
   Must execute BEFORE the body is parsed and before the Framer runtime module.
   Order: (1) editor-bar modulepreload, (2) headStart custom snippet (title lock). */
try {
  if (localStorage.get("__framer_force_showing_editorbar_since")) {
    const n = document.createElement("link");
    n.rel = "modulepreload";
    n.href = "https://framer.com/edit/init.mjs";
    document.head.appendChild(n);
  }
} catch (e) {}

(function () {
  Object.defineProperty(document, "title", {
    configurable: true,
    get: function () {
      var el = document.querySelector("title");
      return el ? el.textContent : "";
    },
    set: function () {},
  });
})();
