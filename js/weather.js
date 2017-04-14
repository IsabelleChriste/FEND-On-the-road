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