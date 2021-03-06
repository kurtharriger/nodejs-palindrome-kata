
var assert = require('assert');

var compare = function(a, b) {
    //console.log(a + "=" + b);
    return a.toLowerCase() == b.toLowerCase();
}

var isAlpha = function(c) {
  return /[a-zA-Z]/.test(c);    
}

// returns true if palindrome false otherwise
var isPalindromeRecursive = function(str) {
  if(str.length <= 1) return true;

  var first = str[0];
  var last = str.slice(-1);

  if(!isAlpha(first)) return isPalindrome(str.slice(1));
  if (!isAlpha(last)) return isPalindrome(str.slice(-1));

  if(compare(first, last)) {
    return isPalindrome(str.slice(1,-1));
  }
  else {
    return false;    
  }    
}
// transform to non-recursive function
var isPalindrome = function(str) {
  var startIndex = 0;
  var lastIndex = str.length - 1;
      
  while(lastIndex-startIndex > 0) {
    var first = str[startIndex];
    var last = str[lastIndex];

    if(!isAlpha(first))     startIndex += 1;
    else if(!isAlpha(last)) lastIndex -= 1;
    else if(!compare(first, last)) return false;
    else {
      startIndex += 1;
      lastIndex -= 1;
    }     
  }
  return true;
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

// non-alpha characters are ignored
assert.ok(isPalindrome("a,a", "'a,a' punctuation is ignored"));
assert.ok(!isAlpha(","), "', is not an alpha character");
assert.ok(isAlpha("A"), "A is alpha");
assert.ok(isAlpha("Z"), "Z is alpha");
assert.ok(isAlpha("a"), "a is alpha");
assert.ok(isAlpha("z"), "z is alpha");

// many characters
assert.ok(isPalindrome("Ah, Satan sees Natasha"), "'Ah, Satan sees Natasha' is a palindrome");

