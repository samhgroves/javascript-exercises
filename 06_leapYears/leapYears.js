function leapYears(year) {
    if (year % 400 == 0 && year % 4 == 0) {
     return true
    } else if (year % 100 == 0) {
     return false
    } else if (year % 4 == 0) {
     return true
    } else {
     return false
    }
 }
 
 console.log(leapYears(1996));
 console.log(leapYears(1997));
 console.log(leapYears(34992));
 console.log(leapYears(1900));
 console.log(leapYears(1600));
 console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
