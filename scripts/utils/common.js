export function renderHamburgerElement () {
  const hamburgerElement = document.querySelector('.hamburger');
  const navbarElement = document.querySelector('.navbar');
  
  
    hamburgerElement.addEventListener('click', () => {
      navbarElement.classList.toggle('nav-open');
      hamburgerElement.classList.toggle('hamburger-open');
    });
  }
  
  export function setActiveNavLink() {
  
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'home-page.html';
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
  }