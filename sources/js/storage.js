/**
 * STORAGE MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */

var app = window.app || new Object();

app.storage = (function (ajax) {
'use strict';
// - - - - - - - -

	// Variablendeklaration, Initialisierung
	var
		url   = undefined,

		fn    = {},
		data  = {},
		
		store     = function () {},
		onOnline  = function () {},
		onOffline = function () {},
	endvar;

	store = function () {
		if (data) {

			// Zweiwert-Speicher füllen:
			// Jede Variable erhält eine eigene Zeile
			for (var member in data) {
				localStorage.setItem(member, data[member]);
			}

			// Datenobjekt als Ganzes speichern
			localStorage.setItem('data', JSON.stringify(data) );
		};
	};

	onOnline    = function () {
		console.log('ONLINE');
		
		// Daten aus dem Storage auslesen
		data = localStorage.getItem(data);
		url  = localStorage.getItem(url);

		// Storage löschen
		for ( var member in localStorage ) {
			localStorage.removeItem(member);
		}

		ajax.load(url, data);
	};
	onOffline   = function () {
		console.log('OFFLINE');
	};
		
	fn.onSubmit = function (event) {
		console.log('submitted!');
		event.preventDefault();
		event.stopPropagation();

		// getData(selector, callback);
		url = event.target.getAttribute('action');
		localStorage.setItem('url', url);

		data.email    = document.querySelector('input#email').value; 
		data.password = document.querySelector('input#password').value;
		data.url      = url;

		if ( !navigator.onLine ) {
			store();
		} else {
			ajax.load(url, data);
		}
	};

	// Eventlistener (Nicht DOM-abhängig!)
	window.addEventListener('online',  onOnline )
	window.addEventListener('offline', onOffline)

	// Publikation
	return fn;
// - - - - - - - -
})(app.ajax);

// window.addEventListener('load', onLoad)
window.onload = function () {
	document.querySelector('form').addEventListener('submit', app.storage.onSubmit);
};