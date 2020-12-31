const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/templateHolder.js');

const employeeDataArr = [];

const queryEmployees = [
    {
        type: 'list',
        name: 'addEmployees',
        message: 'Do you want to add an Engineer, Intern, or Exit?',
        choices: ['Engineer', 'Intern', 'Exit']
    }
]

const queryManager = [
    {
        type: 'text',
        name: 'name',
        message: "What's the Manager's name?",
        validate: nameInput => {
            if (nameInput) return true; console.log('No name was entered. Please enter your name.'); return false;
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What's the Manager's employee id?",
        validate: idInput => {
            if (idInput) return true; console.log('No id was entered. Please enter your id.'); return false;
        }
    }, 
    {
        type: 'text',
        name: 'email',
        message: "What's the Manager's email address?",
        validate: emailInput => {
            if (emailInput) return true; console.log('No email was entered. Please enter your email.'); return false;
        }
    },
    {
        type: 'text',
        name: 'office',
        message: "What is the Manager's office number?",
        validate: officeInput => {
            if (officeInput) return true; console.log('No office number was entered. Please enter an office number'); return false;
        },
    },
];

const queryEngineer = [
    {
        type: 'text',
        name: 'name',
        message: "What's the Engineer's name?",
        validate: nameInput => {
            if (nameInput) return true; console.log('No name was entered. Please enter your name.'); return false;
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What's the Engineer's id?",
        validate: idInput => {
            if (idInput) return true; console.log('No id was entered. Please enter your id.'); return false;
        }
    }, 
    {
        type: 'text',
        name: 'email',
        message: "What's the Engineer's email address?",
        validate: emailInput => {
            if (emailInput) return true; console.log('No email was entered. Please enter your email.'); return false;
        }
    },
    {
        type: 'text',
        name: 'github',
        message: "What is the Engineer's github?",
        validate: officeInput => {
            if (officeInput) return true; console.log('No github  was entered. Please enter a github'); return false;
        },
    },
]

const queryIntern = [
    {
        type: 'text',
        name: 'name',
        message: "What's the Intern's name?",
        validate: nameInput => {
            if (nameInput) return true; console.log('No name was entered. Please enter your name.'); return false;
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What's the Intern's id?",
        validate: idInput => {
            if (idInput) return true; console.log('No id was entered. Please enter your id.'); return false;
        }
    }, 
    {
        type: 'text',
        name: 'email',
        message: "What's the Intern's email address?",
        validate: emailInput => {
            if (emailInput) return true; console.log('No email was entered. Please enter your email.'); return false;
        }
    },
    {
        type: 'text',
        name: 'school',
        message: "What is the Interns's school?",
        validate: officeInput => {
            if (officeInput) return true; console.log('No school was entered. Please enter a school'); return false;
        },
    },
]

const manager = () => {
    inquirer
        .prompt(queryManager)
            .then(managerData => {
                const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
                employeeDataArr.push(manager);
                addTeam();
            })
};

const engineer = () => {
    inquirer
        .prompt(queryEngineer)
            .then(engineerData => {
                const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

                employeeDataArr.push(engineer);
                addTeam();
            })
}

const intern = () => {
    inquirer
        .prompt(queryIntern)
            .then(internData => {
                const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

                employeeDataArr.push(intern);
                addTeam();
            })
}

const writeToFile = () => {
    fs.writeFile('./dist/profiles.html', template(employeeDataArr), function(err) {
        if (err) throw err;
    });
    console.log('File Created!', employeeDataArr);
}

const addTeam = () => {
    inquirer
        .prompt(queryEmployees)
            .then(teamData => {
                if (teamData.addEmployees === 'Engineer') {
                    engineer();
                } else if (teamData.addEmployees === 'Intern') {
                    intern();
                } else {
                    writeToFile();
                }
            })
}


manager();




// ====== TEST FOR ENGINEER CARD =====
// generateEngineer() {
//     return `
//     <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     ${getName()}
//     ${getRole()}
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${getId()}</li>
//     <li class="list-group-item">Email: ${getEmail()}</li>
//     <li class="list-group-item">Github: ${getGithub()}</li>
//   </ul>
// </div>
// `
// };
// generateEngineer() {
//     return `
//     <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     ${getName()}
//     ${getRole()}
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${getId()}</li>
//     <li class="list-group-item">Email: ${getEmail()}</li>
//     <li class="list-group-item">Github: ${getGithub()}</li>
//   </ul>
// </div>
// `
// };

// test('generate Engineer card', () => {
//     const engineer = new Engineer('Fred', '1', 'test@test.com', 'test');

//     expect(engineer.generateEngineer()).toBe(
//     `
//     <div class="card" style="width: 18rem;">
//     <div class="card-header bg-primary text-white">
//         ${this.getName()}</br>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
//         <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
//         </svg>&nbsp;${this.getRole()}
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${this.getId()}</li>
//         <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
//         <li class="list-group-item">Github: <a target="_blank" rel="noopener noreferrer" href="https://www.${this.getGithub()}">${this.getGithub()}</a></li>
//       </ul>
//     </div>
//     `);

// console.log('card', engineer);
// })