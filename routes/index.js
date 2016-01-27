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

var row1 = new Accounting({
    title: "OOO APK Rostok",
    income: 0,
    outcome: 5000,
    profit: 300
});

var row2 = new Accounting({
    title: "OOO Vozrojdenie",
    income: 10000,
    outcome: 0,
    profit: 500
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        title1: row1.title,
        income1: row1.income,
        outcome1: row1.outcome,
        profit1: row1.profit,
        title2: row2.title,
        income2: row2.income,
        outcome2: row2.outcome,
        profit2: row2.profit
    });
});

module.exports = router;