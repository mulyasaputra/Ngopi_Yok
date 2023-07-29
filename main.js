const navbarNav = document.querySelector(".menu ul"),
  navbarMenu = document.querySelector(".menu i"),
  navbarList = document.querySelectorAll(".menu ul li");

navbarMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};
navbarList.forEach((add) => {
  add.onclick = () => {
    navbarList.forEach((remove) => {
      remove.classList.remove("active");
    });
    add.classList.add("active");
  };
});
document.onclick = (e) => {
  if (!navbarNav.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
};
