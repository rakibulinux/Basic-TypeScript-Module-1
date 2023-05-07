// interfact
// interface IVehicle{
//     name: string;
//     model: string
// }

// const vehicle : IVehicle = {
//     name: 'Car',
//     model: '25456'
// }

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  startEngine(): void {
    console.log(`I am starting engine`);
  }
  stopEngine(): void {
    console.log(`I'm Stoping engine`);
  }
  move(): void {
    console.log(`I am moving engine`);
  }
}

const vehicle1 = new Vehicle("Audi", "Mark", "Bond");
console.log(vehicle1);

// Abstraction class
abstract class VehicleAbs {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log(`I am moving engine`);
  }
}

class NewCar extends VehicleAbs {
  startEngine(): void {
    console.log(`I'm Stoping engine`);
  }
  stopEngine(): void {
    console.log(`I'm Stoping engine`);
  }
}

// const car1 = new VehicleAbs("ADO", "Audo", "Adg");
