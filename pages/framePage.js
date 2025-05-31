import { expect } from "@playwright/test";


    export class FramePage {

        
    constructor(page) {
      this.page = page;
      this.Outerframe = page.frameLocator("iframe[src='SingleFrame.html']");
      this.heading1 = this.Outerframe.locator("h5");
      this.writeText = this.Outerframe.locator("//input[@type='text']");
      this.innerFrame = this.Outerframe.frameLocator("iframe");
      this.heading2  = this.innerFrame.locator('h5');
      this.innderFrameButton = page.locator("//a[contains(@href, 'Multiple')]");

    // Nested iframe (appears after click)
    this.outerFrame2 = page.frameLocator("iframe[src='MultipleFrames.html']");
    this.innerFrame2 = this.outerFrame2.frameLocator("iframe");
    this.heading2 = this.innerFrame2.locator("h5");
      
      
    }
    

    async openHomepage() {
        await this.page.goto("https://demo.automationtesting.in/Frames.html");
    }

    async checkOuterFrame() {
        const actualText = await this.heading1.textContent();
        expect(actualText).toBe("iFrame Demo");
        await this.writeText.fill("test");
    }
    async checkInnerFrame(){
        await this.innderFrameButton.click();
        await this.page.waitForTimeout(5000) ;
        const actualText2 = await this.heading2.textContent();
        expect(actualText2).toBe("iFrame Demo");
    }
}