let obj1 = {}
//console.log(typeof obj1);


let obj2 = {
         "Name": "Deepak",
         "Address":"Pune",
         "Number": "98812222",
         status: false

}
//console.log(typeof obj2);
console.log(obj2);
console.log(obj2.Name);
console.log(obj2.Number);
console.log(obj2.status);
console.log(obj2["Name"]);
console.log(obj2["Address"]);
console.log(obj2.salary);
obj2.salary=1000
obj2.experence=2
console.log(obj2);

delete obj2.salary
console.log(obj2);
console.log("-----------=====================------------------");

let obj3={ 
         "State":"MH",
         "Country": "INDIA"
}

obj2.Fulladdress = obj3
console.log(obj2);

obj2.Myfamily=["deepak", "goto", "Manoj"]
console.log(obj2);
console.log(obj2.Fulladdress.Country);
console.log(obj2.Myfamily[1]);

console.log("-----------=====================------------------");

obj2.myfunction=function(){

   console.log("Hello from function");
}
console.log(obj2);
obj2.myfunction()
console.log("-----------=====================------------------");

let deepak = obj2
console.log(typeof deepak);
console.log(deepak);

delete deepak.Fulladdress
console.log(obj2);

obj2.someRandomValues= "random"
console.log(deepak);

