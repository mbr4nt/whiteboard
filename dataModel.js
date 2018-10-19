const mongoose = require('mongoose');
mongoose.connect('mongodb://fmg:fmgfmg1@ds133290.mlab.com:33290/whiteboard');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    person: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    }
});

eventSchema.index({ person: 1});
eventSchema.index({ action: 1});

module.exports = {
    Event: mongoose.model('Event', eventSchema),
};