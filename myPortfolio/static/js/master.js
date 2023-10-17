const showOverlayButtons = document.querySelectorAll(".showOverlayButton");
const overlays = document.querySelectorAll(".overlay-container");

showOverlayButtons.forEach(button => {
      button.addEventListener("click", () => {
        const targetOverlayId = button.getAttribute("data-target");
        const targetOverlay = document.getElementById(targetOverlayId);

        // Hide all overlays
        overlays.forEach(overlay => {
          overlay.style.display = "none";
        });

        // Show the clicked overlay
        targetOverlay.style.display = "block";
        document.body.classList.add("overlay-open");
      });
    });

    overlays.forEach(overlay => {
      overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        document.body.classList.remove("overlay-open");
      });
    });
