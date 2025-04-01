const { add } = require("./src/calculator");

const input = process.argv[2] || ""; // Get input from command-line arguments
try {
    console.log(`Result: ${add(input)}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}