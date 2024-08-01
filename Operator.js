//const { log } = require("cypress/lib/logger");

//const { toUpper } = require("cypress/types/lodash/fp");

console.log(100/10);
console.log(100/2.5);
console.log(100/0);
console.log('deepak'/0);
console.log(100/undefined);

let result= 10+10+"deepak"
console.log(result);

let result1= "deepak"+10+10
console.log(result1);

let mark ="5"*5
console.log(mark);


let mark1 ="5"-5
console.log(mark1);

console.log(10/true);
console.log(10/false);

console.log('5'*5);
console.log('deepak'*5);


let num1='50'
console.log(typeof num1);

let num2=50
console.log(typeof num2);

if(num1==num2)
{

    console.log("matched");
}
else{
    console.log("Not matched");
}

console.log("================================");
if(num1===num2)
{

    console.log("matched");
}
else{
    console.log("Not matched");
}

console.log(10>8 && 9<11);
console.log(10>8 && 9<11);
console.log(!true);
console.log(!false);

let str1="This is JS"
let str2="JS"
let str3="This is js "
if(str1.includes(str2)){

    console.log("Pass");
}
else{

    console.log("Fail");
}
 console.log("====================================");

if(str1==str3){
    console.log("pass");
}
else{
    console.log("Fail");

 if(str1.toUpperCase()==str3.toUpperCase()){

    console.log("Pass");
 }
 else{
    console.log("Fail");
 }

 let num3=10
 num3= num3+5
 console.log(num3);
 num3+=5
 console.log(num3);
 num3*=7
 console.log(num3);
 num3/=7
 console.log(num3);
}
