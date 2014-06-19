'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute', 'phonecatControllers', 'ngAnimate'
]); //dependencies

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/loginPage.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/beatles.html',
        controller: 'PhoneListCtrl'
      }).
      when('/clickme1', {
        templateUrl: 'partials/clickMe1.html',
        controller: 'PhoneListCtrl'
      }).
      when('/clickme2', {
        templateUrl: 'partials/clickMe2.html',
        controller: 'PhoneListCtrl'
      }).
      when('/clickme3', {
        templateUrl: 'partials/clickMe3.html',
        controller: 'PhoneListCtrl'
      }).     
      otherwise({
        redirectTo: '/phones'
      });
  }]);



