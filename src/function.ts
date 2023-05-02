//Normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(21, 23);

//Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//Callback function
const arr = [22, 23, 24];

const newArr = arr.map((element: number) => element * element);

// Function in object
const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "MD Rakibul",
  balance: 6,
  addBalance(money: number): string {
    return `My New balance is ${this.balance + money}`;
  },
};

const person2: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "MD Rakibul",
  balance: 6,
  addBalance(money: number): number {
    return this.balance + money;
  },
};
