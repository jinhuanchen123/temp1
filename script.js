// JavaScript to detect scrolling and add "visible" class
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
