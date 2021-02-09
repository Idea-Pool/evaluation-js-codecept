const assert = require("assert");
const { I } = inject();
// in this file you can append custom step methods to 'I' object

module.exports = function () {
    return actor({
        seeElementDisabled: async (locator) =>{
            const disabled = await I.grabAttributeFrom(locator, "disabled");
            assert.equal(disabled, true);
        },

        dontSeeElementDisabled: async (locator) =>{
            const disabled = await I.grabAttributeFrom(locator, "disabled");
            assert.equal(disabled, null);
        }

    });
};
