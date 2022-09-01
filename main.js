const menuBar = document.getElementById("menu-bar");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

menuBar.addEventListener("click", () => navMenu.classList.toggle("show-menu"));

closeBtn.addEventListener("click", () => navMenu.classList.toggle("show-menu"));