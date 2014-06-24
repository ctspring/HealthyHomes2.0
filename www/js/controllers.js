'use strict';

/* Controllers */

var HHControllers = angular.module('HHControllers', ['ui.router']);
HHControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
  }]);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function myCtrl($scope){
    $scope.songs=['Sgt. Peppers Lonely Hearts Club Band','With a Little Help from My Friends','Lucy in the Sky with Diamonds','Getting Better' ,'Fixing a Hole','Shes Leaving Home','Being for the Benefit of Mr. Kite!' ,'Within You Without You','When Im Sixty-Four','Lovely Rita','Good Morning Good Morning','Sgt. Peppers Lonely Hearts Club Band (Reprise)','A Day in the Life'];
  }

// %%%%%%%%%% to talk to DB %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('loginController', ['$scope', 'databaseConnection',
  function($scope, databaseConnection) {
    $scope.hello = databaseConnection.hello(); 
    $scope.queryResult = databaseConnection.query();
    
    databaseConnection.login({"data": {userName:"user", passWord: "pass"}}, function(value){
        $scope.login = value;
        $scope.loginData = JSON.parse(value.data);
    });
      
    $scope.send = function(){
        $scope.said = databaseConnection.queryWebService({"newStuff":$scope.inputText});
        console.log($scope.said);
        $scope.inputText='';
    };      
  }]);

loginControllers.controller('loginCtrl', ['$scope', 'databaseConnection', 
 function($scope, databaseConnection) {
     $scope.submit = function() {
         if ($scope.userName && $scope.passWord) {
             $scope.loginMsg = "Thank you for logging in!";
             $scope.loginResult = databaseConnection.login({userName:$scope.userName, passWord:$scope.passWord});
             $scope.userName = '';
             $scope.passWord = '';
         } else if(!$scope.userName && !$scope.passWord) {
             $scope.loginMsg = "You haven't entered your username OR password!";
         } else if (!$scope.userName) {
             $scope.loginMsg = "Please enter your username!";
             $scope.loginResult = "";
         } else if (!$scope.passWord) {
             $scope.loginMsg = "Please enter your password!";
             $scope.loginResult = "";
         }
     };
 }]);