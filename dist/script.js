const headerBottomToggle = document.querySelector(".header__bottom__toggle");
const headerBottomNav = document.querySelector(".header__bottom");
const headerContactToggle = document.querySelector(".header__contact__toggle");
const headerContactContent = document.querySelector(".header__contact");

const onClickHeaderBottom = () => {
  headerBottomToggle.classList.toggle("open");
  headerBottomNav.classList.toggle("open");
  headerContactToggle.classList.remove("open");
  headerContactContent.classList.remove("open");
};

const onClickContactToggle = () => {
  headerContactToggle.classList.toggle("open");
  headerContactContent.classList.toggle("open");
  headerBottomToggle.classList.remove("open");
  headerBottomNav.classList.remove("open");
};

if (headerBottomToggle)
  headerBottomToggle.addEventListener("click", onClickHeaderBottom);
if (headerContactToggle)
  headerContactToggle.addEventListener("click", onClickContactToggle);
