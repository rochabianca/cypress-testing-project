class Tabs {
  shouldBeVisible() {
    cy.get('#account_summary_tab').should('be.visible')
    cy.get('#account_activity_tab').should('be.visible')
    cy.get('#transfer_funds_tab').should('be.visible')
    cy.get('#pay_bills_tab').should('be.visible')
    cy.get('#money_map_tab').should('be.visible')
    cy.get('#online_statements_tab').should('be.visible')
  }
}

export default Tabs;