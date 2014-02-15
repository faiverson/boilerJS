require.config({

	deps: ['main'],

	config: {
			i18n: {
					locale: 'en-us' // language selected by default
			}
	},

	paths: {
		"jquery": "libs/vendor/jquery-1.10.1.min",
		"bootstrap": "libs/vendor/bootstrap.min",
		"lodash": "libs/vendor/underscore.lodash",
		"handlebars": "libs/vendor/handlebars",
		"angular": "libs/vendor/angular/angular",
		"angular-resource": "libs/vendor/angular/angular-resource",
		"angular-route": "libs/vendor/angular/angular-route",
		"templates": '../templates'
	},

	shim: {
		"bootstrap": {
				deps: ["jquery"],
				exports: "bootstrap"
		},
		"angular": {
				exports: "angular"
		},
		"angular-resource": {
				deps:["angular"]
		},
		"angular-route": {
				deps:["angular"]
		}
	}
});
