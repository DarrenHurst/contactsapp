'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, $http,googleV3contacts) {
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
       
    $scope.addGoogle = function(){
    
    	var feed = $scope.$parent.data.feed.entry;
    	angular.forEach(feed, function(value, key) {
    		var name = value.title.$t != undefined ? value.title.$t: "";
    		var email = value.gd$email[0].address != undefined ? value.gd$email[0].address :"";
            var googleContact = {
    		name:name,
    		email:email,
    		phone1:''
    	     }
    	     
    	    $scope.$parent.Contacts.push(googleContact);
    	     $http.post('/api/contact',googleContact)
             .success(function(){})
    	
        });
    	
    	
    };

    $scope.remove = function(contact) {
    
      $http.delete('/api/contact/' + contact._id);
       $http.get('/api/contact').success(function(contacts) {
      $scope.Contacts = contacts;
    
    });
    };
    
  });
