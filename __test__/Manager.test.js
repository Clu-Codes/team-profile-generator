const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.office = officeNumber;
    };
    getRole() {
        return `Manager`
    };
    getOfficeNumber() {
        return `${this.office}`
    }
}

test('get Manager name', () => {
    const manager = Manager;
});