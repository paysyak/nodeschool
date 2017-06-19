const http = require('http');
const connect = require('connect');
const app = connect();

connect.logger = (req, res, next) => {
    console.log(`${req.url}`);
    next();
};

const myOwnMiddleware = (req, res, next) => {
    req.headers.sessionId = 1234;
    next();
};

const myCookieParser = (req, res, next) => {
    console.log(req.headers.cookie );
    next();
};

app.use(connect.logger);
app.use(connect.myOwnMiddleware);
// app.use(myCookieParser);
app.use((req, res) => {
    // console.log(req.headers.sessionId);
    res.end('Hello');
});

http.createServer(app).listen(3000, 'localhost', () => {
    console.log('Listen server on port 3000');
});
