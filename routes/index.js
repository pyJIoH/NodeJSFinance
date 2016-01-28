var express = require('express');
var router = express.Router();
var Finance = require('models/finance').Finance;

//var finance = new Finance({
//    title: "OOO Vozrojdenie",
//    income: 10000,
//    outcome: 0,
//    profit: 500
//});
//
//finance.save(function(err, user, affected) {
//    console.log(arguments);
//});

/* GET home page. */
router.get('/', function (req, res, next) {
    var rows = {}
    Finance.find({}, function(err, elems) {
        rows = elems;
        res.render('index', {
            title: 'Express',
            title1: rows[0].title,
            income1:rows[0].income,
            outcome1: rows[0].outcome,
            profit1: rows[0].profit,
            title2: rows[2].title,
            income2: rows[2].income,
            outcome2: rows[2].outcome,
            profit2: rows[2].profit
        });
    });
});

module.exports = router;