describe('handle frames', () => {

    it('approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        const ifram = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        cy.wait(6000)
        ifram.clear().type('mytesting page {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
        cy.wait(2000)
        cy.get("[aria-label='Bold']").click()


    })

    // it.skip('approach2  by custome commands', () => {

    //     cy.visit('https://the-internet.herokuapp.com/iframe')
    //     cy.getIframe('#mce_0_ifr').clear().type('mytesting page {ctrl+a}')
    //     cy.get("[aria-label='Bold']").click()
    //     cy.wait(2000)
    //     cy.get("[aria-label='Bold']").click()


    })
//})