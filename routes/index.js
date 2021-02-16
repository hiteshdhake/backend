const router = require('express').Router();
const products = require('./products');
const auth = require('./auth');

router.use('/products', products);
router.use('/auth', auth);

module.exports = router;
