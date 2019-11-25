//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*

My Thoughts:
1. Read the string
2. A always binds with T, T with A, G with C, C with G; these are your "pairs"
3. Split the string up and bind based on their contents
4. push the variables into an arary and return the array
*/

function pairElement(str) {
  let at = ['A','T'];
  let ta = ['T','A'];
  let gc = ['G','C'];
  let cg = ['C','G'];
  let returnArr = [];
  let arr = str.split("");
  
  arr.map(k => {
    if(k === "A") {
      returnArr.push(at);
    } else if(k === "T") {
      returnArr.push(ta);
    } else if(k === "G") {
      returnArr.push(gc);
    } else {
      returnArr.push(cg);
    } 
  })
  return returnArr;
}
console.log(pairElement("ATCGA"));
