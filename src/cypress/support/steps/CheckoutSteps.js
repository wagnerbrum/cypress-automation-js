import InventoryPage from '../pageobjects/InventoryPage'
import InventoryItemPage from '../pageobjects/InventoryItemPage'
import CartPage from '../pageobjects/CartPage'
import CheckoutStepOnePage from '../pageobjects/CheckoutStepOnePage'
import CheckoutStepTwoPage from '../pageobjects/CheckoutStepTwoPage'
import CheckoutFinishPage from '../pageobjects/CheckoutFinishPage'

const inventoryPage = new InventoryPage()
const inventoryItemPage = new InventoryItemPage()
const cartPage = new CartPage()
const checkoutStepOnePage = new CheckoutStepOnePage()
const checkoutStepTwoPage = new CheckoutStepTwoPage()
const checkoutFinishPage = new CheckoutFinishPage()

When('adiciono o produto {string}', (product) => {
  inventoryPage.titleProductClick(product)
  inventoryItemPage.btnAddToCartClick()
})

When('visualizo o carrinho', () => {
  cartPage.btnOpenCartClick()
})

When('sigo para as informações do Checkout', () => {
  cartPage.btnCheckoutClick()
})

When('insiro as seguintes informações pessoais', (dataTable) => {
  const row = dataTable.rows()[0]

  checkoutStepOnePage.fillForm(...row)
})

When('sigo para o Overview do Checkout', () => {
  checkoutStepOnePage.btnContinueClick()
})

When('finalizo a compra', () => {
  checkoutStepTwoPage.btnFinishClick()
})

Then(
  'a página de pedido completo é exibida contendo a mensagem {string}',
  (message) => {
    checkoutFinishPage.messageIsVisible()
    checkoutFinishPage.messageHasText(message)
  }
)
