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

// Function to generate random numbers within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Create and animate particles
function createParticles() {
    const container = document.getElementById("particle-container");
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // Randomly position and size each particle
        particle.style.left = getRandom(0, 100) + "%";
        particle.style.bottom = getRandom(0, 100) + "%";
        const size = getRandom(4, 10);
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        // Randomize animation duration and delay
        const animationDuration = getRandom(4, 8) + "s";
        const animationDelay = getRandom(0, 4) + "s";

        // Apply animation styles
        particle.style.animation = `float ${animationDuration} linear ${animationDelay} infinite`;

        container.appendChild(particle);
    }
}

// Call the createParticles function to start the animation
createParticles();
