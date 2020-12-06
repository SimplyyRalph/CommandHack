// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   
  ## Description

  ${data.description}


  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation
  
  - ${data.installationSteps}
  
  ## Usage
    
  - ${data.uses}

  ## GitHub Repository Link

  - ${data.repositoryLink}

  ## Contributors
    
  - ${data.contributors}

  ## Tests
  - Here is a description of tests that were completed on this project before release.
  - ${data.tests}
  
  ## License Used in this project
  
  - ${data.licenses}

  ## Questions

  *Please direct Questions to the following

     - https://github.com/${data.userName}
     - Email : ${data.email}

`;
}

module.exports = generateMarkdown;
