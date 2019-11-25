/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

1. First argument is the sentence to perform the search and replace on.
2. Second argument is the word that you will be replacing (before).
3. Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"*/

function myReplace(str, before, after) {
  //creates a new regexp to use repeatedly; DRY
  let capsTest = /^[A-Z]/;
  //tests if there is a capitilization difference in the first letter of the replacement words
  if(capsTest.test(before) === true && capsTest.test(after) === false) {
    //converts the first letter to a caps
    after = after[0].toUpperCase() + after.slice(1);
  }
  //does the replacement
  str = str.replace(before,after);
  return str;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
