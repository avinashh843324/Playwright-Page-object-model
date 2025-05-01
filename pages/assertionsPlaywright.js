import { test, expect } from "@playwright/test";
test("these are the assertion in playwright", async ({ page }) => {

    // text assertions
    await expect(locator).toHaveText('Hello World');
    await expect(locator).toContainText('Hello');
    await expect(locator).not.toHaveText('Error');

    //visibility & state 
    await expect(locator).toBeVisible();
    await expect(locator).toBeHidden();
    await expect(locator).toBeEnabled();
    await expect(locator).toBeDisabled();
    await expect(locator).toBeChecked();      // for checkboxes/radios
    await expect(locator).not.toBeChecked();

    //Attribute assertions
    await expect(locator).toHaveAttribute('type', 'password');
    await expect(locator).toHaveClass(/active/);
    await expect(locator).toHaveId('username-field');

    //value assertions
    await expect(locator).toHaveValue('John');
    await expect(locator).not.toHaveValue('');

    //URL assertions 
    await expect(page).toHaveURL('https://example.com/dashboard');
    await expect(page).toHaveURL(/.*dashboard/);

    //Tittle assertions
    await expect(page).toHaveTitle('Dashboard');
    await expect(page).toHaveTitle(/Dash/);

    //count assertions 
    await expect(page.locator('.card')).toHaveCount(5);  // exactly 5 cards present

    //Timeout & custom options
    await expect(locator).toHaveText('Hello', { timeout: 5000 });

    //Soft assertions
    await expect.soft(locator).toHaveText('Welcome');

    //Screenshot comparision 
    await expect(page).toHaveScreenshot();
    await expect(locator).toHaveScreenshot('button.png');


})