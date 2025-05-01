import {test} from"@playwright/test";
test("this is demo", async({page})=>{
    await page.goto("https://www.google.com")
})