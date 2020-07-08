
var onLoadComplete = function () {
    //alert("v 0.0.2");
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "assets/360/portada.jpg",
        "preview": "assets/images/preview.jpg",
        "compass": false,
        //"northOffset": 90.5,
        "autoLoad": true,
        "ignoreGPanoXMP": true,
        "showZoomCtrl": false
    });

    $(".menu").click(function () {
        $(".menu").fadeOut("fast");
        $(".menu-over").fadeIn();
    });

    $(".menu-over .close").click(function () {
        $(".menu-over").fadeOut("fast");
        $(".menu").fadeIn();
    });

    $(".sitios").click(function () {
        $(".sitios").fadeOut("fast");
        $(".sitios-over").fadeIn();
    });

    $(".sitios-over .close").click(function () {
        $(".sitios-over").fadeOut("fast");
        $(".sitios").fadeIn();
    });
    
}

// function show pannellum
function showPannellum(image) {
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "assets/360/" + image + ".jpg",
        "compass": false,
        "autoLoad": true,
        "ignoreGPanoXMP": true,
        "showZoomCtrl": false
    });
}