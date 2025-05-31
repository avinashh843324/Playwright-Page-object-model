import {test,expect} from "playwright/test";
import {FramePage} from '../pages/framePage';


test("Handling nested frames", async({page})=> {
  const framePage = new FramePage(page);
  await framePage.openHomepage();
  await framePage.checkOuterFrame();
  await framePage.checkInnerFrame();
})

    