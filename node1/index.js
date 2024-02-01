// index.js - application1

const { startTest } = require('./messaging');

// Start the test in application2

paths = [
    "../node2/index.js",
    "../node3/index.js",
    "../node4/index.js",
    "../node5/index.js",
]

paths.forEach((path) => {
    startTest(path);
});  