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
    return `Click [here](https://opensource.org/license/${license}/) for the license info.`
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
  } else {
    return ""
  }
} 
 
 
// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, github, email}) => (
  `# ${title}
  ${renderLicenseBadge(license)}
  
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

module.exports = generateMarkdown();
