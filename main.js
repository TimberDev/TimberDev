$( document ).ready(function() {
  $('#burger').on('click', function () {
    var wid = $(document).width();
    var nav = $('.section__nav');
    if (!nav.hasClass('active')) {
      nav.velocity({top: 0, duration: 500, easing: 'ease-in-out'});
      nav.addClass('active');
    } else {
      nav.velocity({top: -215, duration: 500, easing: 'ease-in-out'});
      nav.removeClass('active');
    }
  });

  $('.nav__item').click( function (e) {
      e.preventDefault();
      var wid = $(document).width();
      var nav = $('.section__nav');
      if (wid < 880) {
        nav.velocity({top: -215, duration: 500, easing: 'ease-in-out'});
        nav.removeClass('active');
      }
      var href = $(this).attr('href');
      var anchor = $(href).offset();
      $('html, body').animate({ scrollTop: anchor.top }, 500, 'swing');
      return false;
  });

  $('.us__cont').mouseenter( function (e) {
    var targ = $(this);
    var over = targ.children('.us__overlay');
    over.velocity('fadeIn', {duration: 300});
  });

  $('.us__cont').mouseleave( function (e) {
    var targ = $(this);
    var over = targ.children('.us__overlay');
    over.velocity('fadeOut', {duration: 300});
  });
});
