// defining elements

const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;
const logo = document.getElementById("header__logo");
let slideshowFilter = document.querySelector(".slideshow__waves-img");

const scrollElement = document.querySelector(".scroll");
const headerElement = document.querySelector(".header");

let checkboxSearch = document.querySelector(".header__overlay-search");
const search = document.querySelector("#header__search");

const sidebarTabsAll = document.querySelectorAll(
  ".blog__main-sidebar-posts-tabs>a"
);
const sidebarContentAll = document.querySelectorAll(
  ".blog__main-sidebar-posts-content>div"
);

// menu toggle

const menuToggle = (type = "none") => {
  if (type === "add") {
    menu.classList.add("open");
    header.classList.add("open");
    overlay.classList.add("open");
    htmlElement.classList.add("noscroll");
  } else if (type === "remove") {
    menu.classList.remove("open");
    header.classList.remove("open");
    overlay.classList.remove("open");
    htmlElement.classList.remove("noscroll");
  } else {
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
    htmlElement.classList.toggle("noscroll");
  }
};

//toggle dark andlight mode

const switchDarkMode = () => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      smoothTrans();
      if (logo) {
        logo.src = "images/logo-dark.png";
      }
      if (slideshowFilter)
        slideshowFilter.src = "images/slideshow-waves-dark.png";
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      smoothTrans();
      if (logo) {
        logo.src = "images/logo-light.png";
      }
      if (slideshowFilter)
        slideshowFilter.src = "images/slideshow-waves-light.png";
      htmlElement.setAttribute("data-theme", "light");
    }
  });

  let smoothTrans = () => {
    htmlElement.classList.add("transition");

    window.setTimeout(() => {
      htmlElement.classList.remove("transition");
    }, 500);
  };
};

// scroll functions

const scrollUp = () => {
  window.addEventListener("scroll", () => {
    scrollElement.classList.toggle("active", window.scrollY > 200);

    //check header scroll
    headerElement.classList.toggle("active", window.scrollY > 0);
    if (logo)
      logo.src =
      window.scrollY > 80 ? "images/logo-dark.png" : "images/logo-light.png";
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollElement.addEventListener("click", () => {
    scrollToTop();
  });
};

scrollUp();

//add search overlay

const addSearch = () => {
  menuToggle("remove");
  checkboxSearch.classList.add("open");
  htmlElement.classList.add("noscroll");
  search.focus();
};

//remove search overlay

const removeSearch = () => {
  checkboxSearch.classList.remove("open");
  htmlElement.classList.remove("noscroll");
};

//set sidebas posts

const sidebarPosts = (name) => {
  sidebarTabsAll.forEach((element) => {
    element.classList.remove("active");
  });
  sidebarContentAll.forEach((element) => {
    element.classList.remove("active");
  });
  
  
  if (name == "recents") {
    let sidebar = document.querySelector(
      ".blog__main-sidebar-posts-tabs-recents"
    );
    let sidebarContent = document.querySelector(
      ".blog__main-sidebar-posts-content-recent"
    );
    sidebar.classList.add("active");
    sidebarContent.classList.add("active");
  }
  if (name == "popular") {
    let sidebar = document.querySelector(
      ".blog__main-sidebar-posts-tabs-popular"
    );
    sidebar.classList.add("active");
    let sidebarContent = document.querySelector(
      ".blog__main-sidebar-posts-content-popular"
    );
    sidebarContent.classList.add("active");

  }
  if (name == "comments") {
    let sidebar = document.querySelector(
      ".blog__main-sidebar-posts-tabs-comments"
    );
    sidebar.classList.add("active");
    let sidebarContent = document.querySelector(
      ".blog__main-sidebar-posts-content-comments"
    );
    sidebarContent.classList.add("active");
  }
  if (name == "tags") {
    let sidebar = document.querySelector(".blog__main-sidebar-posts-tabs-tags");
    sidebar.classList.add("active");
    let sidebarContent = document.querySelector(
      ".blog__main-sidebar-posts-content-tags"
    );
    sidebarContent.classList.add("active");
  }
};