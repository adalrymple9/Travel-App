

function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 26.119843, lng: -80.140988}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

var locations = [
  {lat:  26.119728, lng: -80.149297},
  {lat:  26.115181, lng: -80.138396},
  {lat:  26.134281, lng: -80.136237},
  
]


// // Below is the code for Google's autocomplete functionality. User can search by city or establishment. 
// var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
// autocomplete.bindTo('bounds',map);//End of autocomplete
// var infoWindow = new google.maps.InfoWindow();
// var marker = new google.maps.Marker({
//   map: map
// });

// google.maps.event.addListener(autocomplete, 'place_changed', function() {
//   infoWindow.close();
//   var place = autocomplete.getPlace();
//   if (place.geometry.viewport) {
//     map.fitBounds(place.geometry.viewport);
//   } else {
//     map.setCenter(place.geometry.location);
//     map.setZoom(17);
//   }//End of if/else statement
//   marker.setPosition(place.geometry.location);
//   infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
//   infoWindow.open(map, marker);
//   google.maps.event.addListener(marker,'click',function(e){
//     infoWindow.open(map, marker);
//   });//End of function(e)
// });
// // Set up event listener for when user clicks enter or for "blur"