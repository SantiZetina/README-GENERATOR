// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdwon = require('./utils/generateMarkdown')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation'
    }, 
    {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contribuiting'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please provide how to test your code:',
        name: 'tests'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            console.log(err)
        } else {
            console.log("Success!!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdwon(data);
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
