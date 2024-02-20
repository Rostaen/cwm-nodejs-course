const EventEmitter = require('events'); // This is a class call and why it's capitalized

// Using a remote login server as an example here
const url = 'http://mylogger.io/log'; //fictional service

class Logger extends EventEmitter{ // This logger class now has all the capabilites of the EventEmitter class to work with the app.js calls
    // Message is scoped to this module
    log = message => {
        console.log(message);

        // Raised an event
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        }); // First argument is the name of the event to be emitted from '.on'. 2nd argument is an event argument and best to use an object to send multiple items
    }
}

module.exports = Logger;
// module.exports.log = log;  // add method 'log' to the exports method
// module.exports.endPoint = url; // we can change the name of the export like in this expample vs the export above
