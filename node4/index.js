// index.js - application2

const { initiateReactApp } = require('./messaging');

// Listen for messages from application1
process.on('message', async (message) => {
    console.log('Received message from application1:', message);

    // Check for the startReactApp action
    if (message.action === 'startTest') {
        // Start the React app
        await initiateReactApp();
    }
    console.log('------------------------------------------------');

    message.result = "success";
    message.action = "testResult"
    process.send(message);
});
