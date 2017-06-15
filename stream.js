
// enter data from keyboard
/*
process.stdin.resume();
process.stdin.setEncoding('utf8');

let result = [];

setTimeout(() => {
    process.stdin.emit('end');
}, 4000);


process.stdin.on('data', chunk => {
    console.log(`chunk: ${chunk}`);
    result.push(chunk);
});

process.stdin.on('end', () => {
    console.log('End');
    console.log(result);
});
*/

// show in terminal
// process.stdout.resume(); // doesnot work on windows
//for (let i = 1000; i > 0; i--) {
//    process.stdout.write(`${i} \n`);
//}

///////////////////////////
