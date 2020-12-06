// Requiring dependencies 
const questions = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been made")
  });
}


// function to initialize program
function init() {
  questions
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your Github User-Name?',
        name: 'userName',
      },
      {
        type: 'input',
        message: 'Contact information: email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Description of project? ',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the uses for your project? ',
        name: 'uses',
      },
      {
        type: 'input',
        message: 'Steps for installation?',
        name: 'installationSteps',
      },
      {
        type: 'list',
        message: "Please choose the license that you used for your project.",
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL'],
        name: 'licenses'
      },
      {
        type: 'input',
        message: 'Any contributors?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'What tests have been run on this project?',
        name: 'tests',
      }
    ])
    .then((res) => {

      const markdown = generateMarkdown(res);
      writeToFile("README.md", markdown)
    })

}

// function call to initialize program
init();
