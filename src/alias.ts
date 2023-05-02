type CrushType = {
  name: string;
  age: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Rakib",
  age: 22,
  profession: "Web Dev",
  address: "Kushtia",
};

type OperationType = (x: number, y: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operation: OperationType
): number => {
  return operation(num1, num2);
};

calculate(23, 34, (x, y) => x + y);
