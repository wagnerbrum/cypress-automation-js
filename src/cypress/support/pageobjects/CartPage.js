/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import CartElements from '../elements/CartElements'

const cartElements = new CartElements()

class CartPage {
  btnOpenCartClick() {
    cy.get(cartElements.btnOpenCart).click()
  }

  btnCheckoutClick() {
    cy.get(cartElements.btnCheckout).click()
  }
}

export default CartPage
