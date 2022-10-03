
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
    }

    function hideModals() {
        $('.modal').fadeOut();
    };

    $('.open-modal').on('click', function (e) {
        showModal('#modal-form');
    });



    $('.modal-close').on('click', function () {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).parents('.modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
        }
    });
});

/*---------------------------------------------------end*/

$('.btn-menu').on('click', function () {
    $(this).toggleClass('active');
    $('header .nav').slideToggle();
    $('header').toggleClass('active');
})

/*---------------------------------------------------end*/


var swiper = new Swiper(".objects-slider", {
    spaceBetween: 30,
    speed: 500,
    loop: true,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});

/*---------------------------------------------------end*/

var swiper2 = new Swiper(".premium-slider", {
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",

    },
});

/*---------------------------------------------------end*/

var swiper3 = new Swiper(".banks-slider", {
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",

    },
});

if (window.innerWidth <= 1200) {
    swiper3.destroy(true, true)
    $('.banks__heading').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle()
    })
};
window.addEventListener("resize", function () {
    if (window.innerWidth <= 1200) {
        swiper3.destroy(true, true)
        // $('.banks__heading').on('click', function(){
        //     $(this).toggleClass('active');
        //     $(this).next().removeClass('active')
        //     $(this).next().slideToggle()
        // })
    }

});

/*---------------------------------------------------end*/

var swiper4 = new Swiper(".photogalery-slider", {
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "creative",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",

    },
});

/*---------------------------------------------------end*/


$('.tab-btn').click(function (e) {
    e.preventDefault();
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    const tab = document.getElementById($(this).attr("data-tab"));

    $('.tab-content').removeClass('active');
    $('.tab-content').slideUp();
    $(tab).slideToggle();

});

/*---------------------------------------------------end*/

var swiper5 = new Swiper(".tab-content", {
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "creative",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",

    },
});



