var express = require('express');
var router = express.Router();
var Finance = require('models/finance').Finance;

/* GET home page. */
router.get('/', function (req, res, next) {
    Finance.find({}, function (err, rows) {
        res.render('index', {
            'rows': rows || {}
        });
    });
});

/*
 * POST to add a row.
 */
router.post('/add', function (req, res) {
    var finance = new Finance(req.body);
    finance.save(function (err, user, affected) {
        if (err) throw err;
        res.send({data: finance, msg: ''});
    });
});

//router.delete('/delete/:id', function(req, res) {
//
//});

module.exports = router;