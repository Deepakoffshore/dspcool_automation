describe('handle tabs', () => {


    it.skip('approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')  // parent tab
        cy.get('.example >a').invoke('removeAttr', 'target').click(); // click on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // assertion check

        cy.wait(5000)
        cy.go('back');  //retuen to parent window
    })

    
    it('approach2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')   
        cy.get('.example >a').then((e)=> {

         let url = e.prop('href')
         cy.visit(url);

        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // assertion check
        cy.wait(5000)
        cy.go('back');  //retuen to parent window
    })

})