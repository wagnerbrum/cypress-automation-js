import LoginPage from '../pageobjects/LoginPage'
import InventoryPage from '../pageobjects/InventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

Given('que acesso o site', () => {
  loginPage.visitPage()
})

When('informo as seguintes credenciais', (dataTable) => {
  const row = dataTable.rows()[0]

  loginPage.fillForm(row[0], row[1])
})

When('me autentico no sistema', () => {
  loginPage.btnLoginClick()
})

Then('vejo que estou na pagina de login', () => {
  loginPage.isLoginPage()
})

Then('o menu do usuário está visivel', () => {
  inventoryPage.btnMenuBurgerClick()
  inventoryPage.menuWindowIsVisible()
})

Then('o usuário aparece logado', () => {
  inventoryPage.menuItemLogoutIsVisible()
})
