#Running Instructions
   
##1. Run with Node and Local
----------------------------

Use grunt build 

--- Run Local
    * Start Mongo server ./mondod
    * Grunt serve
--- Run Local Distribution Test
    * Grunt serve:dist

--- Deploy to OpenShift
* yo angular-fullstack:openshift

--- To Update Cloud Build
After app modification run
grunt build
Then deploy with
grunt buildcontrol:openshift

![alt tag](https://raw.github.com/darrenhurst/contactsapp/master/screen.png)
