'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute', 'phonecatControllers', 'ui.router', 'ngAnimate'
]); //dependencies

phonecatApp.config(
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.
      state('index', {
          url: "",
          views: {
            "app": { templateUrl: "partials/loginPage.html"}
          }
      }).    
      state('login', {
          url: "/phones/:phoneId",
          views: {
            "app": {templateUrl: "partials/beatles.html", controller: 'PhoneListCtrl'}
          }
      }).
      state('login.clickme1', {
          url: "",
          templateUrl: "partials/clickme1.html"
      }).
      state('login.clickme2', {
          url: "/clickme2",
          templateUrl: "partials/clickme2.html"
      }).
      state('login.clickme3', {
          url: "/clickme3",
          templateUrl: "partials/clickme3.html"
      }).
      state('loginHomePage', {
          url: "/phones",
          views: {
            "app": { templateUrl: "partials/loginPage.html"}
          }
      });
  });

