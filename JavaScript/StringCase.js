var name = prompt("Plase enter your name:");

var firstChar = name.slice(0,1);
var charToUpper = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);

var fullName = charToUpper + restOfName;
alert("Hello " + fullName + ", nice to meet you!");