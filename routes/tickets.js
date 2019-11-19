let express = require('express');
let router = express.Router();
let ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;