'use strict';

// Imports dependencies and set up http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

require('dotenv').config();

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.get('/', (_, res) => {
    res.status(200).send(
        "<h1>Hello!</h1>"
    );
})

const webhook = require('./webhook.js')(app);
