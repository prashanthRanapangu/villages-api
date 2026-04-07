const express = require('express');
const router = express.Router();
const controller = require('../controllers/villageController');

router.get('/villages', controller.getVillages);

module.exports = router;