it('creates a to-do list item', () => {
  cy.visit('/')
  cy.findByPlaceholderText("Enter a To-Do").type("Water my dog")
  cy.findByRole("button", { name: "Add To-Do" }).click()
  cy.findByText("Water my dog").should("exist")
})
