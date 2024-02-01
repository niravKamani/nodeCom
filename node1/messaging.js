// messaging.js - application1

const { fork } = require('child_process');

function startTest(path) {
    // Create a child process for application2
    const application2 = fork(path);

    // Send a message to application2 to start the test
    application2.send({ action: 'Run' });

    // Listen for messages from application2
    application2.on('message', (message) => {
        console.log(`i am in node 1 : Received message from ${path} : ${message}`);

        // Handle success or failure messages
        if (message.action === 'Task1') {
            console.log(`Test result: ${message.result}`);
            application2.send({ action: 'Task2' });
        }

        // Close the child process when done
        if (message.action === 'Task2') application2.kill();
    });
}

module.exports = { startTest };
