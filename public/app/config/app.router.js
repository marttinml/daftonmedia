/*global angular*/
(function () {

    var router = function ($routeProvider, $locationProvider) {
        var baseUrl = 'app/modules/';
        // Home
        $routeProvider.when('/', {
            templateUrl: baseUrl + 'home/views/home.view.html',
            controller: 'HomeController'
        });
        $routeProvider.otherwise({redirectTo : '/'});
        $locationProvider.html5Mode({
            enabled: true
            // ,requireBase: false
        });
    };

    router.$inject = ['$routeProvider', '$locationProvider'];
    angular.module('app').config(router);

})();