const http = require('http');

// port = 3000 for local testing
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('hello server');
    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log('server running on port ${port}');
});







// common.js require keyword tells to look outside for following import
// const myData = require('./myData.js');
// const _ = require('underscore');

// console.log("Hello Worldddd");

// const helloWorld = () => {
//     console.log('Hello Worldddd');

// }

// myData.getMessage();

// const myArray = [1, 4, 6, 2, 3];
// const chunked = _.chunk(myArray, 3);
// console.log(chunked);
