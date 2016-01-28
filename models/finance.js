var mongoose = require('database/mongoose');

var financeSchema = mongoose.Schema({
    title: String,
    date: {type: Date, default: Date.now},
    income: Number,
    outcome: Number,
    profit: Number,
    hidden: {type: Boolean, default: false}
});

var Finance = mongoose.model('Finance', financeSchema);

exports.Finance = Finance;