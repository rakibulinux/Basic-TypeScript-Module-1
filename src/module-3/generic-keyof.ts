interface MyUserInfo {
  name: string;
  age: number;
  address: string;
}

type newType = "name" | "age" | "address";

type keyOfType = keyof MyUserInfo;

const a: newType = "address";

const b: keyOfType = "name";

function getMyData<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const myDataObj = getMyData({ name: "MR.X", age: 26 }, "name");

myDataObj;
