
"use strict"






//------------------------------------
// spread operator
//------------------------------------


function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let nums = [10, 20, 30]
func(nums[0], nums[1], nums[2])
func(...nums)


let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]

let arr3 = [...arr1, 4, 5, 6, ...arr2];


let o1 = { x: 1, y: 2 }
let o2 = { z: 3, x: 10 }

let o3 = { ...o2, ...o1 }