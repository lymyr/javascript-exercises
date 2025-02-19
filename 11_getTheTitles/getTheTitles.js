const getTheTitles = function(arrObj) {
    let titles = [];
    for (let i = 0; i < arrObj.length; i++) {
        titles.push(arrObj[i].title)
    }
    return titles
    // let titles = [];
    // for (title in books.titles) {
    //     title 
    // }
};

// Do not edit below this line
module.exports = getTheTitles;
