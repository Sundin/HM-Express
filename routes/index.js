'use strict';

// This file will dynamically import all the routes from any file you put under the /routes folder
// https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express

const fs = require('fs');

module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') {
            return;
        }
        const name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
};
