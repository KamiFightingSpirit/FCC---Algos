function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 return str.trim().replace(/([a-z])([A-Z])/g , "$1 $2").toLowerCase().replace(/\W+/g,"-").replace(/_/g,"-");
}


spinalCase('This Is Spinal Tap');
