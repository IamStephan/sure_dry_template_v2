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
      const l = e.querySelector(".dropdown"),
        c = e.querySelector(".level-2");
      l.addEventListener("click", function () {
        o.forEach((e) => {
          e.querySelector(".level-2").classList.remove("show");
        }),
          t.classList.add("nest"),
          c.classList.add("show");
      }),
        c
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
    });
