const {secret} = require('../config');
const jwt = require('jsonwebtoken');

const user = {
    email: 'test@test.com',
    password: 'Test',
    id: 1
}

const generateToken = ({ id }) => {
    return jwt.sign({ id }, secret, {
        expiresIn: 86400
    });
}

const login = (req, res) => {
    const { email, password } = req.body || {};
    if (email === user.email && password === user.password) {
        const token = generateToken({ id: user.id });
        return res.status(200).send({ token: token });
    }

    res.status(401).send("Invalid email id or password");
}

module.exports = {
    login
}