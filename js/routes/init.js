'use strict';

define(['modules/App'], function (App) {

	var route = App.config(function ($routeProvider, $locationProvider, $provide) {

		$locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider.when('/', {
      controller: 'Init',
			templateUrl: 'templates/main.html'
		})
		.otherwise({ redirecTo: '/'});

		$provide.decorator('$log', function($delegate, $sniffer) {
			var _log = $delegate.log; //Saving the original behavior

			$delegate.info = function(message) {
				console.log(message);
			};

			$delegate.log = function(message) {};

			$delegate.error = function(message) {
			    alert(message);
			}

			return $delegate;
		});

	});

	return route;
});
