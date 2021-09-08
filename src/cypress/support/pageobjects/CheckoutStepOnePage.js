/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import CheckoutStepOneElements from '../elements/CheckoutStepOneElements'

const checkoutStepOneElements = new CheckoutStepOneElements()

class CheckoutStepOnePage {
  fillForm(firstName, lastName, postalCode) {
    cy.get(checkoutStepOneElements.form).within(() => {
      cy.get(checkoutStepOneElements.formInputFirstName).type(firstName)
      cy.get(checkoutStepOneElements.formInputLastName).type(lastName)
      cy.get(checkoutStepOneElements.formInputPostalCode).type(
        postalCode.replaceAll('"', '')
      )
    })
  }

  btnContinueClick() {
    cy.get(checkoutStepOneElements.btnContinue).click()
  }
}

export default CheckoutStepOnePage
