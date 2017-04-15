//Get the weather from Open Weather Map API 
function getWeather(itemlat, itemlng) {
    var begUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=';
    var middleUrl = '&lon=';
    var endUrl = '&APPID=fe3a2d75fab8702c20eeda810fc8e1e1';
    var weatherUrl = begUrl + itemlat + middleUrl + itemlng + endUrl;
    $.getJSON(weatherUrl, function (data) {
        var content = '<div class="contentement">' +' the weather description says: ' + data.weather[0].main + '<ul id="weather">' + '</ul>' + '</div>';
        infowindow.setContent(content);
    }).fail(function (json) {
        infowindow.setContent('Weather not available!');
    });
}

/*
var style = [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ecdcc3"
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
            },
                {
                    "lightness": 20
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
            },
                {
                    "lightness": -33
            },
                {
                    "weight": 2
            },
                {
                    "gamma": 0.8
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
            },
                {
                    "color": "#776340"
            },
                {
                    "invert_lightness": true
            }
        ]
    },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
            },
                {
                    "color": "#776340"
            }
        ]
    },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
            },
                {
                    "saturation": 30
            }
        ]
    },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
            }
        ]
    },
        {
            "featureType": "landscape.natural",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "color": "#e5d8c3"
            },
                {
                    "lightness": "-6"
            }
        ]
    },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
            }
        ]
    },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
            },
                {
                    "saturation": -20
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "weight": "1"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
            },
                {
                    "saturation": -30
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "color": "#8f8470"
            },
                {
                    "lightness": "0"
            },
                {
                    "weight": "1"
            },
                {
                    "invert_lightness": true
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
            },
                {
                    "lightness": 25
            },
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2.00"
            },
                {
                    "invert_lightness": true
            }
        ]
    },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2"
            }
        ]
    },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "invert_lightness": true
            },
                {
                    "lightness": "37"
            }
        ]
    },
        {
            "featureType": "transit.station.airport",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "transit.station.bus",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "transit.station.rail",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "transit.station.rail",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "color": "#b0b0b0"
            }
        ]
    },
        {
            "featureType": "transit.station.rail",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
            },
                {
                    "visibility": "simplified"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "lightness": "28"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
];
*/
