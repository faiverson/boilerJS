require([
	'jquery',
	'angular',
	'bootstrap',
	'modules/App',
	'routes/init',
	'controllers/init',
],
function ($, angular) {
	angular.element(document).ready(function() {
			angular.bootstrap(document, ['App']);
	});
});
