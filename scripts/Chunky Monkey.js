function chunkArrayInGroups(arr, size) {
  // Break it up.
  let length = arr.length/size;
  let chunkArr = [];
  let i = 0;
  while (i < length) {
    chunkArr.push(arr.splice(0,size));
    i++;
  }
  arr = chunkArr;
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
