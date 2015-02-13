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
After app modification run
grunt build
Then deploy with
grunt buildcontrol:openshift

![alt tag](https://raw.github.com/darrenhurst/contactsapp/master/screen.png)


##2. It's live on OpenShift
-------------------------------
http://test-dhurst.rhcloud.com