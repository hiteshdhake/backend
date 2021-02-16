const router = require('express').Router();
const {login} = require('../services/auth')

router.post('/login', login);

module.exports = router