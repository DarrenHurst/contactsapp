'use strict';

angular.module('testApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }]);
'use strict';

angular.module('testApp')
  .directive('addForm', function () {
    return {
      templateUrl: 'app/addForm/addForm.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });
'use strict';

angular.module('testApp')
  .directive('contacts', function () {
    return {
      templateUrl: 'app/contacts/contacts.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
'use strict';

angular.module('testApp')
  .controller('MainCtrl', ["$scope", "$http", function ($scope, $http) {
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
    
  }]);

'use strict';

angular.module('testApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }]);
'use strict';

angular.module('testApp')
  .controller('MessageCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('testApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/message',
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl'
      });
  }]);
'use strict';

angular.module('testApp')
  .factory('Modal', ["$rootScope", "$modal", function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete: function(del) {
          del = del || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed staight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        }
      }
    };
  }]);

'use strict';

angular.module('testApp')
  .controller('NavbarCtrl', ["$scope", "$location", function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
angular.module('testApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/addForm/addForm.html',
    "<div class=addForm><form name=addForm ng-controller=MainCtrl class=addform>Name: <input name=input ng-model=name required> Email: <input name=input ng-model=email required> Phone: <input name=input ng-model=phone1 required> <button class=addContact ng-click=add(addForm)>Add</button></form></div>"
  );


  $templateCache.put('app/contacts/contacts.html',
    "<div class=container><newcontact></newcontact><div class=row><div class=col-lg-12><ul class=\"nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6\" ng-repeat=\"contact in Contacts\"><div class=contact><div class=name>{{contact.name}}</div><div class=email>{{contact.email}}</div><div class=phone1>{{contact.phone1}}</div><div><button class=removeBtn ng-click=remove(contact)>Remove</button></div></div></ul></div></div></div>"
  );


  $templateCache.put('app/main/main.html',
    "<add-form></add-form><contacts></contacts>"
  );


  $templateCache.put('app/message/message.html',
    "<div class=col-md-12>This is the message view.</div>"
  );


  $templateCache.put('components/modal/modal.html',
    "<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat=\"button in modal.buttons\" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>"
  );


  $templateCache.put('components/navbar/navbar.html',
    "<div class=\"navbar navbar-default navbar-static-top\" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click=\"isCollapsed = !isCollapsed\"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=\"/\" class=navbar-brand>test</a></div><div collapse=isCollapsed class=\"navbar-collapse collapse\" id=navbar-main><ul class=\"nav navbar-nav\"><li ng-repeat=\"item in menu\" ng-class=\"{active: isActive(item.link)}\"><a ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>"
  );

}]);

