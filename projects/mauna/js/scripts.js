$(document).ready(function () {

    $('.amount button').on('click', function () {
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

    //-------------------

    if ($('div').hasClass('recomendtion-slider')) {
        $('.recomendtion-slider').slick({
            speed: 500,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 0,
            infinite: true,
            swipeToSlide: true,
            dots: false,
            arrows: true,
            draggable: true,
            focusOnSelect: false,
            variableWidth: true,
        });
    };

    //-------------------

    if ($('div').hasClass('clothes-slider')) {
        $('.clothes-slider').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            rows: 0,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            dots: true,
            arrows: false,
            draggable: true,
            focusOnSelect: false,
            variableWidth: false,
        });

    };

    //-------------------

    if ($('div').hasClass('card-slider')) {
        $('.card-slide').slick({
            speed: 500,
            slidesToShow: 1,
            rows: 0,
            centerPadding: '0',
            slidesToScroll: 1,
            infinite: false,
            swipeToSlide: true,
            dots: false,
            arrows: false,
            draggable: true,
            centerMode: false,
            focusOnSelect: false,
            variableWidth: false,
            asNavFor: '.card-preview'

        });
        $('.card-preview').slick({
            slidesToShow: 4,
            rows: 0,
            focusOnSelect: true,
            vertical: true,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            variableWidth: false,
            asNavFor: '.card-slide'
        });
    };

    //-------------------

    $('.dropdown-btn').on('click', function () {
        $(this).parent('.dropdown').toggleClass('active');
        $(this).next('.dropdown-content').slideToggle();
    });

    //-------------------

    $('.ordering-section__next').click(function (e) {
        e.preventDefault();
        let orderingTab = $('#tab').attr('data-tab');
        orderingTab++;
        $('#tab').attr('data-tab', '' + orderingTab + '')
        orderingTab--;
        let orderingSteps = $('.ordering-steps span')[orderingTab]
        $(orderingSteps).addClass('active')
        if ( orderingTab == 1) {
            $('.ordering-slide').css('width', '33%');
        } else if ( orderingTab == 2) {
            $('.ordering-slide').css('width', '66%');
        } else if ( orderingTab == 3) {
            $('.ordering-slide').css('width', '100%');
        }


        let orderingContent = $('.ordering-section')[orderingTab];
        $('.ordering-section').removeClass('active');
        $(orderingContent).addClass('active');
    });

    $('.ordering-section__prev').click(function (e) {
        e.preventDefault();
        let orderingTab = $('#tab').attr('data-tab');
        orderingTab--;
        let orderingSteps = $('.ordering-steps span')[orderingTab]
        $(orderingSteps).removeClass('active')
        $('#tab').attr('data-tab', '' + orderingTab + '')
        orderingTab--;
        if ( orderingTab == 0) {
            $('.ordering-slide').css('width', '0');
        } else if ( orderingTab == 1) {
            $('.ordering-slide').css('width', '33%');
        } else if ( orderingTab == 2) {
            $('.ordering-slide').css('width', '66%');
        } else if ( orderingTab == 3) {
            $('.ordering-slide').css('width', '100%');
        }
        let orderingContent = $('.ordering-section')[orderingTab];
        $('.ordering-section').removeClass('active');
        $(orderingContent).addClass('active');
    });


    //-------------------

    $('.btn-filter').click(function () {
        $('.catalog-filter').toggle()
    });

    $('.sort-btn').click(function () {
        $('.sort-content').fadeIn(200)
        // $(this).find('.sort-active').text()
    });

    $('.sort__item').click(function () {
        $(this).parents('.sort').find('.sort-active').text($(this).text())
        $(this).parents('.sort').find('.sort-content').fadeOut(200)
    });

    $(function () {
        function showModal(id) {
            $(id).fadeIn(300);
        }

        function hideModals() {
            $(document.body).removeClass('is-open-modal');
            $('.modal').fadeOut();
        };


        $('.btn-menu').on('click', function (e) {
            e.preventDefault()
            showModal('#menu');
        });
        $('.btn-cart').on('click', function (e) {
            e.preventDefault()
            showModal('#cart');
        });
        $('.btn-search').on('click', function (e) {
            e.preventDefault()
            showModal('#search');
        });


        $('.modal-close, #cart .btn-2').on('click', function () {
            hideModals();
        });
        $(document).on('click', function (e) {
            if (!(
                ($(e.target).parents('.modal-content').length) ||
                ($(e.target).hasClass('modal-content')) ||
                ($(e.target).hasClass('modal-close')) ||
                ($(e.target).hasClass('btn-menu')) ||
                ($(e.target).hasClass('btn-cart')) ||
                ($(e.target).hasClass('btn-search')) ||
                ($(e.target).hasClass('modal-filter'))
            )) {
                hideModals();
            }
        });

    });

});