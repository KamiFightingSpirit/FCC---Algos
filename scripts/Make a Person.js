//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;


  this.setFullName = function(newName) {
    return fullName = newName;
  }
  this.getFullName = function() {
    return fullName;
  }

  this.setLastName= function(lastName) {
    fullName = fullName.split(" ")[0] + " " + lastName;
  }
  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  this.setFirstName = function(firstName) {
    fullName = firstName + " " + fullName.split(" ")[1];
  }
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }
};



var bob = new Person('Bob Ross');
