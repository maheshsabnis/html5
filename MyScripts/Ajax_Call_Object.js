///<script src="../Scripts/jquery-2.1.0.min.js"></script>


var CommunicationObject = {
    getrecords: function () {
       
    },
    postdata: function (data) {

    },
    putdata: function (id, data) {

    },
    deletedata: function (id) {

    },
    getrecord: function (id) {
        var returnObject;
        var url = "http://localhost:16269/api/EmployeeInfoAPI/" + id;
        $.ajax({
            url: url,
            type: "GET",
            datatype: "json",
            contenttype:"application/json;utf-8"
        }).done(function (resp) {
            Employee.EmpNo = id;
            Employee.EmpName = resp.EmpName;
            Employee.Salary = resp.Salary;
            Employee.DeptName = resp.DeptName;
            Employee.Designation = resp.Designation;
            //return JSON.stringify(Employee);
            returnObject = resp;
        }).fail(function (err) {
            alert("Error " + err.status + "   " + err.statusText);
        });
        return returnObject;
    }
};