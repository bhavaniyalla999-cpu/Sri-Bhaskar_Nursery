document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Sticky
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Simple Counter Logic
    const counters = document.querySelectorAll('.counter-num');
    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            counter.innerText = target + (target > 500 ? '+' : '');
        });
    };

    if (counters.length > 0) {
        let started = false;
        window.addEventListener('scroll', () => {
            const counterSection = counters[0].closest('.counters');
            if (counterSection && counterSection.getBoundingClientRect().top < window.innerHeight && !started) {
                started = true;
                startCounters();
            }
        });
    }
});
