// ✅ Introduction:
// Before ES6 (ECMAScript 2015), only "var" was used to declare variables.
// After ES6, "let" and "const" were introduced for better control over scope and mutability.

/*
📌 Scope Explanation:

1. var
   - Scope: Have Function-scoped. (If any variable define incide the function with the keyword "var" can not be access outside that function).
   - Can be re-assigned ✅
   - Can be re-declared ✅

2. let
   - Scope: Block-scoped (anything inside {}). if defined in block {} can be access inside that block {} only.
   - Can be re-assigned ✅
   - Cannot be re-declared in the same scope ❌

3. const
   - Scope: Block-scoped.  ✅
   - Cannot be re-assigned ❌
   - Cannot be re-declared ❌
   - Must be initialized at the time of declaration.
*/

console.log("******************* var ********************");
//********************************************************

// Example using var (function-scoped)
var globalVar = "1-Declared using var at global level";

function testVarScope() {
  var functionVar = "2-Declared using var inside function";
  console.log("var-> Inside function");
  console.log(functionVar); // ✅ Accessible here
  console.log(globalVar); // ✅ Accessible here
}

testVarScope();

console.log("Outside function:");
console.log(globalVar); // ✅ Accessible here
//console.log(functionVar); //❌ Error: functionVar is not defined outside the function

console.log("******************* Let ********************");
//********************************************************

// Example using let (block-scoped)
function testLetScope() {
  let blockVar = "Declared using let inside block";

  if (true) {
    let insideIf = "Inside if block";
    console.log("Let-> Inside function");
    console.log(insideIf); // ✅ Accessible here
  }

  console.log(blockVar); // ✅ Accessible here
  // console.log(insideIf);   // ❌ Error: insideIf is not defined outside the block
}

testLetScope();

console.log("******************* const ********************");
//********************************************************

// Example using const
function testConst() {
  const PI = 3.14;
  console.log("Value of PI:", PI); // ✅ Works fine

  // PI = 3.1415;      // ❌ Error: Assignment to constant variable (can't be reassigned)
  // const PI = 3.141; // ❌ Error: Cannot re-declare
}

testConst();
//console.log("access outside the block", PI); // Not accessible outside of the {} block scope.

// 🧠 Summary:
console.log(`
============================
Summary:
- var   ➤ Function-scoped, reassign & redeclare allowed.
- let   ➤ Block-scoped, reassign allowed,no redeclare.
- const ➤ Block-scoped, no reassign, no redeclare.
============================
`);
