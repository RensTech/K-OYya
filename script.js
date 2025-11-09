// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollReveal();
    initFruitParticles();
    initSmoothScrolling();
    
    // Remove loading popup after animation
    setTimeout(() => {
        const loadingPopup = document.getElementById('loading-popup');
        if (loadingPopup) {
            loadingPopup.style.display = 'none';
        }
    }, 2500);
});

// Navigation Toggle for Mobile
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all reveal elements
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Fruit Particles Animation
function initFruitParticles() {
    const fruitContainer = document.getElementById('fruit-particles');
    const fruits = ['🍋', '🍊', '🍐', '🥝', '🌿'];
    
    // Create fruit particles
    for (let i = 0; i < 20; i++) {
        createFruitParticle(fruitContainer, fruits);
    }
}

function createFruitParticle(container, fruits) {
    const fruit = document.createElement('div');
    fruit.classList.add('fruit-particle');
    fruit.textContent = fruits[Math.floor(Math.random() * fruits.length)];
    
    // Random position and animation
    const left = Math.random() * 100;
    const size = Math.random() * 1 + 0.5;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    fruit.style.left = `${left}%`;
    fruit.style.fontSize = `${size}rem`;
    fruit.style.animationDuration = `${duration}s`;
    fruit.style.animationDelay = `${delay}s`;
    
    container.appendChild(fruit);
    
    // Remove and recreate fruit after animation completes
    setTimeout(() => {
        fruit.remove();
        createFruitParticle(container, fruits);
    }, duration * 1000);
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

