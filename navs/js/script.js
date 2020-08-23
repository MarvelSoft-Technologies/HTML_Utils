//toggle nav
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = '<i class="fas fa-hamburger"></i>';
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
  }
};

toggle.addEventListener("click", toggleMenu, false);

//toggle dropdown menu
const menuItems = document.querySelectorAll(".menu-item");

toggleMenuItem = (menuItem) => {
  if (menuItem.querySelector(".submenu").classList.contains("submenu-active")) {
    menuItem.querySelector(".submenu").classList.remove("submenu-active");
  } else if (menu.querySelector("submenu-active")) {
    menu.querySelector("submenu-active").classList.remove("submenu-active");
    menuItem.querySelector(".submenu").classList.add("submenu-active");
  } else {
    menuItem.querySelector(".submenu").classList.add("submenu-active");
  }
};

for (let menuItem of menuItems) {
  if (menuItem.querySelector(".submenu")) {
    menuItem.addEventListener("click", () => toggleMenuItem(menuItem), false);
    menuItem.addEventListener(
      "keypress",
      () => toggleMenuItem(menuItem),
      false
    );
  }
}

//close submenu from anywhere

closeSubmenu = (e) =>{
    let isClickedInside = menu.contains(e.target);
    if (!isClickedInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
}

document.addEventListener("click", closeSubmenu, false);
