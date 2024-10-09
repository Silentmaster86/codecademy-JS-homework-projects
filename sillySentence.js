const sillySentence = (adjective, verb, noun) =>
  "I am so " +
  adjective +
  " because I " +
  verb +
  " coding! Time to write some more awesome " +
  noun +
  "!";

console.log(sillySentence("excited", "love", "functions"));

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`

// With string concatenation:
const sillySentence = (adjective, verb, noun) => 'I am so ' + adjective + ' because I ' + verb +  ' coding! Time to write some more awesome ' + noun + '!'


// As a function declaration:
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
}


q