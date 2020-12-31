const inquirer = require('inquirer');
const fs = require('fs');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
const template = require('./src/templateHolder.js');

// const employeeArr = [];

const questionsArr = [];

// const askQuestions = () => {
//     console.log(`
//     ============
//     New Employee
//     ============
//     `);

//     if (!teamData.employee) {
//         teamData.employee = [];
//     };
//     console.log(teamData.employee);

//     return inquirer.prompt([
//         {
//             type: 'text',
//             name: 'name',
//             message: 'What is your name?',
//             validate: nameInput => {
//                 if (nameInput) return true; console.log('No name was entered. Please enter your name.'); return false;
//             }
//         },
//         {
//             type: 'text',
//             name: 'id',
//             message: 'What is your employee id?',
//             validate: idInput => {
//                 if (idInput) return true; console.log('No id was entered. Please enter your id.'); return false;
//             }
//         }, 
//         {
//             type: 'text',
//             name: 'email',
//             message: 'What is your email?',
//             validate: emailInput => {
//                 if (emailInput) return true; console.log('No email was entered. Please enter your email.'); return false;
//             }
//         },
//         {
//             type: 'list',
//             name: 'role',
//             message: 'What is your role?',
//             choices: ['Manager', 'Engineer', 'Intern'],
//         },
//         {
//             type: 'text',
//             name: 'office',
//             message: "What is the Officer's office number?",
//             validate: officeInput => {
//                 if (officeInput) return true; console.log('No office number was entered. Please enter an office number'); return false;
//             },
//             when: ({ role }) => {
//                 if (role === 'Manager') {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'text',
//             name: 'github',
//             message: "What is the Engineer's github?",
//             validate: githubInput => {
//                 if (githubInput) return true; console.log('No github was entered. Please enter one.'); return false;
//             },
//             when: ({ role }) => {
//                 if (role === 'Engineer') {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'text',
//             name: 'school',
//             message: 'What school does the Intern go to?',
//             validate: schoolInput => {
//                 if (schoolInput) return true; console.log("No school was entered. Please enter the Intern's school."); return false;
//             },
//             when: ({ role }) => {
//                 if (role === 'Intern') {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'confirm',
//             name: 'addEmployee',
//             message: 'Would you like to add another employee?'
//         }
//     ])
//     .then(employeeData => {
//         employeeArr.push(employeeData);
//         console.log(teamData);
//         if (teamData.addEmploye) {
//             return askQuestions(teamData);
//         } else {
//             return teamData;
//         }
//     });
// };
    

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) return true; console.log('No name was entered. Please enter your name.'); return false;
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is your employee id?',
        validate: idInput => {
            if (idInput) return true; console.log('No id was entered. Please enter your id.'); return false;
        }
    }, 
    {
        type: 'text',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) return true; console.log('No email was entered. Please enter your email.'); return false;
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'text',
        name: 'office',
        message: "What is the Officer's office number?",
        validate: officeInput => {
            if (officeInput) return true; console.log('No office number was entered. Please enter an office number'); return false;
        },
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'github',
        message: "What is the Engineer's github?",
        validate: githubInput => {
            if (githubInput) return true; console.log('No github was entered. Please enter one.'); return false;
        },
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'school',
        message: 'What school does the Intern go to?',
        validate: schoolInput => {
            if (schoolInput) return true; console.log("No school was entered. Please enter the Intern's school."); return false;
        },
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    }
];


// ======= V2 =======
// askQuestions()
//     .then(teamData => {
//         console.log(teamData);

//         fs.writeFile('./dist/profiles.html', template(teamData), function(err) {
//             if (err) throw err;
//             console.log('File Created!')
//         });
//     });

const writeToFile = () => {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('File Created!');
    })
}

// ===== V1 ======
const askQuestions = () => {
    inquirer.prompt(questions)
        .then((responseData) => {
        questionsArr.push(responseData);

        console.log(questionsArr);
        writeToFile('./dist/profiles.html', template(questionsArr));
    });
};


// ======= V3 ========
// const askQuestions = () => {
//     inquirer.prompt(questions)
//         .then((responseData) => {
//         questionsArr.push(responseData);

//         console.log(questionsArr);
//         module.exports = questionsArr 
//         .then(responseData => {
//             fs.writeFile('./dist/profiles.html', template(questionsArr), function(err) {
//                 if (err) throw err;
//                 console.log('File Created!')
//             });
//         })
//     });
// };
askQuestions();