/*Event-driven programming is one of the core concepts behind Node.js. Instead of continuously checking whether something has happened, your code registers listeners and reacts when events occur.

Think of it like a restaurant buzzer:

You place an order.
You don't stand at the counter asking every second if it's ready.
When the food is ready, the buzzer emits a signal.
You react to that signal.

Node.js works similarly using events and listeners.*/

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('response', (name,age) => {
  console.log(`Preparing food for ${name} ${age}`);
});
emitter.on('response', () => {
  console.log('Prepared food');
});



emitter.emit('response' , 'john',34);