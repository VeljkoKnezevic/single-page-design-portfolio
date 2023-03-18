const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  initialSlide: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
});

const prevBtn = document.querySelector(".navigation__button--prev");
const nextBtn = document.querySelector(".navigation__button--next");

prevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
nextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
