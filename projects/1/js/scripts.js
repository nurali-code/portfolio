
$('.btn-menu').on('click', function () {
    $('header .nav, .btn-menu').toggleClass('active')
})
/*---------------------------------------------------end*/

$('.nav-drop').click(function (e) {
    $(this).children('.nav-drop-content').slideToggle();
    $(this).children('.nav-drop-btn').toggleClass('active');
});
/*---------------------------------------------------end*/

if ($('p').hasClass('review__text')) {
    for (let index = 0; index < $('.review__text').length; index++) {
        const element = $('.review__text')[index];
        if (element.innerText.length >= 170) {
            $(element).append('<span>ещё</span>')
        }
    }
}
/*---------------------------------------------------end*/

$('.review-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    centerPadding: '20px',
    centerMode: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                arrows: false,
                centerPadding: '20px',
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
/*---------------------------------------------------end*/

$('.item-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        }
    ]
});
/*---------------------------------------------------end*/

$('.review').click(function (e) {
    e.preventDefault();
    $('#modal-review > .modal-content').children().not('.modal-close').remove()
    $(this).children().clone().appendTo("#modal-review > .modal-content");
    $('#modal-review > .modal-content > .review__text').find('span').remove()
});
/*---------------------------------------------------end*/

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
    }

    function hideModals() {
        $('.modal iframe').remove();
        $('.modal').fadeOut();

    };

    $('.open-modal').on('click', function (e) {
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
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).hasClass('open-modal')) ||
            ($(e.target).hasClass('modal-open'))
        )) {
            hideModals();
        }
    });
});
/*---------------------------------------------------end*/

$('.faq-wrap').click(function (e) {
    e.preventDefault();
    $(this).children('.faq-content').slideToggle();
    $(this).children('.faq-heading').toggleClass('active');
});
/*---------------------------------------------------end*/

$('.amount span').on('click', function () {
    const inp = $(this).parent('.amount').children('input');
    let count = inp.val();
    if ($(this).hasClass('amount__add')) {
        count++;
    } else {
        count--;
        if (count <= 1) {
            count = 1;
        }
    }
    inp.val(count);
});

/*---------------------------------------------------end*/

(function ($) {

    $.autofilter = function (options) {

        var settings = $.extend({
            showClass: 'show',
            htmlAsFilter: false,
            subString: false,
            minChars: 3,
            caseSensitive: false,
            animation: true,
            duration: 300
        }, options);

        $('[data-filter]:not(input)').click(function () {
            $('[data-filter]:not(input)').removeClass("active");
            $(this).addClass("active");
            if (settings.htmlAsFilter) {
                var filterValue = $(this).html().trim();
            } else {
                var filterValue = $(this).attr('data-filter').trim();
            }

            if (filterValue != '')
                af_filter(filterValue);
            else
                $('[data-tags],[data-to-filter]').fadeIn(settings.duration).addClass(settings.showClass);
        });

        $('input[data-filter]').keyup(function () {
            var value = $(this).val();
            settings.subString = true;

            if (value != '' && value.length >= settings.minChars) {
                af_filter(value);
            } else {
                $('[data-tags],[data-to-filter]').fadeIn(settings.duration).addClass(settings.showClass);
            }

        });

        function af_filter(filterValue) {
            $('[data-tags],[data-to-filter]').each(function () {
                var tags = $(this).attr('data-tags');
                var tofilter = Array();
                var valid = false;

                if (!settings.caseSensitive)
                    filterValue = filterValue.toLowerCase();

                if (tags) {
                    tofilter = tags.split(',');
                } else {
                    tofilter.push($(this).html());
                }

                if (!settings.caseSensitive)
                    tofilter = tofilter.map(v => v.toLowerCase());

                if (settings.subString) {
                    tofilter.forEach(function (toFilterOne) {
                        if (toFilterOne.replace(/(&lt;([^>]+)>)/gi, "").indexOf(filterValue) > -1) {
                            valid = true;
                        }
                    });
                } else {
                    valid = tofilter.includes(filterValue);
                }

                if (valid) {
                    if (settings.animation)
                        $(this).fadeIn(0);

                    $(this).addClass(settings.showClass);
                } else {
                    if (settings.animation)
                        $(this).fadeOut(settings.duration);

                    $(this).removeClass(settings.showClass);
                }

            });
        }

    };

}(jQuery));
/*---------------------------------------------------end*/

$(function ($) {
    $.autofilter();
});
/*---------------------------------------------------end*/

if ($('section').hasClass('timeout')) {
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
            return [time % 86400000 / 3600000, // hours
            time % 3600000 / 60000, // minutes
            time % 60000 / 1000] // seconds  
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
    } countdown('2033-02-10 00:00:00', document.getElementById('a'))
}
/*---------------------------------------------------end*/

$('.tab-btn').click(function (e) {
    e.preventDefault();
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    let tabAttr = $(this).attr('data-tab-btn');
    $('.tab-content').removeClass('active');
    $('.tab-content.tab-' + tabAttr).addClass('active')


});
/*---------------------------------------------------end*/


$('input[type=tel]').inputmask({"mask": "+7 (999)-999-99-99"});

$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    $.ajax({
        type: "POST",
        method: 'POST',
        url: "../send.php",
        data: $(this).serialize()
    }).done(function () {
        $('form').trigger('reset');
        window.location.href = "thanks.html";
        // setTimeout(function () {
        //     $('.modal').fadeOut();
        // }, 2000);
    });
    return false;
});


/*---------------------------------------------------end*/