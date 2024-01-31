// messaging.js - application2

const { chromium } = require('playwright');

async function initiateTest(url) {
    let result;

    // Your Playwright test logic here
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto(url);
        result = 'success';
    } catch (error) {
        result = 'failure';
        console.log(error)
    } finally {
        await browser.close();
    }

    return result;
}

module.exports = { initiateTest };
