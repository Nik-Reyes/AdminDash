const hamburgerOpen = document.querySelector("nav .hamburger");
const sidebar = document.querySelector(".side-panel");
const wrapper = document.querySelector(".wrapper");
const hamburgerClose = document.querySelector(".side-panel .hamburger");

console.log(wrapper);

hamburgerOpen.addEventListener("click", () => {
  hamburgerOpen.setAttribute("aria-expanded", "true");
  hamburgerOpen.classList.add("active");
  sidebar.classList.add("active");
  wrapper.classList.add("active");
});

hamburgerClose.addEventListener("click", () => {
  hamburgerOpen.setAttribute("aria-expanded", "false");
  hamburgerOpen.classList.remove("active");
  sidebar.classList.remove("active");
  wrapper.classList.remove("active");
});
