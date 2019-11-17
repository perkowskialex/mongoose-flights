var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', moviesCtrl.create);


module.exports = router;
