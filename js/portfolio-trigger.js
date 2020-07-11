(function ($) {
    "use strict";
    // Instantiate wookmark after all images have been loaded
    var wookmark;
    imagesLoaded('#cv-portfolio', function () {
        wookmark = new Wookmark('#cv-portfolio', {
            itemWidth: 200,
            autoResize: true,
            resizeDelay: 500,
            align: 'left',
            container: $('#cv-portfolio'),
            offset: 20,
            outerOffset: 0,
            fillEmptySpace: false,
            flexibleWidth: '100%'
        });
        setTimeout(function () {
            $('#cv-portfolio').find('li').addClass('cvgrid-animate');
        }, 100);
    });

    // Setup filter buttons when jQuery is available
    var $filters = $('#cv-portfolio-filter li');

    // When a filter is clicked, toggle it's active state and refresh.
    var onClickFilter = function (event) {
        var $item = $(event.currentTarget),
            itemActive = $item.hasClass('gridactive');

        if (!itemActive) {
            $filters.removeClass('gridactive');
            itemActive = true;
        } else {
            itemActive = false;
        }
        $item.toggleClass('gridactive');

        // Filter by the currently selected filter
        wookmark.filter(itemActive ? [$item.data('filter')] : []);
    };

    // Capture filter click events.
    $('#cv-portfolio-filter').on('click.wookmark-filter', 'li', onClickFilter);
})(jQuery);

jQuery(window).on('resize orientationchange', function () {
    "use strict";
    jQuery('#cv-portfolio').find('li').removeClass('cvgrid-animate');
});