// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.length;
}
console.log(getCount("ghazaal"));
console.log(getCount("surena norouzi"));

// _______________________________________________________________________________________

// function getCount(str) {return (str.match(/[aeiou]/gi) || []).length;}

//
// * /[aeiou]/ - This is a regular expression that matches any vowel

// * [aeiou] defines a character set of vowels (a, e, i, o, u)

//* /ig are regex flags:

//*  i makes the match case-insensitive (will match both uppercase and lowercase vowels)
//*  g makes the match global (find all matches, not just the first one)

//* str.match() attempts to find all vowel matches in the string

//* If no matches are found, match() returns null

//* ||[] is a fallback operator

//* If match() returns null, it will instead use an empty array []

//* .length then counts the number of vowel matches
//  ________________________________________________________________________________________________________________________________
/*
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}
  */
// _____________________________________________________________________________________________________________________________________

/*

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

------------مثال هایی از filter و arrow function  inside metod


let words = ["apple", "banana", "kiwi", "grape"];
let shortWords = words.filter(word => word.length <= 5);    فقط کلماتی که ۵ حرف یا کمتر دارند، نگه داشته‌ایم

console.log(shortWords); // ["apple", "kiwi"]

------------------------

let ages = [15, 22, 30, 18, 40];
let firstAdult = ages.find(age => age >= 18);     اولین مقذار بزرگتر از 18

console.log(firstAdult); // 22

*


