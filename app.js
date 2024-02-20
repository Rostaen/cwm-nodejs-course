//------------------------
// Showing how to setup Express and create proper APIs

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); // This is also an emitter and does the same from the section below

server.listen(3000);

console.log(`Listening on port 3000... `);



//------------------------
// // Showing how to setup a working server for APIs

// const http = require('http');

// // This setup below will get cumbersome when trying to make a legitimate API
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// }); // This is also an emitter and does the same from the section below

// // This example below is very lower level stuff and we wouldn't normally do it in production
// // server.on('connection', (socket) => {
// //     console.log('New Connection... ');
// // });

// server.listen(3000);

// console.log(`Listening on port 3000... `);

//------------------------
// // Showing how to raise an event to the user to see what is happening

// const EventEmitter = require('events'); // This is a class call and why it's capitalized
// // const emitter = new EventEmitter(); // Class is like human, object is like Andrew

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// }); // First argument, name of event called from '.emit'; 2nd argument is callback function or listener, the parameter name doesn't matter and can be anything that suites the function details

// logger.log('message for testing');

//------------------------
// Showing how to use the File System module 'fs'

// const fs = require('fs');

// // Syncronous format to see all files in the current directory
// const files = fs.readdirSync('./');
// console.log(files);

// // Asyncronous format and the preferred way to get stuff with Async
// fs.readdir('./', (err, files) => {
//     if (err)
//         console.log('Error', err);
//     else
//         console.log('Result', files);
// });

//------------------------
// How to gain OS information

// const os = require('os');

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory} & Free Memory: ${freeMemory}`);

//------------------------
// How to see the path of a file

// const path = require('path');

// const pathObj = path.parse(__filename);
// console.log(pathObj);

//------------------------

// const log = require('./logger'); // extension is not required since it's a .js file

// console.log(log);
//log('This is my message to logger.js');
