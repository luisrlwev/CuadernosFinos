$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 300) {
        //clearHeader, not clearheader - caps H
        $(".section-header").addClass("dark-scroll-header");
        $(".top-bar-header").addClass("dark-topbar");
    }
    else{
        $(".section-header").removeClass("dark-scroll-header");
        $(".top-bar-header").removeClass("dark-topbar");
    }
}); //missing );