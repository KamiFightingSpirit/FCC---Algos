//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
//For numbers < 5000 as it gets ridiculous above 5000
function convertToRoman(num) {
/*Key: 
M - 1000
D - 500
C - 100
L - 50
X - 10
V - 5
I - 1*/
  let objKey = {
    1000 : "M",
    900 : "CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"   
  };  
  let romArr = [];
  for(let i = 12; i >= 0; i--) {
    if(Math.floor(num/Object.keys(objKey)[i]) >= 1){
      romArr.push(Object.values(objKey)[i]);
      num -= Object.keys(objKey)[i];
      i++;
    }
  }
  romArr = romArr.join("");
  console.log(romArr);
}
convertToRoman(4999);
