// Step 1: Create an add Method (Returns 0 for Empty String)
const { add } = require("../src/calculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Step 2: Support Adding Two Numbers
test("returns sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
});

