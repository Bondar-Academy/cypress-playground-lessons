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

it('Cypress Chains', () => {
    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click()

    cy.get('#inputEmail1')
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')
})

it('Reusing Locators', () => {

    //THIS WILL NOT WORK!!! DON"T DO LIKE THIS!!!
    //const inputEmail1 = cy.get('#inputEmail1')
    //inputEmail1.parents('form').find('button')
    //inputEmail1.parents('form').find('nb-radio')

    // 1. Cypress Alias
    cy.get('#inputEmail1').as('inputEmail1')
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Cypress then() method

    cy.get('#inputEmail1').then( inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')
        cy.wrap('Hello').should('equal', 'Hello')
        cy.wrap(inputEmail).as('inputEmail2')
    })

    cy.get('@inputEmail2').click()

})

it('Extracting Values', () => {
    // 1. using a JQuery method
    cy.get('[for="exampleInputEmail1"]').then( label => {
        const emailLabel = label.text()
        console.log(emailLabel)
    })

    // 2. Using invoke command
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => {
        console.log(emailLabel)
    })
    cy.get('[for="exampleInputEmail1"]').invoke('text').as('emailLabel')
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    // 3. Invoke attribute value
    cy.get('#exampleInputEmail1').invoke('attr', 'class').then(classValue => {
        console.log(classValue)
    })
    cy.get('#exampleInputEmail1').should('have.attr', 'class', 'input-full-width size-medium status-basic shape-rectangle nb-transition')

    // 4. Invoke input field value
    cy.get('#exampleInputEmail1').type('hello@test.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then( value => {
        console.log(value)
    })
})

it('Assertions', () => {

    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then( label => {
        expect(label).to.have.text('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').then( emailLabel => {
        expect(emailLabel).to.equal('Email address')
        cy.wrap(emailLabel).should('equal', 'Email address')
    })

})

it('Timeouts', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()

    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header', {timeout: 11000})
        .should('have.text', 'Friendly reminder')
})