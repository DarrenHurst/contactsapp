This appliction runs the yeoman angular-fullstack generator. It uses a component based file layout. Your directives and controllers can be grouped in folders.  The generator comes complete with a grunt based distribution.  
#Setup
  - Install node,bower,yoeman and download mondodb
  - npm install -g generator-angular-fullstack (installs the yo generator used here)

#Running Instructions
   
##1. Run with Node and Local
----------------------------


#### Run Local
    - grunt build 
    - Start Mongo server ./mondod
    - grunt serve

#### Run Local Distribution Test
    - grunt build
    - grunt serve:dist

##2. Deploy to OpenShift
    - yo angular-fullstack:openshift

#### To Update Cloud Build
    
#####After app modification run
    - grunt build

#####Then deploy with
    - grunt buildcontrol:openshift

![alt tag](https://raw.github.com/darrenhurst/contactsapp/master/screen.png)


##3. It's live on OpenShift
-------------------------------
http://test-dhurst.rhcloud.com

##4. Nice to have's
    - add google contacts api
    - play with layout
    - and more contact information
    - create contact interactions