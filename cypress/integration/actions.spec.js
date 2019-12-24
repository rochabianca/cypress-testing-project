describe('Action Test', () => {
  before(function () {
    //runs once before all tests in the block
  })
  after(function () {
    // runs once after all tests in the block
  })
  beforeEach(function () {
    // runs before each test in the block
    cy.visit('https://devexpress.github.io/testcafe/example/');
  })
  afterEach(function () {
    // runs after each tests
  })
  it('submit developer name', function () {
    cy.get('#developer-name').type('Name')
    cy.get('#submit-button').scrollIntoView()
    cy.get('#submit-button').click()

    cy.get('.result-content').should('be.visible')
    cy.url().should('include', 'thank-you')
  })
})