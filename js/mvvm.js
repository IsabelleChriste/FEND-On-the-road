// Global scope //
var map;
var maps;
var infowindow;
var marker;
var google;
var window;
var markers = [];
var defaultIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|1CBECC';
var clickedIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFA500';
var townClickedIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF00A9';
// -------------- Map -----------//
function initMap() {
    // Center of the map
    var mapcenter = {
        lat: 34.200532,
        lng: -98.0646662,
    };

    // Creating map
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapcenter,
        zoom: 5,
        //styles: style,
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
    },
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
        
        marker.addListener('click', toggleBounce);
        marker.addListener('click', changeMarker);

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function () {
                    marker.setAnimation(null);
                }, 2100);
            }
        }

        function changeMarker() {
            if (marker.icon !== defaultIcon) {
                marker.setIcon(defaultIcon);
            } else {
                marker.setIcon(clickedIcon);
                setTimeout(function () {
                    marker.setIcon(defaultIcon);
                }, 2100);
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
            populateInfoWindow(this, infowindow);
            infowindow.open(map, marker);
            artsyContent(marker.lat, marker.lng);
        });
        
    });
    function changeMarker(pear) {
            if (pear.icon !== defaultIcon) {
                pear.setIcon(defaultIcon);
            } else {
                pear.setIcon(townClickedIcon);
                setTimeout(function () {
                    pear.setIcon(defaultIcon);
                }, 2500);
            }
        }
    // When town is clicked, before or after filtering, 
    // it shows foursquare API details underneath, change of 
    // marker color and opening of infowindow   
    self.artContentList = ko.observableArray('');
    var artName = ko.observable('');
    
    self.townInformation = ko.observable(''); 
    self.townList().forEach(function (place) {
        this.townInformation = function (heroes) {
            changeMarker(heroes.marker);
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
            self.townList().forEach(function (item) {
                item.marker.setVisible(true);
            });
            infowindow.close();
            return self.townList();
        } else {
            return ko.utils.arrayFilter(self.townList(), function (z) {
                if ((z.state == filter) === true) {
                    z.marker.setVisible(true);
                    infowindow.close();
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
    ko.applyBindings(new TownsViewModel);
});