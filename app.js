'use strict';

require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

// Import all routes defined in the /routes folder
require('./routes')(app);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));

// Centralized error handling.
app.use(function(error, req, res, next) {
    if (res.headersSent) {
        return next(error);
    }

    if (process.env.NODE_ENV !== 'production') {
        console.log('Error caught in app.js: ' + error.message);
    }

    return res.status(error.status || 500).send();
});

// Catch unhandled rejections on the global level, in order to avoid crashing the application.
// Note that no errors should make it here in production ready code!
process.on('unhandledRejection', error => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Unhandled Rejection: ' + error.message);
    }
});
