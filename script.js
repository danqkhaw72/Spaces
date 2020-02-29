$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            $('.nav-menu').addClass('custom-navbar');
        } else {
            document.getElementById("navbar").style.top = "-50px";
            $('.nav-menu').removeClass('custom-navbar');
        }
        prevScrollpos = currentScrollPos;
    }
});