let score = "55qwer"
//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber)

/*Note:
"55" => 55
"55qwer" => NaN
*/

//Conversion to boolean
let isloggedIn = ""

let booleanIsloggedIn = Boolean(isloggedIn)
//console.log(booleanIsloggedIn);

/*Note:
1 => true, 0 => false
"" => false
"anystring" => true
*/

let  anyNumber = 55
let stringNumber = String(anyNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber);

// ################ Operations #########

let value = 9
let negValue = -value
//console.log(negValue);

//console.log(3**2);
//console.log(3%2);

//## String Concatention
let str1 = "Shivam"
let str2 = " Maurya"

let str3 = str1 + str2;
//console.log(str3)

//### Arithmetic ops
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // treated as string
console.log(1 +2 +"2"); // treated as int


