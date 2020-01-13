import HomePage from '../../page-objects/HomePage';
import LoginPage from '../../page-objects/LoginPage';
import TopNavbar from '../../page-objects/components/TopNavbar';
import Tabs from '../../page-objects/components/Tabs';

describe('Login Test', () => {
  const homePage = new HomePage()
  const topNavbar = new TopNavbar()
  const loginPage = new LoginPage()
  const tabs = new Tabs()

  describe('Login Failed Test', () => {
    before(function () {
      homePage.visit();
    })

    it('should display login form', function () {
      topNavbar.clickOnSignInButton()
    })

    it('should login to application', function () {
      loginPage.login("Name", "Password")
    })

    it('should display error message', function () {
      loginPage.showErrorMessage()
    })
  });

  describe('Login Success Test', () => {
    before(function () {
      homePage.visit()
    })

    it('should display login form', function () {
      topNavbar.clickOnSignInButton()
    })

    it('should login to application', function () {
      loginPage.login("username", "password")
    })

    it('should display navbar links after login', function () {
      tabs.shouldBeVisible()
    })

    it('should loggout from application', function () {
      cy.get('.icon-user').click()
      cy.get('#logout_link').click()
      homePage.carouselIsVisible()
    })
  });
});