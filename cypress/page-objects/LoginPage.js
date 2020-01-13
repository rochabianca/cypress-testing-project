import BasePage from './BasePage'

class LoginPage extends BasePage {
  clickForgotPasswordLink() {
    cy.contains('Forgot your password ?').click()
  }
}

export default LoginPage