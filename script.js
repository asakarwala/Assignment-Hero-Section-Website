// Select all image wrappers
const imageWrappers = document.querySelectorAll('.image-wrapper');

imageWrappers.forEach((wrapper) => {
  const img = wrapper.querySelector('.hero-image');

  // Mouse movement effect: image follows mouse within its area
  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const moveX = ((offsetX - rect.width / 2) / (rect.width / 2)) * 10; // max 10px movement
    const moveY = ((offsetY - rect.height / 2) / (rect.height / 2)) * 10;
    img.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
  });

  // Reset transform when mouse leaves the image wrapper
  wrapper.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) translate(0, 0)';
  });

  // On hover: update image filters and text style
  wrapper.addEventListener('mouseenter', () => {
    document.querySelectorAll('.hero-image').forEach((otherImg) => {
      // Apply vector-like effect to all images except the hovered one
      if (otherImg !== img) {
        otherImg.style.filter = 'grayscale(100%) contrast(1.2) brightness(0.9)';
      } else {
        // Remove filter from the hovered image
        otherImg.style.filter = 'none';
      }
    });
    // Change the hero text style on hover
    document.querySelector('.hero-text h1').classList.add('hover-text');
    document.querySelector('.hero-text p').classList.add('hover-text');
  });

  // Reset text style and image filters when mouse leaves
  wrapper.addEventListener('mouseleave', () => {
    document.querySelectorAll('.hero-image').forEach((otherImg) => {
      otherImg.style.filter = 'grayscale(100%) contrast(1.2) brightness(0.9)';
    });
    document.querySelector('.hero-text h1').classList.remove('hover-text');
    document.querySelector('.hero-text p').classList.remove('hover-text');
  });
});