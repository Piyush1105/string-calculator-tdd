const { add } = require("./src/calculator");

const rawInput = process.argv[2] || "";
console.log(`Raw Input: ${JSON.stringify(rawInput)}`);

const input = rawInput.replace(/\\n/g, '\n'); 
console.log(`Processed Input: ${JSON.stringify(input)}`);

try {
    console.log(`Result: ${add(input)}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}