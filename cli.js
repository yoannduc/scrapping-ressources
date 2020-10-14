#!/usr/bin/env node

require = require('esm')(module);
const inquirer = require('inquirer');
const yargs = require('yargs')

console.log(yargs(process.argv.slice(2)).boolean('l').argv);

inquirer
  .prompt([
    {
        type: 'list',
        name: 'name',
        message: 'What will you chose ?',
        choices: [
            {
                name: 'First answer',
                value: 'First value'
            },
            {
                name: 'Second answer',
                value: 'Second value'
            },
            {
                name: 'Third answer',
                value: 'Third value'
            }
        ]
    }
  ])
  .then(answers => {
    console.log(answers);
  })
  .catch(error => {
    console.log(error);
  });