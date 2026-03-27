/**
 * Sugar Bloom — Salla Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Listen for Salla cart updates
  if (typeof salla !== 'undefined') {
    salla.event.on('cart::updated', function (data) {
      document.querySelectorAll('.cart-count').forEach(function (el) {
        el.textContent = data.count || 0;
      });
    });
  }
});
