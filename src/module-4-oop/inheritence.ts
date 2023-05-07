class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep ${hours} hours`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep ${hours} hours`;
  }
}

const student1 = new Student("Md Rakib", 26, "Kushtia");
student1.address = "Boro Bazer";

console.log(student1);
class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
  takeClass(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} class`;
  }
}

const teacher1 = new Teacher("Habib", 29, "Jashor", "JS Developer");
const sleepHrs = teacher1.makeSleep(25);
console.log(sleepHrs);
