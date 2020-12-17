// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');   // solution-1

    // let reversed = "";         //Solution-2
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;
    
    //1st parameter of the reduce() arrow function takes the 2nd parameter of the reduce() initially and then takes the output of
    //the arrow function. The 2nd parameter of the arrow function is the element of the array that is being processed.
    return str.split('').reduce((rev, char) => char + rev, "");  //Solution-3
}

module.exports = reverse;
