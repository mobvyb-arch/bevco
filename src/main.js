/**
 * Bevco Core Interaction Logic
 * Pure JavaScript - No Frameworks
 */

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    updateLogoColor('#0A1128');
  } else {
    nav.classList.remove('scrolled');
    updateLogoColor('#FFFFFF');
  }
});

function updateLogoColor(color) {
  const paths = ['logoPath1', 'logoPath2'];
  paths.forEach(id => {
    document.getElementById(id).setAttribute('stroke', color);
  });
  document.getElementById('logoCircle').setAttribute('fill', color);
}

// Particle Background
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'position-absolute bg-warning rounded-circle opacity-25';
  p.style.width = '2px';
  p.style.height = '2px';
  p.style.left = Math.random() * 100 + '%';
  p.style.top = Math.random() * 100 + '%';
  p.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
  p.style.animationDelay = Math.random() * 5 + 's';
  particlesContainer.appendChild(p);
}

// Add Float Animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Stats Counter
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const inc = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + inc);
    setTimeout(() => startCounter(counter), 1);
  } else {
    counter.innerText = target + (target === 500 ? 'M+' : '+');
  }
};

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      startCounter(entry.target);
    }
  });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// Catalog Filtering
const filterBtns = document.querySelectorAll('.btn-filter');
const catalogItems = document.querySelectorAll('.catalog-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    
    // UI Update
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter Logic
    catalogItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
