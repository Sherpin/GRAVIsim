(function(){
    angular.module('utils', []);
    angular.module('gravisim', [
        'utils',
        'ngRoute', 
        'ui.bootstrap',
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $routeProvider.
        when('/', {
            templateUrl: 'static/fragments/home.html',

        }).
        when('/about', {
            templateUrl: 'static/fragments/about.html',
        }).
        when('/simulate', {
            templateUrl: 'static/fragments/simulate.html',
        }).
        when('/my-account', {
            templateUrl: 'static/fragments/my-account.html',
        }).
        when('/contact', {
            templateUrl: 'static/fragments/contact.html',
        }).
        when('/401', {
            templateUrl: '/static/fragments/home.html',

        }).
        otherwise({
            redirectTo: '/'
                });
        }
    ]).
    run(['$rootScope', '$location', 'authentication',
        function($rootScope, $location, $authentication){
            $rootScope.$on('$routeChangeStart', function(event, next, current){
                if(next.$$route){
                    if(!$authentication.isAuthenticated()) {
                        $location.url('/401');
                    }
                }
            });
        }]);
    
})();