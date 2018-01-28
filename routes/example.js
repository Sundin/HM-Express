'use strict';

module.exports = function(app) {
    app.get('/', (req, res) => res.send('Hello World!'));

    // Example endpoint to show proper error handling.
    // End all your promises with .catch(next); to forward any errors to the error handler in app.js.
    app.get('/error', (req, res, next) => {
        return new Promise((resolve, reject) => {
            reject(new Error('Bad stuff happened!'));
        }).catch(next);
    });
};
