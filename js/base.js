/**
 * Created by Hanlinxin on 2017/1/18.
 */
$(function () {
    if ($(this).scrollTop() >= 160){
        $("#nav").addClass("affix");
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 355){
            $("#nav").addClass("affix");
        }else {
            $("#nav").removeClass("affix");
        };
    });
    $('[data-toggle="tooltip"]').tooltip()
});

$('body').scrollspy({
    target: '.navbar-example',
    offset: 70
});

$(function () {
    $('.navbar-example a:not(a.dropdown-toggle)').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 55
        }, 500);
        return false;
    });
    $('.navbar-nav a:not(a.dropdown-toggle)').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 55
        }, 500);
        return false;
    });
});
