/**
 * Override link navigations and append url params
 * to keep navigating within the test enviroment
 */

function KeepInTestEnv(): void {
  // Do not intercept in local enviroments
  if (window.location.hostname === "localhost") return;

  const LinkTags = document.querySelectorAll<HTMLAnchorElement>("a[href]");

  LinkTags.forEach((linkElem) => {
    linkElem.addEventListener("click", (ev) => {
      const link = ev.currentTarget as HTMLAnchorElement;

      /**
       * First make sure there is a actual value present
       * Sometimes the target event seems to attach itself
       * to none anchor tags
       */
      if (link?.attributes?.getNamedItem?.("href")?.value) {
        ev.preventDefault();

        window.location.href =
          link.attributes.getNamedItem("href").value +
          "?cache=0&dev_template=1&test=1";
      } else {
        // I want to see what gets selected
        console.log(link);

        // Make sure the user wants to leave the test enviroment
        if (
          !window.confirm(
            "This link could not be intercepted. Are you sure you want to leave the test enviroment?"
          )
        ) {
          ev.preventDefault();
        }
      }
    });
  });
}

KeepInTestEnv();
