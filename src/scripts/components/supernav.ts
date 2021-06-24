import tippy from "tippy.js";

function InitSuperNav(): void {
  /**
   * DESKTOP
   * ==========
   */
  const Menu = tippy(".item-with-children", {
    content: (ref) => {
      const childrenContainer = ref.querySelector(".children-container");

      if (childrenContainer) {
        return childrenContainer;
      }

      return null;
    },
    offset: [0, 18],
    maxWidth: "auto",
    placement: "bottom",
    allowHTML: true,
    interactive: true,
    duration: 50,
    touch: true,
  });

  /**
   * MOBILE
   */
  const MenuButton = document.querySelector<HTMLButtonElement>("#menu-button");

  MenuButton.addEventListener("click", () => {
    const Supernav = document.querySelector<HTMLDivElement>(".supernav");

    Supernav.classList.toggle("show");
  });
}

InitSuperNav();
