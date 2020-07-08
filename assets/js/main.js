
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

    $(".galeria").click(function () {
        $(".closegalleria").fadeIn();
        var data = [
            {
                image: 'assets/images/preview.jpg'
            },
            {
                image: 'https://convoca.pe/sites/default/files/2020-07/106%20di%CC%81as%20-%20ya.png'
            }
        ];

        
        Galleria.loadTheme('assets/galleria/themes/fullscreen/galleria.fullscreen.js');
        Galleria.run('.galleria',
            {
                _hideDock: false,
                transition: "pulse",
                imageCrop: true,
                thumbCrop: "height",
                easing: "galleriaOut",
                dataSource: data
            });
    });
    $(".closegalleria").click(function(){
        $(".closegalleria").hide();
        $(".galleria-container").remove();
        $("body").css("overflow","auto");
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