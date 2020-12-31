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
        <li class="list-group-item">Github: ${this.getSchool()}</li>
      </ul>
    </div>
    `
    };
};


module.exports = Intern;