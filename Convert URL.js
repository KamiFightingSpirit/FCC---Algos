//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

// the global variable
var globalTitle = "Winter Is Coming";

//trim any excess white space, convert to lowercase, split into an array on anything nonnumerical/alphabetical, join together using "-"
function urlSlug(title) {
    let array = title.trim().toLowerCase().split(/\W+/).join("-");
    return array;
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
