type GenericTuple<X, Y> = [X, Y];
interface relationWithSalaryType {
  name: string;
  age: number;
  salary: number;
}
const GTName: GenericTuple<string, string> = ["Rakib", "AnNisa"];

type GenericArry<T> = Array<T>;

const roalNumbersG: GenericArry<number> = [22, 23, 56];
const roalNumbersGS: GenericArry<string> = ["22", "23", "56"];
const roalNumbersGB: GenericArry<boolean> = [true, false];

const relationWithSalary: GenericTuple<relationWithSalaryType, string> = [
  {
    name: "Rakib",
    age: 27,
    salary: 215456,
  },
  "Rakib",
];
