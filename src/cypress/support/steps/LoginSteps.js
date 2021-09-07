/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage()

Given('acesso ao site CWI', () => {
  loginPage.acessarSite()
})

When('acesso a página de login', () => {
  loginPage.clicarBotaoPaginaLogin()
})

Then('devo visualisar o botão de recuperar senha esquecida', () => {
  loginPage.visualizarBotaoRecuperarSenha()
})
