const person = {
    firstName: "zannat",
    lastName: "reya",
    age: 27,
    education: "bsc",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

};

console.log('person firstname is: ', person.firstName);
console.log('person lastname is: ', person.lastName);
console.log('person education is: ', person.education);
console.log('person age is: ', person.age);
console.log('person fullname is: ', person.fullName());
