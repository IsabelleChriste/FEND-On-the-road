// Foursquare API 
/*
client ID PGYP1LJFZC04BQEEN32VRZMX45COJKIHL23UJJ1A024BKBKP
client sc L0013MEDDZ2HIFNGSNWIZI0YC1ZVCCTONLJ4WAIX33IZPQ2J
YYYYMMDD
URL :  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=PGYP1LJFZC04BQEEN32VRZMX45COJKIHL23UJJ1A024BKBKP&client_secret=L0013MEDDZ2HIFNGSNWIZI0YC1ZVCCTONLJ4WAIX33IZPQ2J&v=20170327

function artsyContent(itemlat, itemlng) {
    var artContent = [];
    var begUrl = 'https://api.foursquare.com/v2/venues/explore?ll=';
    var artsOnly = '&section=arts';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130';
    var fsUrl = begUrl + itemlat + ',' + itemlng + artsOnly + endUrl;
    // Function to get the list display under the title
    $.getJSON(fsUrl, function (data) {
        var allArtsyVenues = data.response.groups[0].items;
        for (var i = 0; i < 4; i++) {
            var venueName = allArtsyVenues[i];
            var artName = venueName.venue.name;
            artContent.push(artName);
            //var artAdress = venueName.venue.location.formattedAddress; 
            //var artCategory = venueName.venue.categories[0].name;
        }
        console.log(artContent);
        // If the URL does not work, an error message will appear    
    }).fail(function (json) {
         artContent.push('Select a town to see the art!');
    });
    //.error(function (e) {$("#errormessage").text('Venues not available!');});  
    return false;

}
*/
function artsyContent(itemlat, itemlng) {
    var artContent = [];
    var begUrl = 'https://api.foursquare.com/v2/venues/explore?ll=';
    var artsOnly = '&section=arts';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130';
    var fsUrl = begUrl + itemlat + ',' + itemlng + artsOnly + endUrl;
    // Function to get the list display under the title
    $.getJSON(fsUrl, function (data) {
        var allArtsyVenues = data.response.groups[0].items;
        for (var i = 0; i < 4; i++) {
            var venueName = allArtsyVenues[i];
            var artName = '<li>' + venueName.venue.name  +'</li>' + '<p>' + venueName.venue.location.formattedAddress + '</p>';
            artContent.push(artName);
            //var artCategory = venueName.venue.categories[0].name;
            var content = '<div class="contentement">' + 'A few interesting art Venues in this town:' + '<ul>' + artContent + '</ul>' + '</div>';
        }
        infowindow.setContent(content);
        // If the URL does not work, an error message will appear    
    }).fail(function (json) {
         alert('No information available');
    });
    //.error(function (e) {$("#errormessage").text('Venues not available!');});  
    return false;
}