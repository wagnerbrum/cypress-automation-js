/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import InventoryElements from '../elements/InventoryElements'

const inventoryElements = new InventoryElements()

class InventoryPage {
  btnMenuBurgerClick() {
    cy.get(inventoryElements.btnMenuBurger()).click()
  }

  menuWindowIsVisible() {
    cy.get(inventoryElements.menuWindow()).should('be.visible')
  }

  menuItemLogoutIsVisible() {
    cy.get(inventoryElements.menuItemLogout()).should('be.visible')
  }
}

export default InventoryPage
