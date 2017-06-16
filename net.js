const net = require('net');
let result = '';

const server = net.createServer(res => {
    console.log('Connection...');
    res.write('hello\r\n');
    
    
    res.on('data', chunk => {
        result += chunk;    
        res.write('------------');
    });

    setTimeout(() => {
        server.emit('close');
    }, 5000);

    // echo server
    // res.pipe(res);
});

server.on('close', () => {
    console.log(result);
    console.log('Close...');
});

server.listen(8124, 'localhost', () => {
    console.log('Server listen on port 8124');
});
