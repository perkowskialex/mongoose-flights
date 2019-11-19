let Flight = require('../models/flight')
let Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req,res) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id});
}

function create(req,res) {
    req.body.flight = req.params.id;  //flight property on the ticket
    Ticket.create(req.body, function(err,ticket){
        res.redirect(`/flights/${req.body.flight}`)
    })
}