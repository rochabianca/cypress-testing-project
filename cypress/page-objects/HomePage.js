import BasePage from './BasePage';
import { base_url } from '../fixtures/config';

class HomePage extends BasePage {
  visit() {
    cy.visit(base_url)
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