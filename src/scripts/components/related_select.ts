function InitRelatedSelector(): void {
  const selector = document.querySelector<HTMLSelectElement>("#related_page");

  selector?.addEventListener("change", (_e) => {
    /**
     * NOTE:
     * =====
     * When the value is null is means
     * that the its the current page (Or selected item)
     * or the default value ('Please select topic')
     */
    if (selector.value !== "0") {
      window.location.href = selector.value;
    }
  });
}

InitRelatedSelector();
