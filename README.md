# evaluation-codecept

This is a test-ware for evaluation of CodeceptJS test automation tool.

## Prerequisites

1. Node.js LTS
1. Google Chrome

## Framework(s) used

- Name: CodeceptJS
- Homepage: https://codecept.io/
- Description: SuperCharged End 2 End Testing with WebDriver & Puppeteer

- Name: Puppeteer
- Homepage: https://github.com/puppeteer/puppeteer
- Description: Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

## Test cases

The implemented test cases can be found in [TESTCASES.md](TESTCASES.md).

## Setup

```bash
npm install
```

- [ ] Add additional setup instructions if necessary

## Execution

```bash
npm test
```

## Notes

1. Easy install, with the tour it is easy to start
2. Might be some problem with console reports, if step contains new line
3. Issue with checking link text: Get Started (expected) vs GET STARTED (actual)