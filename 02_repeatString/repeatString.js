function repeatString(string, num) {
    let newstring = ''
    while (num > -1) {
        for (let index = 0; index < num; index++) {
            newstring += string;
        }
        return newstring;
    } return "ERROR"
    
}

// Do not edit below this line
module.exports = repeatString;
