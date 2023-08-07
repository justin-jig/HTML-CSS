const express = require('express');
const router = express.Router();
/** controller */
const controller = require('../controller/visitor.controller');


// 기본 주소 : localhost:PROT
// GET / => localhost:PROT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors);

module.exports = router;