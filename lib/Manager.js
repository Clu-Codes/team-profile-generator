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
    generateEmployee() {
        return `
        <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${this.getName()}
        ${this.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: ${this.getEmail()}</li>
        <li class="list-group-item">Github: ${this.getOfficeNumber()}</li>
      </ul>
    </div>
    `
    };
};


module.exports = Manager;