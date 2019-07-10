/*
 * Programming Quiz: One Awesome Message 
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 
 * 2. Create a variable named awesomeMessage and, using string concatenation 
 *    and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 *
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 * Directions:
 * Here are two awesome messages:
 *
 * Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 * Hi, my name is James. I love baseball. In my spare time, I like to read.
 * Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
 *
 * Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
 */

// Add your code here



var firstName1 = "Julia";
var interest1 = "cats" ;
var hobby1  =  "play video games ." ;

var firstName2 = "James";
var interest2 = "baseball" ;
var hobby2  =  "read." ;



var awesome =   "Hi, my name is " + firstName1 + ". I love " + interest1 + ". In my spare time, I like " + hobby1 + "\n";
var messages =   "Hi, my name is " + firstName2 + ". I love " + interest2 + ". In my spare time, I like " + hobby2 ;

var awesomeMessage = awesome + messages ;
console.log(awesomeMessage);