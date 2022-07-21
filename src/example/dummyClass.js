"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(message, empCode, name) {
        this.message = message;
        this.empCode = empCode;
        this.name = name;
    }
    Employee.prototype.sendMessage = function () {
        console.log('Name = ' +
            this.name +
            ', Employee Code = ' +
            this.empCode +
            ', Message = ' +
            this.message);
    };
    return Employee;
}());
exports.Employee = Employee;
