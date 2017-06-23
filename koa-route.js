const Koa = require('koa');
const http = require('http');
const _ = require('koa-route');
const app = new Koa();

const cb = () => {
    console.log('hello');
}

const db = {
  jack: { name: 'jack', species: 'dog' },
  kitty: { name: 'kitty', species: 'cat' },
  snake: { name: 'snake', species: 'snake' }
};
const pets = {
    list: (ctx) => {
        const names = Object.keys(db);
        ctx.body = 'pets ' + names.join(', ');
    },
    show: (ctx, name) => {
        const pet = db[name];

        if(!pet) return ctx.throw('error');

        ctx.body = pet.name + ' 0 ' + pet.species; 
    }
}

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

http.createServer(app.callback(cb())).listen(3000);





/*
const Koa = require('koa');
const http = require('http');
const app = new Koa();

http.createServer(app.callback(console.log('on 3000'))).listen(3000);
http.createServer(app.callback(console.log('on 3001'))).listen(3001);
*/
