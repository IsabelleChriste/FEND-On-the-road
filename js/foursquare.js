// Foursquare API 
/*
client ID PGYP1LJFZC04BQEEN32VRZMX45COJKIHL23UJJ1A024BKBKP
client sc L0013MEDDZ2HIFNGSNWIZI0YC1ZVCCTONLJ4WAIX33IZPQ2J
YYYYMMDD
URL :  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=PGYP1LJFZC04BQEEN32VRZMX45COJKIHL23UJJ1A024BKBKP&client_secret=L0013MEDDZ2HIFNGSNWIZI0YC1ZVCCTONLJ4WAIX33IZPQ2J&v=20170327
*/
function artsyContent(itemlat, itemlng) {
    var allTheArt = $('#list');
    // URL retrieved from Foursquare API
    allTheArt.text("");

    var begUrl = 'https://api.foursquare.com/v2/venues/explore?ll=';
    var artsOnly = '&section=arts';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130';

    var fsUrl = begUrl + itemlat + ',' + itemlng + artsOnly + endUrl;
    console.log(fsUrl);
    // Function to get the list display under the title
    $.getJSON(fsUrl, function (data) {
        var allArtsyVenues = data.response.groups[0].items;
        for (var i = 0; i < 6; i++) {
            var venueName = allArtsyVenues[i];
            allTheArt.append('<li id="toVisit">' + venueName.venue.name + '</li>' + '<p>' + venueName.venue.location.formattedAddress + '</p>' + '<p>' + 'This venue category is: ' + venueName.venue.categories[0].name + '</p>');
        }
        // If the URL does not work, an error message will appear    
    }).fail(function (json) {
        $("#errormessage").text('Select a town to see the art!');
    });
    //.error(function (e) {$("#errormessage").text('Venues not available!');});  
    return false;

}