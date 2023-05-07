class Person {
  takeNap() {
    console.log(`I will take sleep for 8 hrs`);
  }
}

class PolyStudent extends Person {
  takeNap(): void {
    console.log(`I will sleep for 10 hrs`);
  }
}

class PolyDev extends Person {
  takeNap(): void {
    console.log(`I will sleep for 5 hrs`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const polyperson1 = new Person();
const polyperson2 = new PolyStudent();
const polyperson3 = new PolyDev();

getNap(polyperson1);
getNap(polyperson2);
getNap(polyperson3);

class Shape {
  getArea() {
    console.log(`Nothing`);
  }
}

class Cercle extends Shape {
  redius: number;
  constructor(redius: number) {
    super();
    this.redius = redius;
  }
  getArea(): number {
    return Math.PI * this.redius * this.redius;
  }
}

const cercle1 = new Cercle(23);
cercle1.getArea();

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    (this.height = height), (this.width = width);
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfRectangle(param: Shape) {
  console.log(param.getArea());
}

getAreaOfRectangle(new Cercle(10));
getAreaOfRectangle(new Rectangle(23, 56));
