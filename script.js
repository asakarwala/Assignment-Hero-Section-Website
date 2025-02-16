// Function to handle hover events for a given image and its hover text,
// and also update the style of the middle hero text.
function addHoverEffect(imageId, hoverTextId) {
  const image = document.getElementById(imageId);
  const hoverText = document.getElementById(hoverTextId);
  const heroText = document.getElementById("hero-text");

  image.addEventListener("mouseenter", () => {
    const rect = image.getBoundingClientRect();
    // Position the hover text just below the image.
    hoverText.style.left = `${rect.left + window.scrollX}px`;
    hoverText.style.top = `${rect.bottom + window.scrollY + 10}px`;
    hoverText.style.opacity = "1";
    // Change the hero text style for an engaging effect.
    heroText.style.opacity = "0.2";
    heroText.style.color = "rgba(255,255,255,0.1)";
  });

  image.addEventListener("mouseleave", () => {
    hoverText.style.opacity = "0";
    // Reset the hero text style.
    heroText.style.opacity = "1";
    heroText.style.color = "white";
  });

  // Parallax-like effect on mousemove.
  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.2;
    image.style.transform = `scale(1.3) translate(${offsetX}px, ${offsetY}px)`;
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
}

// Apply the hover effect to all four images.
addHoverEffect("image1", "hover-text-1");
addHoverEffect("image2", "hover-text-2");
addHoverEffect("image3", "hover-text-3");
addHoverEffect("image4", "hover-text-4");