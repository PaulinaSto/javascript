// MEINE IP ADRESSE: 192.168.50.49

/**
 * SOCKET MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */

var app = window.app || new Object();

app.socket = (function () {
'use strict';
// - - - - - - - -

	var 
		fn = {},
		socket = undefined,
	endvar;

	fn.init = function () {
		console.log('socket init!');

		socket = new WebSocket('ws://192.168.50.49:8888'); 
		socket.addEventListener('data', fn.onMessage);
	};
	fn.send = function () { 
		console.log('socket send!'); 
		socket.send('Nachricht an den Server!');
	};
	fn.onMessage = function (data) { 
		console.log('socket on message!');
		console.log('data: ' + data);	 
	};

	return fn;
// - - - - - - - -
})();

window.onload = function () {
'use stict';
// - - - - - - - -

	app.socket.init();

// - - - - - - - -
};