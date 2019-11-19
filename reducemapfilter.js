/* 
From: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
1. complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) 
2. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
Note: Your function should not use any kind of for or while loops or the forEach() function.
*/

const squareList = (arr) => {
  let newArr = arr.filter(k => {return k > 0 && k%1 == 0   
  }).map((k) => k**2)

  return newArr;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
