const accountId= 122121
let accountEmail= "anu@12345"
var accountPassword= "1111"

accountCity = "Pkd"
let accountState;
// accountId= 122121  // not allowed 
accountEmail= "ccc@12345"
var accountPassword= "1234"
/*
prefer not to use var
bacause of issue in block scope and functional scope
*/
accountCity = "bbsr"
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

