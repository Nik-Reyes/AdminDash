const wrapper = document.querySelector(".wrapper");
const sidebar = document.querySelector(".side-panel");
const hamburgerOpen = document.querySelector(".open-sidepanel");
const hamburgerClose = document.querySelector(".close-sidepanel");

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
