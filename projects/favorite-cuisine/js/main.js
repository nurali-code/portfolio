$(document).ready(function() {

    /*---------------------------------------------------end*/

    $('.btn-menu').on('click', function() {
        $(this).toggleClass('active')
        $(this).parents('.container').children('.nav').slideToggle()
    })

    /*---------------------------------------------------end*/

    $('.dropdown-btn').on('click', function() {
        $(this).fadeOut();
        $(this).next('.dropdown-content').slideToggle(300);
    });

    $('.dropdown-item').on('click', function() {
        $(this).parent('.dropdown-content').slideUp(300);
        $(this).parent('.dropdown-content').prev().fadeIn(300);
        $(this).parent('.dropdown-content').prev().text($(this).find('.dropdown__heading').text())
    });

    $('#datepicker').datepicker($.datepicker.regional["ru"]);
    $(".inp-tel").mask("+7(999) 999-9999");

});