'use strict';

/**
 * @ngdoc overview
 * @name angMysiteApp
 * @description
 * # angMysiteApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angMysiteApp', [
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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/favstuff', {
        templateUrl: 'views/favstuff.html',
        controller: 'FavstuffCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
