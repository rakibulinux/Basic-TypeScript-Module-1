const createArray = (param: string): string[] => {
  return [param];
};

const arrayResult = createArray("Rakib");

//Generic function
const createGenArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
