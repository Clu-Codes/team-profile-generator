const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    getRole() {
        return `Engineer`
    };
    getGithub() {
        return `${this.github}`
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
        <li class="list-group-item">Github: ${this.getGithub()}</li>
      </ul>
    </div>
    `
    };
};


module.exports = Engineer;