const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menuNav = document.querySelector(".menu-nav");

openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show() {
    menuNav.style.top = "0";

}

function close() {
    menuNav.style.top = "-100%"
}