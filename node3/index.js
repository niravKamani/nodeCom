
// Listen for messages from application1
process.on('message', (message) => {
    console.log(`i am in node 3 : Received message from application1: `, message);
    message.result = "success";
    message.action = "testResult"
    process.send(message);
});
