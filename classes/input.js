const fs = require('fs');
const inquirer= require('inquirer');
const path = require('path');


// employee modules; still dont understand why we need these if we are promting questions through inputs.js
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// to store employee inputs
let team = [];

const addEmployee =() =>{
    inquirer.prompt([
    {
        type:"checkbox",
        message:"what is the employee's role ",
        choices: ['employee','manager','engineer','intern'],
        name:'role'
    },
]).then(answers => {
    const {role} =answers;
    newTeamMember(role);
    });
}



const newTeamMember = (name, id, email) => {
inquirer.prompt([
    //Name
    {
        type:'input',
        message:"What is the new employee's name?",
        name:'name',
    },

    //ID
    {
        type:"input",
        message:"What is the employees id number?",
        name:'id',
    },

    //Email
    {
        type:"input",
        message:"what is the employee's email ",
        name:'email'
    },
  
]).then(answers => {
    const {name,id,email} = answers;
    switch(role[0]){
        case "manager":
        managerinfo(name,id,email);
        break;
        }
    });
}

const managerinfo = (name,id, email) =>  {
    inquirer.prompt([
    {
        type: "number",
        message: "Enter managers office number",
        name:"officeNum"
    }
    ])
    .then(answers => {
        const { officeNum } = answers;
        newEmployee(new manager(name, id, email, officeNumber));
    });
}

const addNewEmployee = newEmployee => {
    team.push(newEmployee);

    inquirer.prompt([
        {
            type: "checkbox",
            message: "Want to add another employee?",
            choices: [
                "yes",
                "no"
            ],
            name: "newEmployee"
        }
    ])
    .then(answers =>{ 
        const {newEmployee} = answers;

        if(newEmployee[0]==="yes" || "Yes"){
            newTeamMember();
        }
    });
}

module.exports = addEmployee;