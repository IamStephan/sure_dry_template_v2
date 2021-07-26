!(function () {
  let e = [];
  document.querySelectorAll(".accordion").forEach((t) => {
    e.push({ container: t, activeElement: null }),
      t.querySelectorAll(".accordion-navigation").forEach((o) => {
        o.onclick = (n) => {
          n.preventDefault(),
            (function (t, o) {
              for (let n = 0; n < e.length; n++)
                if (t === e[n].container) {
                  if (
                    e[n].activeElement &&
                    (e[n].activeElement.classList.remove("active"),
                    e[n].activeElement === o)
                  ) {
                    e[n].activeElement = null;
                    break;
                  }
                  o.classList.add("active"), (e[n].activeElement = o);
                  break;
                }
            })(t, o);
        };
      });
  }),
    (function () {
      const e = document.querySelector("#silo-menu-button"),
        t = document.querySelector("#silo-container");
      e.addEventListener("click", () => {
        t.classList.toggle("show"), console.log("awe");
      });
    })(),
    (function () {
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
    (function () {
      if ("localhost" === window.location.hostname) return;
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
    })(),
    (function () {
      if ("localhost" === window.location.hostname) return;
      const e = document.querySelector("html"),
        t = document.createElement("button", {});
      (t.innerHTML = "Open old page"),
        (t.style.position = "fixed"),
        (t.style.bottom = "16px"),
        (t.style.right = "16px"),
        (t.style.backgroundColor = "#212121"),
        (t.style.color = "#fafafa"),
        (t.style.paddingTop = "5px"),
        (t.style.paddingBottom = "5px"),
        (t.style.paddingRight = "15px"),
        (t.style.paddingLeft = "15px"),
        (t.onclick = () => {}),
        e.appendChild(t);
    })();
})();
