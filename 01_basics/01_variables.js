const accId = 13819051222
let emailId = "shivam@gmail.com"
var userId = "shivam03" /*Prefer not to use var as bcz of issue in block scope and function scope */
accCity = "New Delhi"
let accState;
//accId = 138190  Not Allowed
emailId = "shivam027@gmail.com"
userId = "shivam0277"
accCity = "Varanasi"

console.log(accId)
console.table([accId, emailId, userId, accCity, accState])