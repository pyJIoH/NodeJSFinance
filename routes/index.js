var express = require('express');
var router = express.Router();
var Finance = require('models/finance').Finance;

//var finance = new Finance({
//    title: "Company Name 5 Ltd.",
//    income: 5000,
//    outcome: 0,
//    profit: 200
//});
//
//finance.save(function(err, user, affected) {
//    console.log(arguments);
//});

/* GET home page. */
router.get('/', function (req, res, next) {
    Finance.find({}, function(err, elems) {
        res.render('index', {
            title: 'Express',
            rows: elems || {}
        });
    });
});

module.exports = router;