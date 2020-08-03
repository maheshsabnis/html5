/*global _comma_separated_list_of_variables_*/
//var Employee = new Object();
//Employee.EmpNo = 101;
//Employee.EmpName = "Mahesh";
//Employee.Salary = 130000;
//Employee.DeptName = "CTD";
//Employee.Designation = "PH";
//document.write(Employee.EmpNo + "  " + Employee.EmpName);

//The Employee Class with methods
var Employee = {
    EmpNo: 101,
    EmpName: "Mahesh",
    Salary: 130000,
    DeptName: "CTD",
    Designation: "Practice Head",

    getLength: function ()
    {
        return Employee.EmpName.length;
    },

    setEmployeeData: function (emp)
    {
        alert("New Values " + emp.EmpNo + "  " + emp.EmpName + "   " + emp.Salary + "  " + emp.DeptName + "  " + emp.Designation);
    },

    readObjectValues: function ()
    {
        for (var e in Employee)
        {
            alert(Employee[e]);
        }
    }
};
// Class declaration using Function

function Person() {
    this.PersonName = "Mahesh";
    this.Age = 37;

    //Method define in the constructor function itself
    this.displayInformation = function ()
    {
        alert("Name = " + this.PersonName + "  Age =  " + this.Age );
    }
}

//Method added to the prototype

Person.prototype.getPersonNameLengh = function () {
    return this.PersonName.length;
}; 