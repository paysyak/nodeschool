const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method.toLocaleLowerCase === 'get' && req.url === '/nick') {
        res.write('Nick info');
        res.end();
    }

    if(req.url === '/nick') {
        res.write('Hey Nick');
        res.end();
    }

    req.pipe(res);
});

server.listen(3000, 'localhost', () => {
    console.log('Listen server on port 3000');
});
// const srv = http.createServer((reg, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
// });

// srv.listen(3000, 'localhost');
