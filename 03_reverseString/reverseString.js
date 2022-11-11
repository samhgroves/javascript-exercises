function reverseString(string) {
    let splitString = string.split('');
    let reversed = splitString.reverse();
    return(reversed.join(''));
}

reverseString('');
// Do not edit below this line
module.exports = reverseString;
