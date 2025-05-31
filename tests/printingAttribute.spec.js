import test from "playwright/test";

test("printing the attribute present in DOM according to dropdown", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("(//a[contains(text(), 'Computers')])[1]").hover();
    await page.locator("(//li/a[contains(@href, '/desktops')])[1]").click();
    const dropDown = page.locator('#products-pagesize');
    await dropDown.selectOption('12');
    const selectedOption = dropDown.locator('option:checked');
    const isSelectedAttr = await selectedOption.getAttribute('selected');
    console.log(isSelectedAttr)

})