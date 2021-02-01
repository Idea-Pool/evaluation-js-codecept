const { setHeadlessWhen, setWindowSize } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1920, 1080);

exports.config = {
    tests: "tests/*_test.js",
    output: "./output",
    helpers: {
        Puppeteer: {
            url: "http://localhost",
            show: true
        },
        ChaiWrapper: {
            require: "codeceptjs-chai"
        },
        PuppeteerHelper: {
            require: "./helpers/puppeteerHelper.js"
        }
    },
    include: {
        I: "./steps_file.js",
        angularPage: "./pages/angular.js"
    },
    bootstrap: null,
    mocha: {},
    name: "evaluation-codecept",
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
};
