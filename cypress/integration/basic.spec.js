describe('My first cypress test', () => {
	it('should load example webpage', function() {
		cy.visit('http://example.com/')

		cy.url().should('include', 'http://example.com/')
		cy.title().should('eq', 'Example Domain')
		cy.get('h1').contains('Example Domain')
	})
})
