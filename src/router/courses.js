const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/class');
const login = require('../app/controllers/login')

router.get('/list', coursesController.rendertable)
router.post('/create', coursesController.create)
router.post('/login', login.singin)

module.exports = router     