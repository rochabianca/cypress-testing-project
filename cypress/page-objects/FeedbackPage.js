import BasePage from './BasePage';

class FeedbackPage extends BasePage {
  feedbackFormIsVisible() {
    cy.get('#feedback-title').should('be.visible')
    cy.get('form').should('be.visible')
  }

  fillFeedbackForm(name, email, subject, comment) {
    cy.get('#name').as('Input_Name')
    cy.get('#email').as('Input_Email')
    cy.get('#subject').as('Input_Subject')
    cy.get('#comment').as('Input_Comment')

    cy.get('@Input_Name').type(name)
    cy.get('@Input_Email').type(email)
    cy.get('@Input_Subject').type(subject)
    cy.get('@Input_Comment').type(comment)
  }
  submitFeedbackForm() {
    cy.contains('Send Message').click()
  }
  showSuccessMessage() {
    cy.get('#feedback-title').should('be.visible')
  }
}

export default FeedbackPage