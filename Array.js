//const { log } = require("cypress/lib/logger");

let arr = []
console.log(arr);

let arr1 = [10,20,49,"deepak",true]
console.log(arr1);
console.log(typeof  arr1);
console.log(arr1[2]);
console.log(arr1[1]);
console.log(typeof arr1[4]);
console.log(arr1.length);
console.log(arr1[arr1.length-2]);

console.log("==========================");

console.log(arr1.push(1000));
console.log(arr1);

arr1.unshift("deepakseth")
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.shift()
console.log(arr1);

arr1.splice(1,2)
console.log(arr1);

arr1.splice(0,2)
console.log(arr1);

let arr2 = [10,20,49,"deepak",true]
let arr3 = ["Java", "JS", "dotnet"]

console.log("-------------------------------------------");
arr2.push(arr3)
console.log(arr2);
console.log(arr2[5]);
console.log(arr2[5][1]);

let obj1= {

      "Name":"Deepak Shardanandabn",
      "Language":"JS"
}

arr2.push(obj1)
console.log(arr2);
console.log(arr2[6].Name);
console.log(arr2[6]["Language"]);

let arr4 = [10,20,49,"deepak",true]
for(let i=0; i<arr4.length; i++)
{
    console.log(arr4[i]);
}

console.log("=======================================");

for(let i=0; i<arr2.length; i++)
{
    console.log(arr2[i]);
}