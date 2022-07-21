import 'dotenv/config';
import {Employee} from './example/dummyClass';

//... Example 1 ....//
export let employee = new Employee(
  'Sample message from instance',
  100,
  'pawan'
);

//... Example 2 ....//
export function sendMessage() {
  let employee = new Employee('Sample message', 100, 'pawan');
  return employee.sendMessage();
}

//... Example 3 ....//
export function doSomeStuff() {
  console.log('doSomeStuff is called env : ', process.env.ENV);

  return;
}

doSomeStuff();

sendMessage();
