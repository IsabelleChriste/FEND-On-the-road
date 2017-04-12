# FEND-On-the-road
Project for Udacity with a map, marker and infowindow, as well as using KnockoutJS and API integration, in this case Foursquare API and OpenWeather API.

The town were chosen as they are mentionned in the diaries of Susan Shelby Magoffin who travelled the Santa Fe trail in the late 1840s. More infos about her:
[Link](https://en.wikipedia.org/wiki/Susan_Shelby_Magoffin)

## Install and Run

Download or clone the project from:
[Link]()
Open it on your favorite browser.

Project has been tested on these browser:

* Chrome Version 55.0.2883.87 m (64-bit)
* Firefox 51.0.1 (32-bit)

## How to use the map

* Every marker is clickable. Once it is clicked, it changes color and an infowindow displays, stating the current weather description.
* Every town shown by default is clickable. Once it is clicked, its marker will change color, the infowindow will open as well and a list of places of art for that town are displayed underneath the list.
* The list can be filtered by states, once a state is chosen, the town and their marker will show, the others will become invisible. 
* To reset all marker, refresh the page or select "All" in the dropdown menu and click anywhere on the map to close the infowindows.

### Responsive

Media query used to make the website responsive for the following screen :

* Nexus 5
* iPad
* 1600 x 900

### Map style

Style of map is called Old time Fantasy by Pandathese, January 30, 2016. [Snazzy Map](https://snazzymaps.com/style/50689/old-time-fantasy/)

### API

* Foursquare API 
* Google Map API
* OpenWeatherMap API

### Inspiration from fellow Udacity student to understand MVVM structure and API in general

Christiana010, [their map](https://github.com/Christianq010/Neighborhood-Map-Master/blob/master/js/app.js)
JieLi-Montreal, [their map](https://github.com/JieLi-Montreal/Neighborhood_Map/blob/master/js/neighborhood.js)
jcp510, [their map](https://github.com/jcp510/neighborhood-map/blob/master/main.js)

Shout out to all the other student who asked the questions I had before me !! 