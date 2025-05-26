const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9\s]/g, "").split(", ").join("").split(" ").join("").toLowerCase();
    let left = 0;
    let right = 0;
    let mid = Math.floor(str.length/2);

    if (str.length % 2 == 0) {
        left = str.slice(0, mid);
        right = str.slice(mid, str.length);
    }
    else {
        left = str.slice(0, mid);
        right = str.slice(mid+1, str.length);
    }

    return (left === right.split("").reverse().join(""))
};

// Do not edit below this line
module.exports = palindromes;
