'use strict';

/* App Module */

var volunteerManagementApp = angular.module('volunteerManagementApp', [
  'ngRoute',
  'vmaControllerModule',
  'databaseServicesModule',
  'ui.router'
]);

volunteerManagementApp.config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("");

    $stateProvider.
      state('index', {
          url: "",
          views: {
            "menuBar": { templateUrl: "partials/menuBar.html", controller: 'menuCtrl'},
            "app": { templateUrl: "partials/home.html"}
          }
      }).
      state('login', {
          url: "/login",
          views: {
            "menuBar": { templateUrl: "partials/menuBar.html"},
            "app": {templateUrl: "partials/login.html", controller: 'loginCtrl'}
          }
      }).
      state('login.help', {
          url: "/lHelp",
          templateUrl: "partials/login.help.html"
      }).
      state('register', {
          url: "/register",
          views: {
            "menuBar": { templateUrl: "partials/menuBar.html"},
            "app": { templateUrl: "partials/register.html"}
          }
      }).
      state('register.help', {
          url: "/rHelp",
          templateUrl: "partials/register.help.html"
      }).
      state('home', {
          url: "/home",
          views: {
            "menuBar": { templateUrl: "partials/menuBar.html"},
            "app": { templateUrl: "partials/home.html"}
          }
      });
  });