$(document).ready(function () {
    $('.mobile-button').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.middle-menu').slideToggle();
    });
    $('header ul.middle-menu > li a').click(function () {
        if ($(this).closest("li").children("ul").length) {
            $(this).closest("li").children("ul").toggle();
        }
        $(this).toggleClass('up');
    });
    $('.per-toggle').click(function(){
        $(this).toggleClass('annually');
    });
    $('.loading-container').fadeOut(500);
});