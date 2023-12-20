/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {



    // btnFormGroupCollapsedToggle
    // FormGroupCollapsed-item
    $(function () {
        if ($('.collapsed-heading-wrap').length && $('.collapsed-item').length) {
            $('.collapsed-heading-wrap').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
                    $(this).find('.icon').toggleClass('icon-down icon-up');
                }
            });
        }
    });

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });



    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
