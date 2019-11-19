let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ticketSchema = new Schema({
    seat: {type: String},
    price: {type: Number, min: 0},
    flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}]
})

module.exports = mongoose.model('Ticket', ticketSchema);