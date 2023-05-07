type MandatoryTypes = {
  name: string;
  age: number;
  salary: number;
};

interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

interface MyInfos {
  name: string;
  age: number;
  salary: number;
  other: boolean;
}

const addMyInYourMind = <T extends MandatoryInterface>(myInfo: T) => {
  const cursh = "AnNisa";
  const newData = { ...myInfo, cursh };
  return newData;
};

const myInfos: MyInfos = {
  name: "string",
  age: 12,
  salary: 235,
  other: false,
};

const myNewInfo = addMyInYourMind(myInfos);
myNewInfo;
