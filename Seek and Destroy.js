//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(...argus) {
  let seekArgs = argus.slice(1);
  let newArr = [];
  argus[0].map(k => {
    seekArgs.includes(k) === false ? newArr.push(k) : "";
  })
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
