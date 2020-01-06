describe('Login Failed Test', () => {
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

describe('Login Success Test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', "index.html")
  })

  it('should display login form', function () {
    cy.get('#signin_button').click()
    cy.get('#login_form').should('be.visible')
  })

  it('should login to application', function () {
    cy.loginToApp("username", "password")
  })

  it('should display navbar links after login', function () {
    cy.get('#account_summary_tab').should('be.visible')
    cy.get('#account_activity_tab').should('be.visible')
    cy.get('#transfer_funds_tab').should('be.visible')
    cy.get('#pay_bills_tab').should('be.visible')
    cy.get('#money_map_tab').should('be.visible')
    cy.get('#online_statements_tab').should('be.visible')
  })

  it('should loggout from application', function () {
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
    cy.get('#homeMenu').should('be.visible')
  })
});