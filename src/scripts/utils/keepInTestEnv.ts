/**
 * Override link navigations and append url params
 * to keep navigating within the test enviroment
 */

function KeepInTestEnv(): void {
  const LinkTags = document.querySelectorAll<HTMLAnchorElement>("a[href]");

  LinkTags.forEach((linkElem) => {
    linkElem.addEventListener("click", (ev) => {
      ev.preventDefault();
      const link = ev.target as HTMLAnchorElement;

      window.location.href =
        link.attributes.getNamedItem("href").value +
        "?cache=0&dev_template=1&test=1";
    });
  });
}

KeepInTestEnv();
