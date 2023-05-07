// keyof guard
type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add("22", "322");
add(25, 23);

// In Guard
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `We got admin user ${user.role}`;
  } else {
    return `It's not a admin user`;
  }
}

const normalUser: NormalUser = { name: "Rakib" };
const adminUser: AdminUser = { name: "Rakibul", role: "admin" };
console.log(getUser(normalUser));
console.log(getUser(adminUser));

//Instanceof guard
class AnimalOfGuard {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`This is ${this.name}`);
  }
}

class Dog extends AnimalOfGuard {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`Dog make sound like ${this.name}`);
  }
}

class Cat extends AnimalOfGuard {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log(`Cat should meaw ${this.name}`);
  }
}

function isDod(animal: AnimalOfGuard): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: AnimalOfGuard): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: AnimalOfGuard) {
  if (isDod(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

// function getAnimal(animal: AnimalOfGuard) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

const dog1 = new Dog("German dog", "dog");

const cat1 = new Cat("Meaw Cat", "cat");

const animal = new AnimalOfGuard("UnKnown", "Species");
getAnimal(animal);
