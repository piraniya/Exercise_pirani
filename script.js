//comments can make code readable
//Welcome to learn Javascript
/* file and declare variables and assign string, boolean, undefined and null data types */
/* Number,String,boolean,Arry,undefined,Null*/

console.log(typeof 'Pirani') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

var var1;
var var2;
var var3;
var var4;

var var1 = 10;
var var2 = "Hello, World!";
var var3 = 3.14;
var var4 = true;

//day 02/
//01
 /*var challenge = 'hello';
let challenge = 'hello';
const challenge = 'hello';*/
//02
console.log('learn Javascript');
//03
let originalString = "New, Little!";
let uppercaseString = originalString.toUpperCase();
console.log(uppercaseString);
//05
let x = "Hello, World!";
let lowercaseString = x.toLowerCase();

console.log(lowercaseString);
//06
let y = "This is an example sentence.";
let firstWord = y.substring(0, y.indexOf(" "));

console.log(firstWord);
//07
let z = "Learn JavaScript";
let slicedString = z.substring(5, 22);

console.log(slicedString);
//08
let A = "Learn JavaScript";

if (A.includes("Script")) {
  console.log("The string contains the word 'Script'.");
} else {
  console.log("The string does not contain the word 'Script'.");
}
//09
const str = "Hi,Water,How,And,You";
const array = str.split(",");
console.log(array); // Output: ["Hello", "World", "How", "Are", "You"]
//10
const stry = "Learn Javascript";
const aray = stry.split(" ");
console.log(aray); // Output: ["Learn", "Javascript"]
//11
const star = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const bow = str.split(', ');
console.log(bow);

//12
const B= "Learn Javascript";
const updatedStr = B.replace("Learn Javascript", "30 Days Of Python");
console.log(updatedStr);
//13
const C = "learn Javascript";
const character = C.charAt(15);
console.log(character);
//14
const E = "learn Javascript";
const charCode = E.charCodeAt(6); // 'J' is at index 6
console.log(charCode);
//15
const G = "learn Javascript";
const H= G.indexOf('a');
console.log(H);
//16
const I = "learn Javascript";
const J = str.lastIndexOf('a');
console.log(J);
//17
const K = "You cannot end a sentence with because because because is a conjunction";
const M = K.indexOf("because");
console.log(M);
//18
const sentence = "You cannot end a sentence with because because because is a conjunction";
const position = sentence.lastIndexOf("because");
console.log(position);
//20
var N = ' learn Javascript ';
var O = N.trim();
console.log(O);
//21
var p = 'learn Javascript';
var result = p.startsWith('learn');
console.log(result);
//22
const Q = "learn Javascript";
//const endsWithResult .endsWith("Javascript");

console.log(endsWithResult); // This will output: true
//23
const R = "learn Javascript";
const matches = R.match(/a/g);

console.log(matches); // This will output an array with all occurrences of "a"

//24
const S = '30 Days of ';
const secondString = 'JavaScript';
const megastring= S.concat(secondString);

console.log(M); // This will output: '30 Days of JavaScript'

//25
const U = 'learn Javascript';
const repeatedString = U.repeat(2);

console.log(repeatedString); // This will print 'learn Javascriptlearn Javascript'





