"use strict";

const markObject = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return Math.floor(this.mass / this.height ** 2)
    }
}
const johnObject = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.55,

    calcBMI: function () {
        return Math.floor(this.mass / this.height ** 2)
    }
}

console.log(markObject.calcBMI())
console.log(johnObject.calcBMI())

if (markObject.calcBMI() > johnObject.calcBMI()) {
    console.log(`${markObject.firstName} ${markObject.lastName}'s BMI(${markObject.calcBMI()}) is higher than ${johnObject.firstName} ${johnObject.lastName}'s BMI(${johnObject.calcBMI()})!`)
} else {
    console.log(`${johnObject.firstName} ${johnObject.lastName}'s BMI(${johnObject.calcBMI()}) is higher than ${markObject.firstName} ${markObject.lastName}'s BMI(${markObject.calcBMI()})!`)
}

