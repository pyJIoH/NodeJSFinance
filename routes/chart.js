var express = require('express');
var router = express.Router();
var Finance = require('models/finance').Finance;

/* GET chart page. */
router.get('/', function (req, res, next) {
    res.render('chart', {

    });
});

/* GET chart data. */
router.get('/data', function (req, res, next) {
    Finance.find({}, function (err, rows) {
        res.json(rows);
    });
});



module.exports = router;
