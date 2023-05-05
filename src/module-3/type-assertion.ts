let rakib: any;

rakib = "Next Level";

(rakib as string).length;

<string>rakib.length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted value from string is ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `The converted value from number is ${value}`;
  }
}

const numberValue = kgToGram(100) as number;

const stringValue = <string>kgToGram("100");

console.log(numberValue);
console.log(stringValue);
