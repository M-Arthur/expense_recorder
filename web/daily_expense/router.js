var express = require('express');
var router = express.Router();

var controller = require('./controller.js');

router.use(express.static(__dirname + '/css'));
router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
