'use strict';

/**
 * @ngdoc overview
 * @name atompyApp
 * @description
 * # atompyApp
 *
 * Main module of the application.
 */
angular
  .module('atompyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/fetch', {
        templateUrl: 'views/fetch.html',
        controller: 'FetchCtrl',
        controllerAs: 'fetch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
