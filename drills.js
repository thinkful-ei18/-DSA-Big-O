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
/* 
An Efficient Search
O( logn )  
 Assuming the array is sorted,on every while loop, the array was split into 2 regions and only one region will
be preserved at the end of operation, so it take half time less every time it re-cycles.

*/
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

/* 
 Random element
 O(1)  It takes in the arr and performance one time operation
*/

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* 
 Is it prime?
 O(n)  
 Has a linear complexity due to the for loop.
*/
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

/*counting sheep
 input : 3
 output :
 3 - Another sheep jump over the fence
 2 - Another sheep jump over the fence
 1 - Another sheep jump over the fence

 O(n) Because recursion loops through all cases until it hits the base case. 
 */

function countSheep(sheep) {
  if (sheep === 0) {
    return;
  }

  console.log(`${sheep} - Another sheep jump over the fence`);
  countSheep(sheep - 1);
}

/*
  Array double
  input: [1,2,3]
  output: [2,4,6]
O(n) Recursion takes place until base case is true. 
*/

function arrDouble(arr) {
  const len = arr.length;
  if (len === 0) return [];
  return [arr[0] * 2, ...arrDouble(arr.slice(1))];
}

countSheep(3);

console.log(arrDouble([1, 2, 3]));

/*
  Reverse String
  input: str
  ouput: rts

O(n) It loop through all cases until it reaches base case.
*/

function reverseString(str) {
  if (str.length < 1) {
    return '';
  }

  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

/* 
  O(n) Recursion loops n times until it reaches base case. 
*/
// console.log(reverseString('hello'));

function triNum(n) {
  if (n === 0) {
    return 0;
  }
  return n + triNum(n - 1);
}

/* 
  String Splitter
  input: str
  ouput: [s,t,r]

  O(n) until base case of 0 is reached
*/

const strSplit = str => {
  if (str.length === 0) return [];
  return [str[0], ...strSplit(str.slice(1))];
};

console.log(strSplit('hello'));

/* 
  Binary Rep
  input: 1 2 3 4
  output: 1 10 11 101
  4 / 2 = 2 ... 0
  2 / 2 = 1 ... 0
  1 /2 = 0 ... 1

  O(log n) Recursion takes place less than n amount of because 
  everytime recursion takes place the number is halfed, depending
  on remainder of number. For example 4 is recursed 3 times.
*/

const decToBinary = num => {
  const q = Math.floor(num / 2);
  const r = num % 2;
  if (q === 0) return [r];
  return [...decToBinary(q), r].join('');
};

console.log(decToBinary(25));

/* 
  O(n) it recursives n cases until it reach the base case
*/
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

/*
  
  O(2^n) Every time it recures, the function doubles the amount of recursive calls 
  until it reaches base case
*/
function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(4));

/*
  Anagrams
O(n^2) Function is being looped n times with 
recursive call taking place each iteration until 
the base case is met. 
*/
const strArr = [];
function anagrams(str, prefix) {
  const end = str.length;
  if (end === 0) return prefix;
  for (let i = 0; i < end; i++) {
    let word =
      prefix + str.charAt(i) + str.substring(0, i) + str.substring(i + 1, end);
    if (!strArr.includes(word)) {
      strArr.push(word);
    }
    anagrams(
      str.substring(0, i) + str.substring(i + 1, end),
      prefix + str.charAt(i)
    );
  }
}

anagrams('east', '');
console.log(strArr);

const peopleHierarchy = [
  { name: 'Zuckerberg', boss: null, indent: 0 },
  { name: 'Schroepfer', boss: 'Zuckerberg', indent: 1 },
  { name: 'Schrage', boss: 'Zuckerberg', indent: 1 },
  { name: 'Sandberg', boss: 'Zuckerberg', indent: 1 },
  { name: 'Bosworth', boss: 'Schroepfer', indent: 2 },
  { name: 'Zhao', boss: 'Schroepfer', indent: 2 },
  { name: 'VanDyck', boss: 'Schrage', indent: 2 },
  { name: 'Swain', boss: 'Schrage', indent: 2 },
  { name: 'Goler', boss: 'Sandberg', indent: 2 },
  { name: 'Hernandez', boss: 'Sandberg', indent: 2 },
  { name: 'Moissinac', boss: 'Sandberg', indent: 2 },
  { name: 'Kelley', boss: 'Sandberg', indent: 2 },
  { name: 'Steve', boss: 'Bosworth', indent: 3 },
  { name: 'Kyle', boss: 'Bosworth', indent: 3 },
  { name: 'Steve', boss: 'Bosworth', indent: 3 },
  { name: 'Richie', boss: 'Zhao', indent: 3 },
  { name: 'Sofia', boss: 'Zhao', indent: 3 },
  { name: 'Jen', boss: 'Zhao', indent: 3 },
  { name: 'Sabrina', boss: 'VanDyck', indent: 3 },
  { name: 'Michelle', boss: 'VanDyck', indent: 3 },
  { name: 'Josh', boss: 'VanDyck', indent: 3 },
  { name: 'Blanch', boss: 'Swain', indent: 3 },
  { name: 'Tom', boss: 'Swain', indent: 3 },
  { name: 'Joe', boss: 'Swain', indent: 3 },
  { name: 'Eddie', boss: 'Goler', indent: 3 },
  { name: 'Julie', boss: 'Goler', indent: 3 },
  { name: 'Annie', boss: 'Goler', indent: 3 },
  { name: 'Rowi', boss: 'Hernandez', indent: 3 },
  { name: 'Inga', boss: 'Hernandez', indent: 3 },
  { name: 'Morgan', boss: 'Hernandez', indent: 3 },
  { name: 'Amy', boss: 'Moissinac', indent: 3 },
  { name: 'Chuck', boss: 'Moissinac', indent: 3 },
  { name: 'Vinni', boss: 'Moissinac', indent: 3 },
  { name: 'Eric', boss: 'Kelley', indent: 3 },
  { name: 'Ana', boss: 'Kelley', indent: 3 },
  { name: 'Wes', boss: 'Kelley', indent: 3 }
];

/* 
O(n^2) Function is run n number of times with a recursive 
call happening each iteration until base case is met. 
*/
function getOrganize(peopleHierarchy, boss) {
  peopleHierarchy.filter(people => people.boss === boss).forEach(people => {
    indent(people.name, people.indent);
    getOrganize(peopleHierarchy, people.name);
  });
}

function indent(name, lvl) {
  console.log(`${'\t'.repeat(lvl)} ${name}`);
}

getOrganize(peopleHierarchy, null);
