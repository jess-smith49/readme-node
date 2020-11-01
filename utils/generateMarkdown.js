//function to generate markdown for README
//getting data from questions array
const badges = {
    
  "Boost":
  {
     name: 'Boost',
     badge: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg", 
     link: "https://www.boost.org/LICENSE_1_0.txt"
  },
  
  "Apache":
  {
      name: 'Apache',
      badge:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0"
  },
  "MIT":
  {
      name: 'MIT',
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT"
  },
  "MPL":
  {
      name: 'MPL',
      badge: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
      link: "https://opensource.org/licenses/MPL-2.0"
  },
  "Perl":
  {
      name: "Perl",
      badge: "https://img.shields.io/badge/License-Perl-0298c3.svg",
      link: "https://opensource.org/licenses/Artistic-2.0"
  }  
};


function generateMarkdown(data) {
  return `# ${data.title}       ![GitHub license](<${badges[data.license].badge}>)

  ## Description

  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation 
  How to install:
  ${data.install}
  ## Usage 
  Information for Usage guidelines:
  ${data.usage}
  ## License 
  Licensed under ${badges[data.license].name}. More information can be found here ${badges[data.license].link}.
  ## Contributing 
  ${data.contribution}
  ## Tests 
  ${data.test}

  ## Questions 
  If you have any questions you can reach me at ${data.email}. For more project see my profile here [GitHub](https://github.com/${data.link}).
`;
}

//allows for another file to use this function
module.exports = generateMarkdown;
