# String Calculator TDD Kata

## Overview
This project implements a **String Calculator** using **Test-Driven Development (TDD)** as part of an assignment from **Incubyte**. The implementation follows the **Red-Green-Refactor** cycle, ensuring clean, maintainable, and testable code.

## Requirements Implemented
- Calling `add("")` returns `0`.
- Calling `add("1")` returns `1`.
- Calling `add("1,2")` returns `3`.
- Supports multiple numbers (e.g., `add("1,2,3,4")` returns `10`).
- Supports newlines as delimiters (e.g., `add("1\n2,3")` returns `6`).
- Supports custom delimiters (e.g., `add("//;\n1;2")` returns `3`).
- Throws an exception for negative numbers, listing all negatives (e.g., `add("1,-2,3,-4")` throws **"negative numbers not allowed: -2,-4"**).

## Technologies Used
- **JavaScript (Node.js)**
- **Jest (Testing Framework)**
- **Git & GitHub (Version Control)**

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd string-calculator-tdd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the tests:
   ```sh
   npm test
   ```

## Running the Calculator from the Terminal
### **1. Using Node.js REPL**
1. Open a terminal and start Node.js:
   ```sh
   node
   ```
2. Import the function:
   ```js
   const { add } = require("./src/calculator");
   ```
3. Call the function:
   ```js
   console.log(add("1,2,3")); // Output: 6
   console.log(add("//;\n1;2;3")); // Output: 6
   console.log(add("1\n2,3")); // Output: 6
   console.log(add("1,-2,3,-4")); // Throws: "negative numbers not allowed: -2,-4"
   ```
4. Exit Node.js by pressing `Ctrl + C` twice.

### **2. Running a Script with CLI Input**
1. Use the provided `index.js` file to execute the function from the command line:
   ```sh
   node index.js "1,2,3"
   ```
   Output:
   ```
   Result: 6
   ```
2. Try different inputs:
   ```sh
   node index.js "1\n2,3"
   ```
   ```sh
   node index.js "//;\n1;2;3"
   ```
   ```sh
   node index.js "1,-2,3,-4"
   ```
   This will throw:
   ```
   Error: negative numbers not allowed: -2,-4
   ```

## Implementation Details
The `add` function follows these steps:
1. **Check for a custom delimiter.** If present, extract and use it.
2. **Split the input string** using `,` or `\n` as delimiters.
3. **Convert to numbers** and find negative values.
4. **Throw an error** if negatives are found.
5. **Return the sum** of all valid numbers.

## Conclusion
This project demonstrates a **TDD-driven** approach to implementing a string calculator, emphasizing **incremental development, clean coding practices, and automated testing**.

---
