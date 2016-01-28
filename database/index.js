var express = require('express');
var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.get('mongo:uri'), config.get('mongoose:options'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
});

var financeSchema = mongoose.Schema({
    title: String,
    date: {type: Date, default: Date.now},
    income: Number,
    outcome: Number,
    profit: Number,
    hidden: {type: Boolean, default: false}
});

var Finance = mongoose.model('Finance', financeSchema);

var row1 = new Finance({
    title: "OOO APK Rostok",
    income: 0,
    outcome: 5000,
    profit: 300
});

var row2 = new Finance({
    title: "OOO Vozrojdenie",
    income: 10000,
    outcome: 0,
    profit: 500
});

var exports = {};

console.log(row1);

exports.getData = function () {
    return [row1, row2]
}

module.exports = exports;
