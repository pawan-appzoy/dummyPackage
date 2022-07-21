'use strict';
exports.__esModule = true;
function welcomePerson(person) {
  console.log('Hey '.concat(person.firstName, ' ').concat(person.lastName));
  return 'Hey '.concat(person.firstName, ' ').concat(person.lastName);
}
var james = {
  firstName: 'Dummy',
  lastName: 'User',
};
welcomePerson(james);
