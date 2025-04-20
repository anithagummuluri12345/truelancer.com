document.addEventListener('DOMContentLoaded', function() {
  // Initialize the animated content boxes
  const textBox = document.getElementById('textContent');
  const imageBox = document.getElementById('imageContent');
  let isTextVisible = true;
  
  // Initial state
  textBox.classList.add('active');
  imageBox.classList.remove('active');
  
  // Toggle between text and image content every 3 seconds
  setInterval(() => {
    if (isTextVisible) {
      textBox.classList.remove('active');
      imageBox.classList.add('active');
    } else {
      imageBox.classList.remove('active');
      textBox.classList.add('active');
    }
    isTextVisible = !isTextVisible;
  }, 3000);
  
  // Service slider functionality
  const slider = document.getElementById('servicesSlider');
  document.querySelector('.slider-btn.right').addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  document.querySelector('.slider-btn.left').addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  // Modal functionality
  const authModal = document.getElementById('authModal');
  const closeModal = document.getElementById('closeModal');
  const signInForm = document.getElementById('signInForm');
  const joinForm = document.getElementById('joinForm');
  const signInTab = document.getElementById('signInTab');
  const joinTab = document.getElementById('joinTab');
  
  // Show modal when sign in or join is clicked
  document.querySelector('.sign-in-btn').addEventListener('click', showSignInModal);
  document.querySelector('.join-btn').addEventListener('click', showJoinModal);
  
  // Close modal
  closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
  });
  
  // Tab switching
  signInTab.addEventListener('click', showSignIn);
  joinTab.addEventListener('click', showJoin);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.style.display = 'none';
    }
  });
  
  function showSignInModal() {
    authModal.style.display = 'flex';
    showSignIn();
  }
  
  function showJoinModal() {
    authModal.style.display = 'flex';
    showJoin();
  }
  
  function showSignIn() {
    signInForm.classList.remove('hidden');
    joinForm.classList.add('hidden');
    signInTab.classList.add('active');
    joinTab.classList.remove('active');
  }
  
  function showJoin() {
    signInForm.classList.add('hidden');
    joinForm.classList.remove('hidden');
    signInTab.classList.remove('active');
    joinTab.classList.add('active');
  }
  
  // Animate service cards on scroll
  const serviceCards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`;
        entry.target.classList.add('fadeInUp');
      }
    });
  }, { threshold: 0.1 });
  
  serviceCards.forEach(card => {
    observer.observe(card);
  });
  
  // Smooth scroll for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});