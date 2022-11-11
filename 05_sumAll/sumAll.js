function sumAll(num1,num2) {
    const allNumbers = [num1, num2];
    if (num1 < num2) {
        for (let index = num1 + 1; index < num2; index++) {
            allNumbers.push (index)
        }
    } else if (num1 > num2) {
        for (let index = num2 + 1; index < num1; index++) {
            allNumbers.push (index)
        }
    } 

    let sum = 0;

    for (let i = 0; i < allNumbers.length; i++) {
        sum += allNumbers[i];
    }
    if (typeof(num1) != "number") {
        return("ERROR")
    } else if (typeof(num2) != "number"){
        return("ERROR")
    } else if (sum < 1){
        return("ERROR")
    } else {
        return sum
    }
}

// Do not edit below this line
module.exports = sumAll;
