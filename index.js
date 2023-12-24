window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.forEach(function(element, index) {
        let imageOffset = scrollPosition * 0.4 * (index === 0 ? -1 : 1); // Adjust the multiplier for desired effect
        element.style.backgroundPositionY = imageOffset + 'px'; 
    });
});