// either array can have a difference
// can both of the arrays have a difference? - yes

function diffArray(arr1, arr2) {
  var newArr = [];
 
  arr1.map((k) => {     
      if(arr2.indexOf(k) < 0) {
         newArr.push(k)
      };     
  });
  arr2.map((k) => {     
    if(arr1.indexOf(k) < 0) {
        newArr.push(k)
    };     
  });
   return newArr; 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
