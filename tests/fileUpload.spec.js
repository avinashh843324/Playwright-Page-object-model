import {test,expect} from'@playwright/test';
import path from 'path';
7
test("File upload testing",async({page})=>{
    await page.goto("https://practice-automation.com/file-upload/");
    
    //method 1 using __dirname → gives you the full path to test & path.resolve(...) → converts it to an absolute path that Playwright can use
    // const filepath = path.resolve(__dirname,'../utils/PNG1.png'); //../utils/PNG1.png' → goes up one level (..) to reach utils/
    // await page.locator("//input[@id='file-upload']").setInputFiles(filepath);

    //Method 2 direct
    
    await page.locator("//input[@id='file-upload']").setInputFiles("./utils/PNG1.png")
    await page.locator("input[type='submit']").click();
    const text = await page.locator("//div[contains(text(),'Thank you for your message. It has been sent.')]").textContent();
    expect(text).toBe("Thank you for your message. It has been sent.");

})

test.only("file download testing",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/upload-download.php");

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton')
    ]);

    const filename = download.suggestedFilename(); // e.g., 'sampleFile.txt'
  const filepath = path.join('./utils/downloads', filename);

  await download.saveAs(filepath);

})