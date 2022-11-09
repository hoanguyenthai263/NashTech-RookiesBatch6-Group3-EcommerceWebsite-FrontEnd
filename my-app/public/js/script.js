(function () {
  $(".scrollTop").bind("click", function (event) {
    var $anchor = $(this);
    /*
      if you want to use one of the easing effects:
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500,'easeInOutExpo');
       */
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        500
      );
    event.preventDefault();
  });
});
