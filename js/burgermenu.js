function toggleMenu() {
    const menu = document.querySelector(".mobile-menu__links");
    const icon = document.querySelector(".mobile-menu__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
