var prompt = require('sync-prompt').prompt;

function square (i){
  i *= i;
   return i;
}
function increment (x){
  x++;
// or  x = x + 1
   return x;
}
function area (length, width){
 var a = length * width; // or I could just type return length * width;
   return a;
}
function volume (length, width, height){
  var vol = (length * width * height); // I could just return area(length, width) * height since area is already defined in another function//
   return vol;
}

function sayHello(){  //how to make a function with no inputs and no output
  console.log('Hello'); 
}

function makeUpper(string){  //how to make a function to just turn lower case to uppercase once accessed//
  return string.toUpperCase();
}

//Teacher's Code to make tax percentage and total and add them together

//function addTax(amount, tax){
//  return amount + (amount * (tax/100));
//}

function addTax(total, tax){//takes total and tax and adds it together
  var total
  var tax = new Number(tax.replace("%", ""));
  return addTax(total, tax);
}
function addTax(total, tax){
  return total + total * tax / 100;//returns total plus tax percentage
}

console.log(addTax(999, 10));// tests the code to add tax and percentage

//Function to sum up everything inside of an Array [] 

function sum(c){    //funtion that adds everything inside of an array together//
    
    sumc = 0;   //defines sumc as a number
    for(var l = 0; l < c.length; l++){// this says starting from l = 0 (l is a number) as long as less than c.length. after each loop, add one to l; the loop continues as long as true
        sumc += c[l]; //this says sum = sum plus the element of c 2 which is l
    }
    return sumc;// sumc is the sum of everything inside of c which is everything inside of []
}

var array1 = [1,2,3,5,7];//sets the array and tests the function for array sum
console.log(sum(array1));

//Teacher's code//
function sum(numbers){
  var sigma = 0;// Greek for 'Sum' identified as a number by = 0

  for(var i = 0; i < numbers.length; i++){// for loop
  sigma += numbers[i];// using the for loop's rules, it equates sigma to the sum of the numbers inside of the array
  }
  return sigma;
}

var m;
m = sum([2,3,4]);// declares m as the function "sum" as the addition of the numbers in the array []//
console.log(m);


function canDrink(age){
 if(age >= 21){   //or we could just write "return(age >= 21);"
   return true;
 }else{
   return false;
 }

}
function letterGrade(n){// this sets the function letterGrade to change a number to a letter depending on the number.
  
  if(n >= 90){ //if it's 90 or above, it's an A and so on.)
    return 'A';
}else if(n >= 80){
    return 'B';
}else if(n >= 70){
    return 'C';
}else if(n >= 60){
    return 'D';
}else{
    return 'F'
}
}

var g;
g = letterGrade(90);
console.log(g);
g = letterGrade(83);
console.log(g);
g = letterGrade(50);
console.log(g);

//how to access whether or not the person can drink//
var d;

d = canDrink(18);
console.log(d);
d = canDrink(25);
console.log(d);


//how to access function to make all uppercase//
var s;
s = makeUpper('hello world');
console.log(s);

sayHello();   //how to access the function with no inputs or outputs, it simply says "Hello"

var z;

z = area(square(increment(3) + increment(4)), square(2));
console.log(z);

var z = increment(3)
  console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);

var h = square(5)
  console.log(h);
h = square(7)
  console.log(h);
h = square(9)
  console.log(h);
h = square(11)
  console.log(h);

var r = area(10, 10)
  console.log(r);
var  r = area(9, 6)
  console.log(r);

var v = volume(10, 4, 12);
  console.log(v);

// Factorial Function to take a number and multiply all of the numbers up to that #//

  var f = []  //sets the variable f as an array.
  function factorial(numbers){  //declares the function to be factorial 
    if(numbers === 0 || numbers === 1)  // says that if the number is 0 or 1 to return 1 (this will be a recursive function with multiple returns)//
      return 1; //returns 1 for 1 and 0
  if(f[numbers] > 0)  //if the numbers in the array are greater than 0
    return f[numbers];// return it as this 
  return f[numbers] = factorial(numbers - 1) * numbers//says that f[numbers] is equal to each number minus one times and go backwards multiplying until 0
}

var q;
q = factorial(50);
console.log(q);

//Teacher's Code//

function factorial(n){
  var product = 1;

  for(var i = 2; i <= n; i++){  //this method uses a for loop//
    product *= i;   //product is the i multiplication loop
  }
  return product; //returns product (i)
}

console.log(factorial(0));
console.log(factorial(5));

function rollDie(){   //Math.random() gives a random number
 return Math.floor(Math.random() * 6) + 1;  //Math.floor rounds to the next lowest integer
}   //in the function, I'm adding one to the highest number of 5 
//return says: 0,1,2,3,4,5 saying there can only be 6 random numbers, 5 being the highest, then add one to get to 6 for 6 random numbers (a standard die).
var d;
d = rollDie();
console.log(d);

function isPair(roll1, roll2){
  return roll1 === roll2;
}

console.log(1, 2);

function countPairs(n){
  var totalPairs = 0
    for(i = 1; i < n; i++){
      if(isPair(rollDie(),rollDie()) === true){
        totalPairs++
      }
    }

  return totalPairs
}

var n_countPairs = prompt('How many pairs of dice to test? ')
console.log('Of ' + n_countPairs + ' rolls of die, ' + countPairs(n_countPairs) + ' are pairs.');
