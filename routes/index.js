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
    finance.save(function (err, finance, affected) {
        res.send({data: finance, msg: err ? err.message : ''});
    });
});

/*
 * DELETE a row by id
 */
router.delete('/delete/:id', function (req, res) {
    Finance.remove({_id: req.params.id}, function (err, obj) {
        res.send({msg: err ? err.message : ''});
    });
});

module.exports = router;