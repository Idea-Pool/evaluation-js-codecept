const Helper = require("@codeceptjs/helper");

class PuppeteerHelper extends Helper {
    async seeInViewport(locator) {
        const page = this.helpers["Puppeteer"].page;
        const input = await page.$(locator);
        return input.isIntersectingViewport(input);
    }

    async seeDisabledAttribute(locator){
        const page = this.helpers["Puppeteer"].page;
        return page.$eval(locator, item => item.disabled);
    }
}

module.exports = PuppeteerHelper;