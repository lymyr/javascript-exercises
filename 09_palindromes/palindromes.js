const palindromes = function (inputStr) {
    inputStr = inputStr.toLowerCase();
    inputStr = inputStr.replace(/[^a-z\d]+/g, "");

    let endIndex = inputStr.length - 1;
    for (let i = 0; i < inputStr.length/2; i++) {
        if (inputStr[i] != inputStr[endIndex]) {
            return false;
        }
        endIndex = endIndex - 1;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
