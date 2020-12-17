// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    let max = 0;
    let maxChar = '';
    //Use for-of for arrays or strings only, not objects
    for (let char of str) {
        // obj[char] = obj[char] + 1 || 1; // this line is similar to the if-else below
        if(obj[char]) {
            obj[char] + 1;
        } else {
            obj[char] = 1;
        }
    }
    // Always use for-in to iterate over an object
    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            maxChar = char;
    }
    return maxChar;
    }
}

module.exports = maxChar;
