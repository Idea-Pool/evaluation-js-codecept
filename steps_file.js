const assert = require("assert");
const { I } = inject();
// in this file you can append custom step methods to 'I' object

module.exports = function () {
    return actor({
        seeHaveClass: async (locator, attribute) => {
            const attributes = await I.grabAttributeFrom(locator, attribute);
            assert.equal(attributes, true);
        },

        dontSeeHaveClass: async (locator, attribute) => {
            const attributes = await I.grabAttributeFrom(locator, attribute);
            assert.equal(attributes, null);
        }

    });
};
