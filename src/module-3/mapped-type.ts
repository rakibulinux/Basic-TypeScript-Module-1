const arrayOfNumbers = [22, 24, 12, 56, 87];
const arrayOfString = arrayOfNumbers.map((number) => number.toString());

type AreaNumber = {
  height: number;
  width: number;
};

type As = AreaNumber["height"]; // Look up type
type Bs = keyof AreaNumber;

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Area = {
  [key in keyof Volume]: Volume[key];
};

// Generic Type
type AreaGen<T> = {
  // [key in keyof Volume]: Volume[key]
  [key in keyof T]: T[key];
};

const newArea: AreaGen<{ name: string; age: number }> = {
  name: "Rakib",
  age: 28,
};
