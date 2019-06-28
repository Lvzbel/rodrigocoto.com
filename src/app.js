import "./styles/styles.scss";

// Navigation
const navButton = document.querySelector(".navigation__button");
const navContent = document.querySelector(".navigation__content");
const navNav = document.querySelector(".navigation__nav");
const navList = document.querySelector(".navigation__list");
const navLink = document.querySelector(".navigation__link");

// Will add the class hide to navigation__nav
// window.innerWidth <= 1200 && navNav.classList.add("hide");

navButton.addEventListener("click", () => {
  // Apply all active classes.
  const contentClass = "content-mobile-active";
  const navClass = "nav-mobile-active";
  const listClass = "list-mobile-active";
  const linkClass = "link-mobile-active";
  const hideClass = "hide";

  navContent.classList.contains(contentClass)
    ? navContent.classList.remove(contentClass)
    : navContent.classList.add(contentClass);

  navNav.classList.contains(navClass)
    ? navNav.classList.remove(navClass)
    : navNav.classList.add(navClass);

  navNav.classList.contains(hideClass)
    ? navNav.classList.remove(hideClass)
    : navNav.classList.add(hideClass);

  navList.classList.contains(listClass)
    ? navList.classList.remove(listClass)
    : navList.classList.add(listClass);

  navLink.classList.contains(linkClass)
    ? navLink.classList.remove(linkClass)
    : navLink.classList.add(linkClass);
});

// Observers

const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");

const navOPtions = { rootMargin: "-20%" };

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      console.log("Left Header");
    } else {
      nav.classList.remove("nav-scrolled");
      console.log("In Header");
    }
  });
}, navOPtions);

sectionObserver.observe(header);
