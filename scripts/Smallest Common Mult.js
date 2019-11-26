//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
/*
SIMPLER METHOD:
Keep in mind that the above may be more difficult to implement in coding than a more brute force method that would be near impossible by hand.

For instance, if we take the array, sort, get the value of each number that needs to be a factor of our final value.
Then you just setup an algorithm that starts at the largest number = x, tries to divide that number by each of the other numbers in the array. If
x%(all other numbers) === 0, then that is your LCM, else x++;

*/
let arr = [1,5];
function lowestComMult(arr){
  //setting up our datastructures
  let startArr = arr.slice(0), holdArr = [];
  //sorting our array to make sure we get the range of numbers
  startArr.sort(function(a, b){return a-b});
  //getting the full range of numbers  
  for(let i = startArr[1]; i >= startArr[0]; i--) {
    holdArr.push(i);
  }
  //iterating through the array and checking for lcm % allnums===0 
  let lcm = holdArr[0], counter = 0;  
  while (counter < holdArr.length) {
    for(let i = 0; i < holdArr.length; i++) {
      if(lcm % holdArr[i] === 0) {
        counter++;
      } else {
      counter = 0;
      i = 0; 
      lcm++;
      }
    } 
  } 
  return lcm;
}

console.log(lowestComMult(arr));








/*
OLD WORK FROM THE MORE COMPLEX METHOD

Notes: We always have two numbers, so a index 0 and an index 1, index 1 you need to sort it first.
go grab the top number, work out its prime factors, push to an arry
once that is completed top number-- while topnumber >= lowernumber
have a choice on whether I want to push to a new array or not
what are we achstually trying to do... we want the prime factors of each number, but really we want a count of them. Like count each unique prime number and then return the max of each unique count

PRIME FACTORS:
for each largenumber >= smallernumber 
  add new array
  fill array with numbers prime factors
  return array of arrays

COUNT PRIME FACTORS:
  Go into array
  if number 

let num = [55,100];

function primeNum(num) {
  num.sort(function(a, b){return a-b});



  let i = 2, masterArr = [], arr = [], start = num[1];
//I believe that this version of a prime finder is slower than ones that use sqrt and i=3, this is because you don't need to go through ANY of the even factors after you have used i=2. Due to 2 being the only even prime number
    while (start >= i) {
    if(start%i === 0) {
      arr.push(i);
      start = start / i;
    } else {
      i++;
    }
  }
  return arr;
} 

console.log(primeNum(num));

*/
