console.log(a);
console.log(b);
var a = 10;
let b = 20;
function test() {
  console.log(c);
  var c = 30;
}
test();


//! predicted Output
// undefined
// ReferenceError: Cannot access 'b' before initialization


/*
! Question - Why does a print undefined?

Ans - var a is hoisted to the top of its scope.
During hoisting, it is initialized with undefine

! Question - Why does b throw an error?

Ans - let b is also hoisted but placed in the Temporal Dead Zone (TDZ).
You cannot access b before its declaration line.

*/

/*
! New Code

let a = 10;
let b = 20;

console.log(a);
console.log(b);

function test() {
  let c = 30;
  console.log(c);
}
test();

*/