//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
//Apparently there is a .flat method on arrays that you can use, much easier.
let rolledArr = [];
  function steamrollArray(arr) {  
    function recursiveArray(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && arr[i][0] !== undefined) {
            recursiveArray(arr[i])
        } else {
          rolledArr.push(arr[i]);
          }
      }
    }
    recursiveArray(arr);
    return rolledArr;    
  }
steamrollArray([[["a"]], [["b"]]]);
