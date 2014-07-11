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

function canDrink(age){
 if(age >= 21){   //or we could just write "return(age >= 21);"
   return true;
 }else{
   return false;
 }

}

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

