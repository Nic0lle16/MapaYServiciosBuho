var map;
var directionsService;
var directionsRenderer;

function initMap() {
  // The map, centered on an initial location
  const center = { lat: 40.774102, lng: -73.971734 };
  const options = { zoom: 15, scaleControl: true, center: center };
  map = new google.maps.Map(document.getElementById('map'), options);

  // Initialize Directions service and renderer
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

function showRoute() {
  // Get the values from the text inputs
  var locationAInput = document.getElementById('locationA').value;
  var locationBInput = document.getElementById('locationB').value;

  // Use the Geocoding API to convert the location inputs to coordinates
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': locationAInput }, function (resultsA, statusA) {
    if (statusA === 'OK') {
      var locationA = resultsA[0].geometry.location;

      geocoder.geocode({ 'address': locationBInput }, function (resultsB, statusB) {
        if (statusB === 'OK') {
          var locationB = resultsB[0].geometry.location;

          // Calculate and display the route
          calculateAndDisplayRoute(locationA, locationB);
        } else {
          // Display an error message if geocoding fails for location B
          document.getElementById('msg').innerHTML = 'Geocoding failed for Location B: ' + statusB;
        }
      });
    } else {
      // Display an error message if geocoding fails for location A
      document.getElementById('msg').innerHTML = 'Geocoding failed for Location A: ' + statusA;
    }
  });
}

function calculateAndDisplayRoute(locationA, locationB) {
  var request = {
    origin: locationA,
    destination: locationB,
    travelMode: 'DRIVING'
  };

  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      // Display the route on the map
      directionsRenderer.setDirections(result);

      // Display a message
      document.getElementById('msg').innerHTML = 'Route displayed from Location A to Location B.';
    } else {
      // Display an error message if route calculation fails
      document.getElementById('msg').innerHTML = 'Error displaying route: ' + status;
    }
  });
}

