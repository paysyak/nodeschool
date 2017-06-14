











// EVENTS //

/*const EventEmitter = require('events').EventEmitter;
// notify 
const notifier = new EventEmitter();
notifier.addListener('notify', (message) => {
    console.log(`Notify: ${message}`);
});

notifier.emit('notify', 'save process');

notifier.removeListener('warning', () => {
    console.log('remove notify');
});

// logger
const logger = new EventEmitter();
logger.on('warning', message => {
    console.log(`WARN: ${message}`);
});

logger.on('error', message => {
    console.log(`ERROR: ${message}`);
});

logger.emit('warning', 'save process');
logger.emit('error', 'save process');

*/

/*

const EventEmitter = require('events').EventEmitter;

class MyOwnEmitter extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

const myEmitter = new MyOwnEmitter('Alex Event');

myEmitter.on('restart', (err, msg) => {
    setImmediate(() => {
        console.log(myEmitter.name);
    });
});

myEmitter.emit('restart', 'test');

// run only first time (other ignore)
myEmitter.once('event', (err, msg) => {
    setImmediate(() => {
        console.log(myEmitter.name);
    });
});

*/

