$( document ).ready(function() {

  // vertically center title
  var height = $(window).height();
  var width = $(window).width();
  
  var headerHeightSplit = ((height - 75) / 2);
  // apply to css "header"
  $(".header-img").css({
    "margin-top" : headerHeightSplit ,
    "margin-bottom" : headerHeightSplit
  });
  
  var scrollWidthSplit = ((width - 43) / 2);
  $('.scroll-down').css({
    "left": scrollWidthSplit,
    "top": height - 50
  });

  // fade out arrow once scrolling happens  
  $(document).scroll(function() {
    $('.scroll-down').removeClass('down-animation');  
    $('.scroll-down').addClass('hidden');
  });

  // horizontally center topstars
  var topStarsWidthSplit = ((width - 796) / 2)
  $('.topstars').css({
    "left": topStarsWidthSplit
  });


  // parallax circles
  $(window).on("scroll",function(){
    $('.circle1').css({"top" : ( .5 * $(window).scrollTop() )      })
    $('.circle2').css({"top" : ( .2 * $(window).scrollTop() ) +200 })
    $('.circle3').css({"top" : ( .4 * $(window).scrollTop() ) +20  })
    $('.circle4').css({"top" : ( .3 * $(window).scrollTop() ) +150 })
    $('.topstar2').css({"top": ( .1 * $(window).scrollTop() ) -20  })

    // If I want the parallax balls to also fade out as you scroll ...
    // $('.circle1').css({"top" : ( .5 * $(window).scrollTop() ) ,        "opacity" : ($(window).height() / $(document).scrollTop() ) -.5 })
    // $('.circle2').css({"top" : ( .2 * $(window).scrollTop() ) +200,    "opacity" : ($(window).height() / $(document).scrollTop() ) -.5 })
    // $('.circle3').css({"top" : ( .4 * $(window).scrollTop() ) +20 ,    "opacity" : ($(window).height() / $(document).scrollTop() ) -.5 })
    // $('.circle4').css({"top" : ( .3 * $(window).scrollTop() ) +150,    "opacity" : ($(window).height() / $(document).scrollTop() ) -.5 })
  });

  // horizontally center logo
  var logoWidthSplit = ((width - 118) / 2)
  $('.logo').css({
    "left": logoWidthSplit
  });

}); // end of document ready




































