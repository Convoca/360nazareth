
var onLoadComplete = function(){
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "assets/360/portada.jpg",
        "compass": false,
        "northOffset": 247.5,
        "autoRotate":-3,
        "autoLoad":true
    });
}