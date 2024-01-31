const util = require('util');
const { exec } = require('child_process');

const execAsync = util.promisify(exec);

async function runCommand() {
    try {
        const { stdout, stderr } = await execAsync('ls');
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return "failure";
    }
    return "success";
}

module.exports = { runCommand };
