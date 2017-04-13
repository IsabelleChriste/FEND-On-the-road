//Get the weather from Open Weather Map API 
function getWeather(itemlat, itemlng) {
    var storm = $('#weather');
    storm.text("");
    var begUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=';
    var middleUrl = '&lon=';
    var endUrl = '&APPID=fe3a2d75fab8702c20eeda810fc8e1e1';
    var weatherUrl = begUrl + itemlat + middleUrl + itemlng + endUrl;
    $.getJSON(weatherUrl, function (data) {
        var currentweather = data.weather[0].main;
        storm.append(currentweather);
    }).fail(function (json) {
        $("#weather").text('Weather not available!');
    });
}