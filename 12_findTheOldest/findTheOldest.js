const findTheOldest = function(obj) {
    let oldestAge = 0;
    let oldestPerson = "omegalul";
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    for (let i = 0; i < obj.length; i++) {
        let yod = obj[i].yearOfDeath;
        if (obj[i].yearOfDeath == undefined) {
            yod = currentYear;
        }

        let age = yod - obj[i].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = obj[i];
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
