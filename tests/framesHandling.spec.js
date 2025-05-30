import {test,expect} from "playwright/test"


test("Handling nested frames", async({page})=> {
await page.goto("https://demo.automationtesting.in/Frames.html");
const frame = page.frameLocator("iframe[src='SingleFrame.html']");

const heading = frame.locator("h5");
const actualText = await heading.textContent();
expect(actualText).toBe("iFrame Demo");

await frame.locator("//input[@type='text']").fill("test");


await page.locator("//a[contains(@href, 'Multiple')]").click();

 const outerFrame = page.frameLocator("iframe[src='MultipleFrames.html']");
  const innerFrame = outerFrame.frameLocator("iframe");
  const heading2 = innerFrame.locator('h5');
  const actualText2 = await heading2.textContent();
  expect(actualText2).toBe("iFrame Demo")



})

    