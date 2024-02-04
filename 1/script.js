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
  const x = 7;
  return function inner() {
    console.log(x);
  };
}
const f = outer();
// console.log(f);
const x = 9;
console.log(x);
f();
