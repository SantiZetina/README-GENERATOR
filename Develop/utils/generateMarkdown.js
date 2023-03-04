// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://www.apahce.org/licenses/LICENSE-2.0'
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause'
      default:
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License
    This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license) ? '* [License](#license)\n' : ''}
  * [Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribuiting}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the project, plaese feel free to contact me through my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
