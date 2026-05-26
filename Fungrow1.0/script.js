// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// Close Mobile Menu After Click
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('show');
  });
});

// Smooth Scroll Effect
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if(targetId !== '#') {
      const targetSection = document.querySelector(targetId);

      if(targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.card, .hero-text, .hero-image');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100) {
      element.classList.add('active-reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Dynamic Navbar Background
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 50) {
    header.style.background = '#0f172a';
    header.style.transition = '0.3s';
  }
  else {
    header.style.background = 'linear-gradient(135deg, #0f172a, #2563eb)';
  }
});

// Typing Effect for Hero Heading
const heading = document.querySelector('.hero-text h1');

if(heading) {
  const text = heading.innerText;
  heading.innerText = '';

  let index = 0;

  function typeEffect() {
    if(index < text.length) {
      heading.innerText += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();
}

// Card Hover Glow Effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 25px rgba(37,99,235,0.25)';
    card.style.transition = '0.3s';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
  });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    }
    else {
      counter.innerText = target;
    }
  };

  updateCounter();
});