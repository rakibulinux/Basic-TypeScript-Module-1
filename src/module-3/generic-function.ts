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

// console.log(fullName({ firstName: "Rakib", lastName: "Islam" }));
function normalCreateArray<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const genArray = createGenArray<string, string>("Rakib", "AnNisa");
const genArrayString = createGenArray<boolean, Array<string>>(true, ["AnNisa"]);

type Name = {
  name: string;
  age: number;
};

const ageGenFunc = createGenArray<Name, string>(
  {
    name: "Rakib",
    age: 28,
  },
  "Ok"
);

interface MyInfo {
  name: string;
  age: number;
  salary: number;
}

const addMeInHerMind = <T>(myInfo: T) => {
  const myCrush = "AnNisa";
  const newData = { ...myInfo, myCrush };
  return newData;
};

const myInfo: MyInfo = {
  name: "MD Rakib",
  age: 28,
  salary: 30000,
};

const addedYouInHerMing = addMeInHerMind(myInfo);
addedYouInHerMing.myCrush;
