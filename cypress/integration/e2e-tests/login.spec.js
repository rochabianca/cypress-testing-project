describe('Login Test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', "index.html")
  })

  it('should display login form', function () {
    cy.get('#signin_button').click()
    cy.get('#login_form').should('be.visible')
  })

  it('should login to application', function () {
    cy.loginToApp("Name", "Password")
  })

  it('should display error message', function () {
    cy.get('.alert-error').as('Error_Message')
    cy.get('@Error_Message').should('be.visible')
  })
});