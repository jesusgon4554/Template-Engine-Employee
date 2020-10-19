const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// employee modules
const Manager = require("./classes/manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./classes/htmlRender");

// to store employee inputs
let team = [];

// function to prompt questions
const newTeamMember = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What role do they have",
            name: "role",
            choices:["manager", "engineer", "intern", "done"]
        }
    ]).then(res => {
        const { role } = res;
        switch (role) {
            case "manager":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"
                    },
                    {
                        type : "input",
                        message : "What is their email",
                        name: "email"
                    },
                    {
                        type : "input",
                        message : "what is their office number",
                        name : "officeNumber"
                    }
                    ]
                ).then(res => {
                    let { name, id, role = "manager", email, officeNumber } = res
                    let newManager = new Manager(name, email, id, officeNumber)
                    team.push(newManager);
                    newTeamMember();
                })
                break
            case "intern":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",

                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"

                    },
                    {
                        type : "input",
                        message : "what is their email",
                        name : "email"
                    },
                    {
                        type : "input",
                        message : "what is their school",
                        name : "school"    
                    }
                    ]
                ).then(res => {
                    let { name, id, role = "intern", email, school } = res
                    let newIntern = new Intern(name, email, id, school)
                    team.push(newIntern);
                    newTeamMember();
                })
                break
                case "engineer":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"
                    },
                    {
                        type : "input",
                        message : "what is their email",
                        name : "email"
                    },
                    {
                        type : "input",
                        message : "what is their gitHub username",
                        name : "username"    
                    }
                    ]
                ).then(res => {
                    // instantiate the new role and push to the array
                    let { name, id, role = "engineer", email, username } = res
                    let newEngineer = new Engineer(name, email, id, username)
                    team.push(newEngineer);
                    newTeamMember();
                    
                })
                break
                case "done":
                    console.log(team);
                    fs.writeFileSync(outputPath, render(team),"utf-8")
                    
        }
    });
};


async function init() {
    await newTeamMember();
}
init()

module.exports= newTeamMember