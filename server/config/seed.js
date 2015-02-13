/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/contact/contact.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Darren Hurst',
    email : 'Hurst_Darren@hotmail.com',
    phone1 :'407-810-7954'
  },{
    name : 'Darren Hurst2',
    email : 'Hurst_Darren@hotmail.com',
    phone1 :'407-810-7954'
  },{
    name : 'Darren Hurst3',
    email : 'Hurst_Darren@hotmail.com',
    phone1 :'407-810-7954'
  },{
    name : 'Darren Hurst4',
    email : 'Hurst_Darren@hotmail.com',
    phone1 :'407-810-7954'
  }    );
});