!(function () {
  const e = document.querySelector("#silo-menu-button"),
    o = document.querySelector("#silo-container");
  e.addEventListener("click", () => {
    o.classList.toggle("show");
  });
})();
