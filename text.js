document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animated Hamburger icon
            mobileMenu.classList.toggle('is-active');
            
            // Optional: Burger lines toggle effect
            const bars = mobileMenu.querySelectorAll('.bar');
            if(mobileMenu.classList.contains('is-active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Dynamic Navbar styling changes during page scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.padding = '14px 5%';
            navbar.style.background = '#020617'; // Rich ultra dark slate
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '20px 5%';
            navbar.style.background = '#0f172a';
            navbar.style.boxShadow = 'none';
        }
    });

    // Close mobile menu layout whenever a section navigation item is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('is-active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });
});