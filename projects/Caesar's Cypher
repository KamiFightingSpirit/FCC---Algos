//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) { // LBH QVQ VG!
//notes: all values are in caps

  str =  str.split("").map(k => {
    if(k.charCodeAt(0) <= 64 || k.charCodeAt(0) >= 91) {
      return k.charCodeAt(0);
    } else if(k.charCodeAt(0) - 13 < 65) {
       return  (k.charCodeAt(0) + 13); 
      } else {
        return k.charCodeAt(0) - 13;
    }
  }) 
  return str.map(k => 
  String.fromCharCode(k)).join(""); 
}
