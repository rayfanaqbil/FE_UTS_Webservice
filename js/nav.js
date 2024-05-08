const navbarToggler = document.getElementById('navbarToggler');
    const navMenu = document.querySelector('nav');

    navbarToggler.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });