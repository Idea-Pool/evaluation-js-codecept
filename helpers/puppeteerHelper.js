const Helper = require("@codeceptjs/helper");

class PuppeteerHelper extends Helper {
    async seeInViewport(locator) {
        const page = this.helpers["Puppeteer"].page;
        const input = await page.$(locator);
        return input.isIntersectingViewport(input);
    }

    async seeDisabledAttribute(locator, type = "css") {
        const page = this.helpers["Puppeteer"].page;
        if (type === "css") {
            return page.$eval(locator, item => item.disabled);
        } else {
            const button = (await page.$x(locator))[0];
            return page.evaluate(button => button.disabled, button);
        }
    }

    async seeMultiSelect(locator) {
        const page = this.helpers["Puppeteer"].page;
        return page.$eval(locator, item => item.multiple);
    }

    async seeSelectedOption(locator){
        const page = this.helpers["Puppeteer"].page;
        return page.$eval(locator , selected => selected.value);
    }
}

module.exports = PuppeteerHelper;