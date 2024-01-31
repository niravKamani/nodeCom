// messaging.js - application2

const util = require('util');
const { exec } = require('child_process');
const execAsync = util.promisify(exec);

async function initiateReactApp() {
    // Run 'react-scripts start' to dynamically start the React app
    try {
        const { stdout, stderr } = await execAsync('npm run start', { cwd: '../node4/reactApp' });
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    } catch (error) {
        console.error(`Error: `, error);
        return "failure";
    }
    return "success";
}

module.exports = { initiateReactApp };