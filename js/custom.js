/*=====================================================
                    SERVICES
=====================================================*/
$(function () {
  new WOW().init();
});
/*=====================================================
                    Work
=====================================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
/*=====================================================
                    team
=====================================================*/
$(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});
/*=====================================================
                    TESTIMONIALS
=====================================================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});
/*=====================================================
                    STATS
=====================================================*/
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});
/*=====================================================
                    CLIENTS
=====================================================*/
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
            items: 1
      },
      // breakpoint from 480 up
      480 : {
          items: 3
      },
      // breakpoint from 768 up
      768 : {
         items:5
      },
      // breakpoint from 992 up
      992: {
        items:6
      }
  }

  });
});
/*=====================================================
                    Navigation
=====================================================*/
//Show/Hide transparent black navigation
$(function () {

  $(window).scroll(function(){


    if($(this).scrollTop() < 50 ) {
      // hide nav
      $("nav").removeClass("ethio-top-nav");
      $("#back-to-top").fadeOut();
    } else{
      // show nav
      $("nav").addClass("ethio-top-nav");
      $("#back-to-top").fadeIn();
    }

  });


});
// smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
    // get/return id like #about, #work, #team etc
    var section = $(this).attr("href");


    $('html, body').animate({
      scrollTop: $(section).offset().top - 64

    }, 1250, "easeInOutExpo")
  });
});
// Close mobile menu  ON CLICK
$(function () {

    $(".navbar-collapse ul li a").on("click touch" , function(){


        $(".navbar-toggle").click();
    });
});