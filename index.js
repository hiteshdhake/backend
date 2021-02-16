const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const verifyToken = require('./services/verifyToken');

const app = express();
const port = 8080;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(verifyToken);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});
