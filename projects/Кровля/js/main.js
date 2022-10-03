
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

$('.coating-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 10024,
            settings: {
                settings: "unslick"
            }
        },
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                variableWidth: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

$('.projects-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    centerPadding: '0',
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                variableWidth: true,
            }
        },
        {
            breakpoint: 550,
            settings: {
                centerPadding: '20px',
                variableWidth: false,
            }
        },
    ]
});