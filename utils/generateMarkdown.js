// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description

  ${data.description}

  # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#lisence)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  # Installation <a name = "installation"></a>

  # Usage

  # License

  # Contributing

  # Tests

  # Questions
    If you have any additional questions you can reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
