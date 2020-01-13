class TopNavbar {
  search(text) {
    cy.get('#searchTerm').as("Searchbox")
    cy.get('@Searchbox').type(`${text} {enter}`)
    cy.url().should('include', `search.html?searchTerm=${text}`)
  }
  clickOnSignInButton() {
    cy.get('#signin_button').click()
    cy.get('#login_form').should('be.visible')
  }
}

export default TopNavbar