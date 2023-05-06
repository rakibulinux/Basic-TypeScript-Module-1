interface CrushInterface<T, U = null> {
  name: string;
  husbent: T;
  wife?: U;
}

interface CrushIn {
  name: string;
  age: number;
}

const crush: CrushInterface<CrushIn, CrushIn> = {
  name: "AnNisa",
  husbent: { name: "Rakib", age: 28 },
  wife: { name: "AnNisa", age: 20 },
};
