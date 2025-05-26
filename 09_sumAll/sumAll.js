const sumAll = function(a, b) {
    let sum = 0;
    if (!(Number.isInteger(a)) || !(Number.isInteger(b)) || a < 0 | b < 0)
        return "ERROR"
    else if (b < a) {
        let temp = a;
        a = b
        b = temp
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
