'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
define(['modules/App'], function (App) {
	var factory = App.factory('localStorage', function () {
		var STORAGE_ID = 'boilerJS-angular';

		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (todos) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			}
		};
	});

	return factory;
});
