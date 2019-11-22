/*
1. If a word begins with a vowel you just add "way" to the end.
  //Handle immediately with first if statement - fast kickout
2. If a word does not contain a vowel, just add "ay" to the end.
  //
3. Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  let vowelArr = ["a","e","i","o","u"];
  let counter = 0;
  let indexArr = [];
  if(vowelArr.includes(str[0])) {
    str = str+"way";
  } 
  strArr = str.split("");
  strArr.map(k => {
      if(vowelArr.includes(k)) {
        //change the above to index of, push to an array, if > -1; sort the array, take index[0] and do a splice then reattach.

        counter += 1;
      };
  });
  if(counter === 0) {
    str = str+"ay";
  };
  
  return str;
}

translatePigLatin("cnsnnt");

// test = "test";
// test2 = "tconst";
// console.log(test.includes(test2[0]));
