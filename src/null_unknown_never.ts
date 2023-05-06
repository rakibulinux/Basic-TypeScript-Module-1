const searchResult = (value: string | null) => {
  if (value === null) {
    console.log(`There is nothing to search`);
  } else {
    console.log(`Get the result ${value}`);
  }
};

searchResult("MD Rakib");

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertSpeed = (speed * 1000) / 3600;
    console.log(`Converted Speed is ${convertSpeed}`);
  } else if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`New Converted Speed is ${convertSpeed} and Unit: ${unit}`);
  } else {
    console.log(`There is wrong type`);
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);

// Never type
function throwError(message: string): never {
  throw new Error(message);
}

throwError("It's an error");
