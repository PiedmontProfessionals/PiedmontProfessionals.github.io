// Handle active nav state based on current pathname
(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll('[data-nav] a');
  links.forEach(a => {
    const target = a.getAttribute('href');
    if (target === path) a.classList.add('active');
  });
})();

// Accessible accordion for issues.html
(function () {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(h => {
    h.addEventListener('click', () => toggle(h));
    h.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(h);
      }
    });
  });

  function toggle(header) {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    const panelId = header.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    header.setAttribute('aria-expanded', String(!expanded));
    if (panel) {
      panel.classList.toggle('open', !expanded);
    }
  }
})();