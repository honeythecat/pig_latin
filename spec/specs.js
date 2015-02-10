describe('pigLatin', function() {
  it("adds 'ay' to the end of a word starting with a vowel", function() {
    expect(pigLatin("a")).to.equal("aay");
  });

  it("shifts the first letter, if it is a consonant, to the end of a word and adds 'ay'", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("shifts all the first letters if they are consonants to the end of a word and adds 'ay'", function() {
    expect(pigLatin("stutter")).to.equal("utterstay");
  });

});
