// Step 1: Create an add Method (Returns 0 for Empty String)
const { add } = require("../src/calculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Step 2: Support Adding Two Numbers
test("returns sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
});

// Step 3: Support Multiple Numbers
test("returns sum of multiple numbers separated by a comma", () => {
  expect(add("1,2,3,4")).toBe(10);
});

// Step 4: Support Newline as a Delimiter
test("handles newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

// Step 5: Support Custom Delimiters
test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});
  