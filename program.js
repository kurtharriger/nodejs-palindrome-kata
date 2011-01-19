
var assert = require('assert');

// returns true if palindrome false otherwise
var isPalindrome = function(str) {
  if(str.length == 0) return false;
  if(str.length == 1) return true;

  return str[0] == str[1];
  
}


// is empty string considered palendrome? I'm going to say no.
assert.ok(!isPalindrome(""), "empty string is not a palindrome");
// is a single letter considered a palendrome? Not sure but lets go with yes. 
assert.ok(isPalindrome("a"), "single letter is a palindrome");
// 2 letters are palindrome if they are the same
assert.ok(isPalindrome("aa"), "'aa' is a palindrome");
assert.ok(!isPalindrome("ab"), "'ab' is not a palindrome");

//assert.ok(isPalindrome("pop"), "'pop' is a palindrome");
//assert.ok(isPalindrome("Ah, Satan sees Natasha"), "'Ah, Satan sees Natasha' is a palindrome");
