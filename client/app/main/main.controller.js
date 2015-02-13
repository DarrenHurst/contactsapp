'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.Contacts = [];

    $http.get('/api/contact').success(function(contacts) {
      $scope.Contacts = contacts;
    });

    $scope.add = function() {
     
      $http.post('/api/contact', { name:this.name, email:this.email,phone1:this.phone1 })
      .success(function(){
        $http.get('/api/contact').success(function(contacts) {
        $scope.$parent.Contacts = contacts;
       
         });     	
      });
 
    };

    $scope.remove = function(contact) {
    
      $http.delete('/api/contact/' + contact._id);
       $http.get('/api/contact').success(function(contacts) {
      $scope.Contacts = contacts;
    });
    };
    
  });
