import Homepage from '../../page-objects/HomePage';
import TopNavbar from '../../page-objects/components/TopNavbar';
import LoginPage from '../../page-objects/LoginPage';
import ForgottenPasswordPage from '../../page-objects/ForgottenPasswordPage';

describe('Forgotten Password', () => {
  const homePage = new Homepage()
  const topNavbar = new TopNavbar()
  const loginPage = new LoginPage()
  const forgottenPasswordPage = new ForgottenPasswordPage()

  before(function () {
    homePage.visit()
  })

  it('should display login form', function () {
    topNavbar.clickOnSignInButton()
  })

  it('should display forgotten password form', function () {
    loginPage.clickForgotPasswordLink()
    forgottenPasswordPage.shouldExist()
  })

  it('should submit forgotten password form', function () {
    forgottenPasswordPage.fillEmail('email@test.com')
    forgottenPasswordPage.submitEmail()
  })

  it('should display success message', function () {
    forgottenPasswordPage.showSuccessMessage()
  })
});