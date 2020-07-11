/* PAGE STRUCTURE */

/* Ascensor Settings */
var ascensor = jQuery('#ascensorBuilding').ascensor({
    time: 1000,
    childType: 'section',
    swipeNavigation: false,
    easing: 'easeInOutQuint',
    loop: false,
    direction: 'y',
    keyNavigation: false
});
var ascensorInstance = jQuery('#ascensorBuilding').data('ascensor');

/* Add class to the active menu item */
jQuery(".links-to-floor-li:eq(" + ascensor.data("current-floor") + ")").addClass("cv-active");

/* Menu click event */
jQuery('body').find('.links-to-floor-li').on("click", function (e) {
    "use strict";
    e.preventDefault();
    /* Get the id of the floor */
    var floornumber = jQuery(this).data('id');
    /* Remove class from all menu items */
    jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
    /* Add class to the active menu item */
    jQuery(this).addClass("cv-active");
    /* Close sidebar */
    jQuery("body").find(".cv-menu-button").removeClass("rotate-menu-icon");
    jQuery("#cv-sidebar").removeClass("open");
    /* Scroll the page */
    window.location.hash = jQuery(this).data('slug');
    jQuery("#cv-left-slider").gotoSlide(floornumber);
    ascensorInstance.scrollToFloor(floornumber - 1);
    /* Footer animation */
    if (floornumber === 1) {
        jQuery("#footer").animate({
            bottom: '-100%'
        }, 1000);
    } else {
        jQuery("#footer").animate({
            bottom: 0
        }, 1000);
    }
});

/* GO TO FLOOR LINK */

jQuery('body').find('.go-to-floor').on("click", function (e) {
    "use strict";
    e.preventDefault();
    /* Get the id of the floor */
    var floornumber = jQuery(this).data('id');
    /* Remove class from all menu items */
    jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
    /* Add class to the active menu item */
    jQuery('.links-to-floor-li[data-id="' + floornumber + '"]').addClass('cv-active');
    /* Close sidebar */
    jQuery("body").find(".cv-menu-button").removeClass("rotate-menu-icon");
    jQuery("#cv-sidebar").removeClass("open");
    /* Scroll the page */
    window.location.hash = jQuery(this).data('slug');
    jQuery("#cv-left-slider").gotoSlide(floornumber);
    ascensorInstance.scrollToFloor(floornumber - 1);
    /* Footer animation */
    if (floornumber === 1) {
        jQuery("#footer").animate({
            bottom: '-100%'
        }, 1000);
    } else {
        jQuery("#footer").animate({
            bottom: 0
        }, 1000);
    }
});

/* WINDOW LOAD EVENTS */

jQuery(window).load(function () {
    "use strict";
    var hash = window.location.hash.substr(1);
    if (window.location.hash) {
        /* Get the active page information from the page link and add/remove required classes */
        var smenu = jQuery(".links-to-floor-li").filter('[data-slug="' + hash + '"]');
        jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
        smenu.addClass("cv-active");
        /* Scroll the page */
        var floornumber = jQuery(".cv-active").data('id');
        ascensorInstance.scrollToFloor(floornumber - 1);
        jQuery("#cv-left-slider").gotoSlide(floornumber);
        /* Footer Animation */
        if (floornumber === 1) {
            jQuery("#footer").animate({
                bottom: '-100%'
            }, 1000);
        } else {
            jQuery("#footer").animate({
                bottom: 0
            }, 1000);
        }
        /* Hide loading icon */
        setTimeout(function () {
            jQuery("body").find('#site-loading').fadeOut(500);
        }, 1000);
    } else {
        /* Hide loading icon */
        setTimeout(function () {
            jQuery("body").find('#site-loading').fadeOut(500);
        }, 1000);
    }
    /* HOMEPAGE TEXT ANIMATION */
    setTimeout(function () {
        jQuery('#home-slide-title span').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
        jQuery('#home-title h1').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
        jQuery('#home-title p').fadeIn().removeClass('animated slideOutLeft').addClass('animated slideInLeft');
        jQuery('#cv-home-social-bar-container').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
    }, 1000);
});

/* SUBMENU */

jQuery('#cv-sidebar').find(".cv-submenu ul > li > a").on('click', function () {
    "use strict";
    var nxt = jQuery(this).next();
    if ((nxt.is('ul')) && (nxt.is(':visible'))) {
        nxt.slideUp(300);
        jQuery(this).removeClass("cvdropdown2").addClass("cvdropdown");
    }
    if ((nxt.is('ul')) && (!nxt.is(':visible'))) {
        jQuery('#cv-sidebar').find('.cv-submenu ul ul:visible').slideUp(300);
        nxt.slideDown(100);
        jQuery('#cv-sidebar').find('.cv-submenu > ul > li:has(ul) > a').removeClass("cvdropdown2").addClass("cvdropdown");
        jQuery(this).addClass("cvdropdown2");
    }
    if (nxt.is('ul')) {
        return false;
    } else {
        return true;
    }
});

/* SIDEBAR */

jQuery("body").find(".cv-menu-button").on("click", function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).toggleClass("rotate-menu-icon");
    jQuery("#cv-sidebar").toggleClass("open");
});

/* ICON EFFECT */

jQuery('body').find(".cv-icon-container").on({
    mouseenter: function () {
        "use strict";
        jQuery(this).addClass('animated rubberBand');
    },
    mouseleave: function () {
        "use strict";
        jQuery(this).removeClass('animated rubberBand');
    }
});

/* BACK TO TOP */

jQuery("#cv-back-to-top").on('click', function (event) {
    "use strict";
    event.preventDefault();
    jQuery("body").find('.floor').animate({
        scrollTop: 0
    }, 500);
});

/* OTHER EVENTS */

jQuery(document).ready(function () {
    "use strict";
    /* SIDEBAR CUSTOM SCROLLBAR */
    if (jQuery(window).width() > 1024) {
        jQuery("#cv-sidebar-inner").mCustomScrollbar({
            scrollInertia: 500,
            autoHideScrollbar: true,
            theme: "light-thick",
            scrollButtons: {
                enable: true
            },
            advanced: {
                updateOnContentResize: true
            }
        });
    }

    /* ADD SUBMENU DROPDOWN ARROWS */
    jQuery('#cv-sidebar').find('.cv-submenu > ul > li:has(ul) > a').addClass("cvdropdown");

    /* SKILLS */
    jQuery("body").find('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').width(jQuery(this).data('percent'));
    });

    /* LEFT SLIDER */
    jQuery("#cv-left-slider").nerveSlider({
        /* Image Slider Settings */
        sliderAutoPlay: false,
        sliderWidth: "100%",
        sliderHeight: "100%",
        slideTransitionEasing: 'easeInOutQuint',
        slideTransitionDelay: 0,
        slideTransitionSpeed: 1000,
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransitionDirection: "down",
        allowKeyboardEvents: false,
        slidesDraggable: false,
        showDots: false,
        showTimer: false,
        showArrows: false,
        showPause: false,
        /* Homepage Text Animations */
        slideTransitionStart: function () {
            jQuery('#home-slide-title span').fadeOut(500).removeClass('animated slideInUp').addClass('animated slideOutDown');
            jQuery('#home-title h1').fadeOut(500).removeClass('animated slideInDown').addClass('animated slideOutUp');
            jQuery('#home-title p').fadeOut(500).removeClass('animated slideInLeft').addClass('animated slideOutLeft');
            jQuery('#cv-home-social-bar-container').fadeOut(500).removeClass('animated slideInUp').addClass('animated slideOutDown');
        },
        slideTransitionComplete: function () {
                jQuery('#home-slide-title span').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
                jQuery('#home-title h1').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
                jQuery('#home-title p').fadeIn().removeClass('animated slideOutLeft').addClass('animated slideInLeft');
                jQuery('#cv-home-social-bar-container').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
            }
            /* Homepage Text Animations END */
    });

    /* DON'T ACTIVATE TOOLTIPS ON MOBILE DEVICES */
    if (jQuery(window).width() > 1024) {

        /* MENU TOOLTIP */
        jQuery("body").find('.tooltip-menu').tooltipster({
            theme: 'tooltipster-dark',
            delay: 0,
            hideOnClick: true,
            touchDevices: false,
            position: 'right',
            animation: 'swing'
        });

        /* SOCIAL MENU TOOLTIP */
        jQuery("body").find('.tooltip-social').tooltipster({
            theme: 'tooltipster-red',
            delay: 0,
            hideOnClick: true,
            touchDevices: false,
            position: 'top',
            animation: 'swing'
        });

        /* GO TO TOP TOOLTIP */
        jQuery("body").find('.tooltip-gototop').tooltipster({
            theme: 'tooltipster-gototop',
            delay: 0,
            hideOnClick: true,
            touchDevices: false,
            position: 'top',
            animation: 'grow'
        });

    }

});