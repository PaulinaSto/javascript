
/**
 * LOCATION MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */

var app = window.app || new Object();

app.geo = (function () {
'use strict';
// - - - - - - - -

	var 
		fn   = {},
		data = {},
	endvar;

	fn.getData = function () {

		if (navigator.geolocation === true) console.log('Geolocation!');

		navigator.geolocation.getCurrentPosition( function (position) {
			// Datenaufnahme
			data.latitude  = position.coords.latitude;
			data.longitude = position.coords.longitude;
			data.accuracy  = position.coords.accuracy;
			data.altitude  = position.coords.altitude;
			data.altitudeAccuracy  = position.coords.altitudeAccuracy;
			
			data.heading   = position.coords.heading;
			data.speed     = position.coords.speed;
			
			data.timestamp = position.timestamp;

			console.dir(data);

			// Domausgabe
			for ( var member in data ) {
				var element = document.createElement('li');
				var text    = document.createTextNode(member + ': ' + data[member]);
				element.appendChild(text);
				document.querySelector('#geo').appendChild(element); 
			}

			// Google Maps Ausgabe

    		var pos = new google.maps.LatLng(data.latitude, data.longitude);
    		var infowindow = new google.maps.InfoWindow({
													        map: map,
													        position: pos,
													        content: 'Location found using HTML5.'
     		});

    		initialize();
			map.setCenter(pos);

		// navigator.userAgent -> String mit Browser und Systeminfos
		// navigator.vendor    -> String mit Anbieterinfos

	
		});
	};
	return fn;
// - - - - - - - -
})();

window.onload = function () {
'use stict';
// - - - - - - - -

	app.geo.getData();

// - - - - - - - -
};