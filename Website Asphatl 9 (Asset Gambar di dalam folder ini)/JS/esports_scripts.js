document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navLinks.classList.add('inactive');
            setTimeout(() => {
                navLinks.classList.remove('inactive');
                navLinks.style.display = 'none';
            }, 500); // Waktu animasi dropup
        } else {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                navLinks.classList.add('active');
            }, 10); // Sedikit delay untuk memastikan style terapkan
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active', 'inactive');
            navLinks.style.display = '';
        } else {
            navLinks.style.display = 'none';
        }
    });
});