$(document).ready(function() {
    /*navbar shrink*/
    $(window).on("scroll", function() {
        if (($this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    $('.features-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
            }
        }
    });
    /*screenshot*/
    $('.screenshots-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,
            }
        }
    });
    /*Testimonials - What Our Users say*/
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
            }
        }
    });
    /*PAge Scroll */
    // $.scrollIt({
    //     topOffset :-50
    // });
    // /*navbar collapse*/
    // $(".nav-link").on("click",function(){
    //     $(".navbar-collapse").collapse("hide");
    // });
    // /*toggle-dark theme*/
    // function toggleTheme(){
    //     updateIcon();  
    // }
    // toggleTheme(); 
    // $(".toggle-theme").on("click",function(){
    //     $("body").toggleClass("dark");
    //     if($(body).hasClass("dark")){
    //         localStorage.setItem("enthem","dark");
    //     }
    //     else{
    //         localStorage.setItem("enthem","light");
    //     }
    //     updateIcon();
    // });
    // function updateIcon(){
    //     if($("body").hasClass("dark")){
    //         $(".toggle-theme i").removeClass("fa-moon");
    //         $(".toggle-theme i").addClass("fa-sun");
    //     }
    //     else{
    //         $(".toggle-theme i").removeClass("fa-sun");
    //         $(".toggle-theme i").addClass("fa-moon");
    //     }
    // }

});