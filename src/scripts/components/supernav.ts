import tippy from "tippy.js";

function InitSuperNav(): void {
  tippy(".item-with-children", {
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
  });
}

InitSuperNav();
