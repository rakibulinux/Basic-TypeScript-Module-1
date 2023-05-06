//Ternary opperator
const ages: number = 23;

const isAdult = ages >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish Coalesnace Operator
// Null and Undefiended

const isAuthenticatedUser = undefined;

const userName = isAuthenticatedUser ?? "Guest";
const myName: string = "rakib";
console.log(userName);

type UserType = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string;
  };
};

const user1: UserType = {
  name: "Rakib",
  age: 28,
  address: {
    city: "Kushtia",
    road: "NS Road",
  },
};

const home = user1?.address?.home ?? "Boro Bazer";

console.log({ home }, { user1 });

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
