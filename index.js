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
    if (y > 3200 || y < 700) {
      $(".nav").removeClass('showA');
    }
    if (y < 3200 && y > 700) {
      $(".nav").addClass('showA');
    }
    if (y > 790) {
      $("#header").addClass('showH');
    }
    else if (y < 790) {
      $("#header").removeClass('showH');
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
        paddingLeft: "10px"
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
  });

  window.sr = ScrollReveal();
  sr.reveal('.box1', {duration: 700, delay: 200,});
  sr.reveal('.box2', {duration: 700, delay: 200,});
  sr.reveal('.box3', {duration: 700, delay: 200,});
  sr.reveal('#lo1', {duration: 300, delay: 0,});
  sr.reveal('#lo2', {duration: 300, delay: 200,});
  sr.reveal('#lo3', {duration: 300, delay: 400,});
  sr.reveal('#lo4', {duration: 300, delay: 600,});

  $("#aboutAnc").click( function(){
    $(window).scrollTo(800, 800);
  });

  $("#projAnc").click( function(){
    $(window).scrollTo(1580, 800);
  });

  $("#contactAnc").click( function(){
    $(window).scrollTo(3070, 800);
  });
});
