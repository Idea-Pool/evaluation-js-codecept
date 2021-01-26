const Helper = require("@codeceptjs/helper");
const assert = require("assert");

class PuppeteerHelper extends Helper {
    async seeInViewport(locator) {
        const page = this.helpers["Puppeteer"].page;
        const input = await page.$(locator);
        assert.equal(await input.isIntersectingViewport(input), true);
    }

    async dontSeeInViewport(locator) {
        const page = this.helpers["Puppeteer"].page;
        const input = await page.$(locator);
        assert.equal(await input.isIntersectingViewport(input), false);
    }

    async seeDisabledAttribute(locator, type = "css") {
        const page = this.helpers["Puppeteer"].page;
        let disabled;
        if (type === "css") {
            disabled = await page.$eval(locator, item => item.disabled);
        } else {
            const button = (await page.$x(locator))[0];
            disabled = await page.evaluate(item => item.disabled, button);
        }
        assert.equal(disabled, true);
    }

    async dontSeeDisabledAttribute(locator) {
        const page = this.helpers["Puppeteer"].page;
        const disabled = await page.$eval(locator, item => item.disabled);
        if (disabled === false || disabled === undefined) {
            return true;
        } else {
            throw Error("The element has disabled attribute.");
        }
    }

    async seeMultiSelect(locator) {
        const page = this.helpers["Puppeteer"].page;
        const multiple = await page.$eval(locator, item => item.multiple);
        assert.equal(multiple, true);
    }

    async seeSelectedOption(locator) {
        const page = this.helpers["Puppeteer"].page;
        return page.$eval(locator, selected => selected.value);
    }

    async seeNumberOfElements(locator) {
        const page = this.helpers["Puppeteer"].page;
        const options = await page.$$(locator);
        return options.length;
    }
}

module.exports = PuppeteerHelper;