document.addEventListener('DOMContentLoaded', function() {
  // Current year for copyright
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Experience tabs - Fixed version
  const tabBtns = document.querySelectorAll('.experience-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.experience-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get the tab ID from data attribute
      const tabId = btn.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Show corresponding content
      const targetTab = document.getElementById(`${tabId}-tab`);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      formMessage.textContent = 'Message sent successfully!';
      formMessage.classList.add('success');
      formMessage.style.display = 'block';
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.classList.remove('success');
      }, 5000);
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Change icon between bars and times
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate the correct position considering fixed navbar
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          const icon = mobileMenuBtn.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
});

// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});