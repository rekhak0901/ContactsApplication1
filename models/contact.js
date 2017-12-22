var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: String,
  phone1: Number,
  phone2: Number,
  phone3: Number,
  phoneType1: String,
  phoneType2: String,
  phoneType3: String,
  email: String,
  address: String,
});

module.exports = mongoose.model('Contacts', contactSchema);