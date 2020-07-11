/////////////////* GOOGLE MAP *////////////////////

/* GOOGLE MAP FOR BIG SCREENS */

function googlemap() {
    "use strict";
    // Coordinates
    var latlng = new google.maps.LatLng(35.768267, 51.371434);
    
    var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
];
    // Map Options
    var myMapOptions = {
        zoom: 17,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.LEFT_TOP
        },
        center: latlng,
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
    }
    };
    
    var map = new google.maps.Map(document.getElementById("google-map"), myMapOptions);
    
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');
    // Map marker
    var image = 'images/pin.png';
    // Map marker options
    var marker = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: image,
        map: map,
        position: latlng
    });
}

/* GOOGLE MAP FOR MOBILE DEVICES */

function mobilemap() {
    "use strict";
    // Coordinates
    var latlng = new google.maps.LatLng(40.714353, -74.005973);
    
    var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
];
    // Map Options
    var myMapOptions = {
        zoom: 17,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.MEDIUM,
            position: google.maps.ControlPosition.LEFT_TOP
        },
        center: latlng,
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
    }
    };
    
    var map = new google.maps.Map(document.getElementById("mobile-map"), myMapOptions);
    
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');
    // Map marker
    var image = 'images/pin.png';
    // Map marker options
    var marker = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: image,
        map: map,
        position: latlng
    });
}

googlemap();
mobilemap();

jQuery(window).on('resize orientationchange', function () {
    "use strict";
    if (jQuery(window).width() > 1024) {
        googlemap();
    }
    else {
        mobilemap();
    }
});