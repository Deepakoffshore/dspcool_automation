
describe('Fill all the details', function(){

    it('Ugaoo', function(){

        cy.visit('https://www.ugaoo.com/')
        cy.get("#cart-icon-bubble").click()
        cy.get(".grid__item-cart mm-cart-upsell-card").select('have.text','indoor plants').click()

        
    })


})
        