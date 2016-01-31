var express = require('express');
var router = express.Router();
var Finance = require('models/finance').Finance;

/* GET chart page. */
router.get('/', function (req, res, next) {
    Finance.find({}, function (err, rows) {
        res.render('chart', {
            //'rows': rows || {}
        });
    });
});

module.exports = router;
