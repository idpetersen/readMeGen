const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "How to use the app:",
            name: "howToUse"
        },
        {
            type: "input",
            message: "How to install:",
            name: "howToInstall"
        },
        {
            type: "checkbox",
            message: "What technologies were used?",
            choices: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'Git'],
            name: "technologies"
        },
        {
            type: "input",
            message: "How to report issues:",
            name: "report"
        },
        {
            type: "input",
            message: "How to contribute:",
            name: "contribute"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub?",
            name: "github"
        }
    ]);
};

const generateReadme = ({
    title,
    description,
    howToUse,
    howToInstall,
    technologies,
    report,
    contribute,
    email,
    github
}) => `

# ${title}

## Description

* ${description}

### Table of Contents  
[Technologies used](#technologies)

[How to use](#How-to-use)

[How to install](#How-to-install)

[Report Issues](#Report-issues)

[How to Contribute](#Contribute)


## Technologies Used:

* ${technologies}

## How-to-use:

* ${howToUse}

## How-to-install:

* ${howToInstall}

## Report-issues:

* ${email}
* ${github}
* ${report}

## Contribute:

* ${contribute}
`

const init = () => {
    questions()
    .then((userInput) => fs.writeFileSync(`${userInput.title}.md`, generateReadme(userInput)))
    .then(() => console.log('generated readme'))
    .catch((err) => {
        throw err
    })
}
init();