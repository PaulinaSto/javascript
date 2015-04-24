/**
 * CACHE MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */

var app = window.app || new Object();

app.cache = (function () {
'use strict';
// - - - - - - - -

	// Variablendeklaration, Initialisierung
	var
		_ = {},
	endvar;


	_.onUpdateReady = function () { 
		console.log('cache update ready!'); 
		applicationCache.swapCache();
		location.reload();
	};
	_.onIdle        = function () { console.log('cache idle!'); };
	_.onChecking    = function () { console.log('cache checking!'); };
	_.onDownloading = function () { console.log('cache downloading!'); };
	_.onObsolete    = function () { console.log('cache obsolete!'); };
	_.onNoUpdate    = function () { console.log('cache no update!'); };

	// Eventlistener
	applicationCache.addEventListener('updateready', _.onUpdateReady);

// - - - - - - - -
})();
