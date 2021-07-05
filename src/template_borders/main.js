!(function () {
  const e = document.querySelector("#menu-button"),
    t = document.querySelector(".level-1.small"),
    c = t.querySelectorAll(".with-children");
  e.addEventListener("click", () => {
    t.classList.contains("show") &&
      (t.classList.remove("nest"),
      c.forEach((e) => {
        e.querySelector(".level-2").classList.remove("show");
      })),
      t.classList.toggle("show");
  }),
    c.forEach((e) => {
      const l = e.querySelector(".dropdown"),
        s = e.querySelector(".level-2");
      l.addEventListener("click", function () {
        c.forEach((e) => {
          e.querySelector(".level-2").classList.remove("show");
        }),
          t.classList.add("nest"),
          s.classList.add("show");
      }),
        s
          .querySelector(".return-level-1")
          .addEventListener("click", function () {
            t.classList.remove("nest");
          });
    });
})(),
  document.querySelectorAll("a[href]").forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      const t = e.target;
      window.location.href =
        t.attributes.getNamedItem("href").value +
        "?cache=0&dev_template=1&test=1";
    });
  });
