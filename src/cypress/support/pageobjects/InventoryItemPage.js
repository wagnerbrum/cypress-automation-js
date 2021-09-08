/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import InventoryItemElements from '../elements/InventoryItemElements'

const inventoryItemElements = new InventoryItemElements()

class InventoryItemPage {
  btnAddToCartClick() {
    cy.get(inventoryItemElements.btnAddToCart).click()
  }
}

export default InventoryItemPage
