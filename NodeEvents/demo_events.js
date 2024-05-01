var events = require('events'); // import module
var eventEmitter = new events.EventEmitter(); // create an instance 

// create event handler

var myEventhandler = function(){
    console.log('I hear a scream!');
}

// assign this event handler to an actual event
eventEmitter.on('scream', myEventhandler);

// fire the scream event / raise the event
eventEmitter.emit('scream');

