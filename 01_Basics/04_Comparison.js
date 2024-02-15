// > || < || >= || <= || == || !=    will return boolean
console.log('1' === 1);
console.log('1' == 1);

console.log(null >= 0)
console.log(null == 0)
// equality check and comparison check works differently. Comparison converts the null to 0 
//  therefore >= is true in this case
// Specifically avoid such comparisons

console.log("2" == 2); // Will give true as it does type conversion
console.log("2" === 2); // Will give false as it check strickly

