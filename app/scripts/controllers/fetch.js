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

    $scope.sheetNum = 1;
    $scope.z = undefined;
    $scope.n = undefined;
    $scope.backupArg = -1;

    $scope.callRest = function() {

      console.log('Z = ' + $scope.z, 'N = ' + $scope.n);

      var API_ROOT = 'http://141.218.60.56/~jnz1568/viewFile.php?';

      $http.get(API_ROOT + 'SheetNum=' + $scope.sheetNum + '&Z=' + $scope.z + '&N=' + $scope.n + '&BackupArg=' + $scope.backupArg)
        .success(function(data) {
          console.log('Success!');
          console.log(data);
        })
        .error(function(){
          console.log('Error...');
        });
    };

  });
