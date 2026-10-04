//sync(1)->end(6)->priority(4)->micro(5)->macro(2,3)
console.log('1: start (sync)');

setTimeout(() => {
    console.log('2: setTimeout (macrotask-timers phase)');
}, 0);

setImmediate(() => {
    console.log('3: setImmediate (check phase)');
});

process.nextTick(() => {
    console.log('4: process.nextTick (highest priority microtask)');
});

Promise.resolve().then(() => {
    console.log('5: Promise.then (microtask)');
});

console.log('6: end (sync)');