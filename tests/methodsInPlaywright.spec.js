//how to write methods directly in playwright for taking screenshoe, defining browser headed or headless & how to define brosers
import test from  '@playwright/test';

test("Using Methods direct in spec file", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
})
