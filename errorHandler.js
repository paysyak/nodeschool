const http = require('http');
const connect = require('connect');
var app = connect();
console.log(typeof connect);


// app.use(connect.logger());
app.use(connect.Security);
app.use(connect.Routing);

const NotFound = msg => {
    this.name = 'NotFound';
    Error.call(this, msg)
    Error.captureStackTrace(this, arguments.callee)
};

NotFound.prototype = Error.prototype;

app.get('/404', (req, res) => {
    throw new NotFound;
});
app.get('/500', (req, res) => {
    throw new Error('error');
});

http.createServer(app).listen(13337);
