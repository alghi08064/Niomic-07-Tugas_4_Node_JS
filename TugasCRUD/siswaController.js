//import contact model
Contact = require('./siswaModel');

//handle index actions
exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};

// handle create contact actions
exports.new = function (req, res) {
  var contact = new Contact();
  contact.nama = req.body.nama ? req.body.nama : contact.nama;
  contact.tanggallahir = req.body.tanggallahir;
  contact.jeniskelamin = req.body.jeniskelamin;
  contact.hobi = req.body.hobi;

  //save the contact and check for error
  contact.save(function (err) {
    // if (err)
    // res.json(err);

    res.json({
      message: "New contact created!",
      data: contact
    });
  });
};

// handle view info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact)
  {
    if(err)
    res.send(err);
    res.json({
      message: "Contact details loading..",
      data: contact
    });
  });
};

// Handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err)
    res.send(err);
    contact.nama = req.body.nama ? req.body.nama : contact.nama;
    contact.tanggallahir = req.body.tanggallahir;
    contact.jeniskelamin = req.body.jeniskelamin;
    contact.hobi = req.body.hobi;

    // save the contact and check for errors
    contact.save(function (err) {
      if (err)
      res.json(err);
      res.json({
        message: 'Contact Info updated',
        data: contact
      });
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
  Contact.remove({
    _id: req.params.contact_id
  }, function (err, contact) {
    if (err)
    res.send(err);
    res.json({
      status: "success",
      message: 'Contact deleted'
    });
  });
};
