// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.
var geo = (function () {
  var map;
  var fn = {};

  fn.initialize = function () {
    var mapOptions = {
      zoom: 6
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(position) {
        
        var data = {};
        data.longitude = position.coords.longitude;
        data.latitude  = position.coords.latitude;
        data.altitude  = position.coords.altitude;
        data.altitudeAccuracy  = position.coords.altitudeAccuracy;
        
        data.heading   = position.coords.heading;
        data.speed     = position.coords.speed;
        
        data.timestamp = position.timestamp;

        // Domausgabe
        for ( var member in data ) {
          var element = document.createElement('li');
          var text    = document.createTextNode(member + ': ' + data[member]);
          element.appendChild(text);
          document.querySelector('#geo').appendChild(element); 
        }

        var pos = new google.maps.LatLng(data.latitude,
                                         data.longitude);

        var infowindow = new google.maps.InfoWindow({
          map: map,
          position: pos,
          content: 'Location found using HTML5.'
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }
return fn;
})();

google.maps.event.addDomListener(window, 'load', geo.initialize);
