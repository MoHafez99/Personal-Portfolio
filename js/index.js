/// <reference types="../@types/jquery" />
let secTop = $("#about").offset().top;
$(window).scroll(function () {
    let windowScroll =  $(window).scrollTop()
    if (windowScroll > secTop - 50) {
        $(".main-nav").css("background-color", "rgba(0, 0, 0, 0.5)");
    } else {
        $(".main-nav").css("background-color", "transparent");
    }
})
