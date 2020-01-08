class TopNavbar {
  search(text) {
    cy.get('#searchTerm').as("Searchbox")
    cy.get('@Searchbox').type(`${text} {enter}`)
    cy.url().should('include', `search.html?searchTerm=${text}`)
  }
}

export default TopNavbar