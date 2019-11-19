let Flight = require('../models/flight')
let Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
}

function newTicket(req,res) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id});
}