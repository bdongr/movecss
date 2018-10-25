$(document).ready(function(){

    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //         $('html, body').animate({
    //             scrollTop: (target.offset().top - 57)
    //         }, 1000, "easeInOutExpo");
    //         return false;
    //         }
    //     }
    // });

    // $('body').scrollspy({
    //     target: '#headNavbar',
    //     offset: 57
    // });

    // // Collapse Navbar
    // var navbarCollapse = function() {
    //     if ($("#headNavbar").offset().top > 100) {
    //         $("#headNavbar").addClass("head-navbar--shrink");
    //     } else {
    //         $("#headNavbar").removeClass("head-navbar--shrink");
    //     }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);


    $('#sobre').click(function(){
        $('#content').scrollTo('#sobreContent');
    })
})

