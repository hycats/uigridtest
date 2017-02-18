var mymodule = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ui.grid', 'ui.grid.emptyBaseLayer']);

mymodule
    .config(function ($routeProvider) {
        $routeProvider
            .when('/top', {
                templateUrl: 'views/top.html'
                //controller: 'MyTopController'
            })
            .when('/kakeibo', {
                templateUrl: 'views/kakeibo.html'
                //controller: 'MyKakeiboController'
            })
            .when('/graph', {
                templateUrl: 'views/graph.html'
                //controller: 'MyGraphController'
            })
            .when('/setting', {
                templateUrl: 'views/setting.html'
                //controller: 'MySettingController'
            })
            .otherwise({
                redirectTo: '/top'
            });
    });
