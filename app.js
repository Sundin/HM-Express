const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// Catch unhandled rejections on the global level:
// Make sure to use Node.js built-in Error type: Promise.reject(new Error("Something bad happened"));
process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection', error.message);
});
