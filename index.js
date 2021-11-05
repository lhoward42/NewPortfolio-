$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(function () {
$(document).scroll(function () {
var $div = $("#heroDisplay");
$div.toggleClass("scrolled", $(this).scrollTop() > 650);
});
});