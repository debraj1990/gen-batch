

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,
        default: 'Anonymous'
    }
});

module.exports = mongoose.model('Post', PostSchema);