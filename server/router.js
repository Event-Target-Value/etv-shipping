const router = require('express').Router();
const controller = require('./controller.js');

router.get('/findAll', controller.getAll);

module.exports = router;
