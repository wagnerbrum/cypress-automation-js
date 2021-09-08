/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import CheckoutFinishElements from '../elements/CheckoutFinishElements'

const checkoutFinishElements = new CheckoutFinishElements()

class CheckoutFinishPage {
  messageIsVisible() {
    cy.get(checkoutFinishElements.headerComplete).should('be.visible')
  }

  messageHasText(message) {
    cy.get(checkoutFinishElements.headerComplete).should('have.text', message)
  }
}

export default CheckoutFinishPage
