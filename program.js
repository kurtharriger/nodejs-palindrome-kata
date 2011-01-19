
var assert = require('assert');

var compare = function(a, b) {
    return a.toLowerCase() == b.toLowerCase();
}

// returns true if palindrome false otherwise
var isPalindrome = function(str) {
  if(str.length <= 1) return true;

  if(compare(str[0],str[str.length -1])) {
    return isPalindrome(str.slice(1,-1));  
  }
  else {
    return false;
  }
}


// is empty string considered palendrome? 
// Initially I thought no, but as I implemented it I realized 
// the implementation would be simpler if the answer was yes
// since this is undefined behavior we'll go with the simpler
// impelementation
assert.ok(isPalindrome(""), "empty string is a palindrome");

// is a single letter considered a palendrome? Not sure but lets go with yes. 
assert.ok(isPalindrome("a"), "single letter is a palindrome");

// 2 letters are palindrome if they are the same
assert.ok(isPalindrome("aa"), "'aa' is a palindrome");
assert.ok(!isPalindrome("ab"), "'ab' is not a palindrome");

// 3 letters - first and last are same and the middle is a palindrome
assert.ok(isPalindrome("pop"), "'pop' is a palindrome");
assert.ok(!isPalindrome("abc"), "'abc' is not a palindrome");

// case does is not important
assert.ok(isPalindrome("aA"), "'aA' case should be ignored");

//assert.ok(isPalindrome("Ah, Satan sees Natasha"), "'Ah, Satan sees Natasha' is a palindrome");
