// Load the http module to create an http server.
const http = require('http');

class Whether {
  static getWhetherByLatLon(lan, lon) {
      return new Promise((resolve) => {
        const extServerOptions = {
          method: 'GET',
          host: 'api.openweathermap.org',
          path: `/data/2.5/weather?lat=${lan}&lon=${lon}&APPID=598ab702cb0917de93fc1c2addfd12c7`
        };

        http.request(extServerOptions, function (res) {
          res.setEncoding('utf8');
          res.on('data', function (data) {
            resolve(JSON.parse(data));
            // return JSON.parse(data);
          });
        }).end();
      });
    }
  }


// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  Whether.getWhetherByLatLon(35, 139).then(res => {
      response.write(`First: ${res.weather[0].description}`);
      response.end();
    });
});



// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
