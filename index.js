const inquirer = require('inquirer')
const fs = require('fs');


const fileName = 'README2.md'

// array of questions for user
const questions = inquirer
    .prompt([
        { // title 
            type: 'input',
            message: "What is your project's title?",
            name: 'title'
        },
        { // description
            type: 'input',
            message: "Enter a description, installation instructions, usage information, contribution guidelines, and test instructions",
            name: 'description'
        },
        { // licenses/bqdge
            type: 'checkbox',
            message: "Licenses?",
            name: 'license',
            choices: ["hi", "bye"]
        },
        { // github username
            type: 'input',
            message: "Github username?",
            name: 'git-username'
        },
        {
            type: 'input',
            message: "Email Address?",
            name: 'email'
        },
    ]);




// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, `${questions}`, function () {
        console.log('complete');
    })
};
// function to initialize program
function init() {

}

// function call to initialize program
init();