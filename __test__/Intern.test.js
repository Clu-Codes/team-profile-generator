const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    };
    getRole() {
        return `Intern`
    };
};

test('get Intern name', () => {
    const intern = new Intern('Sally');

    expect(intern.getName()).toBe('Sally');
    console.log('name', intern);
});
test('get Intern id', () => {
    const intern = new Intern('', '9');

    expect(intern.getId()).toBe('9');
    console.log('id', intern);
});
test('get Intern email', () => {
    const intern = new Intern('', '', 'intern@test.com');

    expect(intern.getEmail()).toBe('intern@test.com');
    console.log('email', intern);
});
test('get Intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
    console.log('role', intern);
});