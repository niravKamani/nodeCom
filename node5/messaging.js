// messaging.js - application2

let resolver;

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`- Task1 completed`);
            resolve(`Result of Task1`);
        }, 3000); // Simulating a task that takes 2 seconds
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`- Task2 completed`);
            resolve(`Result of Task2`);
        }, 3000); // Simulating a task that takes 2 seconds
    });
}

async function runTask() {
    console.log('before task1')
    result = await task1();
    console.log('after task1')
    process.send({ action: 'Task1', result });
    await new Promise((resolve, reject) => {
        resolver = resolve;
    })
    console.log('before task2')
    result = await task2();
    console.log('after task2')
    process.send({ action: 'Task2', result });
    console.log(counter)
}

function resolveTask() {
    resolver();
}

module.exports = { task1, task2, runTask, resolveTask };