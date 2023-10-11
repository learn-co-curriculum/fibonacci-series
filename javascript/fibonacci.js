function fibonacci(num) {
  // type your code here
  
  let value1 = 0;
  let value2 = 1;

  let sum = 0;
  for (let i = 1; i <= num; i++){
        sum = value1 + value2;
        value1 = value2;
        value2 = sum;
     
  }

  return value1
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
;