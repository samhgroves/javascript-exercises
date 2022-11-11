function ftoc(f) {
  let c = (f - 32) * (5 / 9);
  return roundedC = Math.round(c * 10) / 10;
}

function ctof(c) {
  let f = (c * 9 / 5) + 32;
  return roundedF = Math.round(f * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
