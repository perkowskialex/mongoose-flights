let express = require('express');
let router = express.Router();
let ticketsCtrl = ('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsCtrl)