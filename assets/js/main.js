
var myPlayer;
var myAudio;
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
        "showZoomCtrl": false,
    }).startAutoRotate();

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

    
    myAudio = new Audio();
    myAudio.src = "assets/audio/fondo.mp3"
    myAudio.loop = true;

    $("body").mouseover(function(){
        if(myAudio.paused) myAudio.play();
    });

    $(".audio").click(function(){
        if(myAudio.volume==0){
            myAudio.volume=1;
        }else{
            myAudio.volume=0;
        }
       
    });

}

// function show pannellum
function showPannellum(image) {
    $(".video-js").hide();

    if(image=="rio") $('.leyenda').html("Las aguas del Chiriaco se contaminaron de petróleo el 2016. Hoy están limpias.");
    if(image=="quebrada") $('.leyenda').html("En esta zona de la quebrada Inayo se quebró el ducto de Petroperú.");
    if(image=="gente") $('.leyenda').html("Algunos habitantes de Nazareth recogieron el crudo con sus propias manos.");
    
    

    if(image!="colegio"){
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "assets/360/" + image + ".jpg",
            "compass": false,
            "autoLoad": true,
            "ignoreGPanoXMP": true,
            "showZoomCtrl": false,
            "yaw":-110,
        }).startAutoRotate();
        myPlayer.pause();
    }else{
        myPlayer=videojs('panoramavideo', {
            plugins: {
                controls: false,
                autoplay: true,
                pannellum: {}
            }
        });
        myPlayer.play();
        $('.leyenda').html("La escuela de la comunidad es fuente de esperanza. Sólo es de nivel primario.");
        $(".video-js").show();
    }

}