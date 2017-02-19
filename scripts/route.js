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
/*    .config(function configureAnimate( $animateProvider ) {
                // By default, the $animate service will check for animation styling
                // on every structural change. This requires a lot of animateFrame-based
                // DOM-inspection. However, we can tell $animate to only check for
                // animations on elements that have a specific class name RegExp pattern
                // present. In this case, we are requiring the "animated" class.
                // --
                // NOTE: I have personally seen a performance boost using this approach
                // on some complex page. The AngularJS documentation also says that
                // this can also be really beneficial for low-powered mobile devices,
                // but I don't do much mobile.
                $animateProvider.classNameFilter( /\banimated\b/ );
            }
    );*/
