
$('.btn-menu').on('click', function () {
    $('header .nav, .btn-menu').toggleClass('active')
})
$('.nav-drop').click(function (e) {
    $(this).children('.nav-drop-content').slideToggle();
    $(this).children('.nav-drop-btn').toggleClass('active');
});


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

$('.review').click(function (e) {
    e.preventDefault();
    $('#modal-review > .modal-content').children().not('.modal-close').remove()
    $(this).children().clone().appendTo("#modal-review > .modal-content");
});

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
    }

    function hideModals() {
        $('.modal').fadeOut();
    };

    $('.open-modal').on('click', function (e) {
        let modId = $(this).attr("data-modal");
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

$('.faq-wrap').click(function (e) {
    e.preventDefault();
    $(this).children('.faq-content').slideToggle();
    $(this).children('.faq-heading').toggleClass('active');
});

$('.amount span').on('click', function () {
    const inp = $(this).parent('.amount').children('input');
    let count = inp.val();
    if ($(this).hasClass('amount__add')) {
        count++;
    } else {
        count--;
        if (count <= 0) {
            count = 0;
        }
    }
    inp.val(count);
});


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

$(function ($) {
    $.autofilter();
});