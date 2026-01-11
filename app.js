(() => {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Cierra al tocar fuera
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!menu.contains(t) && !btn.contains(t)) {
      menu.classList.add('hidden');
    }
  });
})();
