it('creates a to-do list item', () => {
  cy.visit('/')
  cy.addTodo("Water my dog")
  cy.findByText("Water my dog").should("exist")
})

it('completes a to-do item', function() {
  cy.visit('/')
  cy.addTodo("Water my dog")
  cy.toggleTodoCompleted("Water my dog")
  cy.findByTestId("incomplete-todos").should("not.contain", "Water my dog")
  cy.findByTestId("completed-todos").should("contain", "Water my dog")
})

it('creates, completes, archives, and deletes a to-do item', function() {
  cy.visit('/')
  cy.addTodo("Water my dog")
  cy.toggleTodoCompleted("Water my dog")
  cy.archiveCompletedTodo("Water my dog")
  cy.findByRole("link", { name: "Archive" }).click()
  cy.deleteArchivedTodo("Water my dog")

  cy.document().its("body").should("not.contain", "Water my dog")

  cy.findByRole("link", { name: "Home" }).click()

  cy.document().its("body").should("not.contain", "Water my dog")
})
