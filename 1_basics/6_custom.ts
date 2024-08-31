// custom type kullanmadan obje tipi tanımlama

let so: { name: string; age: number } = {
  name: "ali",
  age: 50,
};

let so2: object = [];
let so3: object = {};
let so4: object = new Date();

// custom type kullanarak

type UserType = {
  name: string;
  age: number;
};

let so12: UserType = {
  name: "ali",
  age: 45,
};
