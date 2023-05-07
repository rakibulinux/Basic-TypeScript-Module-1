const createArray = (param: string): string[] => {
  return [param];
};

const arrayResult = createArray("Rakib");

//Generic function
const createGenArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

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
