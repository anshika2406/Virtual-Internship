window.onload = function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');

    // Create and append the background overlay
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('background-overlay');
    sliderContainer.appendChild(backgroundOverlay);

    // Calculate the index of the middle image
    const middleIndex = Math.floor(slides.length / 2);

    // Calculate the offset to center the middle image
    const slideWidth = slides[middleIndex].offsetWidth;
    const containerWidth = sliderContainer.offsetWidth;
    const offset = slides[middleIndex].offsetLeft - (containerWidth / 2) + (slideWidth / 2) + 20;

    // Scroll to the offset
    sliderContainer.scrollLeft = offset;

    // Add hover effects
    slides.forEach((slide, index) => {
        slide.addEventListener('mouseenter', function() {
            // Dim other slides and show overlay
            sliderContainer.classList.add('dimmed');

            // Update background with the hovered image
            sliderContainer.style.backgroundImage = `url(${slide.querySelector('img').src})`;

            // Apply rotation and scale effects to the slides
            slides.forEach((s, i) => {
                s.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                if (i < index) {
                    s.style.transform = 'rotateY(40deg) scale(0.9)';
                } else if (i > index) {
                    s.style.transform = 'rotateY(-40deg) scale(0.9)';
                } else {
                    s.style.transform = 'rotateY(0deg) scale(1)';
                }
            });
        });

        slide.addEventListener('mouseleave', function() {
            // Reset dimming and hide overlay
            sliderContainer.classList.remove('dimmed');

            // Reset background
            sliderContainer.style.backgroundImage = 'none';

            // Reset all slides to default state
            slides.forEach(s => {
                s.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                s.style.transform = 'rotateY(0deg) scale(0.9)';
            });
        });
    });
};
