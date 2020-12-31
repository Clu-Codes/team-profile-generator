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
