
function sayHello()
{
   console.log("Hello Js");

}
console.log(sayHello())

function showName(fname,lname)
{
    return fname+ " " +lname
}

console.log(showName('deepak', 'Shardanandan'));
console.log(typeof showName)

let myfunc= function f1()
{
    console.log('I am in func1');
    return 40
}
let result=myfunc()
console.log(result);
console.log(typeof myfunc);

console.log("----------------------------------------");

let myfuncnew = function f2(n1,n2,n3)
{
    console.log('I am in func2');
    return n1+n2+n3
}
console.log(myfuncnew(12,12,18));

//add function into object 

let obj= {
     "name": "Deepak",
     f2: function()
     {
        console.log('I am inside object');
     }

}
obj.f2();

//add function in array

let arr=[

    13, "Dedepak", f1=function()
    {
       console.log('I am inside array');
    }
]

let y=arr[2]
y()
//arr[2]()

// Arrow functions
 let z=(x1,y1)=> {

    console.log('hello js again');
    return x1*y1
 }

 console.log(z(12,12));

 let myAddress = ()=> console.log("Delhi");
 myAddress()

 let myAddressnew= (house, street) => {

    console.log(`${house} ${street} Banglore`);
 }
myAddressnew("sejah", "whitelist")




