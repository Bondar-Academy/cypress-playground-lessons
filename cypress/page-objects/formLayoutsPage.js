

class FormLayoutsPage {

    /**
     * Method to submit Using The Grid form with valid user credentials
     * @param {string} email - valid user email
     * @param {string} password - valid user passowrd
     * @param {number} optionIndex - provide index of the option radio button. Start from 0.
     */
    submitUsingTheGridForm(email, password, optionIndex){
        cy.contains('nb-card', 'Using the Grid').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force: true})
            cy.wrap(form).contains('Sign in')
        })
    }

    submitBasicForm(email, password, isCheckboxSelected){
        cy.contains('nb-card', 'Basic form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            if(isCheckboxSelected){
                cy.wrap(form).find('[type="checkbox"]').check({force: true})
            }
            cy.wrap(form).contains('Submit')
        })
    }

}

export const onFormLyoutsPage = new FormLayoutsPage()