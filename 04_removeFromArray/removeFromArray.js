const removeFromArray = function(arr, ...elements){
    function removeElement(arr, element) {
        for (let i = arr.indexOf(element); i < arr.length; i++) {
            if (i == arr.length-1) {
                arr.pop()
                break;
            }
            arr[i] = arr[i+1];
        }
        return arr
    }
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arguments[i]) {
                arr = removeElement(arr, arguments[i]);
                i -= 1;
            }
        }
    }
    return arr
};


// Do not edit below this line
module.exports = removeFromArray;

/* npm test removeFromArray.spec.js */