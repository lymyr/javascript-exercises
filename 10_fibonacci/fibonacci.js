const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }

    num = parseInt(num);
    let fib = 0;
    let prev = 1;
    let prevprev = 0;
    for (let i = 0; i < num; i++) {
        prevprev = prev
        prev = fib
        fib = prevprev + prev;
    }
    return fib
};

// Do not edit below this line
module.exports = fibonacci;
