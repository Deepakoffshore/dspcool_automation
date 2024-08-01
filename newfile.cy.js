const { contains } = require("cypress/types/jquery");

describe ('fixture data', ()=>{

before('fixtureapprach', () =>{

cy.fixture('example').then(data, () =>{

let userdata = data;

console.log(userdata);

})

})
it('fixture', () => {

cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')

console.log(a);
var a=4;
console.log(b);
let b=8;

cy.get('#button').should('have.text', 'signup')

cy.get('input.clsss=button').invoke('att', 'class').should('contains', 'button')

var arr= [1, 8, 6 , 5]

function arrsort(str){

    sortedstr =arr[""]

    arr = str.sort().join("")

}

let sortedvalue = arr.sort()

})

})