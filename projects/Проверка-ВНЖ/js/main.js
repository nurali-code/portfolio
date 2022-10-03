
$('.menuBtn').on('click', function () {
  $(this).toggleClass('is-show');
  $('.header .navbar').fadeToggle();
});

/*---------------------------------------------------end*/
$('.go_to').click(function () {
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
  }
  return false;
});

/*---------------------------------------------------end*/

$('#togglerEmail').on('keypress', function () {
  var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{1,3}/.test(this.value);
  if (!re) {
    $(this).addClass('err');
  } else {
    $(this).addClass('ok');
  }
})

$('#togglerPhone').on('keypress', function () {
  if ($(this).val().length < 18) {
    $(this).addClass('err')
  } else {
    $(this).addClass('ok')
  }
});

let overwriteMask = IMask(
  document.getElementById('togglerPhone'),
  {
    mask: '+0 (000) 000-00-00',
  }
);

/*---------------------------------------------------end*/

$('select').selectize({
  sortField: 'text'
});
let
  counterregion = 0,
  counterburth = 0,
  counterdocNum = 0,
  countertogglerInp = 0;
let regionDef = false;

$('#burth').on('click', function () {
  var overwriteMask = IMask(
    document.getElementById('burth'),
    {
      mask: Date,
      lazy: true,
      overwrite: true,
      autofix: true,
      blocks: {
        d: { mask: IMask.MaskedRange, placeholderChar: '_', from: 1, to: 31, maxLength: 2 },
        m: { mask: IMask.MaskedRange, placeholderChar: '_', from: 1, to: 12, maxLength: 2 },
        Y: { mask: IMask.MaskedRange, placeholderChar: '_', from: 1900, to: 2020, maxLength: 4 }
      }
    }
  );
})

function validSelect() {
  if ($('#region').val() == '') {
    $('.selectize-input').addClass('err');
  } else {
    $('.selectize-input').addClass('ok');
    if (regionDef == false) {
      regionDef == true;
      counterregion = 25;
      indicatorCount();
    }
  }
};

function validInp(iden) {
  $('#' + iden).addClass('err');
  if ($('#' + iden).val() == '') {
    $('#' + iden).addClass('err');
  } else {
    $('#' + iden).addClass('ok');
    if (iden == 'burth') {
      counterburth = 25;
    } else if (iden == 'docNum') {
      counterdocNum = 25;
    }
    indicatorCount();
  }
};

function indicatorCount() {
  const all = counterregion + counterburth + counterdocNum + countertogglerInp;
  $('#indicatorLine').css('width', all + '%');
  if (all >= 25) {
    $('.dot.second').addClass('active')
  }
  if (all >= 50) {
    $('.dot.third').addClass('active')
  }
  if (all >= 75) {
    $('.dot.four').addClass('active')
  }
  if (all >= 100) {
    $('.dot.five').addClass('active')
  }
  animateValue("indicatorCount", 10, all, 1000);

}
function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

$('.nextAction').on('click', function () {
  if ($('#region').val() != '' && $('#burth').val() != '' && $('#docNum').val() != '') {
    $('.nextAction').addClass('active');
    setTimeout(function () {
      $('.steps').addClass('nextStep');
      if ($(document).innerWidth() <= 1000) {
        $('body').animate({'scrollTop': 980}, 500);
        $('html').animate({'scrollTop': 980}, 500);
      }
    }, 3000);
    countertogglerInp = 25;
    indicatorCount();
  }
  // проверка отдельных эл
  if ($('#region').val() == '') {
    $('.selectize-input').addClass('err');
  } else {
    $('.selectize-input').addClass('ok');
  }
  if ($('#burth').val() == '') {
    $('#burth').addClass('err');
  } else {
    $('#burth').addClass('ok');
  }
  if ($('#docNum').val() == '') {
    $('#docNum').addClass('err');
  } else {
    $('#docNum').addClass('ok');
  }
});;

/*---------------------------------------------------end*/

$('.toggler').on('click', function () {
  $('.toggler').removeClass('active');
  $(this).addClass('active');
  const inp = $('.inp');
  if ($(this).hasClass('Phone')) {
    $(inp).val('');
    $('#togglerEmail').removeClass("active");
    $("#togglerEmail").removeAttr("required");
    $('#togglerPhone').addClass("active");
    $('#togglerPhone').attr('required', 'required');;

  }
  if ($(this).hasClass('Email')) {
    $(inp).val('');
    $("#togglerPhone").removeAttr("required");
    $('#togglerPhone').removeClass("active");
    $('#togglerEmail').addClass("active");
    $('#togglerEmail').attr('required', 'required');;
  }
});

