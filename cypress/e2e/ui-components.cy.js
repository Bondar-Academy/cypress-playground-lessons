/// <reference types="cypress" />

beforeEach('Open application', () => {
    cy.visit('/')
})

it.only('input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    
})