'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

// Import all routes defined in the /routes folder
require('./routes')(app);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));

// Catch unhandled rejections on the global level:
// Make sure to use Node.js built-in Error type: Promise.reject(new Error('Something bad happened'));
process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection', error.message);
});
