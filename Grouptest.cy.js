
//import { describe } from "mocha"
//import { before } from "mocha"
import { LoginPage } from "./pages/login_pages"
import { functions } from "cypress/types/lodash"

const loginPage = new LoginPage()

describe('All testcases', function () {

    beforeEach(function () {
        loginPage.visitUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

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

