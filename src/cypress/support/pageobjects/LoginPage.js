/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements()

class LoginPage {
  visitPage() {
    cy.visit(url)
  }

  isLoginPage() {
    return cy.get(loginElements.loginWrapper).should('be.visible')
  }

  fillForm(login, password) {
    cy.get(loginElements.form).within(() => {
      cy.get(loginElements.formInputUsername).type(login)
      cy.get(loginElements.formInputPassword).type(password)
    })
  }

  btnLoginClick() {
    cy.get(loginElements.form).within(() => {
      cy.get(loginElements.formBtnLogin).click()
    })
  }

  errorAlertIsVisible() {
    cy.get(loginElements.form).within(() => {
      cy.get(loginElements.formErrorAlert).should('be.visible')
    })
  }

  errorAlertContainsTheMessage(message) {
    cy.get(loginElements.form).within(() => {
      cy.get(loginElements.formErrorAlert).should('have.text', message)
    })
  }
}

export default LoginPage
