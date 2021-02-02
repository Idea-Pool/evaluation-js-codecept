const { I } = inject();

module.exports = {
    angularLogoInNavbar: ".mat-toolbar-row a.nav-link > img",
    angularLogoInHero: ".hero-logo > img",
    heroText: "div.hero-headline",
    getStartedButton: "#intro a",

    validateAndClick() {
        I.see("GET STARTED", this.getStartedButton);
        I.click("Get Started", this.getStartedButton);
    }
};