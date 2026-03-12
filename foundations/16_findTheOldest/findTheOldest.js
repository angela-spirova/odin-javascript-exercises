const findTheOldest = function(people) {

    const currentYear = (new Date()).getFullYear();

    return people.reduce((oldest, person) => {
        const maxAge = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
        const age = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
        if(maxAge<age){
            return person;
        }
        return oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
