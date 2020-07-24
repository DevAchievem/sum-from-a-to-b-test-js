
const sum = (fromN, toN) => {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }

};
// sum(3, 7)  it would sum 3 + 4 + 5 + 6 + 7 and output 25.
module.exports = sum;
