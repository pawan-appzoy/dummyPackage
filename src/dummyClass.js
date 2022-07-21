"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    Employee.prototype.displayName = function () {
        console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(100, 'Pawan');
emp.displayName();
