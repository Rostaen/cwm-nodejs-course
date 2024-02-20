/*
    app.js is the main module.

    this is added to the global scope and window.sayHello will be used by the compiler
*/
function sayHello(name){
    console.log(`Hello ${name}`);
}

//sayHello('Andrew');
console.log(sayHello('Andrew'));

/*
Global Ojects
console.log();

setTimeout(); Does something after a specific time frame
clearTimeout(); Stops the setTimeout function

setInterval(); Does something after a specific time, repeatedly
clearInterval(); Stops the setInterval function from executing

window.console.log or console.log (2nd is prefix with window. by the compiler)

const message = '';
and const window.message are the same but the compiler adds the window section
*/

console.log(module);
/*
    Output:
    {
        id: '.',
        path: 'C:\\Users\\Andrew\\coding-projects\\code-with-mosh\\nodejs',
        exports: {},
        filename: 'C:\\Users\\Andrew\\coding-projects\\code-with-mosh\\nodejs\\app.js',
        loaded: false,
        children: [],
        paths: [
            'C:\\Users\\Andrew\\coding-projects\\code-with-mosh\\nodejs\\node_modules',
            'C:\\Users\\Andrew\\coding-projects\\code-with-mosh\\node_modules',
            'C:\\Users\\Andrew\\coding-projects\\node_modules',
            'C:\\Users\\Andrew\\node_modules',
            'C:\\Users\\node_modules',
            'C:\\node_modules'
        ]
    }
*/
