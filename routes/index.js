var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected');
});

var Schema = mongoose.Schema;

var accountingSchema = new Schema({
  title: String,
  date: {type: Date, default: Date.now},
  income: Number,
  outcome: Number,
  profit: Number,
  hidden: {type: Boolean, default: false}
});

var Accounting = mongoose.model('Accounting', accountingSchema);

var row = new Accounting({
  title: "OOO APK Rostok",
  income: 0,
  outcome: 5000,
  profit: 300
});

console.log(row.title);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express', name: row.title});
});

module.exports = router;