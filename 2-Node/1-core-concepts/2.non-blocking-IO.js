
console.log("-----------------");
console.log(process.pid)
console.log("-----------------");

const fs = require('fs');

// non-blocking IO
console.log('Initiate veg-menu file reading...')
fs.readFile('./veg-menu.txt', (err, vegMenu) => {
    if (err) throw err;
    console.log(vegMenu.toString('UTF8'))
})
console.log('Initiate non-veg menu file reading...')
fs.readFile('./non-veg-menu.txt', (err, nonVegMenu) => {
    if (err) throw err;
    console.log(nonVegMenu.toString('UTF8'))
})

console.log("cont with other work..");    
