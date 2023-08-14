const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license) {
      return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license) {
      return `[license link](https://img.shields.io/badge/License-${license}-yellow.svg)`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `## License
      
      ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
    }
  }
  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, github, email}) => (
    `# ${title}
    
    ## Description
    
    ${description}
    
    ## Table of Contents
    
    [Installation](##installation)
    [Usage](##usage)
    [License](##license)
    [Contributing](##contributing)
    [Tests](##tests)
    [Questions](##questions)
    
    ## Installation
    
    ${installation}
    
    ## Usage 
    
    ${usage}
    
    ${renderLicenseSection(license)}
    
    ## Contributing
    
    ${contributing}
    
    ## Tests
    
    ${tests}
    
    ## Questions
  
    This is the name of my Github profile; ${github}. 
    Here is the link to my GitHub; [github link](https://github.com/${github})
  
    If you would like to reach out to me for any questions, you can communicate with me via my email, ${email}`
    
  )

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
    const markup = generateMarkdown(response)
    fs.writeFile('./README.md', markup, err => {
        err ? console.error(err) : console.log("File Successfully Written")
    });
});