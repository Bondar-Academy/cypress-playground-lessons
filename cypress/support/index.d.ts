declare namespace Cypress {
    interface Chainable {
        /**
         * Command to open home page of application
         */
        openHomePage(): Chainable<void>
    }
}