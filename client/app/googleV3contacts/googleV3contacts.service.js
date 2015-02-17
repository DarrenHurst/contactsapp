'use strict';

angular.module('testApp')
  .service('googleV3contacts', function ($http,$rootScope) {
  	
  	
  var googleOAuthSecret = {"web":{"auth_uri":"https://accounts.google.com/o/oauth2/auth","client_secret":"VsXZRx7XhExyKs9gf4el8Q_E","token_uri":"https://accounts.google.com/o/oauth2/token","client_email":"674354918128-7tvua2q2kghvlg5k6c2up6rm61m2hilu@developer.gserviceaccount.com","redirect_uris":["http://test-dhurst.rhcloud.com/oauth2callback","http://localhost:9000/oauth2callback"],"client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/674354918128-7tvua2q2kghvlg5k6c2up6rm61m2hilu@developer.gserviceaccount.com","client_id":"674354918128-7tvua2q2kghvlg5k6c2up6rm61m2hilu.apps.googleusercontent.com","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","javascript_origins":["http://test-dhurst.rhcloud.com/","http://localhost:9000/"]}}
  var clientId = googleOAuthSecret.web.client_id;
  var scopes = 'https://www.google.com/m8/feeds';
  gapi.auth.authorize({
    client_id: clientId, scope: scopes, immediate: false}, 
     handleAuthResult);

 function handleAuthResult(authResult) {
 if (authResult && !authResult.error) {
   var url = 
    "https://www.google.com/m8/feeds/contacts/default/" + 
    "full?alt=json&access_token=" + 
    authResult.access_token + 
    "&max-results=7000&v=3.0";

   $http.get(url).success(function(data,response) {
     console.log(data);
     $rootScope.data = data;
    });
 }
 }
  });
