const getTheTitles = function(arrObj) {
    let titles = [];
    for (let i = 0; i < arrObj.length; i++) {
        titles.push(arrObj[i].title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
