import { test, expect } from '@playwright/test';
import testData from '../utils/testData.json';
import { LoginPage, ProductPage, CartPage, CheckoutPage, CheckoutOverviewPage } from '../pages';


test('User can browse products, add to cart, and verify cart contents', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page)

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await expect(page).toHaveURL(/inventory/);

  // Step 2: Add products
  await productPage.addProduct('Sauce Labs Backpack');
  await productPage.addProduct('Sauce Labs Bike Light');

  // Step 3: Go to cart
  await productPage.goToCart();
  await expect(page).toHaveURL(/cart/);

  // Step 4: Verify items in cart
  await cartPage.verifyProductsInCart(['Sauce Labs Backpack','Sauce Labs Bike Light' ])

  // step 5: proceed to checkout 
  await cartPage.proceedToCheckout();
  
  // step 6 : fill coustomer informtion
  await checkout.fillCustomerInfo("Avinash","Kumar","560064");

  // step 7 finish 
  await checkoutOverviewPage.finishOrder();

  // last step : verify the order is placed successfully
  await checkoutOverviewPage.verifyOrderConfirmationMessage();

  

});
