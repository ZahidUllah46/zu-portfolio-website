/* =========================================================
   ZAHID ULLAH — PORTFOLIO SCRIPTS
   Vanilla JS only (Typed.js and Particles.js are the two
   allowed external libraries and are initialized below).
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     1. TYPED.JS — hero typing animation
     --------------------------------------------------------- */
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Software Engineering Student 🎓',
        'AI / ML Engineer 🤖',
        'Web Developer 💻',
        'Python Developer 🐍',
        'Founder — Blood Donation Society 🩸'
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      startDelay: 400,
      loop: true,
      showCursor: false // we render our own blinking cursor in CSS
    });
  }

  /* ---------------------------------------------------------
     2. PARTICLES.JS — hero background (blue/purple floating dots)
     --------------------------------------------------------- */
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: ['#58a6ff', '#a371f7'] },
        shape: { type: 'circle' },
        opacity: { value: 0.45, random: true },
        size: { value: 2.6, random: true },
        line_linked: {
          enable: true,
          distance: 140,
          color: '#58a6ff',
          opacity: 0.18,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: false },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } }
        }
      },
      retina_detect: true
    });
  }

  /* ---------------------------------------------------------
     3. SCROLL REVEAL — IntersectionObserver (vanilla, no lib)
     --------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* Stagger badge animations inside skill cards once visible */
  const badgeRows = document.querySelectorAll('.badge-row');
  const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const badges = entry.target.querySelectorAll('.badge');
        badges.forEach((b, i) => { b.style.animationDelay = `${i * 60}ms`; });
        entry.target.classList.add('is-visible');
        badgeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  badgeRows.forEach((row) => badgeObserver.observe(row));

  /* ---------------------------------------------------------
     4. STICKY NAVBAR — blur + shadow after 80px scroll
     --------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const y = window.scrollY;

    navbar.classList.toggle('scrolled', y > 80);
    backToTop.classList.toggle('show', y > 300);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';

    updateActiveNavLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     5. ACTIVE NAV LINK — highlight current section
     --------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === currentId);
    });
  }

  /* ---------------------------------------------------------
     6. MOBILE HAMBURGER — toggle menu open/close
     --------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinksWrap = document.getElementById('navLinks');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    navLinksWrap.classList.remove('open');
    mobileBackdrop.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileMenu() {
    const isOpen = navLinksWrap.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    mobileBackdrop.classList.toggle('show', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  hamburger.addEventListener('click', toggleMobileMenu);
  mobileBackdrop.addEventListener('click', closeMobileMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

  /* ---------------------------------------------------------
     7. ANIMATED COUNTERS — count up when in view
     --------------------------------------------------------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------
     8. FORM VALIDATION — inline errors + success toast
     --------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function setFieldError(input, errorEl, message) {
    input.classList.toggle('invalid', Boolean(message));
    errorEl.textContent = message || '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      setFieldError(nameInput, nameError, 'Please enter your name.');
      isValid = false;
    } else {
      setFieldError(nameInput, nameError, '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      setFieldError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    } else {
      setFieldError(emailInput, emailError, '');
    }

    if (messageInput.value.trim().length < 10) {
      setFieldError(messageInput, messageError, 'Message should be at least 10 characters.');
      isValid = false;
    } else {
      setFieldError(messageInput, messageError, '');
    }

    if (!isValid) return;

    // No backend — simulate a successful send.
    showToast("Message sent! I'll get back to you soon. ✅");
    form.reset();
    [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('invalid'));
  });

  /* ---------------------------------------------------------
     9. BACK TO TOP
     --------------------------------------------------------- */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------------------------------------------------
     10. SMOOTH SCROLL for in-page anchor links (fallback/enhancement)
     --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});