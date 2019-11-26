//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
  let dropArr = arr.slice(0), i = 0;
  while(func(arr[i]) === false && i < arr.length) {
    dropArr = dropArr.slice(1);
    i++;
  }
  return dropArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
