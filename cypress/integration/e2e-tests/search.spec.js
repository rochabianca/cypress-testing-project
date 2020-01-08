import HomePage from '../../page-objects/HomePage'
import SearchResults from '../../page-objects/SearchResults'
import TopNavbar from '../../page-objects/components/TopNavbar'

describe('Searchbox Test', () => {
  const homePage = new HomePage();
  const topNavbar = new TopNavbar();
  const searchResults = new SearchResults();
  before(function () {
    homePage.visit()
  })

  it('should search for value via searchbox', function () {
    topNavbar.search('bank')
  })

  it('should display search results page', function () {
    searchResults.displayTitle()
  })

  it('should display homepage again', function () {
    cy.go('back')
    cy.url().should('include', "index.html")
  })
});