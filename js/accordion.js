jQuery(document).ready(function () {
    "use strict";
    jQuery('body').find('.accordion-header').toggleClass('inactive-header');
    jQuery('body').find('.accordion-header').click(function () {
        if (jQuery(this).is('.inactive-header')) {
            jQuery('body').find('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        } else {
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        }
    });
    return false;
});