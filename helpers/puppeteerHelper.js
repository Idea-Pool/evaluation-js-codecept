const Helper = require("@codeceptjs/helper");

class PuppeteerHelper extends Helper {
    async seeInViewport(locator) {
        const page = this.helpers["Puppeteer"].page;
        const input = await page.$(locator);
        return input.isIntersectingViewport(input);
    }
}

module.exports = PuppeteerHelper;