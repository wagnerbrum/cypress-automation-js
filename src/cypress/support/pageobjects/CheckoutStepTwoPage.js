/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import CheckoutStepTwoElements from '../elements/CheckoutStepTwoElements'

const checkoutStepTwoElements = new CheckoutStepTwoElements()

class CheckoutStepTwoPage {
  btnFinishClick() {
    cy.get(checkoutStepTwoElements.btnFinish).click()
  }
}

export default CheckoutStepTwoPage
