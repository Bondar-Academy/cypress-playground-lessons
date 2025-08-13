/// <reference types="cypress" />

import { onDatepickerPage } from "../page-objects/datepickerPage"
import { onFormLyoutsPage } from "../page-objects/formLayoutsPage"
import { navigateTo } from "../page-objects/navigationPage"

beforeEach('Open application', () => {
    cy.visit('/')
})

it('navigation test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.tooltipPage()
    navigateTo.toastrPage()
})

it.only('test with page object', () => {
    navigateTo.formLayoutsPage()
    onFormLyoutsPage.submitUsingTheGridForm('test@test.com', 'Welcome', 1)
    onFormLyoutsPage.submitBasicForm('artem@test.com', 'Welcome', false)
    navigateTo.datePickerPage()
    onDatepickerPage.selectCommonDatepickerDateFromToday(5)
    onDatepickerPage.selectRangePickerDateFromToday(10, 50)
})