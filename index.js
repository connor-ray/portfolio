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
    if (y > 700) {
        $(".logo").css("background","black");
        $(".job").css("background","white");
        $(".logoH").css("color","white");
        $("#jobH").css("color","black");
        $("#sqr").css("color","white");
    }
    else if (y < 700) {
        $(".logo").css("background","#5FB49C");
        $(".job").css("background","black");
        $(".logoH").css("color","white");
        $("#jobH").css("color","white");
        $("#sqr").css("color","black");

    }
});

$(window).on('load', function() { // makes sure the whole site is loaded
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
