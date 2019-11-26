// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
/*
Set up the fibonacci sequence
Then use modulos to test for even/odd, sum odd
*/

function sumFibs(num) {
  let i = 1;
  let acc= 0;
  let fibArr = [];
  let fibOddSum =  0;
  while (acc + i <= num) {
    acc = acc + i;
    i = acc - i;
    fibArr.push(acc);    
  }
  fibArr.map(k => {
    if(k % 2 !== 0) {
      fibOddSum = fibOddSum + k;
    }
  })  
  return fibOddSum;
}

console.log(sumFibs(75025));


