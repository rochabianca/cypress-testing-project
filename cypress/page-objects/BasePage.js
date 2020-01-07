class BasePage {
  pause(milliseconds) {
    cy.wait(milliseconds)
  }
}

export default BasePage