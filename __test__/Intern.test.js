const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };
    getRole() {
        return `Intern`
    };
    getSchool() {
        return `${this.school}`
    };
    generateIntern() {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        ${this.getName()}</br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
        </svg>&nbsp;${this.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="list-group-item">School: ${this.getSchool()}</li>
      </ul>
    </div>
    `
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
test('get Intern school', () => {
    const intern = new Intern('', '', '', 'UF');

    expect(intern.getSchool()).toBe('UF');
    console.log('school', intern);
});
test('generate Intern card', () => {
    const intern = new Intern('Sally', '9', 'intern@test.com', 'UF');

    expect(intern.generateIntern()).toBe(
        `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        ${intern.getName()}</br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
        </svg>&nbsp;${intern.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
    `
    )
})