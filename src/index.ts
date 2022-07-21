import {Employee} from './example/dummyClass';

// export let employee = new Employee('Sample message', 100, 'pawan');

export function sendMessage() {
  let employee = new Employee('Sample message', 100, 'pawan');
  return employee.sendMessage();
}

export function doSomeStuff() {
  console.log('doSomeStuff is called.....');

  return;
}

doSomeStuff();

sendMessage();
