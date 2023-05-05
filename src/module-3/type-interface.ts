type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface iExtendedUser extends IUser {
  role: string;
}

type addNumberType = (num1: number, num2: number) => number;

interface iAddNumber {
  (num1: number, num2: number): number;
}

type roalNumbersType = number[];

interface iRoalNumbers {
  [index: number]: number;
}

const roalNumbers: iRoalNumbers = [2, 3, 5, 6]; // Inxed

const addNumber: iAddNumber = (num1, num2) => num1 + num2;

const iUser: IUser = {
  name: "rakib",
  age: 28,
};
const eUser: iExtendedUser = {
  name: "rakib",
  age: 28,
  role: "Dev",
};
