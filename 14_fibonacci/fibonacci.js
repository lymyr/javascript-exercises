const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    n = parseInt(n);
    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1
    }
    return ((fibonacci(n-1-1) + fibonacci(n-1)))
};

// Do not edit below this line
module.exports = fibonacci;
