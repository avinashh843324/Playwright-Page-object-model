import {test,expect} from "@playwright/test";


test("Handling dialog box", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#hide-textbox").click();
    
    
    // Method 1 page.on() - when we have multiple events to be called (eg - multiple alerts/popups)
    page.on('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
    await page.locator("#confirmbtn").click();
    await page.locator("#alertbtn").click();

    // Method 2 page.once() - when we have only events to be called (eg - single alerts/popups)
    // page.once('dialog', dialog => {
    //     console.log(`Dialog message: ${dialog.message()}`);
    //     dialog.dismiss().catch(() => {});
    //   });
    // await page.locator("#confirmbtn").click();

    // make sure to use only method at a time as page.on() will capture the next events also which we wrote in page.once()
})