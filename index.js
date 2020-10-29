const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is your the link to your GitHub username?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include a description of your Project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'checkboxes',
        name: 'license',
        message: 'What license do you have?',
        choices: ['MIT', 'Apache', 'GPL']

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    }

])};

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: 'File created'
            })

        })
    })
}

// function to initialize program
function init() {
    //first thing to run //the .thens can go inside of here
    questions()
        .then(data =>{
            writeToFile('./dist/readme.md', generateMarkdown(data));
        })
}

// function call to initialize program
init();

//https://img.shields.io/endpoint?url=<URL>&style<STYLE> URL FOR LICENSES