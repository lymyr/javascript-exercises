const add = function(...args) {
	return args.reduce((sum, num) => sum + num)
};

const subtract = function(...args) {
	return args.reduce((sum, num) => sum - num)
};

const sum = function(args) {
  if (args.length == 0) {
    return 0
  }
	return args.reduce((sum, num) => sum + num)
};

const multiply = function(args) {
  return args.reduce((product, num) => product * num)
};

const power = function(...args) {
	return args.reduce((product, num) => product ** num)
};

const factorial = function(n) {
  if (n == 0 || n == 1) {
    return 1
  }
	return ((factorial (n-1)) * n)
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
