var words = ["ground", "control", "to", "major", "tom"];

var result = words.map(function(word) {
  return word.length;
});

var result2 = words.map(function(word) {
  return word.toUpperCase();
});

var result3 = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(result);
console.log();
console.log(result2);
console.log();
console.log(result3);