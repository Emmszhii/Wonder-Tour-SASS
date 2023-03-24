const headerBottomToggle = document.querySelector(".header__bottom__toggle");
const headerBottomNav = document.querySelector(".header__bottom");
const headerContactToggle = document.querySelector(".header__contact__toggle");
const headerContactContent = document.querySelector(".header__contact");
const headerNavToggleIcon = document.querySelectorAll(
  ".header__toggle__item span"
);

const onClickHeaderBottom = () => {
  headerBottomToggle.classList.toggle("open");
  headerBottomNav.classList.toggle("open");
  headerContactToggle.classList.remove("open");
  headerContactContent.classList.remove("open");
  closeAllHeaderItem();
};

const closeAllHeaderItem = () => {
  headerNavToggleIcon.forEach((item) => {
    const activeItem = item.parentElement;
    const icon = item.querySelector("span i");
    const content = item.nextElementSibling;
    activeItem.classList.remove("active");
    icon.classList.remove("active");
    content.classList.remove("open");
  });
};

const onClickContactToggle = () => {
  headerContactToggle.classList.toggle("open");
  headerContactContent.classList.toggle("open");
  headerBottomToggle.classList.remove("open");
  headerBottomNav.classList.remove("open");
  closeAllHeaderItem();
};

const onClickVisibleToggle = (e) => {
  const element = e.currentTarget.parentElement;
  const content = element.querySelector(".content");
  if (element.classList.contains("active")) {
    element.classList.remove("active"); // parent
    element.querySelector("i").classList.remove("active"); // icon
    content.classList.remove("open"); // content
  } else {
    closeAllHeaderItem();
    element.classList.toggle("active"); // parent
    element.querySelector("i").classList.toggle("active"); // icon
    content.classList.toggle("open"); // content
  }
};

var slider = tns({
  container: ".banner__wrapper",
  axis: "vertical",
  items: 1,
  slideBy: "page",
  controlsPosition: "bottom",
  nav: true,
  autoplay: true,
  autoplayPosition: "bottom",
  // autoplayHoverPause: true,
  navPosition: "bottom",
  autoplayButton: false,
  // autoHeight: true,
  loop: true,
  // navContainer: ".banner__control",
});

if (headerBottomToggle)
  headerBottomToggle.addEventListener("click", onClickHeaderBottom);
if (headerContactToggle)
  headerContactToggle.addEventListener("click", onClickContactToggle);

if (headerNavToggleIcon) {
  headerNavToggleIcon.forEach((item) => {
    item.addEventListener("click", onClickVisibleToggle);
  });
}
