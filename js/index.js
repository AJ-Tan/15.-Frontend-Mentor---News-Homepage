const pageMenuIcon = document.querySelector(".page__header-menu");
const navCloseIcon = document.querySelector(".nav__close");
const navOverlay = document.querySelector(".nav__overlay");

pageMenuIcon.addEventListener("click", (e) => {
  e.currentTarget.setAttribute("aria-expanded", "true");
});

navCloseIcon.addEventListener("click", () => {
  pageMenuIcon.setAttribute("aria-expanded", "false");
});

navOverlay.addEventListener("click", (e) => {
  const isOverlay = e.target.className === "nav__overlay";

  if (isOverlay) {
    pageMenuIcon.setAttribute("aria-expanded", "false");
  }
});
