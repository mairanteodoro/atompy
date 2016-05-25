'use strict';

/**
 * @ngdoc function
 * @name atompyApp.controller:FetchCtrl
 * @description
 * # FetchCtrl
 * Controller of the atompyApp
 */
angular.module('atompyApp')
  .controller('FetchCtrl', function ($scope, $http) {

    var API_ROOT = 'http://141.218.60.56/~jnz1568/viewFile.php?';
    $scope.sheetNum = 1;
    $scope.z = 8;
    $scope.n = 6;

    $scope.callRest = function() {

      $http.get(API_ROOT + 'SheetNum=' + $scope.sheetNum + '&Z=' + $scope.z + '&N=' + $scope.n + '&BackupArg=-1')
        .success(function(data) {
          console.log('Success!');
          console.log(data);
        })
        .error(function(){
          console.log('Error...');
        });
    };

  });
