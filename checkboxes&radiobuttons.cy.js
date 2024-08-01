const { functions } = require("cypress/types/lodash")

describe('Fill all the details', function(){

    it('registration', function(){

        cy.viewport(1000,800)
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get("input[type='checkbox']").first().check().should('be.checked')
        cy.get("input[type='checkbox']").last().uncheck().log('last checkbox unchecked')

        //cy.get("input[type='checkbox']").check().should('be.checked')

    })
     it('radio buttons', function(){

         // Radio button 
        
         cy.visit('https://artoftesting.com/samplesiteforselenium')
         cy.get('#male').click()
         cy.get('#female').click()
     })


})