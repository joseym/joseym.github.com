'use strict';

angular.module('tulsaWebDevsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/angular', {
        templateUrl: 'views/angular.html',
        controller: 'AngularCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
