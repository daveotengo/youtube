const mongoose = require('mongoose');
const QouteSchema = new mongoose.Schema({
    content:String,
    author: String
});

module.exports = mongoose.model('Quote',QouteSchema);

