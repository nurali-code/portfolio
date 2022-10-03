$(document).ready(function () {

    $('.btn-menu').click(function (e) {
        e.preventDefault();
        $('.header nav').fadeIn()
    });
    $('.btn-close').click(function (e) {
        e.preventDefault();
        $('.header nav').fadeOut()
    });

    /*---------------------------------------------------end*/

    $('.bottom-close').click(function (e) {
        e.preventDefault();
        $('.bottom').fadeOut()

    });

    /*---------------------------------------------------end*/

    if ($('div').hasClass('hero-slider')) {
        $('.hero-slider').slick({
            speed: 500,
            slidesToShow: 1,
            rows: 0,
            centerPadding: '0',
            slidesToScroll: 1,
            infinite: false,
            swipeToSlide: true,
            vertical: false,
            dots: false,
            arrows: true,
            centerMode: true,
            variableWidth: false,
            asNavFor: '.hero-nav',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        autoplay: true,
                        infinite: true,
                        speed: 500,
                        cssEase: 'ease'


                    }
                },
            ]
        });

        $('.hero-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.hero-slider',
            dots: false,
            centerPadding: '0px',
            centerMode: true,
            variableWidth: false,
            infinite: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        settings: "unslick"
                    }
                },
            ]
        });

    };

    /*---------------------------------------------------end*/

    if ($('div').hasClass('venue-slider')) {
        $('.venue-slider').slick({
            rows: 0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
            infinite: true,
            swipeToSlide: true,
            vertical: false,
            dots: false,
            arrows: true,
            centerMode: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        arrows: false,
                    }
                },
            ]
        });

    };

    /*---------------------------------------------------end*/

    $('.inp-wrap input, .inp-wrap textarea').on('focus', function () {
        $(this).focusout(function () {
            if (($(this).val() >= " ")) {
                $(this).parent('.inp-wrap').addClass('active')
            } else { $(this).parent('.inp-wrap').removeClass('active') }
        })
    });

    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
    })

    /*---------------------------------------------------end*/

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

    $('.menu-btn').on('click', function (e) {
        $('.menu-btn').toggleClass('active');
        $('.header .nav').slideToggle()
    });

    /*---------------------------------------------------end*/


    if ($('div').hasClass('countdown')) {
        function countdown(dateStr, displayElem, onTimerEnd = null) {
            let targetDate = new Date(dateStr).getTime();
            let displaySymbols = [...displayElem.querySelectorAll('.symbol .cur')]
            let prevValue = '      '
            let timer = setInterval(function () {
                let now = new Date().getTime();
                let remainingTime = targetDate - now;
                if (remainingTime <= 0) {
                    clearInterval(timer) // stop timer
                    if (onTimerEnd) {
                        onTimerEnd() // run callback
                    }
                }

                let formattedTimestr = format(remainingTime);
                updateDisplay(formattedTimestr);
            }, 1000);

            function format(time) {
                return [
                    time % 2678400000 / 86400000, // days
                    time % 86400000 / 3600000, // hours
                    time % 3600000 / 60000, // minutes
                    time % 60000 / 1000
                ] // seconds  
                    .map(x => Math.floor(x).toString().padStart(2, '0'))
                    .join('')
            }

            function updateDisplay(timeString) {
                displaySymbols.forEach((curSymbol, i) => {
                    let newValue = timeString[i]
                    let currentValue = prevValue[i]
                    if (currentValue !== newValue) { // animated change
                        let parent = curSymbol.parentNode
                        parent.classList.remove('anim')
                        curSymbol.textContent = newValue
                        curSymbol.nextElementSibling.textContent = currentValue
                        var foo = parent.offsetWidth; // reflow hack
                        parent.classList.add('anim')
                    }
                })
                prevValue = timeString
            }
        } countdown('2022-08-31 00:00:00', document.getElementById('countdown'))
    }

    /*---------------------------------------------------end*/

    $('.tab-btn').click(function (e) {
        e.preventDefault();
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        const tab = document.getElementById($(this).attr("data-tab"))
        console.log(tab);

        $('.tab-content').removeClass('active');
        $('.tab-content').slideUp();

        $(tab).slideToggle();

    });

    /*---------------------------------------------------end*/

});