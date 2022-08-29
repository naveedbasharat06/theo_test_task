'use strict';

/**
 * @ngdoc overview
 * @name ourAppApp
 * @description
 * # ourAppApp
 *
 * Main module of the application.
 */
angular
  .module('ourAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/topgames.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    .when('/slots', {
        templateUrl: 'views/slots.html',
        controller: 'MainCtrl'
    })
    .when('/jackpots', {
        templateUrl: 'views/jackpots.html',
        controller: 'MainCtrl'
    })
    .when('/newgames', {
        templateUrl: 'views/newgames.html',
        controller: 'MainCtrl'
    }).when('/live', {
        templateUrl: 'views/live.html',
        controller: 'MainCtrl'
    }).when('/blackjack', {
        templateUrl: 'views/blackjack.html',
        controller: 'MainCtrl'
    }).when('/roulette', {
        templateUrl: 'views/roulette.html',
        controller: 'MainCtrl'
    }).when('/table', {
        templateUrl: 'views/table.html',
        controller: 'MainCtrl'
    }).when('/poker', {
        templateUrl: 'views/poker.html',
        controller: 'MainCtrl'
    }).when('/other', {
        templateUrl: 'views/other.html',
        controller: 'MainCtrl'
    })
    .when('/classic', {
        templateUrl: 'views/classic.html',
        controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  });
