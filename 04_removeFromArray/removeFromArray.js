function removeFromArray(array, ...nums) {
    return array.filter(number => !nums.includes(number));
}
// Do not edit below this line
module.exports = removeFromArray;
