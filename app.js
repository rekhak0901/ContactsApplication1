var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'public')));
//app.use('/', index);
//app.use('/users', users);

//API Service
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts')
.then(() => console.log('connection successful'))
.catch((err) => console.error(err));

var Contacts = require('./models/contact.js');

//create api route
var router = express.Router();
app.use('/api', router);

//root message
app.post('/api', function (req, res) {
  res.json({ message: 'Message from /api' });
});

app.post('/', function (req, res) {
  res.json({ message: 'Hello First API Call!' });
});

//post a new contact
app.post('/api/contacts', function (req, res) {
  var contact = new Contacts();
  contact.name = 'Hea ha ha ';
  contact.phone1 = 1231;
  contact.phone2 = 123123;
  contact.phone3 = 12313;
  contact.phoneType1 = 'home';
  contact.phoneType2 = 'mobile';
  contact.phoneType3 = 'work';
  contact.email = 'asdfasd@asada';
  contact.address = 'adsfasfasdfas';

  contact.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'Contact created.' });
  });
});


//get all contacts
app.get('/api/contacts', function (req, res) {
  Contacts.find(function (err, contact) {
    if (err) {
      res.send(err);
    }

    res.json(contact);
  });
});

//edit one contact
//get one contact
// app.get('/api/contacts/:id', function (req, res) {
//   Contacts.findOne({ _id: req.params.id }, function (err, contact) {
//     if (err) {
//       return res.send(err);
//     }

//     res.json(contact);
//   });
// });

// app.put('/api/contacts/:id', function (req, res) {
//   Contacts.findOne({ _id: req.params.id }, function (err, contact) {
//     if (err) {
//       return res.send(err);
//     }

//     for (prop in req.body) {
//       contact[prop] = req.body[prop];
//     }

//     // save the contact
//     contact.save(function (err) {
//       if (err) {
//         return res.send(err);
//       }

//       res.json({ message: 'Contact updated!' });
//     });
//   });
// });


// edit one contact
app.put('/api/contacts/:id', function (req, res) {
  const contact = req.body;
  Contacts.update({
    _id: req.params.id,
    contact
  }, function (err, contact) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully updated' });
  });
});

// delete one contact
app.delete('/api/contacts/:id', function (req, res) {
  Contacts.remove({
    _id: req.params.id
  }, function (err, contact) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

});

module.exports = app;
