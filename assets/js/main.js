'use strict';
document.documentElement.classList.add('js-enabled');
const nav = document.getElementById('site-nav');
const menu = document.querySelector('.menu-toggle');
const links = [...nav.querySelectorAll('a')];
function closeMenu() {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('is-open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
links.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
const targets = new Set(links.map(link => link.getAttribute('href').slice(1)));
const sections = [...document.querySelectorAll('main [id]')].filter(section => targets.has(section.id));
let scheduled = false;
function updateSection() {
  let current = sections[0];
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= 150) current = section;
  });
  // Respect direct navigation to Awards when both adjacent sections are visible.
  if (current.id === 'volunteering' && location.hash === '#awards') current = document.getElementById('awards');
  links.forEach(link => {
    const active = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateSection);
  }
}, { passive: true });
window.addEventListener('hashchange', updateSection);
window.addEventListener('resize', updateSection);
document.getElementById('current-year').textContent = new Date().getFullYear();
updateSection();

// Native dialog enhances the photo links; without JavaScript they open the original image.
const photoLinks = [...document.querySelectorAll('[data-gallery]')];
const photoDialog = document.querySelector('.photo-dialog');
if (photoDialog && typeof photoDialog.showModal === 'function') {
  const photoImage = photoDialog.querySelector('.photo-dialog-image');
  const photoCaption = photoDialog.querySelector('.photo-dialog-caption');
  const photoCount = photoDialog.querySelector('.photo-dialog-count');
  const photoLoading = photoDialog.querySelector('.photo-loading');
  photoImage.addEventListener('load', () => {
    photoImage.hidden = false;
    photoLoading.hidden = true;
  });
  photoImage.addEventListener('error', () => {
    photoImage.hidden = true;
    photoLoading.textContent = 'The photograph could not load. Please try again.';
  });
  let photoIndex = 0;
  let photoTrigger;
  function showPhoto(index) {
    photoIndex = (index + photoLinks.length) % photoLinks.length;
    const link = photoLinks[photoIndex];
    photoImage.hidden = true;
    photoLoading.hidden = false;
    photoLoading.textContent = 'Loading photograph…';
    photoImage.src = link.getAttribute('href');
    photoImage.alt = link.querySelector('img').alt;
    photoCaption.textContent = link.closest('figure').querySelector('figcaption').innerText;
    photoCount.textContent = `${photoIndex + 1} / ${photoLinks.length}`;
  }
  photoLinks.forEach((link, index) => link.addEventListener('click', event => {
    event.preventDefault();
    photoTrigger = link;
    showPhoto(index);
    photoDialog.showModal();
    document.body.classList.add('photo-viewer-open');
  }));
  photoDialog.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
  photoDialog.querySelector('.photo-previous').addEventListener('click', () => showPhoto(photoIndex - 1));
  photoDialog.querySelector('.photo-next').addEventListener('click', () => showPhoto(photoIndex + 1));
  photoDialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex - 1); }
  });
  photoDialog.addEventListener('click', event => {
    if (event.target === photoDialog) {
      const bounds = photoDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
    }
  });
  photoDialog.addEventListener('close', () => {
    document.body.classList.remove('photo-viewer-open');
    photoTrigger?.focus({ preventScroll: true });
  });
}

// One-time scroll reveals. Content stays visible if scripting or observation is unavailable.
const scrollMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = [...document.querySelectorAll('.section-title-row, .research-heading, .research-interests, .project-card, .earlier-project, .publication, .event-photo, .facts, .education, .timeline article, .detail-card, .volunteer-card, .service-note, .cv-panel, .contact-grid, .additional-presentation, .section-disclosure')];
const revealedTargets = new WeakSet();
let revealObserver;
function configureScrollReveals() {
  revealObserver?.disconnect();
  if (scrollMotion.matches || !('IntersectionObserver' in window)) {
    revealTargets.forEach(target => target.classList.remove('scroll-reveal'));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      target.classList.add('scroll-reveal');
      revealedTargets.add(target);
      revealObserver.unobserve(target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  revealTargets.forEach(target => {
    if (revealedTargets.has(target)) return;
    // Stagger only siblings that share a card or photo grid.
    const group = target.parentElement;
    if (group.matches('.project-grid, .event-photo-grid, .volunteer-grid')) {
      const index = [...group.children].indexOf(target);
      target.style.setProperty('--reveal-delay', `${(index % 2) * 90}ms`);
    }
    revealObserver.observe(target);
  });
}
scrollMotion.addEventListener('change', configureScrollReveals);
configureScrollReveals();
