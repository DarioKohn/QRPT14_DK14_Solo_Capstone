import { theCriterionChannel } from "../objects/theCriterionChannelObjects";
const page = new theCriterionChannel();
const fs = require("fs");

describe("Testing Allrecipe register feature with email, facebook and google; login feature with email, facebook and google; and main search bar with results bar", () => {

    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await page.driver.quit();
    });

    test("Testing sign up with valid email and password until validation requirements are met", async () => {
        await page.click(page.searchLnk);
        await page.click(page.mainSearchBarInput);
        await page.setInput(page.mainSearchBarInput, "Solaris");
        await page.click(page.mainSearchBarBtn);
        await page.driver.sleep(6000);
    });
});