'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
  }]);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/*
phonecatControllers.controller('beatlesCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function myCtrl($scope){
    $scope.songs=['Sgt. Peppers Lonely Hearts Club Band','With a Little Help from My Friends','Lucy in the Sky with Diamonds','Getting Better' ,'Fixing a Hole','Shes Leaving Home','Being for the Benefit of Mr. Kite!' ,'Within You Without You','When Im Sixty-Four','Lovely Rita','Good Morning Good Morning','Sgt. Peppers Lonely Hearts Club Band (Reprise)','A Day in the Life'];
  }

// %%%%%%%%%% to talk to DB %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var databaseController = angular.module('databaseControllerModule', []);
databaseController.controller('dbDisplayController', ['$scope', 'databaseConnection',
  function($scope, databaseConnection) {
    $scope.hello = databaseConnection.hello(); //result to hello method, technically same as query
    $scope.queryResult = databaseConnection.query(); //result to query
      
    //Using the login() function without callback
    //$scope.login = databaseConnection.login({"data": {"userName":"user", "passWord": "pass"}});
    
    databaseConnection.login({"data": {userName:"user", passWord: "pass"}}, function(value){
        //This is a call back function for the login() action on the resource object
        //console.log(value);
        $scope.login = value;
        $scope.loginData = JSON.parse(value.data);
    });
    
    $scope.send = function(){
        $scope.user = databaseConnection.queryWebService({"queryA":$scope.queryA});
        $scope.pass = databaseConnection.queryWebService({"query1":$scope.query1});        
        $scope.inputText='';
    };
      
  }]);


