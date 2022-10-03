$('.feedback-wrapper').slick({
    dots: false,
    arrows: true,
    vertical: false,
    slidesToShow: 1,
    autoplay: false,
    speed: 500,
    centerMode: true,
    focusOnSelect: true, 
    slidesToScroll: 1,
    loop: true,
    infinite: true,
    variableWidth: true,
    touchThreshold: 15,
    waitForAnimate: false,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
        arrows: false,
        }
    }
    ]
});
/*-----------burger menu----------------*/
$('.burger_trigger, .burger_menu').click(function(){
  $('.burger_menu').toggleClass('menu_opened');
})
$(document).click(function(event) {
    if ($(event.target).closest(".burger_trigger").length ) return;
    $('.burger_menu').removeClass('menu_opened');

});
$('.close_b_m').click(function(){
    $('.burger_menu').removeClass('menu_opened');
});

/*-----------------------------------------------------------*/
$(function(){
    function showModal(id){
        $(id).fadeIn();
    }
    function hideModals(){
        $(document.body).removeClass('is-open-modal');
        $('.modal').fadeOut();
    };

 $(".modal-open").on('click', function(e){
        showModal('#modal_1');
 });
 $(".menuBtn").on('click', function(e){
    showModal('#modal_2');
});
$("#play-btn").on('click', function(e){
    showModal('#modal_3');
});
 $('.modalClose').on('click', function () {
        hideModals();
});
$('.nav-link').on('click', function () {
    hideModals();
});
    $(document).on('click', function(e){
        if (!(
        ($(e.target).parents('.modal-content').length)  
        ||  ($(e.target).hasClass('modal-content')) 
        ||  ($(e.target).hasClass('nav-link')) 
        ||  ($(e.target).hasClass('menuBtn')) 
        ||  ($(e.target).hasClass('play-btn')) 
        ||  ($(e.target).hasClass('modal-open')) 

        )
        ) {
            hideModals();
        }
    });

 });
/*---------------------------------------------------end*/
$(document).ready(function(){
    $('.go_to').click( function(){ // Р»РѕРІРёРј РєР»РёРє РїРѕ СЃСЃС‹Р»РєРµ СЃ РєР»Р°СЃСЃРѕРј go_to
        var scroll_el = $(this).attr('href'); // РІРѕР·СЊРјРµРј СЃРѕРґРµСЂР¶РёРјРѕРµ Р°С‚СЂРёР±СѓС‚Р° href, РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ СЃРµР»РµРєС‚РѕСЂРѕРј, С‚.Рµ. РЅР°РїСЂРёРјРµСЂ РЅР°С‡РёРЅР°С‚СЊСЃСЏ СЃ # РёР»Рё .
        if ($(scroll_el).length != 0) { // РїСЂРѕРІРµСЂРёРј СЃСѓС‰РµСЃС‚РІРѕРІР°РЅРёРµ СЌР»РµРјРµРЅС‚Р° С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ РѕС€РёР±РєРё
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // Р°РЅРёРјРёСЂСѓРµРј СЃРєСЂРѕРѕР»РёРЅРі Рє СЌР»РµРјРµРЅС‚Сѓ scroll_el
        }
        return false; // РІС‹РєР»СЋС‡Р°РµРј СЃС‚Р°РЅРґР°СЂС‚РЅРѕРµ РґРµР№СЃС‚РІРёРµ
    });

    $(".slider__left").on("click", function(){

        var just = $("#main").attr("class");
        if(just == "hero-section bg"){
            $("#main").removeClass("bg");
            $("#main").addClass("bg-4");
            $("#dive").fadeOut(200);
        };
        if(just == "hero-section bg-4"){
            $("#main").removeClass("bg-4");
            $("#main").addClass("bg-3");
        };
        if(just == "hero-section bg-3"){
            $("#main").removeClass("bg-3");
            $("#main").addClass("bg-2");
        };
        if(just == "hero-section bg-2"){
            $("#main").removeClass("bg-2");
            $("#main").addClass("bg");
            $("#dive").fadeIn(200);
        };

    });

    $(".slider__right").on("click", function(){

        var just = $("#main").attr("class");
        if(just == "hero-section bg"){
            $("#main").removeClass("bg");
            $("#main").addClass("bg-2");
            $("#dive").fadeOut(200);
        };
        if(just == "hero-section bg-2"){
            $("#main").removeClass("bg-2");
            $("#main").addClass("bg-3");
        };
        if(just == "hero-section bg-3"){
            $("#main").removeClass("bg-3");
            $("#main").addClass("bg-4");
        };
        if(just == "hero-section bg-4"){
            $("#main").removeClass("bg-4");
            $("#main").addClass("bg");
            $("#dive").fadeIn(200);
        };
    });

    function slider(){
        var just = $("#main").attr("class");
        if(just == "hero-section bg"){
            $("#main").removeClass("bg");
            $("#main").addClass("bg-2");
            $("#dive").fadeOut(200);
        };
        if(just == "hero-section bg-2"){
            $("#main").removeClass("bg-2");
            $("#main").addClass("bg-3");
        };
        if(just == "hero-section bg-3"){
            $("#main").removeClass("bg-3");
            $("#main").addClass("bg-4");
        };
        if(just == "hero-section bg-4"){
            $("#main").removeClass("bg-4");
            $("#main").addClass("bg");
            $("#dive").fadeIn(200);
        };
        setTimeout(slider, 5000)
    };

    setTimeout(slider, 5000);
});

/*---------------------------------------------------end*/
$(".form-cont").submit(function(){   
    $.ajax({
        type: "POST",
        url: "smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find('input').val("");
        $('.form-cont').trigger('reset');
        $(document.body).removeClass('is-open-modal');
        $('.modal').fadeOut();
    });
    return false;
}); 
/*---------------------------------------------------end*/
$(window).scroll(function () {
   
if (window.innerWidth >= 1200) {
    var st = $(this).scrollTop();    
    $(".person-parallax").css({
        "transform" : "translate(0%, -" + st/8 + "%"
    });
    st = st - 4100;
    $(".footer-bg__img").css({
        "transform" : "translate(-50%, -" + st/10 + "%"
    });
  }
})
