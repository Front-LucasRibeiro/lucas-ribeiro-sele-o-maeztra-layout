function setSlicks() {
  $('.slider-banner-full').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500
  });
}


$(document).ready(function () {
  setSlicks();
});