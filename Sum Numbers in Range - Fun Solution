//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
//More entertaining solution than typical algo as it uses sum of pairs "trick" instead of iteration.

function sumAll(arr) {
  arr.sort((a,b) => {return a === b ? 0 : a < b ? -1 : 1});
  let holder = (arr[1] - arr[0]) / 2;
  return holder % 1 === 0 ? holder * (arr[1] + arr[0]) : (holder + 0.5) * (arr[1] + arr[0]); 
}

sumAll([1, 4]);
