//import { data } from "cypress/types/jquery"


before(function () {

   cy.fixture('example.json').as('test_data')
})
it('read files using fixture', function () {

   cy.fixture('example.json').then((data) => {
      cy.log(data.name)
      cy.log(data.email)

   })
   cy.log(this.test_data.name)

})
it('write file demo', function () {
   cy.writeFile('sample.txt', 'Hello I am deepak \n')

   cy.writeFile('sample.txt', 'I am learning cypress', {flag:'a+'})
})

it('read file using read file', function () {
   cy.readFile('./cypress/fixtures/example.json').then((data) => {
      cy.log(data.name)
   })

 

})