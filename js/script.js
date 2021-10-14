var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-100%";
}
// typing animetion script

var typed = new Typed(".typing", {
    strings: ["developer", "blogger", "freelancer", "photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
// scroll script
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.header').addClass("sticky");

        } else {
            $('.header').removeClass("sticky");

        }
    });

    $('.buttons').click(function() {
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.filter-image').show();
        } else {
            $('.filter-image').not('.' + filter).hide();
            $('.filter-image').filter('.' + filter).show();

        }
        $(this).addClass('active').siblings().removeClass('active')

    });
});