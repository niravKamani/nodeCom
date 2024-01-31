
// Listen for messages from application1

const { runCommand } = require('./messaging')

process.on('message', async (message) => {
    console.log(`i am in node 3 : Received message from application1: `, message);
    if (message.action === 'startTest') {
        result = await runCommand();
        process.send({ action: 'testResult', result });
    }
});
