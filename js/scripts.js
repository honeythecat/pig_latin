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
  var splitWord = phrase.split("");

  for (var index = 0; index < splitWord.length; index += 1) {
    if (containsVowel(splitWord[index])) {
      var vowelPosition = index;
    } else {
      "No vowels";
    }
  }

  var firstConsonants = phrase.slice(0, vowelPosition);

  if (containsVowel(splitWord[0])) {
    return phrase.concat("ay");
  } else if ((containsVowel(splitWord[vowelPosition]))) {
    return phrase.slice(vowelPosition).concat(firstConsonants).concat("ay");
  }
};

// Really close! Check out 
// https://gist.github.com/BobbySig/6149927
// for some hints
