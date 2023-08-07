// console.log("Connected");

/* Variables : e.g 1-  An online shop: the information might include goods being sold and a shopping cart.
                2- A chat application : the information might include users, messages, and much more.        
   Variables are used to store this information.

   // A variable is a "named storage" for data. We can use variables to store goodies, visitors and other data.
 
   // To create variables in Javascript, we can us 
   1 - let
   2 - const
   3 - var *

   = assignment operator
*/

let message;
message = "Hello";

// alert(message);

// For simplicity; both the variable declaration and assignment can be on a line

let message2 = "Hello 2";

// We can also declare multiple variables in one line:
let user = "Yusuf",
  age = 20,
  message3 = "You are fine";

// alert(`${user} ,${age} , ${message3}`);

/*That might seem shorter, but we don’t recommend it.
 For the sake of better readability, please use a single line per variable. */

// The multiline variant is a bit longer, but easier to read:

let user2 = "Ibrahim";
let age2 = 25;
let message4 = "welcome";

console.log(user2, age2, message4);

/*
////////////////////////////
var instead of let
In older scripts, you may also find another keyword: var instead of let:

var message = 'Hello';
The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.
////////////////////////////
*/

var varMessage = "Var can also to used to declare a variables.";
/*
// Var declaration
1- “var” has no block scope
Variables, declared with var, are either function-scoped or global-scoped.
 They are visible through blocks.
*/

if (true) {
  var test = true;
}

// alert(test);

if (true) {
  let test = true;
}

// alert(test);

/*
2 - “var” tolerates re-declarations
 */
// let
// let userNameLet = "Ismail";
// let userNameLet = "Muhammad";

// Var
var userNameVar = "Ismail";
var userNameVar = "Muhammad";

console.log(userNameVar);

/*
3- “var” variables can be declared below their use
*/

console.log(varBefore);
var varBefore = " Var can be used before declaration";

/*
///////////////////////////////////////////
A real-life analogy
We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

For instance, the variable message can be imagined as a box labeled "message" with the value "Hello!" in it:
///////////////////////////////////////////////////////
 */

let messageL;

messageL = "Hello!";

messageL = "World!"; // value changed

alert(messageL);

// Variables Naming
/*
// There are two limitations on variable names in JavaScript:
  1 - The name must contain only letters, digits, or the symbols $ and _.
  2 - The first character must not be a digit.

    Examples of valid names:

    let userName;
    let test123;

    **When the name contains multiple words, camelCase is commonly used. That is: words go one after another,
     each word except first starting with a capital letter: myVeryLongName.

     **What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names.
      They are regular symbols, just like letters, without any special meaning.

      let $ = 1; // declared a variable with the name "$"
      let _ = 2; // and now a variable with the name "_"

 */

// Case matters: **Variables named apple and APPLE are two different variables.
// Non-Latin letters are allowed, but not recommended
/*
        let имя = '...';
        let 我 = '...';
  */

// Reserved names

/*
There is a list of reserved words, which cannot be used as variable names because 
they are used by the language itself.

For example: let, class, return, and function are reserved.
  */

//An assignment without use strict
/*
Normally, we need to define a variable before using it. But in the old times, 
it was technically possible to create a variable by a mere assignment of the value without using let.
 This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.
 */

//Constants : To declare a constant (unchanging) variable, use const instead of let

//Conditionals

// Comparisons
