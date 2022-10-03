
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                centerMode: false,
                dots: false,
                cannerPadding: '20px',
                arrows: false
            }
        }
    ]
});
