import BasePage from './BasePage';

class HomePage extends BasePage {
  visit() {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', "index.html")
  }
  carouselIsVisible() {
    cy.get('#carousel').should('be.visible')
  }
  clickOnHome() {
    cy.get('#homeMenu').click()
  }
  clickOnOnlineBanking() {
    cy.get('#onlineBankingMenu').click()
  }
  clickOnFeedback() {
    cy.get('#feedback').click()
  }
}

export default HomePage