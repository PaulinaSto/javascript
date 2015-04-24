
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
		map  = undefined,
		data = {},
	endvar;

	fn.initialize = function () {
		var mapOptions = { zoom: 6 };
		map = new google.maps.Map(document.querySelector('#map-canvas'), mapOptions);
	}

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

			// Domausgabe
			for ( var member in data ) {
				var element = document.createElement('li');
				var text    = document.createTextNode(member + ': ' + data[member]);
				element.appendChild(text);
				document.querySelector('#geo').appendChild(element); 
			}

			// Google Maps Ausgabe

    		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    		var infowindow = new google.maps.InfoWindow({
													        map: map,
													        position: pos,
													        content: 'Location found using HTML5.'
     		});
			map.setCenter(pos);

		// navigator.userAgent -> String mit Browser und Systeminfos
		// navigator.vendor    -> String mit Anbieterinfos

	
		});
	};
	return fn;
// - - - - - - - -
})();

window.onload = function () {
'use strict';
// - - - - - - - -

	app.geo.getData();
	app.geo.initialize();


// - - - - - - - -
};