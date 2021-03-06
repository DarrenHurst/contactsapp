'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactsSchema = new Schema({
  name: String,
  email: String,
  phone1: String
});

module.exports = mongoose.model('Contact', ContactsSchema);