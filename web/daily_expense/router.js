var express = require('express');
var router = express.Router();

var controller = require('./controller.js');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
