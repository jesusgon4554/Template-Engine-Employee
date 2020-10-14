const Employee= require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.role=role;
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
    getOfficeNum(){
        return this.officeNumber;
    }
};

module.exports = Manager;
