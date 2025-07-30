/// <reference types="cypress" />

beforeEach('Open application', () => {
    cy.visit('/')
})

it.only('input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    const name = 'Artem'
    cy.get('#inputEmail1').type('hello@test.com', {delay: 200}).clear().type('hello').clear()
    cy.contains('nb-card', 'Using the Grid').contains('Email').type(`${name}@test.com`)

    cy.get('#inputEmail1').should('not.have.value', '').clear().type('test@bondaracademy.com')
    .press(Cypress.Keyboard.Keys.TAB)

    // cy.contains('Auth').click()
    // cy.contains('Login').click()

    // cy.get('#input-email').type('test@bondaracademy.com')
    // cy.get('#input-password').type('Welcome{enter}')


})