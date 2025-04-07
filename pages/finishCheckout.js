import { expect } from "@playwright/test";
export class CheckoutOverviewPage {
    constructor(page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('.complete-header'); 
        this.completeText = page.locator('.complete-text'); 
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        this.checkoutCompleteTitle = page.locator('.title');
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async verifyOrderConfirmationMessage() {
        await expect(this.checkoutCompleteTitle).toHaveText('Checkout: Complete!');
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
        await expect(this.completeText).toContainText('Your order has been dispatched');
        await expect(this.backHomeButton).toBeVisible();
    }
}
