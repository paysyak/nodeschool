const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('hello express');
    
    res.status(200);
    res.json({ status: 200, message: 'OK' });

    next();
});

app.use((req, res) => {
    res.end('Page not found!');
});


http.createServer(app).listen(3000, 'localhost', () => {
    console.log('Listen server on port 3000');
});
