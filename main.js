/* ===================================================
   SAGN LLC — main.js
   Navigation, theme toggle, form, scroll animations
   =================================================== */

(function () {
  'use strict';

  // === THEME TOGGLE ===
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!toggle) return;
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // === NAVIGATION SCROLL ===
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // === MOBILE MENU ===
  const menuToggle = document.querySelector('.nav__toggle');
  const menuLinks = document.querySelector('.nav__links');

  if (menuToggle && menuLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      // Animate hamburger
      const bars = menuToggle.querySelectorAll('.nav__toggle-bar');
      if (isOpen) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });

    // Close menu on link click
    menuLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menuLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const bars = menuToggle.querySelectorAll('.nav__toggle-bar');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      });
    });
  }

  // === SMOOTH SCROLL (for browsers that don't support CSS scroll-behavior) ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === CONTACT FORM ===
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.hidden = true;
          successMsg.hidden = false;
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        btn.textContent = originalText;
        btn.disabled = false;
        alert('There was an error sending your message. Please try again or contact us directly at sagn.llc.1@gmail.com');
      }
    });
  }

  // === SCROLL ANIMATION FALLBACK (for browsers without animation-timeline) ===
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transition = 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // === ACTIVE NAV HIGHLIGHTING ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('nav__link--active',
            link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

})();
