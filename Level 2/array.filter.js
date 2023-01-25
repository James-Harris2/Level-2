//Given an array of numbers, return a new array
// that has only the numbers that are 5 or greater

// const fiveAndGreater = [3, 6, 8, 2]

// const young = fiveAndGreater.filter(function(arr){
//     return arr >= 5
// })

// console.log(young); // [6, 8]

// const evenOnly = [3, 6, 8, 2]

// const myEven = evenOnly.filter(function(arr){
//     return arr != 3 ;
// })
//     console.log(myEven);// [6, 8, 2]
// return 5 or fewer charcters
// not able to run .filter method on Higher Order Function

// const fiveCharctersOrFewerOnly =  ["dog", "wolf", "by", "family", "eaten","camping"];
// const result = fiveCharctersOrFewerOnly.filter(myCharcter)

// function myCharcter (word){
//     return word.length <= 5
// }
// console.log(result);

// const sixThings = ['cat', 'goat', 'rabbit', 'tree', 'polar bear', 'elephant', ]
// const result = sixThings.filter(mySixThings)

// function mySixThings(animals) {
//     return animals.length <= 5

// }
// console.log(result);
/* .sort Array method; takes a function and sort through array*/
// leastToGreatest = [5,2, 20, 1, 3, 90, 75, 8];

// greatNumbers = leastToGreatest.sort(function(j,  h){
//     return j -h
// })
// console.log(leastToGreatest); // [1,2, 3, 5, 8, 20, 75, 90]




// function sumName(name1, name2){
//     return name1 < 5, name2 <= 5;
// }





// setTimeout(function(arg1, arg2){
//     console.log('Hello!');
// }, 1000);

// setInterval(function(){
//     console.log('Hello!');
// }, 1000)

// var intervalID = setInterval(function(){
//     console.log('what up my boy!');
// }, 3000)

// clearInterval(intervalID);

// function sayHello(){
//     console.log("hello!");
// }
// var intervalID = setInterval (sayHello, 1000);
// ****TESTING FUNCTIONS ON SETtimeOut

// function sayHello(){
//     console.log("what up my boy! ");
// }
// function stopSayingHello(){
//     clearInterval(intervalID)
// }

// var intervalID = setInterval(sayHello, 1000);
// setTimeout(stopSayingHello, 6000)



// find-get specific item
// findIndex - get's index of the item;
// every - every item in the array
// some - at least one item

// const people = [
//     { id: 1, name: "john"},
//     { id: 2, name: "peter",},
//     { id: 2, name: "anna"},
//     { id: 2, name: "james"}
// ];

// const grades = ['A', 'B', 'C', 'A', 'B', 'C'];
// const goodGrades = ['A', 'B', 'A', 'B'];

// const anna = people.find(person => person.name === 'anna');

// console.log(anna.name)// return anna

// const person = people.findIndex(item => item.id === 4);

// console.log (person)
// const newPeople = people.slice(0, person)
// console.log(newPeople);

// .EVERY in the array// it will LOOP through
// const allGoodGrades = people.every(name => name !== 'C');

// console.log(allGoodGrades);

/* sort an array from Largest number to smallest*/
myArr = [1, 3, 5, 2, 90 , 20];


/* sort ARRAY of Strings from shortest to longest*/
myString = ["dog", "wolf", "by", "family", "eaten"];

// const greatestToLeast = myArr.sort(function (a, b) {
//     return a - b
// })

// reverse the order of the" myString Array 
const smallString = myString.sort(function (a, b) {// sort the array given the Return statement
    // if (a.length <= 2){
    //     return -1
    } // returns length of array by element 
)  

console.log(smallString.sort()) //outPUT: ['by', 'dog', 'wolf', 'eaten', 'family']
// reverse string of myString Array ['by', 'dog', 'wolf', 'family', 'eaten'] in alphabetical order//

// console.log(greatestToLeast);





