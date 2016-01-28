var express = require('express');
var router = express.Router();
var db = require('database');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        title1: db.getData()[0].title,
        income1: db.getData()[0].income,
        outcome1: db.getData()[0].outcome,
        profit1: db.getData()[0].profit,
        title2: db.getData()[1].title,
        income2: db.getData()[1].income,
        outcome2: db.getData()[1].outcome,
        profit2: db.getData()[1].profit
    });
});

module.exports = router;