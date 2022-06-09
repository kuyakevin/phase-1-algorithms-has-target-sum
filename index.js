//I have to write a function called hasTargetSum that takes two arguemnts.
//The first argument will be an array of whole number integers
//The second argument will be the target number 
//Two numbers in the array will have to have a sum that equals the target number
//I will have to take a number, and cross reference that with another number and see if those two numbers add to the target number

function hasTargetSum(array, target) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        count++
      }
    }
  }
  if (count >= 1){ 
    return true;
  }else{
    return false;
  }
}

/* 
  The worst case scenario is that the code will have to run through each element of an array n times ofr each i and j -> O(n^2)
*/

/* 
initialize variable count with a value 0
 Initialize a loop over each element in the array
  Initialize a loop over each element after the first elemn
    If number i plus number j equals target
      add 1 to count
    
  
  If count is greater or equal to 1
    return true
  else
    return false
*/

/*
  Create a function that takes an array and a target number as arguments
  The target number is the sum of two numbers in the array that will equal the target number.
  Set up a loop that iterates over each element in the array
  On each element, set up another loop to check the sum of the first element with the other elements.
  If a pair of numbers registers to have the target sum, then add 1 to a counter
  If the counter has a value of one or more, then the array consists of two numbers who have a sum of the target value. This returns the array true
  If there is a value of 0 in the counter, then return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
