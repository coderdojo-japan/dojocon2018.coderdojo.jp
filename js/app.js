$('#gnav__toggle').click(function () {
  $("#gnav__inner").slideToggle();
})

$('#gnav .gnav_item').click(function () {
    var w = $(window).width();
    var x = 768;
    if (w <= x) {
        $("#gnav__inner").slideToggle();
    }
});

$(function() {
  var $win = $(window),
    $main = $('#gnav'),
    $nav = $('#gnav__inner'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
