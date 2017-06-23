
/*
function timeout(message, ms) {
    return new Promise( resolve=> setTimeout(() => {
        console.log(message);
        resolve();
    }, ms))
}

async function asleep() {
    await timeout('hello', 1000);
    await timeout('hello2', 1000);
} 

asleep();
*/

/*
const coroutine = function (generator) {
    const it = generator();
    return () => {
        return it.next.apply(it, arguments)
    }
}

const getData = (d, ms) => {
    setTimeout(() => {
        run(d);
    }, ms);
}

const run = coroutine(function * (){
    let x = 1 + (yield getData(10, 1000))
    let y = 1 + (yield getData(10, 2000))
    
    let answer = (yield getData(
        'test : ' + (x + y)
    ));
    console.log(answer);
});

run();
*/


/*const gen = function * () {
    let x = (yield 'hello');
    console.log(x);

    x = (yield 'how are you');
    x = (yield 'nice to hear that');
}

const it = gen();
console.log(it.next().vlaue);
console.log(it.next('hi').vlaue);
console.log(it.next('Im dead').vlaue);
console.log(it.next('F**ck you').vlaue);
*/
/*
const gen = function * () {
    let x = (yield);
    while (x !== 'stop') {
        console.log(x);
        x = (yield);
        yield 2;//return 2
        
    } 
    return;
}


it.next();
it.next('hello');
it.next('world');
it.next('how');
it.next('are');
it.next('you');
it.next('bro');
it.next('stop').value; // get value
*/
