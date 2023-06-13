var express = require('express');
var router = express.Router();

const baseController = require('../controllers/baseController');

router.get('/', baseController.hello);
router.get('/sum', baseController.sum);

module.exports = router;
