/**
 * Mobile navigation
 * ==================
 * I can't use the focus-within selector since it's
 * not supported ni Edge 15
 *
 */

function InitMobileNav() {
  const ToggleMenuButton =
    document.querySelector<HTMLButtonElement>("#menu-button");
  const RootNode = document.querySelector<HTMLUListElement>(".level-1.small");
  const SubMenus = RootNode.querySelectorAll<HTMLLIElement>(".with-children");

  function resetAll() {
    RootNode.classList.remove("nest");
    SubMenus.forEach((element) => {
      element.querySelector(".level-2").classList.remove("show");
    });
  }

  function resetSubMenus() {
    SubMenus.forEach((element) => {
      element.querySelector(".level-2").classList.remove("show");
    });
  }

  ToggleMenuButton.addEventListener("click", () => {
    if (RootNode.classList.contains("show")) {
      resetAll();
    }
    RootNode.classList.toggle("show");
  });

  SubMenus.forEach((element) => {
    const MoveButton = element.querySelector<HTMLDivElement>(".dropdown");
    const List = element.querySelector<HTMLUListElement>(".level-2");

    function goDeeper() {
      resetSubMenus();
      RootNode.classList.add("nest");
      List.classList.add("show");
    }

    function goShallow() {
      RootNode.classList.remove("nest");
    }

    MoveButton.addEventListener("click", goDeeper);

    List.querySelector<HTMLButtonElement>(".return-level-1").addEventListener(
      "click",
      goShallow
    );
  });
}

InitMobileNav();
