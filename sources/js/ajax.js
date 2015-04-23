/**
 * AJAX MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 22.04.2015
 */




// Module Block  Pattern
// - - - - - - - - - - -
var app = window.app || new Object();

app.ajax = (function () {
'use strict';
// - - - - - - - -

	// Variablendeklaration, Initialisierung
	var
		fn  = {},
		xhr = new XMLHttpRequest(),
		onReadyStateChange = function () {},
	endvar;

	// Funktionen
	fn.load = function (url) {
		var data = { key : 'value' };

		xhr.open('GET', url); // deprecated-> true); // async!
		xhr.send( JSON.stringify(data) );

		xhr.addEventListener('readystatechange', onReadyStateChange);
	};

	onReadyStateChange = function () {

		switch (xhr.readyState) {
			case 0:
				console.log('Kein XMLHttpRequest!')
				break;
			case 1:
				console.log('XMLHttpRequest opened!')
				break;
			case 2:
				console.log('XMLHttpRequest sent!')
				break;
			case 3:
				console.log('Response des Http Headers!')
				break;
			case 4:
				console.log('Response retrieved!')
				// document.querySelector('#main-content').innerHTML = xhr.responseText;
				//var serialString = JSON.stringify(data);

				var data = JSON.parse(xhr.responseText);
				console.log(data[0].name);
				console.log(data[0].email);
				break;
		};

	};

	// Publikation
	return fn;
// - - - - - - - -
})();