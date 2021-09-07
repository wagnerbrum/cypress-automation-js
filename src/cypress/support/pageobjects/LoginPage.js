/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements()

class LoginPage {
  visitPage() {
    cy.visit(url)
    return
  }

  isLoginPage() {
    return cy.get(loginElements.loginWrapper()).should('be.visible')
  }

  fillForm(login, password) {
    cy.get(loginElements.formInputUsername()).type(login)
    cy.get(loginElements.formInputPassword()).type(password)
  }

  btnLoginClick() {
    cy.get(loginElements.formBtnLogin()).click()
  }
}

export default LoginPage
