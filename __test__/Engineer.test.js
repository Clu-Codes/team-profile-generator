const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
    }
    getRole() {
        return `Engineer`
    };
}

test('gets Engineer name', () => {
    const engineer = new Engineer('Fred');

    expect(engineer.getName()).toBe('Fred');
});
test('gets Engineer id', () => {
    const engineer = new Engineer('','2');

    expect(engineer.getId()).toBe('2');
    console.log('id', engineer);
});
test('gets Engineer email address', () => {
    const engineer = new Engineer('', '', 'fakemail@test.com');

    expect(engineer.getEmail()).toBe('fakemail@test.com');
});
test('get Engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
    console.log('Role', engineer);
})

