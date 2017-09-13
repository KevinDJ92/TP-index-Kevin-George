"use strict";

// function generateMaps(){
//    var map_name = "map";
//
//    for (var i = 1; i <= 6; i++){
//        myMap(map_name + i);
//    }
// }


function myMap() {
    var mapCanvas = document.getElementById("map1");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}