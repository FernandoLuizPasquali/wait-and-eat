(function (){
	'use strict';

	angular
	.module('app',['ngRoute','app.landing'])
	.config(configFuntion);

	configFuntion.$inject = ['$routeProvider'];

	function configFuntion($routeProvider){
		$routeProvider
		.otherwise({
			redirectTo: '/'
		});

	}
})();