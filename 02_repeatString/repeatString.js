const repeatString = function(str, num) {
    strContainer = ''
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++) {
        strContainer += str;
    }
    return strContainer
};

// Do not edit below this line
module.exports = repeatString;
