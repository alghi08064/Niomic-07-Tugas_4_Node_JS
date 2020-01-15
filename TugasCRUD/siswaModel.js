var mongoose = require('mongoose');

//setup schema
var contactSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  tanggallahir: {
    type: String,
    required: true
  },
  jeniskelamin: String,
  hobi: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

//export contact siswaModel
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
}
