// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //solution-1
    //toString() converts into a string
    //parseInt converts into integer
    //Math.sign(n) returns 1 for +ve n, etc...
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
