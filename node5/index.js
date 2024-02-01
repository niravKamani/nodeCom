// index.js - application2

const { task1, task2, runTask, resolveTask } = require('./messaging');


// Listen for messages from application1
process.on('message', async (message) => {
    console.log(`i am in node 5 : Received message from application1: `, message);
    // Check for the startReactApp action
    let result;
    if (message.action === 'Run') {
        await runTask();
    }
    if (message.action === 'Task2') {
        resolveTask();
    }
});
