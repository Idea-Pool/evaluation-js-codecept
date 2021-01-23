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
            const disabled = await page.$eval(locator, item => item.disabled);
            return (disabled === undefined ? false : true); 
        } else {
            const button = (await page.$x(locator))[0];
            const disabled = await page.evaluate(button => button.disabled, button);
            return (disabled=== undefined ? false : true);
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

    async seeNumberOfElements(locator){
        const page = this.helpers["Puppeteer"].page;
        const options = await page.$$(locator);
        return options.length;
    }
}

module.exports = PuppeteerHelper;