var fadeTimeMenuLine = 150;
var fadeTimeMenuBar = 0;
var fadeTimeSocialIcons = 0;

$(document).ready(function () {
    menuAnimation();
    setBindings();
});

/*---------------------------------------------------------------------------------------
initialize wow.js library
---------------------------------------------------------------------------------------*/
new WOW().init();

/*--------------------------------------------------------------------------------------
De animatie van het hamburgermenu. 
- CSS class .close word toegevoegd en triggered animatie
- middelste lijn in hamburger menu fadeOut en in op click event
- Navigatie balk met linkjes fadeOut en in op click event
- Social icons fadeOut en in op click event
---------------------------------------------------------------------------------------*/

function menuAnimation() {
    $(".menu").click(function() {
        $(this).toggleClass("close");
        $(".line2").fadeToggle(fadeTimeMenuLine);
        $(".navigation").fadeToggle(fadeTimeMenuBar);
        $(".navigation").toggleClass("mobile-navbar")
        $(".links").toggleClass("mobile-navbar-ul")
        $(".all-icons").fadeToggle(fadeTimeSocialIcons);
    });
}

/*--------------------------------------------------------------------------------------
De navigatie knoppen op de project pagina. 
---------------------------------------------------------------------------------------*/

function setBindings() {
    $('.next').click(function(e) {
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Project";
        
        $('html body').animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 800)
    });
}
    
/*--------------------------------------------------------------------------------------
parallax affect voor de banners
---------------------------------------------------------------------------------------*/

$(window).scroll(function(){
    parallax();
})

function parallax() {
    
    var wScroll = $(window).scrollTop();
    console.log('hello');
    
    $('.banner-parallax').css('background-position','0px ' +(wScroll*1.07)+'px')
    $('.item-parallax-down').css('top',+(wScroll*0.12)+'px')
    $('.item-parallax-up').css('top',-(wScroll*0.25)+'px')
    //$('.about-me-p').css('top',+(wScroll*-0.2)+'px')
    
}


