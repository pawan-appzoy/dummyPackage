export class Employee {
  empCode: number;
  name: string;
  message: string;

  constructor(message: string, empCode: number, name: string) {
    this.message = message;
    this.empCode = empCode;
    this.name = name;
  }

  sendMessage(): void {
    console.log(
      'Name = ' +
        this.name +
        ', Employee Code = ' +
        this.empCode +
        ', Message = ' +
        this.message
    );
  }
}

// emp.displayName();
