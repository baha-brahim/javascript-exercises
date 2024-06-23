const findTheOldest = function(people) {
    let today = new Date() ;
    let year = today.getFullYear();

    let max = {'age':0 , 'name':'test'}   ;
    for (let i = 0 ; i<people.length ; i++) {
        if (!('yearOfDeath' in people[i])) {
            people[i].yearOfDeath = year ;
        }
        age = people[i].yearOfDeath - people[i].yearOfBirth ;
        if (max.age < age) {
            max.name = people[i].name; max.age = age;
        }
        console.log(max);
    }
    return max ;
    
};

// Do not edit below this line
module.exports = findTheOldest;
