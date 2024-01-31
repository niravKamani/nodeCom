// index.js - application2

const { initiateTest } = require('./messaging');

// Listen for messages from application1
process.on('message', async (message) => {
    console.log('i am in node 2 : Received message from application1:', message);

    // Check for the startTest action
    if (message.action === 'startTest') {
        // Start the Playwright test
        const result = await initiateTest(message.url);

        // Send the test result back to application1
        process.send({ action: 'testResult', result });
    }
});
