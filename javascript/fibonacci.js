function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 6765");
  console.log("=>", fibonacci(20));

  console.log("");

  console.log("Expecting: 832040");
  console.log("=>", fibonacci(30));

  console.log("");

  console.log("Expecting: 102334155");
  console.log("=>", fibonacci(40));

  console.log("");
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
