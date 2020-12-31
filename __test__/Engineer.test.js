const { expect, test } = require('@jest/globals');
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
    generateEngineer() {
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
});
test('get Engineer github', () => {
    const engineer = new Engineer('', '', '', 'github.com/fred-codes');

    expect(engineer.getGithub()).toBe('github.com/fred-codes');
    console.log('github', engineer);
});
test('generate Engineer card', () => {
  const engineer = new Engineer('Fred', '1', 'test@test.com', 'test');

  expect(engineer.generateEngineer()).toBe(
  `
  <div class="card" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
      ${engineer.getName()}</br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
      <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg>&nbsp;${engineer.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github: <a target="_blank" rel="noopener noreferrer" href="https://www.${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
  </div>
  `);
});


