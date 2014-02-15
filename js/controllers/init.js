'use strict';

define(['modules/App', 'jquery', 'services/localStorage'], function (App, $) {

	var controller = App.controller('Init', function ($scope, $location, localStorage, $log) {

    $scope.hello = 'Boilerplate JS';

	});

	return controller;

});
