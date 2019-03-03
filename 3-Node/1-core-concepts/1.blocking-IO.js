
console.log("-----------------");
console.log(process.pid)
console.log("-----------------");

const fs = require('fs');

console.log("-------------------------------------------");
// blocking IO
const vegMenu = fs.readFileSync('./veg-menu.txt', 'UTF8');
console.log(vegMenu);
console.log("-------------------------------------------");


console.log("cont with other work..");    
