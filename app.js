// "use strict";
// // Que no 3
// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var console_1 = require("console");
// // lower case
// var personName = "Numan Arshad";
// console.log("lower case ;", personName.toLowerCase());
// // uppercase
// console.log("Upper case ;", personName.toUpperCase());
// // Title case
// console.log("Title case ;", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// // Que 4
// var quote = " A person who never made a mistake never tried anything new .";
// var author = "Albert Einstein";
// console.log("".concat(author, " once said, \"").concat(quote, "\""));
// //  Que no 5
// var famous_person = "Albert Einstein";
// var messege = "".concat(famous_person, " once said, ").concat(quote);
// console.log(messege);
// Que;
// no;
// 6;
// var personName = "\t\n  John Doe  \n\t";
// console.log("Original:", personName);
// console.log("Stripped:", personName.trim());
// Que;
// no;
// 7;
// OR;
// 8;
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// Que;
// no;
// 9;
// var favouriteNumber = 7;
// console.log("My Favourite Number is ".concat(favouriteNumber));
// Que;
// no;
// 10;
// Author;
// {
//     Numan;
//     Arshad;
// }
// Printing;
// my;
// favourite;
// number;
// var favouriteNumber = 7;
// console.log("My Favourite Number is ".concat(favouriteNumber));
// Que;
// no;
// 11;
// var names = ["Numan", "Arham", "Taha", "Abeer"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// Que;
// no;
// 12;
// var names = ["Numan", "Arham", "Taha", "Abeer"];
// var messege = "Do you like to play cricket";
// console.log(names[0] + " " + messege);
// console.log(names[1] + " " + messege);
// console.log(names[2] + " " + messege);
// console.log(names[3] + " " + messege);
// Que;
// no;
// 13;
// var transport = ["Honda Motorcycle", "Audi", "Fortuner"];
// transport.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// Que;
// no;
// 14;
// var names = ["Numan", "Arham", "Taha", "Abeer"];
// names.map(function (items) { return console.log(("Dear ".concat(items, " , You are invited to the dinner"))); });
// Que;
// no;
// 15;
// var names = ["Numan", "Arham", "Taha", "Abeer"];
// var notAttend = "Numan";
// console.log(notAttend + " " + "can not attend the dinner");
// var newGuest = "alishba";
// names[names.indexOf(notAttend)] = newGuest;
// console.log(names);
// Que;
// no;
// 16;
// 16.;
// More;
// Guests: You;
// just;
// found;
// a;
// bigger;
// dinner;
// table, so;
// now;
// more;
// space;
// is;
// available.Think;
// of;
// three;
// more;
// guests;
// to;
// invite;
// to;
// dinner.
// ;
// Start;
// with (your)
//     program;
// from;
// Exercise;
// 15.;
// Add;
// a;
// print;
// statement;
// to;
// the;
// end;
// of;
// your;
// program;
// informing;
// people;
// that;
// you;
// found;
// a;
// bigger;
// dinner;
// table.
// ;
// var guestslist1 = ["Farhan", "Nabeel", "Ali", "Adeel", "Salman"];
// var newletter = "We have found bigger table now";
// guestslist1.map(function (item1) {
//     return console.log("Dear ".concat(item1, ", ").concat(newletter));
// });
// // • Add one new guest to the beginning of your array.
// var onenewguest = "Zakir";
// guestslist1.unshift(onenewguest);
// console.log(guestslist1);
// // • Add one new guest to the middle of your array. 
// var middleguest = "Saleem";
// var middleIndex = guestslist1.length / 2;
// guestslist1.splice(middleIndex, 0, "Saleem");
// console.log(guestslist1);
// // • Use append() to add one new guest to the end of your list. 
// var onenewguest1 = "Sabir";
// guestslist1.push(onenewguest1);
// console.log(guestslist1);
// // • Print a new set of invitation messages, one for each person in your list.
// var newGuestListMessage = "You are cordially invited to a dinner";
// guestslist1.map(function (item1) {
//     return console.log("Dear ".concat(item1, ", ").concat(newGuestListMessage));
// });
// All;
// related;
// to;
// Push, Pop, Unshift, Shift, and(items);
// related;
// Que;
// no;
// 17;
// 17.;
// Shrinking;
// Guest;
// List: You;
// just;
// found;
// out;
// that;
// your;
// new dinner;
// table;
// won;
// t;
// arrive in time;
// for (the; dinner, and; you)
//     have;
// space;
// for (only; two; guests.
// )
//     ;
// Start;
// with (your)
//     program;
// from;
// Exercise;
// 16.;
// Add;
// a;
// new line;
// that;
// prints;
// a;
// message;
// saying;
// that;
// you;
// can;
// invite;
// only;
// two;
// people;
// for (dinner.
// ; let; guestslist2)
//     : string[] = ["Zakir", "Farhan", "Nabeel", "Ali", "Adeel", "Salman", "Sabir"];
// var newMsg = "Unfortunatly, we can only invite two guest due to unavailability of space.";
// guestslist2.map(function (item2) {
//     return console.log("Dear ".concat(item2, ", ").concat(newMsg));
// });
// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// while (guestslist2.length > 2) {
//     var removeGuest = guestslist2.pop();
//     console.log("Dear ".concat(removeGuest, ", Sorry, i can't invite you to dinner due to space isseuue"));
// }
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// var newMsg2 = "Your are stil invited";
// guestslist2.map(function (item5) { return (console.log("Dear ".concat(item5, ", ").concat(newMsg2))); });
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// guestslist2.pop();
// guestslist2.pop();
// console.log(guestslist2);
// //  All related to new topic so please learn the topic first and then go to the code
// // Que no 18
// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// var countries = ["Dubai", "China", "Germany", "Japan", "Malaysia"];
// // • Print your array in its original order.
// console.log(countries);
// // • Print your array in alphabetical order without modifying the actual list.
// console.log(__spreadArray([], countries, true).sort()); // we used dots for temporarty changes otherise you canuse the simple one
// // console.log(countries.sort())                   //  otherise you canuse the simple one without dotted
// // • Show that your array is still in its original order by printing it.
// console.log(countries);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log(__spreadArray([], countries, true).reverse());
// // • Show that your array is still in its original order by printing it again.
// console.log(countries);
// // • Reverse the order of your list. Print the array to show that its order has changed.
// countries.reverse();
// console.log(countries);
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// countries.reverse();
// console.log(countries);
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// countries.sort();
// console.log(countries);
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// countries.sort().reverse();
// console.log(countries);
// // Que no 19
// // 19.  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// var guestsinvitation = ["Farhan", "Nabeel", "Ali", "Adeel", "Salman"];
// console.log("We are going to invite ".concat(guestsinvitation.length, " guests to dinner"));
// Que;
// no;
// 20;
// 20.;
// Think;
// of;
// something;
// you;
// could;
// store in a;
// array.For;
// example, you;
// could;
// make;
// a;
// list;
// of;
// mountains, rivers, countries, cities, languages, or;
// anything;
// you;
// d;
// like.Write;
// a;
// program;
// that;
// creates;
// a;
// list;
// containing;
// these;
// items.
// ;
// var vehicles = ["Honda City", "Toyota Corrolla", "Suzuki Alto", "Mercedez Benz", "Audi"];
// vehicles.map(function (item) { return (console.log(item)); });
// Que;
// no;
// 21;
// 21.;
// They;
// think;
// of;
// something;
// you;
// could;
// store in a;
// TypeScript;
// Object.Write;
// a;
// program;
// that;
// creates;
// Objects;
// containing;
// these;
// items.
// ;
// var user = {
//     fname: "Farhan",
//     lname: "Siddiq",
//     age: 38,
//     address: "Gulshan",
// };
// console.log(user);
// Que;
// no;
// 22;
// 22.;
// Intentional;
// Error: If;
// you;
// haven;
// t;
// received;
// an;
// array;
// index;
// error in one;
// of;
// your;
// programs;
// yet, ;
// try { }
// finally { }
// to;
// make;
// one;
// happen.Change;
// an;
// index in one;
// of;
// your;
// programs;
// to;
// produce;
// an;
// index;
// error.Make;
// sure;
// you;
// correct;
// the;
// error;
// before;
// closing;
// the;
// program.
// ;
// var vehicleName = [
//     "Honda City",
//     "Toyota Corrolla",
//     "Suzuki Alto",
//     "Mercedez Benz",
//     "Audi"
// ];
// console.log(vehicleName[6]);
// console.log(vehicleName[3]);
// Que;
// no;
// 23;
// 23.;
// Conditional;
// Tests: Write;
// a;
// series;
// of;
// conditional;
// tests.Print;
// a;
// statement;
// describing;
// each;
// test;
// and;
// your;
// prediction;
// for (the; results; of)
//     each;
// test.Your;
// code;
// should;
// look;
// something;
// like;
// this;
// var car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// Look;
// closely;
// at;
// your;
// results, and;
// make;
// sure;
// you;
// understand;
// why;
// each;
// line;
// evaluates;
// to;
// True;
// or;
// False.
// ;
// Create;
// at;
// least;
// 10;
// tests.Have;
// at;
// least;
// 5;
// tests;
// evaluate;
// to;
// True;
// and;
// another;
// 5;
// tests;
// evaluate;
// to;
// False.
//     Test - 1;
// var fruit = 'apple';
// console.log("Is fruit == 'apple'? I predict True otherwise false.");
// console.log(fruit == 'apple');
// console.log(fruit == 'banana');
// // Test - 2
// var age = 25;
// console.log("Is age == '25'? I predict True otherwise false.");
// console.log(age === 25);
// console.log(age === "25");
// // Test - 3
// var num = 30;
// console.log("Is num  > '30'? I predict True otherwise false.");
// console.log(num > 20);
// console.log(num < 20);
// // Test - 4
// var salary = 50000;
// console.log("Is salary  == '50000'? I predict True otherwise false.");
// console.log(salary == 50000);
// console.log(salary != 50000);
// // Test - 5
// var Car = 'subaru';
// var JapaneseCar = true;
// console.log("Is car == 'subaru' and Japanese Car is True? I predict True otherwise false");
// console.log(Car === 'subaru' && JapaneseCar);
// console.log(Car === 'mehran' && JapaneseCar);
// Que;
// no;
// 24;
// 24.;
// More;
// Conditional;
// Tests: You;
// don;
// t;
// have;
// to;
// limit;
// the;
// number;
// of;
// tests;
// you;
// create;
// to;
// 10.;
// If;
// you;
// want;
// to;
// try { }
// finally { }
// more;
// comparisons, write;
// more;
// tests.Have;
// at;
// least;
// one;
// True;
// and;
// one;
// False;
// result;
// for (var _i = 0, the_1 = the; _i < the_1.length; _i++) {
//     each = the_1[_i];
//     following: ;
// }
// Tests;
// for (equality; and; inequality)
//     with (strings)
//         var fruit1 = 'apple';
// var fruit2 = 'banana';
// console.log(fruit1 === fruit2);
// console.log(fruit1 !== fruit2);
// // • Tests using the lower case function
// var city1 = "KARACHI";
// var city2 = "karachi";
// console.log(city1.toLowerCase() === city2);
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// var myAge = 38;
// console.log(myAge === 25);
// console.log(myAge !== 25);
// console.log(myAge > 25);
// console.log(myAge < 25);
// console.log(myAge >= 25);
// console.log(myAge <= 25);
// // or
// var num1 = 38;
// var num2 = 55;
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// // • Tests using "and" and "or" operators
// var fruits1 = 'apple';
// var vegetable = false;
// console.log(fruits1 === "apple" && vegetable);
// console.log(fruits1 === "apple" || vegetable);
// // • Test whether an item is in a array
// var shapes = ["square", "oval", "triangle", "rectangle"];
// console.log(shapes.includes("oval"));
// // • Test whether an item is not in a array
// console.log(shapes.includes("star"));
// Que;
// no;
// 25;
// 25.;
// Alien;
// Colors;
// #;
// 1;
// Imagine;
// an;
// alien;
// was;
// just;
// shot;
// down in a;
// game.Create;
// a;
// variable;
// called;
// alien_color;
// and;
// assign;
// it;
// a;
// value;
// of;
// 'green', 'yellow', or;
// 'red'.
// ;
// var alien_color = "green";
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// if (alien_color === "green") {
//     console.log("You have earned 5 points");
// }
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// alien_color = "red";
// if (alien_color === "green") {
//     console.log("You have earned 5 points");
// }
// Que;
// no;
// 26;
// 26.;
// Alien;
// Colors;
// #;
// 2;
// Choose;
// a;
// color;
// for (an; alien; did in Exercise)
//     25, and;
// write;
// an;
// if (-)
//     ;
// else
//     chain.
//     ;
// If;
// the;
// alien;
// s;
// color;
// is;
// green, print;
// a;
// statement;
// that;
// the;
// player;
// just;
// earned;
// 5;
// points;
// for (shooting; the; alien.
// )
//     var aliencolor = "green";
// if (aliencolor === "green") {
//     console.log("You have just earned 5 points for shooting the alien");
// }
// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// aliencolor = "red";
// if (aliencolor === "green") {
//     console.log("You have just earned 5 points for shooting the alien");
// }
// else {
//     console.log("You have just earned 10 points for shooting the alien");
// }
// Write;
// one;
// version;
// of;
// this;
// program;
// that;
// runs;
// the;
// if (block)
//     and;
// another;
// that;
// runs;
// the;
// block.
// ;
// Que;
// no;
// 27;
// // 27.  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// // • If the alien is green, print a message that the player earned 5 points.
// var alien = "green";
// if (alien === "green") {
//     console.log("You have earned 5 points");
// }
// else if (alien === "yellow") {
//     console.log("You have earned 10 points");
// }
// else if (alien === "red") {
//     console.log("You have earned 15 points");
// }
// else {
//     console.log("You have earned 0 points");
// }
// // • If the alien is yellow, print a message that the player earned 10 points.
// alien = "yellow";
// if (alien === "green") {
//     console.log("You have earned 5 points");
// }
// else if (alien === "yellow") {
//     console.log("You have earned 10 points");
// }
// else if (alien === "red") {
//     console.log("You have earned 15 points");
// }
// else {
//     console.log("You have earned 0 points");
// }
// // • If the alien is red, print a message that the player earned 15 points.
// alien = "rded";
// if (alien === "green") {
//     console.log("You have earned 5 points");
// }
// else if (alien === "yellow") {
//     console.log("You have earned 10 points");
// }
// else if (alien === "red") {
//     console.log("You have earned 15 points");
// }
// else {
//     console.log("You have earned 0 points");
// }
// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Que;
// no;
// 28;
// 28.;
// Stages;
// of;
// Life: Write;
// an;
// if (-)
//     ;
// else
//     chain;
// that;
// determines;
// a;
// person;
// s;
// stage;
// of;
// life.Set;
// a;
// value;
// for (the; variable; age, and)
//     then: ;
// If;
// the;
// person;
// is;
// less;
// than;
// 2;
// years;
// old, print;
// a;
// message;
// that;
// the;
// person;
// is;
// a;
// baby.
// ;
// var personAge = 1;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// personAge = 3;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// personAge = 10;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// personAge = 18;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// personAge = 45;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// // • If the person is age 65 or older, print a message that the person is an elder.
// personAge = 70;
// if (personAge < 2) {
//     console.log("Person is a baby");
// }
// else if (personAge >= 2 && personAge < 4) {
//     console.log("Person is a toddler");
// }
// else if (personAge >= 4 && personAge < 13) {
//     console.log("Person is a kid");
// }
// else if (personAge >= 13 && personAge < 20) {
//     console.log("Person is a teenager");
// }
// else if (personAge >= 20 && personAge < 65) {
//     console.log("Person is a adult");
// }
// else if (personAge >= 65) {
//     console.log("Person is a elder");
// }
// Que;
// no;
// 29;
// 29.;
// Favorite;
// Fruit: Make;
// a;
// array;
// of;
// your;
// favorite;
// fruits, and;
// then;
// write;
// a;
// series;
// of;
// independent;
// if (statements)
//     that;
// check;
// for (certain; fruits in your; array.
// )
//     ;
// Make;
// a;
// array;
// of;
// your;
// three;
// favorite;
// fruits;
// and;
// call;
// it;
// favorite_fruits.
// ;
// var favoriteFruits = ["apple", "banana", "orange"];
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// if (favoriteFruits.includes("banana")) {
//     console.log("I really like bananas");
// }
// if (favoriteFruits.includes('apple')) {
//     console.log("I really like apples.");
// }
// if (favoriteFruits.includes('orange')) {
//     console.log("I really like orange.");
// }
// if (favoriteFruits.includes('strawberry')) {
//     console.log("I really like strawberry.");
// }
// else {
//     console.log("strawbetty is not in my list of favorite fruits.");
// }
// if (favoriteFruits.includes('grape')) {
//     console.log("I really like grapes.");
// }
// else {
//     console.log("Grapes is not in my list of favorite fruits.");
// }
// Que;
// no;
// 30;
// 30.;
// Hello;
// Admin: Make;
// a;
// array;
// of;
// five;
// or;
// more;
// usernames, including;
// the;
// name;
// 'admin'.Imagine;
// you;
// are;
// writing;
// code;
// that;
// will;
// print;
// a;
// greeting;
// to;
// each;
// user;
// after;
// they;
// console_1.log in to;
// a;
// website.Loop;
// through;
// the;
// array, and;
// print;
// a;
// greeting;
// to;
// each;
// user: ;
// If;
// the;
// username;
// is;
// 'admin', print;
// a;
// special;
// greeting, such;
// admin, would;
// you;
// like;
// to;
// see;
// a;
// status;
// report ?
//     :
// ;
// Otherwise, print;
// a;
// generic;
// greeting, such;
// Eric, thank;
// you;
// for (logging in again.
// )
//     var userName = ["Admin", "Nabeel", "Irfan", "Farhan", "Hareem"];
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] === "Admin") {
//         console.log("Hello Admin, would you like to see a status report");
//     }
//     else {
//         console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
//     }
//     console.log(userName[i]);
// }
// Que;
// no;
// 31;
// 31.;
// No;
// Users: Add;
// an;
// if (test)
//     to;
// Exercise;
// 28;
// to;
// make;
// sure;
// the;
// list;
// of;
// users;
// is;
// not;
// empty.
// ;
// If;
// the;
// list;
// is;
// empty, print;
// the;
// message;
// We;
// need;
// to;
// find;
// some;
// users;
// var userNames = ["Admin", "Nabeel", "Irfan", "Farhan", "Hareem"];
// if (userNames.length === 0) {
//     console.log("We need to find some users");
// }
// else {
//     for (var i = 0; i < userNames.length; i++) {
//         console.log(userNames[i]);
//     }
// }
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
// userNames = [];
// if (userNames.length === 0) {
//     console.log("We need to find some users");
// }
// else {
//     for (var i = 0; i < userNames.length; i++) {
//         console.log(userNames[i]);
//     }
// }
// Que;
// no;
// 32;
// 32.;
// Checking;
// Usernames: Do;
// the;
// following;
// to;
// create;
// a;
// program;
// that;
// simulates;
// how;
// websites;
// ensure;
// that;
// everyone;
// has;
// a;
// unique;
// username.
// ;
// Make;
// a;
// list;
// of;
// five;
// or;
// more;
// usernames;
// called;
// current_users.
// ;
// Make;
// another;
// list;
// of;
// five;
// usernames;
// called;
// new_users.Make;
// sure;
// one;
// or;
// two;
// of;
// the;
// new usernames;
// are;
// also in the;
// current_users;
// list.
// ;
// Loop;
// through;
// the;
// new_users;
// list;
// to;
// see;
// if (each)
//     new username;
// has;
// already;
// been;
// used.If;
// it;
// has, print;
// a;
// message;
// that;
// the;
// person;
// will;
// need;
// to;
// enter;
// a;
// new username.If;
// a;
// username;
// has;
// not;
// been;
// used, print;
// a;
// message;
// saying;
// that;
// the;
// username;
// is;
// available.
// ;
// Make;
// sure;
// your;
// comparison;
// is;
// insensitive.If;
// 'John';
// has;
// been;
// used, 'JOHN';
// should;
// not;
// be;
// accepted.
// ;
// // List of current usernames
// var current_users = ['Farhan', 'Ali', 'Asif', 'Babar', 'Aslam'];
// // List of new usernames
// var new_users = ['Zahid', 'ALI', 'Imran', 'farhan', 'Khalid'];
// Method - 1;
// Loop;
// through;
// new_users;
// to;
// check;
// for (uniqueness; ; )
//     for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
//         var new_username = new_users_1[_a];
//         var isAvailable = true;
//         for (var _b = 0, current_users_1 = current_users; _b < current_users_1.length; _b++) {
//             var current_username = current_users_1[_b];
//             if (new_username.toLowerCase() === current_username.toLowerCase()) {
//                 console.log("Username ".concat(new_username, " is alraedy taken. Please choose a differenct username"));
//                 isAvailable = false;
//                 break;
//             }
//         }
//         if (isAvailable) {
//             console.log("Username ".concat(new_username, " is available!"));
//         }
//     }
// Method - 2;
// for (var i = 0; i < new_users.length; i++) {
//     var isAvailable = true;
//     for (var j = 0; j < current_users.length; j++) {
//         if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
//             console.log("Username ".concat(new_users[i], " is alraedy taken. Please choose a differenct username"));
//             isAvailable = false;
//             break;
//         }
//     }
//     if (isAvailable) {
//         console.log("Username ".concat(new_users[i], " is available!"));
//     }
// }
// Que;
// no;
// 33;
// 33.;
// Ordinal;
// Numbers: Ordinal;
// numbers;
// indicate;
// their;
// position in a;
// array, such;
// st;
// or;
// 2n;
// d.Most;
// ordinal;
// numbers;
// end in th, except;
// 1, 2, and;
// 3.;
// Store;
// the;
// numbers;
// 1;
// through;
// 9 in a;
// array.
// ;
// Loop;
// through;
// the;
// array.
// ;
// Use;
// an;
// if (-)
//     ;
// else
//     chain;
// inside;
// the;
// loop;
// to;
// print;
// the;
// proper;
// ordinal;
// ending;
// for (each; number.Your; output)
//     should;
// read;
// "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and;
// each;
// result;
// should;
// be;
// on;
// a;
// separate;
// line.
// ;
// var ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < ordinalNum.length; i++) {
//     if (ordinalNum[i] === 1) {
//         console.log("".concat(ordinalNum[0]) + "st");
//     }
//     else if (ordinalNum[i] === 2) {
//         console.log("".concat(ordinalNum[1]) + "nd");
//     }
//     else if (ordinalNum[i] === 3) {
//         console.log("".concat(ordinalNum[2]) + "rd");
//     }
//     else {
//         console.log("".concat(ordinalNum[i]) + "th");
//     }
// }
// Que;
// no;
// 34;
// 34.;
// Pizzas: Think;
// of;
// at;
// least;
// three;
// kinds;
// of;
// your;
// favorite;
// pizza.Store;
// these;
// pizza;
// names in a;
// array, and;
// then;
// use;
// a;
// for (loop; to; print)
//     the;
// name;
// of;
// each;
// pizza.
// ;
// Modify;
// your;
// for (loop; to; print)
//     a;
// sentence;
// using;
// the;
// name;
// of;
// the;
// pizza;
// instead;
// of;
// printing;
// just;
// the;
// name;
// of;
// the;
// pizza.For;
// each;
// pizza;
// you;
// should;
// have;
// one;
// line;
// of;
// output;
// containing;
// a;
// simple;
// statement;
// like;
// I;
// like;
// pepperoni;
// pizza.
// ;
// Add;
// a;
// line;
// at;
// the;
// end;
// of;
// your;
// program, outside;
// the;
// for (loop, that; states; how)
//     much;
// you;
// like;
// pizza.The;
// output;
// should;
// consist;
// of;
// three;
// or;
// more;
// lines;
// about;
// the;
// kinds;
// of;
// pizza;
// you;
// like;
// and;
// then;
// an;
// additional;
// sentence, such;
// really;
// love;
// pizza;
// var pizza = ["Chicken Pizza", "Peri Peri Pizza", "BarBQ Pizza"];
// for (var i = 0; i < pizza.length; i++) {
//     console.log("I like ".concat(pizza[i], " pizza"));
// }
// console.log("How much you like pizza");
// console.log("I really love pizza");
// Que;
// no;
// 35;
// Animals: Think;
// of;
// at;
// least;
// three;
// different;
// animals;
// that;
// have;
// a;
// common;
// characteristic.Store;
// the;
// names;
// of;
// these;
// animals in a;
// list, and;
// then;
// use;
// a;
// for (loop; to; print)
//     out;
// the;
// name;
// of;
// each;
// animal.
// ;
// Modify;
// your;
// program;
// to;
// print;
// a;
// statement;
// about;
// each;
// animal, such;
// dog;
// would;
// make;
// a;
// great;
// pet.
// ;
// Add;
// a;
// line;
// at;
// the;
// end;
// of;
// your;
// program;
// stating;
// what;
// these;
// animals;
// have in common.You;
// could;
// print;
// a;
// sentence;
// such;
// of;
// these;
// animals;
// would;
// make;
// a;
// great;
// pet;
// var animal = ["dog", "cat", "goat"];
// for (var i = 0; i < animal.length; i++) {
//     console.log("A ".concat(animal[i], " is a great animal"));
// }
// console.log("Any of these animals would make a great pet!");
