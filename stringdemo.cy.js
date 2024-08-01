let fname= "My name is deepak shardanandan"
console.log(typeof fname);
console.log(fname.length);
console.log(fname[8]);
console.log(fname.includes("Name"));
console.log(fname.includes("name"));
console.log(fname.includes("Deepak"));
console.log(fname.startsWith("my"));
console.log(fname.endsWith("Sharda"));
console.log(fname.split(" "));
console.log(fname.toLocaleLowerCase());
console.log(fname.toUpperCase());
console.log(fname.trim());
console.log(fname.replace("deepak", "Nikhil"));

let finalmessage="your price is 400 USD"

let value = finalmessage.split(" ")[3]
console.log(typeof value);
let price = parseInt(value)
console.log(typeof price);
console.log(price);

if (price==400){

    console.log("pass");
}
else{

    console.log("Fail");
}

let msg=('Final \tamount is \'600\' \nrupee')
console.log(msg);


let newmsg=`Final amount is '790' UDS`

console.log(newmsg);

let x=650
let nemsg =`Final amount is ${x} UDS`
console.log(nemsg);







// let lname= new String('shardanandan')
// console.log(typeof lname);