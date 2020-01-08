import BasePage from './BasePage';

class SearchResultsPage extends BasePage {
  displayTitle() {
    cy.get('h2').as('Title')
    cy.get('@Title').contains('Search Results')
  }
}

export default SearchResultsPage