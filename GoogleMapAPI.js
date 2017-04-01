// This option allows you to display the location you are looking for. Right now LatLng is HARDCODED
// but it will become dynamic as time progresses. Need to create vars for the properties. The information will
// come from the information provided by Eventful
var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Below is the code for Google's autocomplete functionality. User can search by city or establishment. 
var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions = {
  // types: ['establishment'] //Selecting 'establishment' as the paramenter for types restricts it to just businesses
  						   // Consider taking out this selector to be able to look for everything available
};
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});

google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infoWindow.close();
  var place = autocomplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  marker.setPosition(place.geometry.location);
  infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  infoWindow.open(map, marker);
  google.maps.event.addListener(marker,'click',function(e){

    infoWindow.open(map, marker);

  });
});

// Set up event listener for when user clicks enter or for "blur"