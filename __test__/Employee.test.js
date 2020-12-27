const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '4', 'test@test.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('test@test.com'); 

    // console.log(employee);
});
test('gets employee name', () => {
    const employee = new Employee('Sebastian');

    expect(employee.getName()).toBe('Sebastian');
});
test('gets employee id', () => {
    const employee = new Employee('', '3');

    expect(employee.getId()).toBe('3');
});
test('gets employee email', () => {
    const employee = new Employee('', '','tester@tests.com');

    expect(employee.getEmail()).toBe('tester@tests.com');
});
test('gets employee role', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
})