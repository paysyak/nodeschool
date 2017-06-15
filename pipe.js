const fs = require('fs');
const zlib = require('zlib');

fs.readFile('text2.txt', (error, data) => {
    console.log(data);
});


const readebleStream = fs.createReadStream('text.txt');
const duplex = zlib.createGzip();
const writeble = fs.createWriteStream('file.txt.gz');

readebleStream.pipe(duplex).pipe(writeble);

