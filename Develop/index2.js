// TODO: Include packages needed for this application
const getMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write the installation instructions for your project. If there are no installation instructions, write N/A.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write the usage information for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project. If you do not want a license, hit enter.',
        choices: ['MIT', 'ODC_BY', 'Zlib']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please write the contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write the test instructions for your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username to be used in the Questions section:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email to be used in the Questions section:'
    }
]).then((response) => {
    console.log(response)
    // TODO: Create a function to write README file
    const markup = getMarkdown.generateMarkdown(response)
    fs.writeFile('./README.md', markup, err => {
        err ? console.error(err) : console.log("File Successfully Written")
    });
});


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
