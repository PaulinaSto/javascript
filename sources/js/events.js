/**
 * EVENTS MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 21.04.2015
 */




// Module Block Pattern
// - - - - - - - - - - -
var app = window.app || new Object(); // Defaultoperator!

app.events = (function (ajax) {
'use strict';
// - - - - - - - -

	// Variablendeklaration, Initialisierung
	// Single var Block!
	var
		fn   = {},
		data = {},
		obj  = {},
		collection = [],
		onClick    = function () {},
		onAnchorClick    = function () {},
		onBtnRemoveClick = function () {},
	endvar;
	

	// Funktionsobjekte
	fn.remove = function (selector) {
		var collection = document.querySelectorAll(selector);
		
		for (var i=0; i<collection.length; i++) {
			collection[i].remove();
		};
	};

	fn.log = function (message) {
		if ( message && typeof message === 'string' ) {	
			console.log(message);
		} else {
			// idle;
		};
	};


	onBtnRemoveClick  = function (event) {
		event.preventDefault();
		// Eventauslösenden Objekt ermitteln
		var selector = event.target.getAttribute('data-selector');

		// for ( var member in event) {
		// 	console.log(member + ' [' + typeof event[member] + ']');
		// }

		if (selector) {
			fn.remove(selector);
		}
	};

	onAnchorClick = function(){
		event.preventDefault();

		var url = undefined;

		// Eventauslösendes Objekt ermitteln
		console.log(event.target.tagName);
		console.log(event.currentTarget);

		// if (event.target.tagName === 'A')

		// Url ermitteln
		url = event.target.getAttribute('href');

		// Loader aufrufen
		if (url) {
			ajax.load(url);
		};
	};

	onClick = function (event) { 
		// Den Browser daran hindern, etwas zu tun!
		event.preventDefault();

		// Propagation stoppen
		// event.stopPropagation();

		// DOM Veränderungen
		var 
			domObj  = undefined,
			textObj = undefined,
			text    = 'Hallo neues Element',
		endvar;

		// Ein neues DOM Element erzeugen
		domObj  = document.createElement('p');
		textObj = document.createTextNode(text);

		domObj.appendChild(textObj);
		document.querySelector('body').appendChild(domObj);
		
		// Löschen eines DOM Objektes
		// setTimeout(function () { domObj.remove(); }, 2000);

	};

	// Eventlistener (auf Ereignisse hören)
	collection = document.querySelectorAll('.btn-remove');
	for ( var i=0; i<collection.length; i++ ) {
		collection[i].addEventListener('click', onBtnRemoveClick);
	}

	collection = document.querySelectorAll('a[href]');
	for ( var i=0; i<collection.length; i++ ) {
		collection[i].addEventListener('click', onClick);
	}

	obj = document.querySelector('#nav-main');
	obj.addEventListener('click', onAnchorClick, false); // useCapturing Flag auf false setzen für Eventdelegation
	
	// $('nav').on('click', 'a', data, handler);

	// Publikation
	return fn;
// - - - - - - - -
})(app.ajax);


app.events.log('Hallo Modul!');

/*


Aufgabe:
Implementieren Sie einen Button, der das neue Element wieder löscht (bei Click).

im HTML: <button>Löschen</button>

Implementieren Sie eine Funktion, die den Klick auf einen Anchor abfängt und die URL ermittelt.
Damit soll dann eine load() Funktion aufgerufen werden, die per Ajax die angeforderte Seite lässt.
*/




