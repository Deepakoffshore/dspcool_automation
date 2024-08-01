//const { functions } = require("cypress/types/lodash")

describe('Fill all the details', function(){

    it('registration', function(){

        cy.viewport(1000,800)
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        //cy.get('#dropdown').select('Option 1').find(':selected').contains('Option 1')
        cy.get('#dropdown').select('1').find(':selected').contains('Option 1')
        
    })


})