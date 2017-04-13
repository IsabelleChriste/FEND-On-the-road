// Global scope //
var map;
var maps;
var infowindow;
var marker;
var google;
var markers = [];
var defaultIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|1CBECC';
var clickedIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFA500';
// -------------- Map -----------//
function initMap() {
    // Center of the map
    var mapcenter = {
        lat: 35.506435,
        lng: -100.045742,
    };
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
    // Creating map
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapcenter,
        zoom: 5,
        styles: style,
        mapTypeControl: true
    });
}
// -------------- Model of towns -----------//
var TownModel = function (data) {
    var self = this;
    self.name = data.name;
    self.state = data.state;
    self.location = data.location;
    self.visible = data.visible;
    self.lat = data.location.lat;
    self.lng = data.location.lng;
};
// ------ Town Data Hardcoded----------//
var town = [
    {
        name: "El Paso",
        state: "Texas",
        location: {
            lat: 31.761878,
            lng: -106.485022
        },
        visible: ko.observable(true)
    },
    {
        name: "Independance",
        state: "Missouri",
        location: {
            lat: 39.087241,
            lng: -94.362446
        },
        visible: ko.observable(true)
    },
    {
        name: "Santa Fe",
        state: "New Mexico",
        location: {
            lat: 35.674943,
            lng: -105.960722
        },
        visible: ko.observable(true)
    },
    {
        name: "Bent's Old Fort",
        state: "Colorado",
        location: {
            lat: 38.040440,
            lng: -103.429584
        },
        visible: ko.observable(true)
    },
    {
        name: "Las Vegas",
        state: "New mexico",
        location: {
            lat: 35.613590,
            lng: -105.219043
        },
        visible: ko.observable(true)
    },
    {
        name: "Brownsville",
        state: "Texas",
        location: {
            lat: 25.945494,
            lng: -97.476992
        },
        visible: ko.observable(true)
    }
];
// ------ TownsViewModel----------//
var TownsViewModel = function () {
    var self = this;
    // data of the towns
    self.townList = ko.observableArray([]);
    // Towns shown on screen by default
    town.forEach(function (item) {
        self.townList.push(new TownModel(item));
    });


    self.townList().forEach(function (place) {
        var marker = new google.maps.Marker({
            position: place.location,
            map: map,
            title: place.name,
            icon: defaultIcon,
            clickedicon: clickedIcon,
            lat: place.location.lat,
            lng: place.location.lng,
            animation: google.maps.Animation.DROP
        });
        place.marker = marker;
        markers.push(marker);
        
        // default icon is blue

        function resetMarker(soup) {
            for (var b = 0; b < soup.length; b++) {
                if (soup[b].icon != defaultIcon) {
                    soup[b].setIcon(defaultIcon);
                    console.log(soup[b].title);
                } else {
                    marker.setIcon(clickedIcon);
                    console.log("not");
                }
            }
        }
        // Setting content for infowindow to be changed

        this.infowindow = new google.maps.InfoWindow();
        function populateInfoWindow(marker, infowindow) {
            if (infowindow.marker != marker) {
                infowindow.marker = marker;
                infowindow.setPosition(this.marker);
                infowindow.open(map, marker);
            }
        }
        // Opening of infowindow
        marker.addListener('click', function () {
            getWeather(marker.lat, marker.lng);
            populateInfoWindow(this, infowindow);
            infowindow.open(map, marker);
            resetMarker(markers);
            artsyContent(marker.lat, marker.lng);
        });
        
    });

    // When town is clicked, before or after filtering, 
    // it shows foursquare API details underneath, change of 
    // marker color and opening of infowindow
    self.townInformation = ko.observable('');
    self.townList().forEach(function (place) {
        this.townInformation = function (heroes) {
            getWeather(heroes.lat, heroes.lng);
            artsyContent(heroes.location.lat, heroes.location.lng);
            infowindow.open(map, heroes.marker);
        };
    });
    // Setting of filtering by states
    // filters are states
    self.states = ko.observableArray(["All", "Texas", "Missouri", "Colorado", "New Mexico"]);
    // value is filter
    self.filter = ko.observable('');
    // items are town, shows towns filtered and their markers
    self.filterTown = ko.computed(function () {
        var filter = self.filter();
        if (!filter || filter == "All") {
            artsyContent("");
            self.townList().forEach(function (item) {
                item.marker.setVisible(true);
            });
            infowindow.close();
            return self.townList();
        } else {
            return ko.utils.arrayFilter(self.townList(), function (z) {
                if ((z.state == filter) === true) {
                    z.marker.setVisible(true);
                    return z.name;
                } else {
                    z.marker.setVisible(false);
                }
            });
        }
    });
};
//ko.applyBindings(new townsViewModel());
$(document).ready(function () {
    ko.applyBindings(TownsViewModel);
});