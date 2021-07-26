/**
 * Add a button on the bottom right side of
 * the screen to open the current page in the
 * old page.
 *
 * This helps with comparing the old content
 * with the new content to see what still needs
 * to be done.
 */

function OpenOldPageButton() {
  // Ignore local testing
  if (window.location.hostname === "localhost") return;

  const root = document.querySelector<HTMLHtmlElement>("html");
  const button = document.createElement("button", {});
  button.innerHTML = "Open old page";

  // Style Button
  button.style.position = "fixed";
  button.style.bottom = "16px";
  button.style.right = "16px";
  button.style.backgroundColor = "#212121";
  button.style.color = "#fafafa";
  button.style.paddingTop = "5px";
  button.style.paddingBottom = "5px";
  button.style.paddingRight = "15px";
  button.style.paddingLeft = "15px";

  button.onclick = () => {};

  root.appendChild(button);
}

OpenOldPageButton();
