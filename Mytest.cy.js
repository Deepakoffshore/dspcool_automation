///    <reference Types="cypress"/>

it('google test', function(){
   
  cy.visit('https://www.google.co.in/')
  cy.get('#APjFqb').type('automation{enter}')
  // cy.get('.V3FYCf > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > a > .LC20lb').click()
  cy.wait(9000)
  cy.contains('Machine').click()

})

it.only('login, test', function(){

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //using Xpath plugins
  cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[2]/input[1]').type('Admin')
  // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  cy.get('.oxd-button').click()
  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
  cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
  cy.get('.oxd-topbar-body-nav-tab-link').click()
  cy.get('.orangehrm-header-container > .oxd-button').click()
  cy.get('.oxd-button--secondary').click() 


})