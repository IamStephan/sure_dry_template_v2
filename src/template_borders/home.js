!(function () {
  const e = document.querySelector("#menu-button"),
    t = document.querySelector(".level-1.small"),
    o = t.querySelectorAll(".with-children");
  e.addEventListener("click", () => {
    t.classList.contains("show") &&
      (t.classList.remove("nest"),
      o.forEach((e) => {
        e.querySelector(".level-2").classList.remove("show");
      })),
      t.classList.toggle("show");
  }),
    o.forEach((e) => {
      const n = e.querySelector(".dropdown"),
        l = e.querySelector(".level-2");
      n.addEventListener("click", function () {
        o.forEach((e) => {
          e.querySelector(".level-2").classList.remove("show");
        }),
          t.classList.add("nest"),
          l.classList.add("show");
      }),
        l
          .querySelector(".return-level-1")
          .addEventListener("click", function () {
            t.classList.remove("nest");
          });
    });
})(),
  "localhost" !== window.location.hostname &&
    document.querySelectorAll("a[href]").forEach((e) => {
      e.addEventListener("click", (e) => {
        const t = e.currentTarget;
        t?.attributes?.getNamedItem?.("href")?.value
          ? (e.preventDefault(),
            (window.location.href =
              t.attributes.getNamedItem("href").value +
              "?cache=0&dev_template=1&test=1"))
          : (console.log(t),
            window.confirm(
              "This link could not be intercepted. Are you sure you want to leave the test enviroment?"
            ) || e.preventDefault());
      });
    }),
  (function () {
    if ("localhost" === window.location.hostname) return;
    const e = document.querySelector("html"),
      t = document.createElement("button", {});
    (t.innerHTML = "Open old page (DEV)"),
      (t.style.position = "fixed"),
      (t.style.bottom = "16px"),
      (t.style.right = "16px"),
      (t.style.backgroundColor = "#212121"),
      (t.style.color = "#fafafa"),
      (t.style.paddingTop = "12px"),
      (t.style.paddingBottom = "12px"),
      (t.style.paddingRight = "20px"),
      (t.style.paddingLeft = "20px"),
      (t.style.borderRadius = "999px"),
      (t.style.fontWeight = "900"),
      (t.onclick = () => {
        const { origin: e, pathname: t } = window.location;
        window.open(e + t);
      }),
      e.appendChild(t);
  })();
