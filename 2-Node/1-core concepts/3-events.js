

const EventEmitter = require('events');

let ee = new EventEmitter();

ee.on('some-event', () => {
    console.log("handling some-event on ee");
});
ee.on('some-event', () => {
    console.log("handling some-event on ee");
});
ee.on('other-event', () => {
    console.log("handling other-event on ee");
});

// setTimeout(() => {
//     ee.emit('some-event');
// }, 3000)
// setTimeout(() => {
//     ee.emit('other-event');
// }, 1000)


//----------------------------------------------------


class Door extends EventEmitter {
    open() {
        console.log("door opened");
        this.emit('open', { num: 306, floor: 4 })
    }
    close() {
        console.log("door closed");
        this.emit('close', { num: 306, floor: 4 })
    }
}


const door = new Door();


// Light
//-------------------------------------------

const light = {
    setUp() {
        //..
        door.on('open', e => {
            console.log("LIGHT ON >>> " + e.num + " " + e.floor);
        })
        door.on('close', e => {
            console.log("LIGHT OFF <<< " + e.num + " " + e.floor);
        })
    }
}
light.setUp();
//-------------------------------------------


// AC
//-------------------------------------------

const AC = {
    setUp() {
        //..
        door.on('open', e => {
            console.log("AC ON >>> " + e.num + " " + e.floor);
        })
        door.on('close', e => {
            console.log("AC OFF <<< " + e.num + " " + e.floor);
        })
    }
}
AC.setUp();
//-------------------------------------------


setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 2000);
}, 2000)