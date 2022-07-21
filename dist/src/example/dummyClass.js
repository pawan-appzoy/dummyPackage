"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(message, empCode, name) {
        this.message = message;
        this.empCode = empCode;
        this.name = name;
    }
    sendMessage() {
        console.log('Name = ' +
            this.name +
            ', Employee Code = ' +
            this.empCode +
            ', Message = ' +
            this.message);
    }
}
exports.Employee = Employee;
//# sourceMappingURL=dummyClass.js.map