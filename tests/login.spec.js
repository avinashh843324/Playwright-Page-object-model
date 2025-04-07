import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginTestData from '../utils/loginTestData.json';

test.describe('Login scenario - Data Driven ', () => {
  for (const data of loginTestData) {
    test(`${data.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.expected === 'success') {
        await expect(page).toHaveURL(/inventory.html/);
      } else {
        const error = await loginPage.getError();
        expect(error).toContain(data.errorMessage);
      }
    });
  }
});
