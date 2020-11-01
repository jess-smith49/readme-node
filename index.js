const fs = require('fs');
//inquirer being used for command line prompts
const inquirer = require('inquirer');
//exports generateMarkdown function from another javascript file
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = () => {
    //using inquirer prompts
    return inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput){
                return true;
            }
            else {
                console.log('Please enter your email to continue.')
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
        validate: titleInput => {
            if(titleInput){
                return true;
            }
            else {
                console.log("Please enter the title of your project to continue.")
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: userInput => {
            if(userInput) {
                return true;
            }
            else{
                console.log('Please enter your GitHub username to continue')
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is your the link to your GitHub?',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            else {
                console.log ('Please enter the link to your GitHub account.')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include a description of your Project.',
        validate: descInput => {
            if(descInput){
                return true;
            }
            else {
                console.log('Please write a description of project to continue.')
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
        validate: insInput => {
            if(insInput){
                return true;
            }
            else {
                console.log('Please enter installation instructions to continue.')
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: usageInput => {
            if(usageInput){
                return true
            }
            else{
                console.log('Please enter the usage information to continue.')
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you have?',
        choices: ["Boost", "Apache", "MIT", "MPL", "Perl"]

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate: contrInput => {
            if(contrInput){
                return true;
            }
            else{
                console.log('Please enter the contribution information to continue.')
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: testInput => {
            if(testInput){
                return true;
            }
            console.log('Please enter test instructions to continue.')
        }
    }

])};

// function to write README file
function writeToFile(fileName, data) {
    //creating a new promise object, uses resolve and reject 
    return new Promise((resolve, reject) => {
        //write file function with file, data, and callback
        fs.writeFile(fileName, data, err => {
            //checks for error
            if (err) {
                reject(err);
                return;
            };
            //if no error boolean variable set to true, message returned
            resolve({
                ok: true,
                message: 'File created'
            });

        });
    });
};

// function to initialize program
function init() {
    //first thing to run //the .thens can go inside of here
    questions()
        .then(data =>{
            //writing to the read me markdown file in the "dist folder"
            //getting the data from exported generateMakrdown file
            writeToFile('./dist/readme.md', generateMarkdown(data));
        });
};

// function call to initialize program
init();

//https://img.shields.io/endpoint?url=<URL>&style<STYLE> URL FOR LICENSES