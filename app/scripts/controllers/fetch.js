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

    $scope.callRest = function() {

      $http.get('http://141.218.60.56/~jnz1568/viewFile.php?SheetNum=1&Z=8&N=6&BackupArg=-1')
        .success(function(data) {
          console.log('Success!');
          console.log(data);
        })
        .error(function(){
          console.log('Error...');
        });
    };

  });
