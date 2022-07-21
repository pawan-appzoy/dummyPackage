"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = exports.sendMessage = exports.employee = void 0;
const dummyClass_1 = require("./example/dummyClass");
exports.employee = new dummyClass_1.Employee('Sample message', 100, 'pawan');
function sendMessage() {
    let employee = new dummyClass_1.Employee('Sample message', 100, 'pawan');
    return employee.sendMessage();
}
exports.sendMessage = sendMessage;
function doSomeStuff() {
    console.log('doSomeStuff is called.....');
    return;
}
exports.doSomeStuff = doSomeStuff;
doSomeStuff();
sendMessage();
//# sourceMappingURL=index.js.map