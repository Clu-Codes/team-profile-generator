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
      <div class="card-header">
        ${getName()}
        ${getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${getId()}</li>
        <li class="list-group-item">Email: ${getEmail()}</li>
        <li class="list-group-item">Github: ${getGithub()}</li>
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

    expect(engineer.generateEngineer()).toBe(`
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
`);

console.log('card', engineer);
})

