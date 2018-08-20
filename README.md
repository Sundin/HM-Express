# HM-Express
After setting up a multitude of Express projects, I realized that I repeated the same steps each time (either by copy-pasting code from one of the old projects or looking up the same things online each time). I therefore decided to set up this boilerplate project, ready for you to clone and just start coding. All onboard the heavy metal express! :steam_locomotive:
## Getting started
    npm install 
    npm start
    
## Usage instructions

### Adding routes
Any `.js`-file you put directly into the `/routes` directory will be automatically imported. Define as many routes as you wish in those files using the following format:

    'use strict';
    
    module.exports = function(app) {
        app.get('/page1', (req, res) => res.send('This is page 1!'));
        
        app.get('/page2', (req, res) => res.send('This is page 2!'));
        
        // Other routes
    };

### Environment variables
Define all environment variables in the `.env` file. Remember that production variables such as server credentials should never make it into the repository!

These are the environment variables used by default:  
* **PORT**: The port on which to run the server.  
* **NODE_ENV**: Should be set to `production` in your live environment.  
    
## Dependencies
* [Express](https://expressjs.com/): A very widely used web framework.
  * `express.json()`: Built in middleware used for decoding json sent in request body.
* [Helmet](https://github.com/helmetjs/helmet): Helps increasing security by setting various HTTP headers.
* [dotenv](https://github.com/motdotla/dotenv): For handling environment variables.
* [ESLint](https://eslint.org/): A good linter.

## Tips and tricks
### Keeping dependencies up to date
* Run `npm outdated` regurarly to find out if you are using any outdated dependencies.
* You can also use [Retire.js](https://github.com/RetireJS/retire.js/) to scan your dependencies for know vulnerabilities. Install it with `npm install -g retire` and run it in the application's root folder with `retire`.
* Starting from npm 6.0, you can also directly run `npm audit` to scan your project's dependencies for vulnerabilities. 

### Error handling
Make sure you use Node.js built-in Error type when rejecting promises:  

    Promise.reject(new Error('Something bad happened');

Whenever you make a promise call in any of your endpoints, add `.catch(next)` to the end of the promise in order to forwards any errors to the common error handler defined in `app.js`.

    app.get('/', (req, res, next) => {
        return new Promise((resolve, reject) => {
            // ...
        }).catch(next);
    });

As a final fallback, `app.js` will also catch any unhandled rejections. However, you should always strive to handle all potential errors in production-ready code.

### PM2
[PM2](http://pm2.keymetrics.io/) is a very useful tool for running your application in so-called cluster mode, which will enable your application to make use of all available CPU cores instead of just one.
* Installation: `npm install -g pm2`
* Starting the server (instead of using `npm start`): `pm2 start app.js -i max --attach` (the `--attach` flag will stream your application's log output to the console, so in production you don't need this flag).

### Linting
Run the linter with `npm run lint`.

Feel free to modify the `.eslintrc` file according to your personal preferences.

## Acknowledgements and further reading
* [Node.js security checklist](https://blog.risingstack.com/node-js-security-checklist/)
* [List of ESLint rules](https://eslint.org/docs/rules/): By reading through this list you will learn a lot about JavaScript/Node.js best practices.
