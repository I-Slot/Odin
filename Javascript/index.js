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
