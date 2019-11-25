//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
Basically - Take the first array and push any numbers that aren't in that array*/


function uniteUnique(arr, ...arr2) { 
  //maps full arrays past the first 
  arr2.map(a => {
    //iterates through the individual elements of the arrays in arr2
    a.map(e => {
      //if those elements are not in our array
      if(arr.includes(e) === false){
        arr.push(e);
      }
    });
  });
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
