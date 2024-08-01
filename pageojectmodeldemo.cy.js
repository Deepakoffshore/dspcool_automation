
import { LoginPage } from "./pages/login_pages"

const loginPage = new LoginPage()

it('POM Demo', function(){

loginPage.visitUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
loginPage.enterUsername('Admin')
loginPage.enterPassword('admin123')
loginPage.clickLogin()


})
