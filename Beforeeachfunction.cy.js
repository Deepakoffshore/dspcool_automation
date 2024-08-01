
//import { describe } from "mocha"
//import { before } from "mocha"
import { LoginPage } from "./pages/login_pages"
//import { functions } from "cypress/types/lodash"

const loginPage = new LoginPage()

beforeEach(function () {
    loginPage.visitUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

describe('All testcases', function () {
  

    it('Login test 1', function () {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()

    })
    it('Login test 2', function () {

        //loginPage.visitUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()

    })

})

it('Login invalid password', function () {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin12883')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()

})
