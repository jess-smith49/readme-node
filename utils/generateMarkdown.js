//function to generate markdown for README
//getting data from questions array
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#lisence)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation <a name = "installation"></a>
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  Licensed under the ![GitHub license](<${data.license}>).
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}

  ## Questions
  If you have any additional questions you can reach me at ${data.email}. ![GitHub](http://github.com/${data.link})
`;
}

//allows for another file to use this function
module.exports = generateMarkdown;
