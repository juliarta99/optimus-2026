const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

function setMenu(open) {
    nav.classList.toggle('nav-open', open);
    menuToggle.classList.toggle('is-active', open);
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}

menuToggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('nav-open'));
});

nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenu(false);
});
