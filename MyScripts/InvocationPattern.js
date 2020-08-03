
//Object Declaration for Method Invocation Pattern
var myObject = {
    add: function (x, y) {
        return x + y;
    },
    sub: function (x, y) {
        return x - y;
    },
};

//The below function is not property of the object.
myObject.mult = function (x, y) {
    return  x * y;
};

myObject.div = function (x, y) {
    return x / y;
};

////Object Declaration for Differences between Function Invocation and Method Invocation Pattern
//var value = 30;
//var myobj = {
//    value: 3,
//    square: function () {
//        this.value = this.value * this.value;
//        alert("In the Outer Function for Square " + this.value);

//        var displayValue=function(){
//            alert("The Inner Function " +this.value);
//        }
//        displayValue(); //Function Invocation Pattern, "this" is set to the Global object here i.e. 30
//    }
//}


//Object Declaration for Differences between Function Invocation and Method Invocation Pattern
//Possible Resolve
var value = 30;
var myobj = {
    value: 3,
    square: function () {
        var that = this;
        that.value = that.value * that.value;
        alert("In the Outer Function for Square " + that.value);

        var displayValue = function () {
            alert("The Inner Function " + that.value);
        }
        displayValue(); //Function Invocation Pattern, "this" is set to the Global object here i.e. 30
    }
}


//Conastructor Pattern
var valueObject = function (data) {
    this.d = data;
};

valueObject.prototype.getvalue = function () {
    return this.d;
}


