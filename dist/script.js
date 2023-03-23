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
  element.classList.toggle("active");
  element.querySelector("i").classList.toggle("active");
  const content = element.querySelector(".content");
  content.classList.toggle("open");
};

if (headerBottomToggle)
  headerBottomToggle.addEventListener("click", onClickHeaderBottom);
if (headerContactToggle)
  headerContactToggle.addEventListener("click", onClickContactToggle);

if (headerNavToggleIcon) {
  headerNavToggleIcon.forEach((item) => {
    item.addEventListener("click", onClickVisibleToggle);
  });
}
