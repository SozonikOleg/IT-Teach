$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: true
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: true,
        arrows: false
    });
});