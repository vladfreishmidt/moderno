$(function () {

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: '12px',
        readOnly: true
    });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    });

    var mixer = mixitup('.products__inner-box');


});