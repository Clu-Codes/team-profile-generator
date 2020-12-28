const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.office = officeNumber;
    };
    getRole() {
        return `Manager`
    };
    getOfficeNumber() {
        return `${this.office}`
    }
};

module.exports = Manager;