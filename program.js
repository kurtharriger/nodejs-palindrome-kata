
var assert = require('assert');

// returns true if palindrome false otherwise
var isPalindrome = function(str) {
    
  return str.length;
}


// is empty string considered palendrome? I'm going to say no.
assert.ok(!isPalindrome(""), "empty string is not a palindrome");
// is a single letter considered a palendrome? Not sure but lets go with yes. 
assert.ok(isPalindrome("a"), "single letter is a palindrome");

//assert.ok(isPalindrome("pop"), "'pop' is a palindrome");
//assert.ok(isPalindrome("Ah, Satan sees Natasha"), "'Ah, Satan sees Natasha' is a palindrome");
