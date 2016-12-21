angular
	.module('todoApp', ['ui.router'])
	.config(routerConfig);

function routerConfig($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "home.html"
		})
		.state('archive', {
			url: "/archive",
			templateUrl: "archive.html"
		});

	$urlRouterProvider.otherwise("/");
}
