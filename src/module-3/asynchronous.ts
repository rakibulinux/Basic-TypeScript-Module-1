const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data featched sucess";
    if (data) {
      resolve(data);
    } else {
      reject("Error on fetched");
    }
  });
};

const makePromiseObject = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { name: "rakib" };
    if (data) {
      resolve(data);
    } else {
      reject("Error on fetched");
    }
  });
};

const getPromiseData = async () => {
  const data = await makePromise();
  console.log(data);
};

const getPromiseObjData = async () => {
  const data = await makePromiseObject();
  console.log(data);
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodoData = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};

const todoData = async (): Promise<void> => {
  const data = await getTodoData();
  console.log(data);
};
todoData();
