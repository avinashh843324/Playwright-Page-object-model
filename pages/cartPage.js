import { expect } from "@playwright/test";
export class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.productOne = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
        this.productTwo = page.locator("//div[normalize-space()='Sauce Labs Bike Light']");
    }

    async verifyProductsInCart(productNames = []) {
        for (const name of productNames) {
          const productLocator = this.page.locator(`.inventory_item_name:has-text("${name}")`);
          await expect(productLocator).toBeVisible();
        }}
      
      
      

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
