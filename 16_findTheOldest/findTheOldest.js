const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        if (!(person.yearOfDeath)) {
            person.yearOfDeath = new Date().getFullYear()
        }
        if (!(oldest.yearOfDeath)) {
            oldest.yearOfDeath = new Date().getFullYear()
        }
        if ((oldest.yearOfDeath - oldest.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth)) {
            return person
        }
        else
            return oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
