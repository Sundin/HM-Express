'use strict';

module.exports = function(app) {
    app.get('/', (req, res) => res.send('Hello World!'));

    app.post('/postData', (req, res) => {
        return res.send({
            message: 'This is the data you sent to me',
            data: req.body
        });
    });

    // Example endpoint to show proper error handling.
    // End all your promises with .catch(next); to forward any errors to the error handler in app.js.
    app.get('/error', (req, res, next) => {
        return new Promise((resolve, reject) => {
            reject(new Error('Bad stuff happened!'));
        }).catch(next);
    });
};
