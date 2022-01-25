//importing inquirer and fileSystem
const inquirer = require('inquirer');
const fs = require('fs');
//Setting a variable to collect user data using inquirer

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please give a short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "Please give a short discription on how to use your application",
            name: "howToUse"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "howToInstall"
        },
        {
            type: "input",
            message: "What technologies were used?",
            name: "technologies"
        },
        {
            type: "input",
            message: "Please write a brief way to report issues about the repo",
            name: "report"
        },
        {
            type: "input",
            message: "Please write a brief way to contribute to the repo",
            name: "contribute"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            choices: ["MIT","Apache_2.0", "Mozilla_Public_2.0", "BSD_3-Clause", "BSD_2-Clause", "GNU_v2"],
            name: "license",
        },
        {
            type:"input",
            message: "Please provide a link to a screenshot or gif of your project",
            name: "demo",
        },
        {
            type: "input",
            message: "Who would you like to give credit to?",
            name: "credit",
        },
    ]);
};
//After user input has been gathered, we are passing the values into the README template
const generateReadme = ({
    title,
    description,
    howToUse,
    howToInstall,
    technologies,
    report,
    contribute,
    email,
    github,
    license,
    demo,
    credit,
}) => `

# ${title}

![GitHub license](https://img.shields.io/badge/License-${license}-yellow.svg)

## Description

- ${description}

#### Table of Contents  
[Technologies used](#technologies)

[How to use](#Usage)

[How to install](#How-to-install)

[Report Issues](#Report-issues)

[How to Contribute](#Contribute)

[Demo](#Demo)

## Technologies Used:

- ${technologies}

## Usage:

- ${howToUse}

## Demo

![${demo}](${demo})

## How-to-install:

- To install the necessary depenencies, run the following command in the integrated terminal ${howToInstall}

## Credits:

- I would like to give credit to ${credit}

## Report-issues:

* [${email}](mailto:${email})
* [${github}](https://github.com/${github})
* ${report}

## Contribute:

* The way you can contribute to this repo is to ${contribute}
`
//Running this function at the start, first the questions will be populated using inquirer, then writes a new file using file system. We are catching any errors with the .catch method
const init = () => {
    questions()
    .then((userInput) => fs.writeFileSync(`READM.md`, generateReadme(userInput)))
    .then(() => console.log('Generating README........'))
    .catch((err) => {
        throw err
    })
};

init();