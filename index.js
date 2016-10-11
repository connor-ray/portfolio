$(function(){
  $(".skillType").delay(4200).typed({
      strings: ["Builder.", "Designer.", "Artist.", "Thinker.", "Creator.", ],
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
    if (y > 2480) {
      $(".nav").css({"top":"1780px", "position":"absolute"});
    }
    else if (y < 2480) {
      $(".nav").css({"top":"80px", "position":"fixed"});
    }


    if (y < 700) {
      console.log('less 700')
      $("#jbl").show();
      $(".job").animate({
        width: "30%"
      }, 500);
    }

    else if (y > 700) {
      console.log('more 700')
      $(".job").animate({
        width: "10%"
      }, 500);
      $("#jbl").hide();
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
        $(".logo").css("background","black");
        $(".job").css("background","#E63946");
        $(".logoH").css("color","white");
        $("#jobH").css("color","white");
        $("#sqr").css("color","white");
        $(".nav").css({"top":"80px", "position":"fixed"});
        $(".F").css("color","#E63946");
        $(".V").css("color","black");
        $(".D").css("color","black");

    }
    else if (y < 700) {
        $(".logo").css("background","white");
        $(".job").css("background","black");
        $(".logoH").css("color","black");
        $("#jobH").css("color","white");
        $("#sqr").css("color","black");
        $(".nav").css({"top":"0", "position":"absolute"});
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
