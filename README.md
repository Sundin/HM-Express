# HM-Express
A boilerplate project for an Express backend.

## Getting started
    npm install 
    npm start
    
## Usage instructions

### Adding routes
Any `.js`-file you put directly into the `/routes` directory will be automatically imported. Define as many routes as you wish in those files using the following format:

    module.exports = function(app) {
        app.get('/page1', (req, res) => res.send('This is page 1!'));
        
        app.get('/page2', (req, res) => res.send('This is page 2!'));
        
        // Other routes
    };

### Environment variables
Define all environment variables in the `.env` file.

### Error handling
Make sure you use Node.js built-in Error type when rejecting promises:  

    Promise.reject(new Error('Something bad happened')
    
Unhandled rejections will be caught in `app.js`.
    
## Dependencies
* [Express](https://expressjs.com/)
* [dotenv](https://github.com/motdotla/dotenv): For handling environment variables.
* [ESLint](https://eslint.org/): A good linter.
