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

// Sidebar menu logic - Hamburger toggles sidebar open/close
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing sidebar functionality');
    
    const openSidebar = document.getElementById('openSidebar');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const body = document.body;
    const sidebarLinks = sidebarMenu ? sidebarMenu.querySelectorAll('a') : [];

    console.log('Elements found:', { 
        openSidebar: !!openSidebar, 
        sidebarMenu: !!sidebarMenu, 
        sidebarLinksCount: sidebarLinks.length 
    });

    if (openSidebar && sidebarMenu) {
        // Hamburger button click handler
        openSidebar.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sidebarMenu.classList.toggle('open');
            body.classList.toggle('sidebar-active');
            console.log('Hamburger clicked - Sidebar toggled. Open:', sidebarMenu.classList.contains('open'));
        });

        // Close sidebar when clicking outside
        window.addEventListener('click', function(e) {
            if (
                sidebarMenu.classList.contains('open') &&
                !sidebarMenu.contains(e.target) &&
                e.target !== openSidebar
            ) {
                sidebarMenu.classList.remove('open');
                body.classList.remove('sidebar-active');
                console.log('Sidebar closed - clicked outside');
            }
        });

        // Close sidebar when any link is clicked
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                sidebarMenu.classList.remove('open');
                body.classList.remove('sidebar-active');
                console.log('Sidebar closed - link clicked:', this.href);
            });
        });

        console.log('Sidebar functionality initialized successfully');
    } else {
        console.error('Sidebar elements not found:', { 
            openSidebar: !!openSidebar, 
            sidebarMenu: !!sidebarMenu 
        });
    }
});
