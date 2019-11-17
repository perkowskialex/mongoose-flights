let Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

function create(req,res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    let movie = new Movie(req.body);
    movie.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(movie);
        res.redirect('/flights/')
    });
}

function newFlight(req,res) {
    res.render('flights/new')
}

function index(req,res) {
    Flight.find({}, function(err,flights) {
        res.render('flights/index', {flights})
    })
}