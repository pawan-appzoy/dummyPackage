class Employee {
  empCode: number;
  name: string;
  constructor(empcode: number, name: string) {
    this.empCode = empcode;
    this.name = name;
  }

  displayName(): void {
    console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
  }
}

let emp = new Employee(100, 'Pawan');
emp.displayName();
