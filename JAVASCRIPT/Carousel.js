
function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('div.carousel-item');
    const firstImage = images[0];
    const lastImage = images[images.length - 1];
    const imageWidth = images[0].offsetWidth; // Width of each image

    if (direction === 1) {
        carousel.style.transition = 'transform 0.5s ease'; // Smooth transition
        carousel.style.transform = `translateX(-${imageWidth}px)`; // Move carousel to the left
        setTimeout(() => {
            carousel.appendChild(firstImage); // Move the first image to the end
            carousel.style.transition = 'none'; // Remove transition for instant repositioning
            carousel.style.transform = 'translateX(0)'; // Reset carousel position
        }, 500); // Same duration as transition (0.5s)
    } else {
        carousel.insertBefore(lastImage, images[0]); // Move the last image to the beginning
        carousel.style.transition = 'none'; // Remove transition for instant repositioning
        carousel.style.transform = `translateX(-${imageWidth}px)`; // Shift carousel to the left
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // Restore transition for smooth movement
            carousel.style.transform = 'translateX(0)'; // Reset carousel position
        }, 0); // Delay before restoring transition (0ms)
    }
}
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change image every 5 seconds
