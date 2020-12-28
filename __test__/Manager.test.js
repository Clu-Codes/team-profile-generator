const { expect, test } = require('@jest/globals');
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
}

test('get Manager name', () => {
    const manager = new Manager('Leroy');

    expect(manager.getName()).toBe('Leroy');
});
test('get Manager id', () => {
    const manager = new Manager('', '1');

    expect(manager.getId()).toBe('1');
});
test('get Manager email', () => {
    const manager = new Manager('', '', 'manager@test.com');

    expect(manager.getEmail()).toBe('manager@test.com');
});
test('get Manager role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});
test('get Manager office number', () => {
    const manager = new Manager('', '', '', '4');

    expect(manager.getOfficeNumber()).toBe('4');
    console.log('office-number', manager);
});