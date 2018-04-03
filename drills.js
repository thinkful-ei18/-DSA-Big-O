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
