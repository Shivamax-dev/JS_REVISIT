//Note: JS is dynamically typed language(no need to defined the type of datatype)



//Primitive Datatype(7 types): String, Number, Boolean, Null, Symbol, Undefined, BigInt

let Id = Symbol("123");
let anotherId = Symbol("123");

console.log(Id === anotherId)
console.log(Id == anotherId)  //In JS, == (double equals) is the loose equality operator, which performs type coercion before comparison, while === (triple equals) is the strict equality operator, which checks both value and data type without any type conversion.


const bigNumber = 252756982450794n;
console.log(typeof bigNumber);

//Non-Primitive(Refernce) : Array, Object, Function

