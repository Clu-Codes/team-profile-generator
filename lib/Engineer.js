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
    <div class="card-header bg-primary text-white">
        ${this.getName()}</br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
        </svg>&nbsp;${this.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="list-group-item">Github: <a target="_blank" rel="noopener noreferrer" href="https://www.${this.getGithub()}">${this.getGithub()}</a></li>
      </ul>
    </div>
    `
    };
};


module.exports = Engineer;