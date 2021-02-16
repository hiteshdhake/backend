const jwt = require('jsonwebtoken');
const {secret} = require('../config');

function verifyToken(req, res, next) {
  if (req.path.includes('/api/auth/')) {
    return next();
  }
  const authorization = req.headers.authorization

  if (!authorization || authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  const token =  req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, function(err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });
}

module.exports = verifyToken;