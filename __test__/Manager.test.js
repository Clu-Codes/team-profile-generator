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
    };
    generateManager() {
        return `
        <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
        ${this.getName()}</br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
        </svg>&nbsp;${this.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${this.getOfficeNumber()}</li>
      </ul>
    </div>
    `};
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
test('get Manager card', () => {
    const manager = new Manager('Leroy', '1', 'manager@test.com', '4');

    expect(manager.generateManager()).toBe(
        `
        <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
        ${manager.getName()}</br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
        </svg>&nbsp;${manager.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
    `
    )
})