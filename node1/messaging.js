// messaging.js - application1

const { fork } = require('child_process');

function startTest(path) {
    // Create a child process for application2
    const application2 = fork(path);

    // Send a message to application2 to start the test\
    const url = 'https://playwright.dev/docs/api/class-playwright';
    application2.send({ action: 'startTest', url });

    // Listen for messages from application2
    application2.on('message', (message) => {
        console.log(`i am in node 1 : Received message from ${path} : ${message}`);

        // Handle success or failure messages
        if (message.action === 'testResult') {
            console.log(`Test result: ${message.result}`);
        }

        // Close the child process when done
        application2.kill();
    });
}

module.exports = { startTest };
