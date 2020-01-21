const assert = require("assert");

Feature("CodeceptJS Evaluation");

Scenario("TC-1 - Checking landing pages elements", (I) => {
    I.amOnPage("https://angular.io");
    I.seeElement(".mat-toolbar-row a.nav-link > img");
    I.seeElement(".hero-logo > img");
    // Note 2.
    I.see("One framework.\nMobile & desktop.", "#intro .homepage-container");
    // Node 3.
    I.see("GET STARTED", "#intro a");
    I.click("Get Started", "#intro a");
    I.seeInCurrentUrl("https://angular.io/start");
    I.seeInTitle("Getting Started with Angular: Your First App");
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

xScenario("TC-3 - Checking form elements", (I) => {
   I.amOnPage("https://getbootstrap.com/docs/4.4/components/forms/");
});
