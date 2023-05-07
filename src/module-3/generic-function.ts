const createArray = (param: string): string[] => {
  return [param];
};

const arrayResult = createArray("Rakib");

//Generic function
const createGenArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));

type Data = { num1: number };

type B = {
  [key in keyof Data]: string;
};

const numbers: B = {
  num1: "20",
};

interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}

console.log(fullName({ firstName: "Rakib", lastName: "Islam" }));
