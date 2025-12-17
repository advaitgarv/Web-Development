function findLongestWordLength(sentence) {
  let longestLength = 0;
  const words = sentence.split(" ");
  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
 return longestLength;
}