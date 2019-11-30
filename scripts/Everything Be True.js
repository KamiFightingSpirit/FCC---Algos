//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
function truthCheck(collection, pre) {
  for(let i = 0 ; i < collection.length; i++) {
    if(!! collection[i][pre]){      
    } else {
      return false;
      break;
    }    
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") ;
