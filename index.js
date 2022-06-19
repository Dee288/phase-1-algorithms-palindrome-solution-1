function isPalindrome(word) {
 const reverseWord = reverseStr(word);
 if (word === reverseWord) {
  return true;
} else {
  return false;
}
}
function reverseStr(word) {
  return word.split("").reverse().join("");
}
  




/* 
  Add your pseudocode h
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log(" ")

module.exports = isPalindrome;
