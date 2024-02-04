console.log(first);
hello();
var first = "first";
var first = "second";
function hello() {
  var first = "third";
  console.log(first);
}
// closure;
function outer() {
  var x = 7;
  return function inner() {
    console.log(x);
  };
}
const f = outer();
// console.log(f);
// var x = 9;
console.log(x);
f();
