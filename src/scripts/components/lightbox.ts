import MediumZoom from "medium-zoom";

function InitLightbox() {
  const LightboxLinks: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(".lightbox");

  LightboxLinks.forEach((LightboxLink) => {
    const zoomableImage = LightboxLink.querySelector("img");
    const hdLink = LightboxLink.href;

    zoomableImage.setAttribute("data-zoom-src", hdLink);

    // Prevent navigation
    LightboxLink.onclick = (e) => {
      e.preventDefault();
    };
  });

  MediumZoom(".lightbox img", {
    background: "rgba(0, 0, 0, 0.75)",
  });
}

InitLightbox();
