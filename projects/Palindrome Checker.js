//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


function palindrome(str) {
  //setup regex
  let regExp = /[A-Za-z0-9]/g;
  //change to lowercase and remove anything that is not alphabetical
  str = str.toLowerCase();  
  let arrFwd = str.match(regExp);
  let arrBwd = [];

  //reverse the array and put into a new arr arrBwrd
  arrFwd.map(e => arrBwd.unshift(e));

  // console.log(arrBwd, arrFwd)
  let testArr = [];
  let i = 0;
  arrBwd.map(k => {
    if(k !== arrFwd[i]) {
      testArr.push(k);
      console.log(k);
    }
    i = i+1;
  })
  if (testArr.length === 0) {
    return true
  } else {
    return false
  }
}

palindrome("A man, a plan, a canal. Panama");
