const fs = require('fs');
const zlib = require('zlib');

const readebleStream = fs.createReadStream('text.txt');
const duplex = zlib.createGzip();
const writeble = fs.createWriteStream('file.txt.gz');

readebleStream.pipe(duplex).pipe(writeble);
