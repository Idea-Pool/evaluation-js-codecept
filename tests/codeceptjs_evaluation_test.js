const assert = require("assert");
Feature("CodeceptJS Evaluation");

Scenario("TC-1 - Checking landing pages elements", (I) => {
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

Scenario("TC-2 - Checking search field on landing page", async (I) => {
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

Scenario("TC-3 - Checking form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/");
    I.seeInTitle("Forms · Bootstrap");
    await I.dontSeeInViewport("input.form-control[placeholder*=\"Readonly\"]");
    I.scrollTo("input.form-control[placeholder*=\"Readonly\"]");
    await I.seeInViewport("input.form-control[placeholder*=\"Readonly\"]");
    const placeholder = await I.grabAttributeFrom("input.form-control[placeholder*=\"Readonly\"", "placeholder");
    assert.equal(placeholder, "Readonly input here...");
    I.click("input.form-control[placeholder*=\"Readonly\"]");
    I.fillField("input.form-control[placeholder*=\"Readonly\"]", "I am writing");
    I.seeTextEquals("", "input.form-control[placeholder*=\"Readonly\"]");
});

Scenario("TC-4 - Interaction with checkbox form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios/");
    I.seeHaveClass("[id=\"defaultCheck2\"]", "disabled");
    I.dontSeeHaveClass("[id=\"defaultCheck1\"]", "disabled");
    I.dontSeeCheckboxIsChecked("input[id=\"defaultCheck1\"]");
    I.click("input[id=\"defaultCheck1\"]");
    I.seeCheckboxIsChecked("input[id=\"defaultCheck1\"]");
});

Scenario("TC-5 - Interaction with radio form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios/");
    await I.dontSeeDisabledAttribute("[id=\"exampleRadios1\"]");
    await I.seeDisabledAttribute("[id=\"exampleRadios3\"]");
    I.seeCheckboxIsChecked("[id=\"exampleRadios1\"]");
    I.dontSeeCheckboxIsChecked("[id=\"exampleRadios2\"]");
    I.click("input[id=\"exampleRadios2\"]");
    I.dontSeeCheckboxIsChecked("[id=\"exampleRadios1\"]");
    I.seeCheckboxIsChecked("[id=\"exampleRadios2\"]");
});

Scenario("TC-6 - Checking button form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
    I.seeElement("//button[.=\"Primary button\"]");
    await I.seeDisabledAttribute("//button[.=\"Primary button\"]", "XPATH");
    I.pressKey("PageUp");
    await I.dontSeeDisabledAttribute("a.btn-primary[aria-pressed]");
});

Scenario("TC-7 - Checking select form elements", async (I) => {
    I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/#form-controls");
    await I.seeInViewport("#exampleFormControlSelect1");
    await I.seeMultiSelect("#exampleFormControlSelect2");
    
    const selectedOption = await I.seeSelectedOption("#exampleFormControlSelect1");
    assert.equal(selectedOption, 1);
    I.dontSee("hello","#exampleFormControlSelect1 option");
    I.see("2", "#exampleFormControlSelect1 option");
    I.selectOption("#exampleFormControlSelect1", "2");

    const selectedOption2 = await I.seeSelectedOption("#exampleFormControlSelect1");
    assert.equal(selectedOption2, 2);

    const number = await I.seeNumberOfElements("#exampleFormControlSelect1 option");
    assert.equal(number, 5);
});
