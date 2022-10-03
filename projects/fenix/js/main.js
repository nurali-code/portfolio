
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

$('.reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                variableWidth: false,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.galery-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    centerPadding: '0',
    centerMode: true,
    slidesToScroll: 1,
});