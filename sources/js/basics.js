/**
 * Javascript Basics
 *
 * Hier stehen die wichtigsten Grundlagen zur Sprache
 * Javascript: Variablen, Typen und Scopes.
 *
 * @author Michael
 * @since 20.04.2015
 */

///<summary></summary>




// Variablentypen nach ECMA

// EINFACHE VARIABLENTYPEN
// Strings (Literale)
var a = 'Hallo Welt';

// Concatening - Verketten von Literalen
var b = ', du bist schön!';

console.log(a + b);
console.log(1 + 2 + ' Text'); // 3 Text
console.log('Text ' + 1 + 2);  // Text 12




// Numerische Variablen
// Unified number type (64bit float aka. double float)
var a = 3.1415;
var a = 3;

var a = 0.1;
var b = 0.2;
var c = 0.3;

window.a

window.document.querySelector('#my-id');

var document = undefined;
window.document = undefined;

// console.log(a + b + c);
// (a + b) + c != a + (b + c)

console.log(typeof a);
console.log(a);

// alert(a);
// window.document.write(a);

// Boolsche Variable
var a = true;
var b = false;

// Truthy/Falsy
console.log( true == '1' );  // Wertevergleich
console.log( true === 1 ); // Werte- und Typenvergleich

// Falsy values
// false
// ''			// Leerstring <- leeres Objekt!
// undefined   // undefined, Variable exisiert, hat aber keinen Wert
// null 		// null, wenn Variable nicht existiert

var a = '';
console.log(typeof a);
var a = null;
console.log(typeof a);
var a = undefined;
console.log(typeof a);

if(a) {}



// Arrays, Objekte
var arr = ['wert1', 'wert2', 2, true];
console.log(typeof arr);

// Ausgabe eines Arraywertes
console.log(arr[1]); // wert2

// Hinzufügen eines neuen Eintrags
arr.push('neuer Wert');
arr[6]='ganz neu';



console.log('- - - - -');
// Array Iteration
for ( var i=0; i<arr.length; i++ ) {
	console.log(arr[i]);
};
console.log('- - - - -');
console.log(arr);

var obj = { name1 : 'value', name2 : 'wert', a : 2, b : true };

// Ausgabe eines Objektwertes
console.log(obj['name1']);
console.log(obj.name1);

// Iteration über ein Objekt
for (var member in obj) {
	console.log(member + ': ' + obj[member]);
};

// Javascript Object Notation
// JSON
var obj = { 
	name1 : 'value', 
	name2 : 'wert', 
	a     : 2, 
	b     : true
};


// Allgemeines JSON
// { 
// 	"name1" : "value", 
// 	"name2" : "wert", 
// 	"a"     : 2, 
// 	"b"     : true
// }


console.log('- - - - -');
console.log('- - - - -');
console.log('- - - - -');

// Funktionen
// Funktionen ohne Namen (anonyme Funktion)!
// Lambda-Funktion, Lambda-Ausdruck
var fn = function (m) { console.log(m); };

console.log(typeof fn)

fn();
fn;

function log (m) {
	console.log(m);
};

log('Hallo Funktion!');




// In Javascript ist alles ein Objekt
// es gibt ein globales unbenanntes Objekt vom Typ function!
function () {
	//do something awesome!
};

// Selbstaufrufend!
// Immediate Evoked Funktion Expression (IEFE)
(function () {
// - - - - -

	var fn = function (m) {
		console.log(m);
	};

	fn('Hallo Funktion!');

// - - - - -
})();



// jQuery
$(document).ready(function () {

});

// Javascript
window.onload = function () {

};


// Scopes
// (Gültigkeitsbereiche von Objekten und Werten)
// Alle Scopes sind Objectscopes!

(function () {
'use strict';

	w = 5;							// Geht auch, aber ist (implizit) global! mit 'strict' Fehler!!!

	var x = 1; 						// x ist innerhalb der IEFE gültig

	var obj = {
		y : 2,
		z : 3
	};

	var fn  = function () {
		var v = 4;
	};

	console.log(x); 				// 1
	console.log(y);					// undefined
	console.log(v);					// undefined
	console.log(obj.y);				// 2

	fn();
	console.log(fn.v);				// 4	

})();

console.log(x); 					// undefined
console.log(w); 					// 5































