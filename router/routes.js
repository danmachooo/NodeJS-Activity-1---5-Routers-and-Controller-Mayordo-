const express = require('express');
const router = express.Router();
const controller = require('../controller/MyController');

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/services', controller.services);
router.get('/contacts', controller.contacts );
router.get('/hobbies', controller.hobbies );

module.exports = router;