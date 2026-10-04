//import event emitter classs
const EventEmitter = require('events');

//create button class
class Button extends EventEmitter{}
//create object of button class
const button = new Button();
//clicck event listener
button.on('click',()=>{
    console.log("Button clicked");
});

//mouseover event listener
button.on('mouseover',()=>{
    console.log("Mouse is over the button,");
});
//trigger eventss
button.emit('click');
button.emit('mouseover');