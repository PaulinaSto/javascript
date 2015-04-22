/* Kontrollstrukturen */

(function () {
'use strict';
// - - - - - - -

	// Wiederholungen
	// Array
	var i = 0;
	var arr = [true, "zwei", 3];
	for (;;) {
		i++;
		if (i>arr.length) break;
	};
	for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
	};

	// Object
	var obj = {key : 'value'};
	for ( var member in obj) {
			console.log(obj[member]);
	};

	var c = 0;
	while ( c < arr.length ) {
		console.log(arr[c]);
		c++;
	};

	var c = 0;
	do {
		console.log(arr[c]);
		c++;
	} while ( c < arr.length );

	// Bedingungen
	if ( c === 3 ) {
		console.log( 'C hat den Wert 3 und ist vom Typ number' );
	} else if ( c === 2 ) {
		console.log( 'C hat den Wert 2 und ist vom Typ number' );
	} else {
		console.log('C ist irgendwas anderes!');
	}

var c = 1;
	// Schalter
	switch (c) {
		case 2:
			console.log('C ist 2');
		case 1:
		case 3:
		case 4:
			console.log('C ist 1,2,3 oder 4');
			break;
		default:
			console.log('C ist etwas anderes!');
			break;
	}

	// Fehlerbehandlung
	var do = function () {
		// do something
		throw('Fehlerausgabe');
	};

	try {
		// Programmablauf
		do();
	} catch (error) {
		// Tue etwas, wenn ein Fehler passiert
		error.getMessage();
	}
// - - - - - - -
})();























