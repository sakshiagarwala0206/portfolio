/**
 * Portfolio Website JavaScript
 * Handles navigation, modals, and interactive elements
 */

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");
    // Update aria-expanded attribute for accessibility
    icon.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
}

// Initialize modal functionality
function initModals() {
  // Handle all modal links (both experience and project modals)
  document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Check for both data-modal and data-modal-project attributes
      const modalId = this.getAttribute('data-modal') || this.getAttribute('data-modal-project');
      
      if (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'block';
          // Prevent body scroll when modal is open
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });

  // Close modals when close button is clicked
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Try to find parent modal (either .modal or .modal-project)
      const modal = this.closest('.modal') || this.closest('.modal-project');
      if (modal) {
        modal.style.display = 'none';
        // Restore body scroll
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('modal-project')) {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close modals with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal, .modal-project').forEach(modal => {
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize project image hover effects
function initProjectImages() {
  document.querySelectorAll('.project-img').forEach(img => {
    const animSrc = img.getAttribute('anim');
    const statSrc = img.getAttribute('stat');
    
    if (animSrc && statSrc) {
      img.addEventListener('mouseenter', () => {
        img.src = animSrc;
      });
      
      img.addEventListener('mouseleave', () => {
        img.src = statSrc;
      });
    }
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initModals();
  initSmoothScroll();
  initProjectImages();
});



