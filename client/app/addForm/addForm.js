'use strict';

angular.module('contactsApp')
.directive('newcontact',function(){
	return{
		restrict: 'E',
		templateUrl:'app/addForm/addForm.html'
	}
});
