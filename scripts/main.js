function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomGif() {
    var imgElement = document.createElement('img');
    imgElement.src = 'images/gif/' + getRandomInt(1, 5) + '.gif';
    imgElement.classList.add('img-fluid');
    document.querySelector('.main-photo').appendChild(imgElement);
}

if (localStorage.getItem('darkTheme') === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem('darkTheme', false);
    } else {
        localStorage.setItem('darkTheme', true);
    }
}

function prefersColorScheme(toggle = false) {
    let darkTheme = localStorage.getItem('darkTheme') === 'true';
    if (toggle) {
        darkTheme = !darkTheme;
        localStorage.setItem('darkTheme', darkTheme);
    }

    const navbar = document.getElementById('headerNavbar');
    const header = document.querySelector('.site-header');
    const logoText = document.querySelector('.logo-text');
    const container = document.querySelector('.main-container');
    const homeText = document.getElementById('homeText');
    const footer = document.getElementById('footerNavbar');

    const BtnIcon = document.getElementById('toggleBtnIcon');

    if (darkTheme) {
        navbar.classList.remove('navbar-dark');
        header.classList.remove('theme-dark');
        container.classList.remove('theme-dark');
        footer.classList.remove('navbar-dark');
        footer.classList.remove('theme-dark');

        navbar.classList.add('navbar-light');
        header.classList.add('theme-light');
        logoText.style = 'color: #222;';
        homeText.style = 'color: #666666;';
        container.classList.add('theme-light');
        footer.classList.add('navbar-light');
        footer.classList.add('theme-light');

        BtnIcon.innerHTML = "🌙";
        BtnIcon.style = 'background-color: #333333;';
    } else {
        navbar.classList.remove('navbar-light');
        header.classList.remove('theme-light');
        container.classList.remove('theme-light');
        footer.classList.remove('navbar-light');
        footer.classList.remove('theme-light');

        homeText.style = 'color: #d5d5d5;';
        navbar.classList.add('navbar-dark');
        header.classList.add('theme-dark');
        logoText.style = 'color: #fff;';
        container.classList.add('theme-dark');
        footer.classList.add('navbar-dark');
        footer.classList.add('theme-dark');

        BtnIcon.innerHTML = "☀️";
        BtnIcon.style = 'background-color: rgba(255, 255, 255, 1);';
    }
}

function navbarTogglerHeader() {
    const header = document.querySelector('.site-header');
    if (window.getComputedStyle(header).getPropertyValue('height') === '67px') {
        header.style = 'height: 320px; border-radius: 34px;';
    } else {
        header.style = 'height: 67px; border-radius: 40px;';
    }
}

window.onload = function () {
    prefersColorScheme();
};