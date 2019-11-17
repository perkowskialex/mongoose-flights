let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Southwest', 'United', 'American']
    },
    flightNo: {
        type: Number,
        required: true,
    },
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            return new Date(today.setFullYear(today.getFullYear()+1));
        },
    }
});

module.exports = mongoose.model('Flight', flightSchema)