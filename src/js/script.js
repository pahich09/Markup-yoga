$(document).ready(function () {
  $('.slider__item').on('click', function () {
    const changeSlide = (selector) => {
      $($(this).siblings('.slider__item_active')).addClass(selector);
      $($(this).siblings()).removeClass('slider__item_active');
      $(this).removeClass(selector);
      $(this).addClass('slider__item_active');
    };

    if ($(this).hasClass('slider__item_left')) {
      changeSlide('slider__item_left');
    }
    if ($(this).hasClass('slider__item_right')) {
      changeSlide('slider__item_right');
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 50,
    loop: true,
  });
});
