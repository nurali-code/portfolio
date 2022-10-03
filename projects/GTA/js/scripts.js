
$('.btn-menu').on('click', function () {
    $(this).toggleClass('active');
    $('header .nav').slideToggle()
})
/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + -80, }, 500,)
})
/*---------------------------------------------------end*/

$('.gifts-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                arrows: false,
                centerMode: true,
                variableWidth: false,
                centerPadding: "10px",
                slidesToShow: 1,
            }
        }
    ]
});
/*---------------------------------------------------end*/


$('.team-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    variableWidth: false,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
                centerPadding: "0",
                centerMode: false,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                centerPadding: "0",
                centerMode: true,
            }
        }
    ]
});

$('.before-slide').beforeAfter({
    movable: true,
    clickMove: true,
    position: 60,
    separatorColor: '#fafafa',
    bulletColor: '#fafafa',
    separatorColor: '#d1b941',
    bulletColor: '#d1b941',
    arrowColor: '#333333',
});
$('.before-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    fade: true,
    draggable: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    asNavFor: '.before-navbar'
});
$('.before-navbar').slick({
    vertical: true,
    infinite: false,
    draggable: true,
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.before-slider',
    responsive: [
        {
            variableWidth: false,
            breakpoint: 1170,
            settings: {
                vertical: false,
            }
        }
    ]

});
/*---------------------------------------------------end*/

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
    }

    function hideModals() {
        $('.modal').fadeOut();

    };

    $('.open-modal').on('click', function (e) {
        e.preventDefault()
        let modId = $(this).attr("data-modal");
        if ($(this).hasClass('vid')) { $(this).children('iframe').clone().appendTo('#modal-video .modal-content'); }
        showModal('#' + modId);
    });


    $('.modal-close').on('click', function () {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
        }
    });
});

/*---------------------------------------------------end*/

/*---------------------------------------------------end*/


$('input[type=tel]').inputmask({ "mask": "+7 (999)-999-99-99" });

$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    $.ajax({
        type: "POST",
        method: 'POST',
        url: "../send.php",
        data: $(this).serialize()
    }).done(function () {
        $('form').trigger('reset');
        // setTimeout(function () {
        //     $('.modal').fadeOut();
        // }, 2000);
    });
    return false;
});


/*---------------------------------------------------end*/