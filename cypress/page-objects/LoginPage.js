import BasePage from './BasePage'

class LoginPage extends BasePage {
  clickForgotPasswordLink() {
    cy.contains('Forgot your password ?').click()
  }
  login(username, password) {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
  }
  showErrorMessage() {
    cy.get('.alert-error').as('Error_Message')
    cy.get('@Error_Message').should('be.visible')
  }
}

export default LoginPage