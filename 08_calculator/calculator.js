const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(numArr) {
  let n = numArr.length;
  let sum = 0;
  if (n == 0) {
    return sum
  }
  for (let i = 0; i < n; i++) {
    sum += numArr[i];
  }
  return sum
};

const multiply = function(numArr) {
  let n = numArr.length;
  let sum = 1;
  if (n == 0) {
    return sum
  }
  for (let i = 0; i < n; i++) {
    sum *= numArr[i];
  }
  return sum
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  let output = 1;
	if (x == 0 || x == 1) {
    return output
  }
  else {
    for (let i = 1; i <= x; i++) {
      output *= i;
    }
  }
  return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
