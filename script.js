// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});

// Parallax scrolling effect
window.addEventListener('scroll', function () {
    const parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(section => {
        let scrollPosition = window.scrollY;
        section.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});
