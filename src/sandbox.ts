type StringOnNum = string | number;
type objWithName = { name: string; uid: StringOnNum };

const logDetails = (uid: StringOnNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
