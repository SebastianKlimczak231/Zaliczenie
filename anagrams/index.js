// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
   
    return str.replace(/[^\w]/g, '').toLowerCase();
  }
  
  function anagrams(stringA, stringB) {
    const cleanedStringA = cleanString(stringA);
    const cleanedStringB = cleanString(stringB);
  
    
    return cleanedStringA.split('').sort().join('') === cleanedStringB.split('').sort().join('');
  }
  
  module.exports = anagrams;