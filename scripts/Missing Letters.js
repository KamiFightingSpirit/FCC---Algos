//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Thoughts:
Note1. I believe there is some way to access all the characters, not sure what it is.
Note2. Max of one number can be missing
1. setup a string for the full characters "abcdefghijklmnopqrstuvwxyz"
2. Do your kickout statement of full match
3. do a regex for the starting characters
4. slice lenght+1
5. .map and do a comparison
6. if !==, slice string, return with concatenation

*/

function fearNotLetter(str) {
  let fullAlph = "abcdefghijklmnopqrstuvwxyz";
    //kicks out if nothing needed
    if(str === fullAlph) {
    return undefined;
  } else {
    let firstLetter = str[0];    
    let indexPlace = fullAlph.indexOf(firstLetter);
    //sets correctArr to what a "perfect" string would be
    let correctArr = fullAlph.slice(indexPlace, indexPlace+str.length+1).split("");
    //checks for the missing character, returns it
    for(let i = 0; i < correctArr.length; i++) {
      if(correctArr[i] !== str[i]) {
        return correctArr[i];
        break;
      }      
    }   
  }  
}
console.log(fearNotLetter("stvwx"));
