/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Contact = require('../api/contact/contact.model');


Contact.find({}).remove(function() {
  Contact.create({
    name : 'Darren Hurst',
    email : 'hurst_darren@hotmail.com',
    phone1 : '407.810.7954'
  },
  {
    name : 'Darren Hurst2',
    email : 'hurst_darren@hotmail.com',
    phone1 : '407.810.7954'
  },{
    name : 'Darren Hurst3',
    email : 'hurst_darren@hotmail.com',
    phone1 : '407.810.7954'
  },{
    name : 'Darren Hurst4',
    email : 'hurst_darren@hotmail.com',
    phone1 : '407.810.7954'
  });
});