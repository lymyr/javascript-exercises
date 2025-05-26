const repeatString = function(str, n) {
    rStr = "";
    if (n >= 0)
        for (let i = 0; i < n; i++) {
            rStr += str
        }
    else
        rStr = "ERROR";
    return rStr
};

// Do not edit below this line
module.exports = repeatString;
