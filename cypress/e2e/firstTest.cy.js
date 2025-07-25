/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('Hello world 1', () => {

    //by Tag
    cy.get('input')

    //by ID value
    cy.get('#inputEmail1')

    // by Class value
    cy.get('.input-full-width')

    // by attribute
    cy.get('[fullwidth]')

    // by attribute with value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //how to combine several attributes
    cy.get('[placeholder="Email"][fullwidth]')
    cy.get('input[placeholder="Email"]')

    //find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')

})

it('Cypress Locator Methods', () => {
    //Theory
    //get() - to find elments on the page globally
    //find() - to find only child elements
    //contains() - to find web elements by text

    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')
    cy.contains('nb-card', 'Horizontal form').get('button')
})

it('Child Elements', () => {

    cy.contains('nb-card', 'Using the Grid').find('.row').find('button')

    cy.get('nb-card').find('nb-radio-group').contains('Option 1')

    cy.get('nb-card nb-radio-group').contains('Option 1')

    cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]')
})

it('Parent Elements', () => {

    cy.get('#inputEmail1').parents('form').find('button')

    cy.contains('Using the Grid').parent().find('button')

    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button')
})

it.only('Cypress Chains', () => {

})