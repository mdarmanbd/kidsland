(function ($) {
    "use strict";
    
    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });

    var winstar = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('navbar__toggled');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('navbar__toggled');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("navbar__toggled");
                        $(selector).removeClass("navbar__toggled");
                    }
                });

                $('.mobile_overlay').on('click',function(e){
                    $(actionSelector).removeClass("navbar__toggled");
                    $(selector).removeClass("navbar__toggled");
                })
            
            };
            mobile_menu('.navbar__toggler, .menu_close', '.mobile_menu, .mobile_overlay');  

            $('.mobile_menu .menu ul li.menu-item-has-childern > a').on('click', function () {
               
                $('.mobile_menu .menu ul li.menu-item-has-childern .dropmenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 

                if($(this).parent('li').children('.dropmenu').length) {
                    if(!$(this).parent('li').children('.dropmenu').is(":visible")) { 
                        $(this).parent('li').children('.dropmenu').slideToggle();
                    }
                    return false; 
                }
            });


        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var header = $("header");
            // Add a scroll event listener to the window object
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 60) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var hero__slider = new Swiper('.hero__slider', {
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: {
                    delay: 5000,
                },
                loop: 1,
                speed: 1000,
                effect: "fade",
                pagination: {
                    el: ".hero__slider .hero__pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".hero__slider .controls .button-next",
                    prevEl: ".hero__slider .controls .button-prev",
                },
            });

            var pageBannerSlider = new Swiper(".page-banner-slider", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                loop: 1,
                speed: 1000,
                effect: "fade",
            });

            var chooseSwiper = new Swiper(".choose__swiper", {
                slidesPerView: 1,
                spaceBetween: 40,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },

                    // 1440:{
                    //     slidesPerView: 3,
                    //     spaceBetween: 40,
                    // }
                   
                },
            });

            var classesSwiper = new Swiper(".classes__swiper", {
                slidesPerView: 1,
                spaceBetween: 40,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                    1200:{
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }


                   
                },
            });

            var testmonialSlider = new Swiper(".testmonial__slider", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1200:{
                        slidesPerView: 3,
                        spaceBetween: 60,
                    }
                },
            });

            var blog__slider = new Swiper(".blog__slider", {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                },
            });




        },


       

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append("<a href='#' title='Scroll Top' id='scroll-top' class='topbutton btn-hide text-white'><i class='fal fa-angle-double-up'></i></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			winstar.mobile_expand_menu();
			winstar.scroll_to_top();
			winstar.sticky_header();
			winstar.swiperCarousel();
		}
    };
    $(function() {
		winstar.initialize();
	});

})(jQuery);
    

///============= Wow JS =============\\\
wow = new WOW({
    // mobile: false,
});
wow.init();


const lightbox = GLightbox({
    touchNavigation: true,
    loop: !1,
    autoplayVideos: !1
});

/* ============================================================ */
/* Download Company Profile Popup
/* ============================================================ */
