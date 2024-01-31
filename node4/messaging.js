// messaging.js - application2

const { exec } = require('child_process');

function initiateReactApp() {
    // Run 'react-scripts start' to dynamically start the React app
    const reactAppProcess = exec('serve -s build', {
        cwd: './node4',
    });

    // Listen for messages from the React app
    reactAppProcess.stdout.on('data', (data) => {
        console.log(`React app stdout: ${data}`);
    });

    reactAppProcess.stderr.on('data', (data) => {
        console.error(`React app stderr: ${data}`);
    });

    // Cleanup resources when the process exits
    reactAppProcess.on('exit', (code) => {
        console.log(`React app process exited with code ${code}`);
    });
}

module.exports = { initiateReactApp };