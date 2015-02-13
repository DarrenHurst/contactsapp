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
