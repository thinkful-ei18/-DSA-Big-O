'use strict';
/* Even or odd
O(1)
This function takes in a value and performs a single one time calculation 
to see if the remainder of the passed value is 0. It performs a constant 
mathimatical operation no matter what the given value is.
*/
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}

/* Are you here?
O(n^2)
The time complexity of this function is n^2, reason being, there's a nested 
for loop. 
*/
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/* 
Doubler
O(n)
  The time complexity for this function is O(n). Because dominant factor on this
  function is the for loop and it runs n times.
*/
function doubleArrayValues(array) {
  // n times
  for (let i = 0; i < array.length; i++) {
    // 1 time
    array[i] *= 2;
  }
  return array;
}

/* 
Naive Search
O(n) The single for loop is the dominant factor that takes up the most of performance
time. It takes n times to loop through array
*/
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/* 
Create Pairs
O(n^2) This function performs two for loops, one nested within the other. Causing a 
performance factor of n^2.  
*/
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

/* 
Computing fibonaccis
O(n) The main proponent of this function is the for loop, which takes place n number of times.  
*/
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      // ...and if it's the second item
      // append 1
      result.push(1);
    } else {
      // otherwise, sum the two previous result items, and append that value to results.
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
