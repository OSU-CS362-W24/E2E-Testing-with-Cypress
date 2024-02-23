

describe('template spec', function() {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
	cy.contains("dblclick").click()

	cy.url().should("include", "/commands/actions")
	
  })
})
