'use strict';
exports.__esModule = true;
exports.doSomeStuff = exports.sendMessage = void 0;
var dummyClass_1 = require('./example/dummyClass');
// export let employee = new Employee('Sample message', 100, 'pawan');
function sendMessage() {
  var employee = new dummyClass_1.Employee('Sample message', 100, 'pawan');
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
