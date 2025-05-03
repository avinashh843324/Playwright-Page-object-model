import test from "playwright/test";

test(" Upload a single image file and verify it appears in the grid",async({page}) =>{
await page.goto("file:///C:/Users/avina/index.html");
const a =  page.locator("//input[@id='fileInput']");
// let b =  PNG1.resolve(__dirname,"utils\test-data\PNG1.png")
await a.setInputFiles("utils/PNG1.png");
})
