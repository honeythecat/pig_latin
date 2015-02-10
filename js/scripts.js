var containsVowel = function(character) {
  var vowel = ["a", "e", "i", "o", "u"];

  for (var index = 0; index < vowel.length; index += 1) {
    if (character === vowel[index]) {
      return true;
    } else {
      return false;
    }
  }
};

var pigLatin = function(phrase) {
  var splitWord = phrase.split('');
  var firstLetter = phrase.slice(0,1);

  if (containsVowel(splitWord[0])) {
    return phrase.concat("ay");
  } else if (!containsVowel(splitWord[0])) {
    return phrase.slice(1).concat(firstLetter).concat("ay");
  }
};


// phrase.slice(0, 1);
