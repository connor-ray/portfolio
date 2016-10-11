$(function(){
  $(".skillType").delay(4200).typed({
      strings: ["Builder.", "Designer.", "Artist.", "Creator.", ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true
  });
});

$(function(){
  $(".loadDot").typed({
      strings: [".", ""],
      typeSpeed: 1,
      loop: true,
      loopCount: 3,
      showCursor: false,
  });
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
      console.log(y);
    if (y > 2610 || y < 830) {
      $(".nav").removeClass('showA');
    }
    if (y < 2610 && y > 830) {
      $(".nav").addClass('showA');
    }

    if (y > 500) {
      $('.aboutS').addClass('showA');
    }

    if (y > 2240) {
      $(".F").css("color","black");
      $(".V").css("color","black");
      $(".D").css("color","#E63946");
    }
    if (y > 1480 && y < 2240) {
      $(".F").css("color","black");
      $(".V").css("color","#E63946");
      $(".D").css("color","black");
    }

    else if (y > 700 && y < 1480) {
        $(".F").css("color","#E63946");
        $(".V").css("color","black");
        $(".D").css("color","black");

    }
    else if (y < 700) {
        $(".F").css("color","black");
        $(".V").css("color","black");
        $(".D").css("color","black");
    }
});

$(window).on('load', function() {
    $('#preloader').delay(4200).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(4200).css({'overflow':'visible'});
    $("#status").delay(3200).animate({
        marginLeft: "0",
        marginTop: "0",
        paddingLeft: "30px"
    }, 1000 );
    $("#status").delay(3200).css({"overflow":"hidden"});
})

$(document).ready( function() {
  $(".myI").hover( function() {
    var desc = $(this).siblings()
    $(desc).toggleClass('show');
  });

  $(".pr").hover( function() {
    var children = $(this).children()
    var cover = children[2]
    var link = children[3]
    $(cover).toggleClass('showIt');
    $(link).toggleClass('showIt');
  });

});
