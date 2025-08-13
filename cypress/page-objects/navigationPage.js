
function selectGroupMenuItem(groupItemName){
    cy.contains('a', groupItemName).invoke('attr', 'aria-expanded').then( attr => {
        if(attr.includes('false')){
            cy.contains('a', groupItemName).click()
        }
    })
}


class NavigationPage {

    formLayoutsPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }

    toastrPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage()