function hasTargetSum(array, target) {
  // Write your algorithm here
  let nums ={}
  for (let i=0; i<array.length; i++) {
    let num = array[i];
    if(target-num in nums){
      return true;
    }
    nums[array[i]]=i;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(N) wher N is the total number of elements in te given array
  time complexity we get it by taking 0(n)
  space complexity is gotten by 0(1) 
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  we assign a variable to an empty object
  do a for loop
  we search for y 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;