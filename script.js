// --- Hamburger Menu Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// --- Project Reveal Toggle (Accordion) ---
const revealBtns = document.querySelectorAll('.btn-reveal');

revealBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const textContent = btn.nextElementSibling;
        textContent.classList.toggle('open');

        if (btn.classList.contains('active')) {
            btn.innerHTML = 'Hide Details <i class="fas fa-chevron-down"></i>';
        } else {
            btn.innerHTML = 'Show Details <i class="fas fa-chevron-down"></i>';
        }
    });
});

// --- Certificate Flip Logic ---
const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Function to handle the reveal animation
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after it reveals once
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    reveals.forEach(el => observer.observe(el));
};

// Run when page loads
window.addEventListener('DOMContentLoaded', reveal);