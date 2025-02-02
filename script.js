function toggleMenu() {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__list--mobile');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}
