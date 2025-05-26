const removeFromArray = function(arr, ...args) {
    if (!(Array.isArray(args))) {
        arr = arr.filter((item) => item !== args);
    }
    else {
        for (let i = 0; i < args.length; i++){
            arr = arr.filter((item) => item !== args[i]);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
