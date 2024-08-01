var fname = "Deepak"     // allowed to redeclaire and update the values 
var fname = "shardanandan"
console.log(fname);

let lname= "selenium"  // Not allowed to redeclaire and but allowed update the values 
 lname= "webdriver"
 console.log(lname);

 const toolname ="selenium"  // Not allowed to redeclaire and update the values 
  //toolname ="selenium344"

 console.log(toolname);

 for (var i=0; i<5; i++)
 {
    console.log(i);
 }
 console.log("outside value", i);

 for (let x=0; x<5; x++)
 {
    console.log(x);
 }
 //console.log("outside value", x);

console.log("-------------=====================");
 for (let y=0; y<5; y++)
 {
    console.log(y);
 }
 //console.log("outside value", y);
