it('yahoo test', () => {

    cy.visit('https://automationstepbystep.com/')

    // cy.get('[href="https://automationstepbystep.com/stories/"] > .alignnone').click()
    cy.wait(6000)
    cy.get('[href="https://automationstepbystep.com/online-courses/"] > .alignnone').click()


})