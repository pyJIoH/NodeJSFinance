var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.get('mongo:uri'), config.get('mongoose:options'));

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log('Connected');
});

module.exports = mongoose;