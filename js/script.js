// Initialize ScrollReveal with modified settings
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false,        // Prevent reset/reload
    mobile: true,        // Enable on mobile
    useDelay: 'always',  // Consistent delay behavior
    viewFactor: 0.2,     // Trigger earlier
    cleanup: true        // Clean up animations after they're done
});

// Common reveal options
const commonReveal = {
    interval: 200,
    cleanup: true,
    mobile: true,
    viewFactor: 0.2
};

// Reveal main sections with delay
sr.reveal('.welcome-section', {
    ...commonReveal,
    delay: 200,
    distance: '50px'
});

// Reveal service cards with cascade effect
sr.reveal('.service-card', {
    ...commonReveal,
    interval: 100,
    distance: '30px',
    scale: 1,
    opacity: 0
});

// Reveal highlight items with cascade
sr.reveal('.highlight-item', {
    ...commonReveal,
    interval: 100,
    scale: 1,
    opacity: 0,
    distance: '30px'
});

// Reveal headers with special effect
sr.reveal('h1, h2, h3', {
    ...commonReveal,
    distance: '20px',
    origin: 'top',
    delay: 100,
    scale: 1
});

// Reveal doctor cards with cascade
sr.reveal('.doctor-card', {
    ...commonReveal,
    interval: 150,
    scale: 1,
    opacity: 0,
    distance: '40px'
});

// Reveal about sections
sr.reveal('.about-section', {
    ...commonReveal,
    interval: 200,
    scale: 1,
    opacity: 0
});

// Reveal footer content
sr.reveal('.footer-content, .footer-copy', {
    ...commonReveal,
    origin: 'bottom',
    interval: 150,
    distance: '20px',
    opacity: 0
});

// Initialize navbar and mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Reveal navbar animation
    sr.reveal('.navbar', {
        origin: 'top',
        distance: '20px',
        duration: 1000,
        delay: 100,
        cleanup: true,
        reset: false
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const menuSpans = mobileMenuBtn.querySelectorAll('span');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        navList.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // Animate hamburger to X
        menuSpans[0].style.transform = isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : '';
        menuSpans[1].style.opacity = isMenuOpen ? '0' : '1';
        menuSpans[2].style.transform = isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMenu();
        }
    });
});
