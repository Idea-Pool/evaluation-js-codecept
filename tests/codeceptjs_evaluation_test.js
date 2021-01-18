const assert = require("assert");
Feature("CodeceptJS Evaluation");

xScenario("TC-1 - Checking landing pages elements", (I) => {
    I.amOnPage("https://angular.io");
    I.seeElement(".mat-toolbar-row a.nav-link > img");
    I.seeElement(".hero-logo > img");
    // Note 2.
    I.see("The modern web\ndeveloper's platform", "div.hero-headline");
    // Node 3.
    I.see("GET STARTED", "#intro a");
    I.click("Get Started", "#intro a");
    I.seeInCurrentUrl("https://angular.io/docs");
    I.seeInTitle("Introduction to the Angular Docs");
});

xScenario("TC-2 - Checking search field on landing page", async (I) => {
    I.amOnPage("https://angular.io");

    const navBarSearchField = ".mat-toolbar-row aio-search-box > input[type=search]";
    I.seeElement(navBarSearchField);
    I.seeTextEquals("", navBarSearchField);

    const placeholder = await I.grabAttributeFrom(navBarSearchField, "placeholder");
    assert.equal(placeholder, "Search");

    I.click(navBarSearchField);
    I.fillField(navBarSearchField, "directive");

    // Clear icon cannot be tested

    I.see("Directive", ".search-result-item");
    I.click("Directive", ".search-result-item");
    I.seeInCurrentUrl("https://angular.io/api/core/Directive");
    I.see("Directive", "h1");
});

xScenario("TC-3 - Checking form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/");
    I.seeInTitle("Forms · Bootstrap");
    I.assertFalse(await I.seeInViewport("input.form-control[placeholder*=\"Readonly\"]"));
    I.scrollTo("input.form-control[placeholder*=\"Readonly\"]");
    I.assertTrue(await I.seeInViewport("input.form-control[placeholder*=\"Readonly\"]"));
    const placeholder = await I.grabAttributeFrom("input.form-control[placeholder*=\"Readonly\"", "placeholder");
    assert.equal(placeholder, "Readonly input here...");
    I.click("input.form-control[placeholder*=\"Readonly\"]");
    I.fillField("input.form-control[placeholder*=\"Readonly\"]", "I am writing");
    I.seeTextEquals("", "input.form-control[placeholder*=\"Readonly\"]");
});

xScenario("TC-4 - Interaction with checkbox form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios/");
    I.seeHaveClass("[id=\"defaultCheck2\"]", "disabled");
    I.dontSeeHaveClass("[id=\"defaultCheck1\"]", "disabled");
    I.dontSeeCheckboxIsChecked("input[id=\"defaultCheck1\"]");
    I.click("input[id=\"defaultCheck1\"]");
    I.seeCheckboxIsChecked("input[id=\"defaultCheck1\"]");
});

xScenario("TC-5 - Interaction with radio form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios/");
    I.assertFalse(await I.seeDisabledAttribute("[id=\"exampleRadios1\"]"));
    I.assertTrue(await I.seeDisabledAttribute("[id=\"exampleRadios3\"]"));
    I.seeCheckboxIsChecked("[id=\"exampleRadios1\"]");
    I.dontSeeCheckboxIsChecked("[id=\"exampleRadios2\"]");
    I.click("input[id=\"exampleRadios2\"]");
    I.dontSeeCheckboxIsChecked("[id=\"exampleRadios1\"]");
    I.seeCheckboxIsChecked("[id=\"exampleRadios2\"]");
});

xScenario("TC-6 - Checking button form elements", (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
    // 1. **Then** There should be a button with text "Primary button"
    // 1. **And** The primary button should be disabled
    I.pressKey("PageUp");
    // 1. **Then** The active primary link button should not be disabled
});

xScenario("TC-7 - Checking select form elements", (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#form-controls");
    I.see("#exampleFormControlSelect1");
    //1. **And** The example multiple select should be a multiple select
    // 1. **And** The selected option in example select should be "1"
    // 1. **And** there should not be option like "hello" in example select
    // 1. **And** there should be option like "2" in example select
    // 1. **When** The option "2" is selected in example select
    // 1. **Then** The selected option in example select should be "2"
    // 1. **And** Thu number of options in example select should be 5
});
